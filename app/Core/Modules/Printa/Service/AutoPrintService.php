<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/26
 * Time: 12:46
 */
namespace App\Core\Modules\Printa\Service;
use App\Core\Modules\Printa\Dao\AutoPrintDao;

class AutoPrintService{


    //获取自动打印
    public static function getAutoPrint($user){
        $result = AutoPrintDao::getAutoPrint($user);
        return $result;
    }

    //保存自动打印
    public static function setAutoPrint($user,$auto){
        $result =  AutoPrintDao::setAutoPrint($user,$auto);
        return $result;
    }
}