<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/11/28
 * Time: 15:24
 */
namespace App\Core\Modules\Printa\Dao;


use App\Core\Common\Model\PrintAutoPrint;

class AutoPrintDao{


    //获取自动打印
    public static function getAutoPrint($user){
        $userId = $user->user_id;
        $result = PrintAutoPrint::where('user_id',$userId)->first();
        return $result;
    }


    //设置自动打印
    public static function setAutoPrint($user,$auto){
        $userId = $user->user_id;
        $record = PrintAutoPrint::where('user_id',$userId)->first();

        if(!$record){
            $record = new PrintAutoPrint();
            $record->user_id = $userId;
            $record->user_nick = $user->nick;
        }
        $record->logistic_type = $auto->logistic_type;
        $record->print_product_list = $auto->print_product_list;
        $record->print_logistic_list = $auto->print_logistic_list;
        $record->print_electric_list = $auto->print_electric_list;
        $record->auto_send = $auto->auto_send;
        $record->order_period = $auto->order_period;
        $record->start_time = $auto->start_time;
        $record->end_time = $auto->end_time;
        $record->save();
        return $record;

    }





}