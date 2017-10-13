<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/26
 * Time: 12:46
 */
namespace App\Core\Modules\Yinliu\Service;

use App\Core\Modules\Yinliu\Dao\BusinessDao;

class BusinessService{


    //删除推广业务
    public static function appYinliuBusinessDelete($ids){
        foreach ($ids as $i=>$id){
            BusinessDao::appYinliuBusinessDelete($id);
        }
        return $ids;
    }
    //获取推广业务
    public static function appYinliuBusinessGet($user){
        $result = BusinessDao::appYinliuBusinessGet($user);
        return $result;
    }

    //新建业务

    public static function appYinliuBusinessAdd($user,$business){
        $result = BusinessDao::appYinliuBusinessAdd($user,$business);
        return $result;
    }

    //编辑业务

    public static function appYinliuBusinessEdit($business){
        $result = BusinessDao::appYinliuBusinessEdit($business);
        return $result;
    }
}