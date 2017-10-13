<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/20
 * Time: 22:14
 */
namespace App\Core\Modules\Printa\Dao;
use App\Core\Common\Model\BaseOrder;
use App\Core\Common\Model\BaseOrderProduct;

class OrderDao{

    ////查询订单
    public static function getOrders($field,$data,$startDate,$endDate,$orderBy,$order,$pageSize,$pageNum,$userId){
        $skip = $pageSize*($pageNum-1);

        $result = new \stdClass();
        $result->total = 0;
        $result->rows = [];

        $query =  BaseOrder::where('user_id',$userId)
            ->whereBetween('gmt_create', [$startDate, $endDate]);

        if($data=='ALL'||$data==''){
            $field = 'ALL';
        }

        switch ($field){
            case 'ORDER_ID':
                $query = $query
                    ->where('order_id','=',$data);
                break;
            case 'PRODUCT':
                $query = $query
                    ->where('product_name','like',"%$data%");
                break;
            case 'BUYER':
                $query =  $query
                    ->where(function ($query) use ($data){
                        $query->orWhere('buyer_nick',$data)
                            ->orwhere('buyer_phone',$data)
                            ->orWhere('buyer_mobile',$data)
                            ->orWhere('receiver_phone',$data)
                            ->orWhere('receiver_mobile',$data);
                    });
                break;
            case 'MESSAGE':
                $query = $query
                    ->where(function ($query) use ($data){
                        $query->where('buyer_message','like','%'.$data.'%')
                            ->orWhere('buyer_remark','like','%'.$data.'%')
                            ->orWhere('seller_remark','like','%'.$data.'%');
                    });
                break;
            case 'TRADE_STATUS':

                switch ($data){
                    case 'ALL':
                        $query =  $query;
                        break;
                    case 'REFUND':
                        $query =  $query
                            ->whereIn('refund_status',['WAIT_SELLER_AGREE','WAIT_BUYER_MODIFY','WAIT_BUYER_SEND','WAIT_SELLER_RECEIVE']);
                        break;
                    case 'OTHER':
                        $query = $query
                            //->whereIn('status',['WAIT_SELLER_ACT','WAIT_BUYER_CONFIRM_ACTION','WAIT_SELLER_PUSH','WAIT_LOGISTICS_TAKE_IN','WAIT_BUYER_SIGN','SIGN_IN_SUCCESS','SIGN_IN_FAILED']);
                            ->whereNotIn('status',['SUCCESS','CANCEL','WAIT_BUYER_PAY','WAIT_SELLER_SEND','WAIT_BUYER_RECEIVE']);

                        break;
                    default:
                        $query =  $query
                            ->where('status',$data);
                }
                break;
            case 'SELLER_RATE':
                $query =  $query
                    ->where('seller_rate_status',$data);
                break;
            case 'BUYER_RATE':
                $query =  $query
                    ->where('buyer_rate_status',$data);
                break;
            case 'SELLER_REMARK':
                $query =  $query
                    ->where('seller_remark_icon',$data);
                break;
            case 'PERIOD':
                $query =  $query;
                break;
            case 'PRINT':
                switch ($data){
                    case 'ALL':
                        $query =  $query;
                        break;
                    case 'PRODUCT_WAIT_PRINT':
                        $query =  $query ->where('product_list_print_status','WAIT_PRINT');

                        break;
                    case 'PRODUCT_HAS_PRINTED':
                        $query =  $query ->where('product_list_print_status','PRINTED');
                        break;
                    case 'LOGISTIC_WAIT_PRINT':
                        $query =  $query ->where('logistic_list_print_status','WAIT_PRINT');

                        break;
                    case 'LOGISTIC_HAS_PRINTED':
                        $query =  $query ->where('logistic_list_print_status','PRINTED');
                        break;
                    case 'ELECTRIC_WAIT_PRINT':
                        $query =  $query ->where('electric_list_print_status','WAIT_PRINT');

                        break;
                    case 'ELECTRIC_HAS_PRINTED':
                        $query =  $query ->where('electric_list_print_status','PRINTED');
                        break;
                    case 'AUTO_PRINT':
                        //$query =  $query ->where('status','WAIT_BUYER_PAY');
                        $query =  $query ->where('status','WAIT_SELLER_SEND');
                        break;
                    default:
                        $query =  $query
                            ->where('status',$data);
                }

                break;
            case 'REMIND':
                $query =  $query
                    ->where('remind_pay_status',$data);
                break;
            case 'ALL':
                $query = $query;
                break;
            default:
                $query =  BaseOrder::where('user_id',$userId)
                    ->whereBetween('gmt_create', [$startDate, $endDate]);
        }


        $total = $query->count();
        $rows = $query
            ->orderBy($orderBy,$order)
            ->skip($skip)
            ->take($pageSize)
            ->get();

        //获取商品信息
        if (count($rows)>0){
            foreach ($rows as $r=>$row){
                $orderId = $row->order_id;


                $query = BaseOrderProduct::where('base_order_product.order_id',$orderId);

                $query = $query->leftJoin('print_product', function ($join) {
                    $join->on('base_order_product.item_id', '=', 'print_product.item_id');
                })
                    ->select(
                        'base_order_product.*',
                        'print_product.title_short'
                    );
                $products = $query
                    ->orderBy('id','asc')
                    ->get();

                $row->products = $products;
                $rows[$r] = $row;
            }
        }
        $result->total = $total;
        $result->rows = $rows;
        return $result;

    }

    //同步订单信息
    public static function setOrder($user,$order){
        $userId = $user->user_id;
        $orderId = $order->order_id;

        $record = BaseOrder::where('user_id',$userId)->where('order_id',$orderId)->first();
        //print_r($record);
        if(!$record){
            $model = new BaseOrder();
            $model->user_id = $userId;
            $model->order_id = @$order->order_id;
            $model->product_name = @$order->product_name;
            $model->status = @$order->status;
            $model->refund_status = @$order->refund_status;
            $model->buyer_rate_status = @$order->buyer_rate_status;
            $model->seller_rate_status = @$order->seller_rate_status;

            $model->wireless_order = $order->wireless_order;

            $model->gmt_payment = @$order->gmt_payment;
            $model->gmt_goods_send = @$order->gmt_goods_send;
            $model->gmt_confirmed = @$order->gmt_confirmed ;
            $model->gmt_modified = @$order->gmt_modified;
            $model->gmt_create = @$order->gmt_create;

            $model->business_type = @$order->business_type;

            $model->discount = @$order->discount;
            $model->carriage = @$order->carriage ;
            $model->refund_payment = @$order->refund_payment ;
            $model->sum_payment = @$order->sum_payment;
            $model->sum_product_payment = @$order->sum_product_payment;
            $model->sum_product_payment_with_coupon = @$order->sum_product_payment_with_coupon;

            $model->close_reason = @$order->close_reason;
            $model->buyer_message = @$order->buyer_message;
            $model->buyer_remark = @$order->buyer_remark;
            $model->buyer_remark_icon = @$order->buyer_remark_icon;
            $model->seller_remark = @$order->seller_remark;
            $model->seller_remark_icon = @$order->seller_remark_icon;
            $model->seller_remark_2 = @$order->seller_remark_2;

            $model->seller_nick = @$order->seller_nick;
            $model->seller_member_id = @$order->seller_member_id;
            $model->seller_company_name = @$order->seller_company_name;
            $model->seller_name = @$order->seller_name;
            $model->seller_phone = @$order->seller_phone;
            $model->seller_mobile = @$order->seller_mobile;
            $model->seller_ali_id = @$order->seller_ali_id;
            $model->seller_sex =  @$order->seller_sex ;
            $model->seller_alipay_id = @$order->seller_alipay_id;

            $model->buyer_nick = @$order->buyer_nick;
            $model->buyer_member_id = @$order->buyer_member_id;
            $model->buyer_company_name = @$order->buyer_company_name;
            $model->buyer_name = @$order->buyer_name ;
            $model->buyer_phone = @$order->buyer_phone ;
            $model->buyer_mobile = @$order->buyer_mobile;
            $model->buyer_sex = @$order->buyer_sex ;
            $model->buyer_ali_id = @$order->buyer_ali_id;
            $model->buyer_alipay_id = @$order->buyer_alipay_id;

            $model->receiver_country = @$order->receiver_country;
            $model->receiver_province = @$order->receiver_province;
            $model->receiver_city = @$order->receiver_city;
            $model->receiver_area = @$order->receiver_area;
            $model->receiver_area_code = @$order->receiver_area_code;
            $model->receiver_street = @$order->receiver_street;
            $model->receiver_address = @$order->receiver_address;
            $model->receiver_post = @$order->receiver_post;
            $model->receiver_name = @$order->receiver_name;
            $model->receiver_phone = @$order->receiver_phone;
            $model->receiver_mobile = @$order->receiver_mobile;

            $model->logistic_num = @$order->logistic_num ;
            //print_r($model);
            $model->save();
            return 'ADD';
        }

        //如果修改时间相同则不用同步
        $modifiedTime = $record->gmt_modified;
        $modified = $order->gmt_modified;
        if($modified==$modifiedTime){
            return 'KEEP';
        }

        $record->status = @$order->status;
        $record->refund_status = @$order->refund_status;
        $record->buyer_rate_status = @$order->buyer_rate_status;
        $record->seller_rate_status = @$order->seller_rate_status;

        $record->gmt_payment = @$order->gmt_payment;
        $record->gmt_goods_send = @$order->gmt_goods_send;
        $record->gmt_confirmed = @$order->gmt_confirmed ;
        $record->gmt_modified = @$order->gmt_modified;
        $record->gmt_create = @$order->gmt_create;

        $record->discount = @$order->discount;
        $record->carriage = @$order->carriage ;
        $record->refund_payment = @$order->refund_payment ;
        $record->sum_payment = @$order->sum_payment;
        $record->sum_product_payment = @$order->sum_product_payment;
        $record->sum_product_payment_with_coupon = @$order->sum_product_payment_with_coupon;

        $record->close_reason = @$order->close_reason;
        $record->buyer_message = @$order->buyer_message;
        $record->buyer_remark = @$order->buyer_remark;
        $record->buyer_remark_icon = @$order->buyer_remark_icon;
        $record->seller_remark = @$order->seller_remark;
        $record->seller_remark_icon = @$order->seller_remark_icon;

        $logsitcNum = $order->logistic_num;
        if($logsitcNum){
            $record->logistic_num = @$order->logistic_num ;
        }
        $record->save();

        return 'UPDATE';
    }

    //同步订单产品
    public static function setOrderProduct($user,$product){
        $userId = $user->user_id;
        $itemId = $product->item_id;
        $orderId = $product->order_id;
        $specId = $product->spec_id;
        $record = BaseOrderProduct::where('user_id',$userId)->where('order_id',$orderId)->where('item_id',$itemId)
            ->where('spec_id',$specId)->first();
        if(!$record){

            $model = new BaseOrderProduct();
            $model->user_id = $user->user_id;

            $model->order_id = @$product->order_id;
            $model->entry_id = @$product->entry_id;
            $model->seller_nick = @$product->seller_nick;
            $model->buyer_nick = @$product->buyer_nick;
            $model->item_id = @$product->item_id;

            $model->category_id = @$product->category_id;
            $model->sku_id = @$product->sku_id;
            $model->spec_id = @$product->spec_id;
            $model->product_cargo_number = @$product->product_cargo_number;
            $model->cargo_number = @$product->cargo_number;

            $model->product_name = @$product->product_name;
            $model->img_url = @$product->img_url;
            $model->activity_id = @$product->activity_id;
            $model->price = @$product->price;
            $model->price_after_promotion = @$product->price_after_promotion;

            $model->amount = @$product->amount;
            $model->amount_with_discount_and_promotion = @$product->amount_with_discount_and_promotion;
            $model->discount = @$product->discount;
            $model->discount_price = @$product->discount_price;//折扣价
            $model->entry_discount =  @$product->entry_discount;

            $model->quantity = @$product->quantity;
            $model->weight = @$product->weight;
            $model->weight_unit = @$product->weight_unit;

            $model->spec_items = @$product->spec_items;
            $model->product_unit = @$product->product_unit;
            $model->price_unit = @$product->price_unit;
            $model->gmt_create = @$product->gmt_create;
            $model->gmt_modified = @$product->gmt_modified;
            $model->save();
            return $model;
        }

        //如果修改时间相同则不用同步
        $modifiedTime = $record->gmt_modified;
        $modified = $product->gmt_modified;
        if($modified==$modifiedTime){
            return $product;
        }
        $record->price = @$product->price;
        $record->price_after_promotion = @$product->price_after_promotion;
        $record->amount = @$product->amount;
        $record->amount_with_discount_and_promotion = @$product->amount_with_discount_and_promotion;
        $record->discount = @$product->discount;
        $record->discount_price = @$product->discount_price;//折扣价
        $record->entry_discount =  @$product->entry_discount;
        $record->gmt_modified = @$product->gmt_modified;

        return $record;

    }
}