<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/11/28
 * Time: 15:24
 */
namespace App\Core\Modules\Yinliu\Dao;


use App\Core\Common\Model\YinliuBusiness;
use App\Core\Common\Model\YinliuProduct;

class BusinessDao{




    //新建引流业务
    public static function appYinliuBusinessEdit($business){
        $id = $business->id;

        $record = YinliuBusiness::where('id',$id)->first();
        if(!$record){
            return $record;
        }
        $record->business = @$business->business;
        $record->keywords = @$business->keywords;
        $record->introduction = @$business->introduction;
        $record->detail = @$business->detail;
        $result = $record->save();
        return $result;
    }


    //新建引流业务
    public static function appYinliuBusinessAdd($user,$business){

        $model = new YinliuBusiness();
        $model->user_id = $user->user_id;
        $model->nick = $user->nick;
        $model->business = @$business->business;
        $model->keywords = @$business->keywords;
        $model->introduction = @$business->introduction;
        $model->detail = @$business->detail;
        $result = $model->save();
        return $result;
    }

    //删除引流业务
    public static function appYinliuBusinessDelete($id){
        YinliuBusiness::where('id',$id)->delete();
        YinliuProduct::where('business_id',$id)->delete();
        return true;
    }


    //获取全部引流业务
    public static function appYinliuBusinessGet($user){
        $userId = $user->user_id;
        $records = YinliuBusiness::where('user_id',$userId)->get();


        if(empty($records)){
            return $records;
        }

        foreach ($records as $r=>$record){

            $bizId = $record->id;
            $productsTotal = YinliuProduct::where('user_id',$userId)->where('business_id',$bizId)->count();
            $record->product_total = $productsTotal;
        }
        return $records;
    }




}