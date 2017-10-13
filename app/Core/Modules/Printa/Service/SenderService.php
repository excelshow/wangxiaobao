<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/26
 * Time: 12:46
 */
namespace App\Core\Modules\Printa\Service;

use App\Core\Modules\Printa\Dao\SenderDao;

class SenderService{


    //获取默认发货地址
    public static function getDefaultSenderAddress($user){
        $userId = $user->user_id;
        $result = SenderDao::getDefaultAddress($userId);
        return $result;
    }

    //设为默认地址
    public static function setDefaultSenderAddress($id,$user){
        $userId = $user->user_id;
        $result =  SenderDao::setDefaultSenderAddress($id,$userId);
        return $result;
    }
    //删除地址
    public static function deleteSenderAddress($ids){
        foreach ($ids as $i=>$id){
            SenderDao::deleteSenderAddress($id);
        }
        return true;
    }
    //修改地址
    public static function updateSenderAddress($sender,$user){
        $nick = $user->nick;
        $result = SenderDao::updateSenderAddress($sender,$nick);
        return $result;
    }
    //新建地址
    public static function addSenderAddress($sender,$user){
        $nick = $user->nick;
        $userId = $user->user_id;
        $result = SenderDao::addSenderAddress($sender,$nick,$userId);
        return $result;
    }

    //根据区id 获取邮编
    public static function getPosts($areaId){
        $result = SenderDao::getPosts($areaId);
        return $result;
    }

    //根据城市id 获取区
    public static function getAreas($cityId){
        $result = SenderDao::getAreas($cityId);
        return $result;
    }

    //根据省份id 获取市
    public static function getCities($provinceId){
        $result = SenderDao::getCities($provinceId);
        return $result;
    }

    //获取所有省份
    public static function getProvinces(){
        $result = SenderDao::getProvinces();
        return $result;
    }

    //获取所有用户发货地址
    public static function getSenderAddress($page,$user){
        $userId = $user->user_id;
        $pageSize = $page->limit;
        $pageNum = $page->page;
        $result = SenderDao::getSenderAddress($pageSize,$pageNum,$userId);
        return $result;
    }
}