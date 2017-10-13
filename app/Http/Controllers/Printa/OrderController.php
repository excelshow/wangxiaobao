<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/5/31
 * Time: 16:53
 */
namespace App\Http\Controllers\Printa;

use App\Core\Modules\Printa\Service\OrderService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OrderController extends Controller{


    //发货
    public static function sendGoods(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));

        $logisticWay = $params->logistic_way;
        $orderId = $params->order_id;
        $entireIds = $params->entire_ids;
        $companyId = $params->company_id;
        $companyName = $params->company_name;
        $remarks = $params->remarks;
        $logisticNum = $params->logistic_num;
        $result = OrderService::sendGoods($logisticWay,$orderId,$entireIds,$remarks,$companyId,$companyName,$logisticNum,$user);
        return json_encode($result);
    }


    // 查询订单
    public static function getOrders(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));
        $page = json_decode($request->input('page'));
        $sorter = json_decode($request->input('sorter'));

        $result = OrderService::getOrders($params,$page,$sorter,$user);
        return json_encode($result);

    }

    //下载订单
    public static function download(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));
        $period = $params->period;
        $processId = $params->process_id;
        $result =  OrderService::downloadOrdersByPeriod($user,$period,$processId);
        return json_encode($result);
    }

    //获取订单下载进度
    public static function getDownloadProcess(Request $request){
        $params = json_decode($request->input('params'));
        $processId = $params->process_id;
        $result = OrderService::getDownloadProcess($processId);
        return json_encode($result);
    }

    //获取待同步订单信息
    public static function getWaitDownloadInfo(){
        $user = session('user');
        $result = OrderService::getWaitDownloadInfo($user);
        return json_encode($result);
    }

}