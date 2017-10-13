<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/26
 * Time: 12:46
 */
namespace App\Core\Modules\Printa\Service;


use App\Core\Modules\Printa\Dao\PrintDao;

class PrintService{

    //获取打印设置
    public static function getPrintSetting($user){
        $result = PrintDao::getPrintSetting($user);
        return $result;
    }

    //设置面单打印状态
    public static function setOrderElectricListPrintStatus($orderId,$status,$logisticNum,$user){
        $result = PrintDao::setOrderElectricListPrintStatus($orderId,$status,$logisticNum,$user);
        return $result;
    }

    //设置运单打印状态
    public static function setOrderLogisticListPrintStatus($orderId,$status,$user){
        $result = PrintDao::setOrderLogisticListPrintStatus($orderId,$status,$user);
        return $result;
    }

    //设置货单打印状态
    public static function setOrderGoodsListPrintStatus($orderId,$status,$user){
        $result = PrintDao::setOrderGoodsListPrintStatus($orderId,$status,$user);
        return $result;
    }

}