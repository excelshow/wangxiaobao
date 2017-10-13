<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/18
 * Time: 11:42
 */

namespace App\Core\Modules\Printa\Service;

use App\Core\Modules\Printa\Dao\OrderDao;
use App\Core\Modules\Printa\Dao\RecordOrderDownloadDao;
use App\Core\Remote\LogisticApi;
use App\Core\Remote\TradeApi;
use App\Core\Util\Util;
use Illuminate\Support\Facades\Cache;
use Carbon\Carbon;
use App\Core\Modules\Printa\Factory\OrderFactory;
class OrderService {



    //批量发货
    public static function sendAll($user,$logisticType,$orders,$logistic){
        $result = new \stdClass();
        $success = [];
        $fail = [];
        $detail = [];
        foreach ($orders as $o=>$order){
            $orderId = $order->order_id;
            $resp = self::sendGoods($user,$logisticType,$order,$logistic);

            $error = @$resp->errorMessage?@$resp->errorMessage:@$resp->error_message;
            if($error){
                $fail[] = $orderId;
                $detail[$orderId]= $error;
            }else{
                $success[] = $orderId;
            }
        }

        $result->success = $success;
        $result->fail = $fail;
        $result->detail = $detail;
        return $result;

    }

    //发货
    public static function sendGoods($user,$logisticType,$order,$logistic){
        $appKey = $user->appkey;
        $sessionKey = $user->access_token;

        $logistic = @$order->logistic?@$order->logistic:$logistic;

        $companyNo = $logistic->company_no;
        $companyName = $logistic->company_name;
        $logisticNum = @$order->logistic_num;


        $entries = [];
        $products = $order->products;
        foreach ($products as $p=>$product){

            $entry = new \stdClass();
            $entry->sourceEntryId = @$product->entry_id;
            if(@$product->quantity){
                $entry->amount = (string)$product->quantity;
            }
            if( @$product->weight){
                $entry->weight = (string)$product->weight;
            }
            $entries[] = $entry;
        }

        $product = new  \stdClass();
        $product->sourceId = $order->order_id;
        $product->sendGoodEntries = $entries;

        $products = [$product];
        $products = json_encode($products);

        $sendTime = date('YmdHis000+0800');
        $remarks = @$order->buyer_remark;
        if(!$remarks){
            $remarks  = '';
        }
        $receiver = new  \stdClass();
        $receiver->province = @$order->receiver_province?@$order->receiver_province:'';
        $receiver->city = @$order->receiver_city?@$order->receiver_city:'';
        $receiver->area = @$order->receiver_area?@$order->receiver_area:'';
        $receiver->address = @$order->receiver_street?@$order->receiver_street:'';
        $receiver->fullName = @$order->receiver_name?@$order->receiver_name:'';
        $receiver->mobile = @$order->receiver_mobile?@$order->receiver_mobile:'';
        $receiver = json_encode($receiver);
        //print_r($receiver);
        //$receiver = '';
        //需要单号
        if ($logisticType=='1'){
            $extBody = new  \stdClass();
            $extBody->cpCode = $companyNo;
            $extBody->logisticsCpName = $companyName;
            $extBody->mailNo = $logisticNum;
            $extBody = json_encode($extBody);

            $result = LogisticApi::AlibabaLogisticsOpDeliverySendOrderOfflineRequest($appKey,$sessionKey,$products,$extBody,$sendTime,$remarks,$receiver);
        }else{
            //不要单号
            $extBody = new  \stdClass();
            $extBody->noLogisticsBillNo = '';
            $extBody->noLogisticsCondition = '';
            $extBody->noLogisticsName = '';
            $extBody->noLogisticsTel = '';
            $extBody = json_encode($extBody);


            //print_r($products);
           // print_r($receiver);
            //print_r($extBody);
            $result =  LogisticApi::AlibabaLogisticsOpDeliverySendOrderDummyRequest($appKey,$sessionKey,$products,$extBody,$sendTime,$remarks,$receiver);

        }

        return $result;
    }

    //获取待下载订单
    public static function getWaitDownloadInfo($user){

        $dates = Util::getDatePeriodAli(3);

        $appKey = $user->appkey;
        $sessionKey = $user->access_token;
        $createStart = $dates->start_date;
        $createEnd = $dates->end_date;

        $pageSize = 20;
        $pageNum = 1;

        $result = new \stdClass();
        $result->download_time = '未同步';
        $result->wait_total = '0';
        $resp = RecordOrderDownloadDao::getLastRecord($user);
        if(!empty($resp)){
            $result->download_time = $resp->start_time;
            $createStart = Util::formatAliDate($resp->start_time);
            $createEnd = Util::formatAliDate(date('Y-m-d H:i:s'));
        }
        $resp = TradeApi::AlibabaTradeGetSellerOrderListRequest($appKey,$sessionKey,$createStart,$createEnd,$modifyStart='',$modifyEnd='',$pageNum,$pageSize);
        $count = @$resp->count;
        $count = empty($count)?'0':$count;
        $result->wait_total = $count;

        return $result;
    }

    //获取下载进度
    public static function getDownloadProcess($processId){

        $record =  Cache::get('order_download_process');
        $id = @$record->process_id;
        if($id==$processId){
            return $record;
        }

        $record = new \stdClass();
        $record->process_id = $processId;
        $record->order_total = '0';
        $record->download_total = '0';
        $record->status = 'DOING';
        return $record;
    }


    //订单查询
    public static function getOrders($params,$page,$sorter,$user){

        $userId = $user->user_id;

        $field = $params->field;
        $data = $params->data;
        $pageNum =  $page->page;
        $pageSize = $page->limit;
        $orderBy = $sorter->key;
        $order = $sorter->order;

        $period = Util::getDatePeriod(90);

        $startDate = $period->start_date;
        $endDate = $period->end_date;


        if(@$params->start&&$params->end){
            $startDate = $params->start;
            $endDate = $params->end;
        }
        $data = empty($data)?'ALL':$data;
        switch ($field){
            case 'orderId':
                $field='ORDER_ID';
                //self::downloadOrderByStatusIncrement($user,$status);
                break;
            case 'productName':  $field='PRODUCT';break;
            case 'buyerNick': $field = 'BUYER';break;
            case 'message': $field='MESSAGE';break;
            case 'tradeStatus':
                $field='TRADE_STATUS';
                switch ($data){
                    case 'ALL':$data = 'ALL';break;
                    case 'WAIT_BUYER_PAY':$data = 'WAIT_BUYER_PAY';break;
                    case 'WAIT_SELLER_SEND':$data = 'WAIT_SELLER_SEND';break;
                    case 'WAIT_BUYER_RECEIVE':$data = 'WAIT_BUYER_RECEIVE';break;
                    case 'REFUND':$data = 'REFUND';break;
                    case 'SUCCESS':$data = 'SUCCESS';break;
                    case 'CANCEL':$data = 'CANCEL';break;
                    case 'OTHER':$data = 'OTHER';break;
                }

                //self::downloadOrderByStatusIncrement($user,$status);
                break;
            case 'rateStatus':
                $field = 'SELLER_RATE';
                switch ($data){
                    case 'ALL':$field='SELLER_RATE';$data = 'ALL';break;
                    case 'SELLER_RATED':$field='SELLER_RATE';$data = '4';break;
                    case 'SELLER_NOT_RATE':$field='SELLER_RATE';$data = '5';break;
                    case 'BUYER_RATED':$field='BUYER_RATE';$data = '4';break;
                    case 'BUYER_NOT_RATE':$field='BUYER_RATE';$data = '5';break;
                    default:
                        $data='ALL';
                }
                break;
            case 'remark':
                $field = 'SELLER_REMARK';
                switch ($data){
                    case 'ALL':$data = 'ALL';break;
                    case 'MARK_GRAY':$data = '0';break;
                    case 'MARK_ORANGE':$data = '1';break;
                    case 'MARK_BLUE':$data = '2';break;
                    case 'MARK_GREEN':$data = '3';break;
                    case 'MARK_YELLOW':$data = '4';break;
                    default:
                        $data='ALL';
                }
                break;
            case 'rangeDate':
                $field = 'PERIOD';
                $startDate = $params->start;
                $endDate = $params->end;
                break;
            case 'printStatus':
                $field = 'PRINT';
                switch ($data){
                    case 'ALL':$data = 'ALL';break;
                    case 'PRODUCT_WAIT_PRINT':$data = 'PRODUCT_WAIT_PRINT';break;
                    case 'PRODUCT_HAS_PRINTED':$data = 'PRODUCT_HAS_PRINTED';break;
                    case 'LOGISTIC_WAIT_PRINT':$data = 'LOGISTIC_WAIT_PRINT';break;
                    case 'LOGISTIC_HAS_PRINTED':$data = 'LOGISTIC_HAS_PRINTED';break;
                    case 'ELECTRIC_WAIT_PRINT':$data = 'ELECTRIC_WAIT_PRINT';break;
                    case 'ELECTRIC_HAS_PRINTED':$data = 'ELECTRIC_HAS_PRINTED';break;
                    case 'AUTO_PRINT': $data = 'AUTO_PRINT';break;
                    default:
                        $data='ALL';
                }
                break;
            case 'remind':
                $field = 'REMIND';
                switch ($data){
                    case 'ALL':$data = 'ALL';break;
                    case 'REMINDED':$data = 'REMINDED';break;
                    case 'WAIT_REMIND':$data = 'WAIT_REMIND';break;
                    default:
                        $data='ALL';
                }
                break;
            case 'date':
                $field = 'DATE';
                switch ($data){
                    case '1':
                        $startDate = Carbon::today();
                        $endDate = Carbon::tomorrow();
                        break;
                    case '2':
                        $startDate = Carbon::yesterday();
                        $endDate = Carbon::today();
                        break;
                    case '3':
                        $startDate = Carbon::yesterday()->subDay();
                        $endDate =Carbon::yesterday();
                        break;
                }
                break;

            default:
                $field = 'TRADE_STATUS';$data = 'ALL';
        }
        $status = '';
        self::downloadOrderByStatusIncrement($user,$status);
        $result = OrderDao::getOrders($field,$data,$startDate,$endDate,$orderBy,$order,$pageSize,$pageNum,$userId);
        return $result;
    }




    //u  三个月数据：通过taobao.trades.sold.get获取3个月内到现在创建的订单ID，再通过taobao.trade.fullinfo.get获取订单详情
    //u 增量数据：通过taobao.trades.sold.increment.get获取从现在开始的增量订单ID，再通过taobao.trade.fullinfo.get获取订单详情

    //手动同步订单
    public static function downloadOrdersByPeriod($user,$period=3,$processId=1){
        ini_set('max_execution_time', '0');

        $appKey = $user->appkey;
        $sessionKey = $user->access_token;

        $dates = Util::getDatePeriodAli($period);

        $createStart = $dates->start_date;
        $createEnd = $dates->end_date;

        $pageNum = 1;
        $pageSize = 20;

        $record = new \stdClass();
        $record->user_id = $user->user_id;
        $record->user_nick = $user->nick;
        $record->process_id = $processId;
        $record->order_total = '0';
        $record->download_total = '0';
        $record->period = $period;
        $record->start_time = date('Y-m-d H:i:s');
        $record->failed_reason = '';
        $record->status = 'DOING';

        Cache::forget('order_download_process');
        Cache::put('order_download_process',$record,180);


        $resp = TradeApi::AlibabaTradeGetSellerOrderListRequest($appKey,$sessionKey,$createStart,$createEnd,$modifyStart='',$modifyEnd='',$pageNum,$pageSize);

        if(@$resp->error_code){
            $errorMessage = $resp->error_message;
            $record->end_time = date('Y-m-d H:i:s');
            $record->status = 'DONE';
            $record->failed_reason = '【code】:'.@$resp->error_code.'【message】'.$errorMessage;
            Cache::put('order_download_process',$record,180);
            RecordOrderDownloadDao::addRecord($record);
            return $record;
        }
        $total = $resp->totalRecord;

        $record->order_total=$total;
        Cache::put('order_download_process',$record,180);

        $orderIds = [];
        $pages = ceil($total/$pageSize);

        //获取orderID
        for ($i=0;$i<$pages;$i++){
            $pageNum = $i+1;
            $resp = TradeApi::AlibabaTradeGetSellerOrderListRequest($appKey,$sessionKey,$createStart,$createEnd,$modifyStart='',$modifyEnd='',$pageNum,$pageSize);
            $orders = $resp->result;
            foreach ($orders as $o=>$order){
                $orderId = $order->baseInfo->id;
                $orderIds[] = $orderId;
            }
        }

        //根据id 同步订单
        foreach ($orderIds as $o=>$orderId){

            self::downloadOrderById($user,$orderId);
            $record->download_total = $o+1;
            Cache::put('order_download_process',$record,180);
           // exit();
        }

        $record->download_total=$total;
        $record->end_time = date('Y-m-d H:i:s');


        $record->status='DONE';
        Cache::put('order_download_process',$record,180);
        RecordOrderDownloadDao::addRecord($record);

    }


    //2.根据订单状态同步订单
    public static function downloadOrderByStatusIncrement($user,$status=''){
        ini_set('max_execution_time', '0');
        //$user = session('user');
        $appKey = $user->appkey;
        $sessionKey = $user->access_token;
        $record = RecordOrderDownloadDao::getLastRecord($user);
        $period = 1;
        $dates = Util::getDatePeriodAli($period);
        if($record){
            $endTime= $record->start_time;
            $now = date('Y-m-d H:i:s');
            $sends = strtotime($now)-strtotime($endTime);
            $endTime = strtotime($endTime)-30*60;
            $endTime = date("Y-m-d H:i:s",$endTime );
            if($sends<=86400){
                $dates->start_date = Util::formatAliDate($endTime);
                $dates->end_date = Util::formatAliDate($now);;
            }
        }

        $modifyStart = $dates->start_date;
        $modifyEnd = $dates->end_date;

        $pageNum = 1;
        $pageSize = 20;

        $record = new \stdClass();
        $record->user_id = $user->user_id;
        $record->user_nick = $user->nick;
        $record->order_total = '0';
        $record->download_total = '0';
        $record->period = $period;
        $record->start_time = date('Y-m-d H:i:s');
        $record->failed_reason = '';


        $resp = TradeApi::AlibabaTradeGetSellerOrderListRequest($appKey,$sessionKey,$createStart='',$createEnd='',$modifyStart,$modifyEnd,$pageNum,$pageSize,$status);

        if(@$resp->error_code||@$resp->code){
            $errorMessage = @$resp->error_message.' '.@$resp->sub_msg;

            return $resp;
        }
        $total = @$resp->totalRecord;

        $orderIds = [];
        $pages = ceil($total/$pageSize);


        //获取orderID
        for ($i=0;$i<$pages;$i++){
            $pageNum = $i+1;
            $resp = TradeApi::AlibabaTradeGetSellerOrderListRequest($appKey,$sessionKey,$createStart='',$createEnd='',$modifyStart,$modifyEnd,$pageNum,$pageSize,$status);
            $orders = @$resp->result;
            if(!$orders){
                continue;
            }
            foreach ($orders as $o=>$order){
                $orderId = @$order->baseInfo->id;
                $orderIds[] = $orderId;
            }
        }

        //根据id 同步订单
        foreach ($orderIds as $o=>$orderId){
            self::downloadOrderById($user,$orderId);
            // exit();
        }
        $record->order_total = $total;
        $record->download_total=$total;
        $record->end_time = date('Y-m-d H:i:s');
        RecordOrderDownloadDao::addRecord($record);
        return $record;
    }

    //3.根据退款状态同步订单
    public static function downloadOrderByRefundStatus($refundStatus){
        ini_set('max_execution_time', '0');
        $user = session('user');
        $appKey = $user->appkey;
        $sessionKey = $user->access_token;

        $period = 30;
        $dates = Util::getDatePeriodAli($period);

        $createStart = $dates->start_date;
        $createEnd = $dates->end_date;

        $pageNum = 1;
        $pageSize = 20;


        $resp = TradeApi::AlibabaTradeGetSellerOrderListRequest($appKey,$sessionKey,$createStart,$createEnd,$modifyStart='',$modifyEnd='',$pageNum,$pageSize,$status='',$refundStatus);

        if(@$resp->error_code){
            $errorMessage = $resp->error_message;

            return $resp;
        }
        $total = $resp->totalRecord;

        $orderIds = [];
        $pages = ceil($total/$pageSize);

        //获取orderID
        for ($i=0;$i<$pages;$i++){
            $pageNum = $i+1;
            $resp = TradeApi::AlibabaTradeGetSellerOrderListRequest($appKey,$sessionKey,$createStart,$createEnd,$modifyStart='',$modifyEnd='',$pageNum,$pageSize,$status='',$refundStatus);
            $orders = $resp->result;
            foreach ($orders as $o=>$order){
                $orderId = $order->baseInfo->id;
                $orderIds[] = $orderId;
            }
        }

        //根据id 同步订单
        foreach ($orderIds as $o=>$orderId){
            self::downloadOrderById($user,$orderId);
            // exit();
        }
    }

    // 公用 同步单条订单
    public static function downloadOrderById($user,$orderId){
        $appKey = $user->appkey;
        $sessionKey = $user->access_token;
        $resp = TradeApi::AlibabaTradeGetSellerViewRequest($appKey,$sessionKey,$orderId);
        $order = $resp->result;
        $products = $order->productItems;

        $order = OrderFactory::formatOrder($user,$order);
        $resp = OrderDao::setOrder($user,$order);

        if($resp=='KEEP'){
            return true;
        }
        foreach ($products as $p=>$product){
            $product = OrderFactory::formatProduct($user,$product,$order);
            OrderDao::setOrderProduct($user,$product);
        }
    }

}