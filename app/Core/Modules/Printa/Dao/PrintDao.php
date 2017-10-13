<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/11/28
 * Time: 15:24
 */
namespace App\Core\Modules\Printa\Dao;


use App\Core\Common\Model\BaseOrder;
use App\Core\Common\Model\PrintSetting;
use Carbon\Carbon;

class PrintDao{

    //设置发货状态
    public static function setOrderSendGoodsStatus($orderId,$gmtGoodsSend,$user){
        $userId = $user->user_id;
        $result = BaseOrder::where('user_id',$userId)->where('order_id',$orderId)
            ->update(['gmt_goods_send'=>$gmtGoodsSend,'status'=>'WAIT_BUYER_RECEIVE']);
        return $result;

    }


    //设置面单打印状态
    public static function setOrderElectricListPrintStatus($orderId,$status,$logisticNum,$user){
        $userId = $user->user_id;
        $time = Carbon::now();
        $result = BaseOrder::where('user_id',$userId)->where('order_id',$orderId)
            ->update(['electric_list_print_status'=>$status,
                'logistic_list_print_time'=>$time,
                'logistic_num'=>$logisticNum
            ]);
        return $result;
    }



    //设置运单打印状态
    public static function setOrderLogisticListPrintStatus($orderId,$status,$user){
        $userId = $user->user_id;
        $time = Carbon::now();
        $result = BaseOrder::where('user_id',$userId)->where('order_id',$orderId)
            ->update(['logistic_list_print_status'=>$status,'logistic_list_print_time'=>$time]);
        return $result;
    }

    //设置货单打印状态
    public static function setOrderGoodsListPrintStatus($orderId,$status,$user){
        $userId = $user->user_id;
        $time = Carbon::now();
        $result = BaseOrder::where('user_id',$userId)->where('order_id',$orderId)
            ->update(['product_list_print_status'=>$status,'product_list_print_time'=>$time]);
        return $result;
    }

    //获取打印设置
    public static function getPrintSetting($user){
        $userId = $user->user_id;
        $result = PrintSetting::where('user_id',$userId)->first();
        return $result;
    }
}