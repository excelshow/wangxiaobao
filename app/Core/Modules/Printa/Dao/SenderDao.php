<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/11/28
 * Time: 15:24
 */
namespace App\Core\Modules\Printa\Dao;


use App\Core\Common\Model\BaseArea;
use App\Core\Common\Model\BaseCity;
use App\Core\Common\Model\BasePost;
use App\Core\Common\Model\BaseProvince;
use App\Core\Common\Model\PrintSender;
use Illuminate\Support\Facades\DB;

class SenderDao{


    //设为默认
    public static function setDefaultSenderAddress($id,$userId){


       PrintSender::where('user_id',$userId)
            ->update(['is_default'=>'N']);

        $record =PrintSender::where('id',$id)->first();
        $record->is_default = 'Y';
        $record->save();
        return $record;
    }





    //删除发货地址
    public static function deleteSenderAddress($id){
        $result =PrintSender::where('id',$id)->delete();
        return $result;
    }

    //修改发货地址
    public static function updateSenderAddress($sender,$nick){
        $id = $sender->id;
        $default = $sender->is_default;
        if($default=='Y'){
           PrintSender::where('user_nick',$nick)
                ->update(['is_default'=>'N']);
        }
        $model =PrintSender::where('id',$id)->first();
        $model->sender_name = $sender->sender_name;
        $model->province = $sender->province;
        $model->city = $sender->city;
        $model->area = $sender->area;
        $model->street = $sender->street;
        $model->post = $sender->post;
        $model->address = $sender->province.' '.$sender->city.' '.$sender->area.' '.$sender->street;
        $model->mobile = $sender->mobile;
        $model->phone = $sender->phone;
        $model->is_default = $sender->is_default;
        $model->save();
        return $model;
    }

    //新建发货地址
    public static function addSenderAddress($sender,$nick,$userId){
        $default = $sender->is_default;
        if($default=='Y'){
           PrintSender::where('user_id',$userId)
                ->update(['is_default'=>'N']);
        }

        $model = new PrintSender();
        $model->user_id = $userId;
        $model->user_nick= $nick;
        $model->sender_name = $sender->sender_name;
        $model->province = $sender->province;
        $model->city = $sender->city;
        $model->area = $sender->area;
        $model->street = $sender->street;
        $model->address = $sender->province.' '.$sender->city.' '.$sender->area.' '.$sender->street;
        $model->post = $sender->post;
        $model->mobile = $sender->mobile;
        $model->phone = $sender->phone;
        $model->is_default = $sender->is_default;
        $model->save();
        return $model;


    }

    //获取所有用户发货地址
    public static function getSenderAddress($pageSize,$pageNum,$userId){
        $result = new \stdClass();
        $result->total = '0';
        $result->rows = [];

        $skip = $pageSize*($pageNum-1);

        $query =PrintSender::where('user_id',$userId);
        $total = $query->count();
        $rows = $query
            ->orderBy('id','asc')
            ->skip($skip)
            ->take($pageSize)
            ->get();
        $result->total = $total;
        $result->rows = $rows;
        return $result;
    }

    //获取默认发货地址
    public static function getDefaultAddress($userId){
        $result =PrintSender::where('user_id',$userId)
            ->where('is_default','Y')
            ->first();
        return $result;
    }


    //根据区id 获取邮编
    public static function getPosts($areaId){
        $result = BasePost::where('area_id',$areaId)->get();
        return $result;
    }

    //根据城市id 获取区
    public static function getAreas($cityId){
        $result = BaseArea::where('city_id',$cityId)->get();
        return $result;
    }

    //根据省份id 获取市
    public static function getCities($provinceId){
        $result = BaseCity::where('province_id',$provinceId)->get();
        return $result;
    }

    //获取所有省份
    public static function getProvinces(){
        $result = BaseProvince::get();
        return $result;
    }
}