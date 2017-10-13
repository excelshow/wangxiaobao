<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/11/28
 * Time: 15:24
 */
namespace App\Core\Modules\Printa\Dao;


use App\Core\Common\Model\PrintSetting;

class PrinterDao{


    //获取打印机设置
    public static function getPrinterSetting($user){
        $userId = $user->user_id;
        $record = PrintSetting::where('user_id',$userId)
            ->first();
        return $record;
    }

    //保存打印机设置
    public static function savePrinterSetting($printers,$nick,$userId){
        $record = PrintSetting::where('user_id',$userId)
            ->first();
        if(!$record){
            $record = new PrintSetting();
            $record->user_id = $userId;
            $record->user_nick = $nick;
        }
        $record->product_tpl_printer_index = $printers->product_tpl_printer_index;
        $record->product_tpl_printer_name = $printers->product_tpl_printer_name;
        $record->logistic_tpl_printer_index = $printers->logistic_tpl_printer_index;
        $record->logistic_tpl_printer_name = $printers->logistic_tpl_printer_name;
        $record->electric_tpl_printer_index = $printers->electric_tpl_printer_index;
        $record->electric_tpl_printer_name = $printers->electric_tpl_printer_name;
        $record->save();
        return $record;
    }
}