<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/26
 * Time: 12:46
 */
namespace App\Core\Modules\Printa\Service;

use App\Core\Modules\Printa\Dao\PrinterDao;

class PrinterService{

    //获取打印机设置
    public static function getPrinterSetting($user){
        $result = PrinterDao::getPrinterSetting($user);
        return $result;
    }

    //保存打印机设置
    public static function savePrinterSetting($printer,$user){
        $userId = $user->user_id;
        $nick = $user->nick;
        $result = PrinterDao::savePrinterSetting($printer,$nick,$userId);
        return $result;
    }


}