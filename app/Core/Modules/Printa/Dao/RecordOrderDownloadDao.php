<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/11/28
 * Time: 15:24
 */
namespace App\Core\Modules\Printa\Dao;


use App\Core\Common\Model\RecordBaseOrderDownload;

class RecordOrderDownloadDao{

    //获取最后下载时间
    public static function getLastRecord($user){
        $userId = $user->user_id;
        $record = RecordBaseOrderDownload::where('user_id',$userId)
            ->orderBy('id','desc')
            ->first();
        return $record;
    }

    //添加下载记录
    public static function addRecord( $record){
        $model = new RecordBaseOrderDownload();
        $model->user_id = @$record->user_id;
        $model->user_nick = @$record->user_nick;
        $model->order_total = @$record->order_total;
        $model->download_total = @$record->download_total;
        $model->failed_order_ids = @$record->failed_order_ids;
        $model->failed_reason = @$record->failed_reason;
        $model->start_time = @$record->start_time;
        $model->end_time = @$record->end_time;
        $model->period = @$record->period;
        $model->save();
        return $model;
    }
}