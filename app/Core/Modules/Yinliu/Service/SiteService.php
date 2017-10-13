<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/26
 * Time: 12:46
 */
namespace App\Core\Modules\Yinliu\Service;

use App\Core\Modules\Yinliu\Dao\SiteDao;

class SiteService{


    //获取推广企业
    public static function appYinliuSiteGet($domain){

        $result = SiteDao::appYinliuSiteGet($domain);
        return $result;
    }

    //获取单一业务
    public static function appYinliuBusinessGetById($user,$bizId){
        $result = SiteDao::appYinliuBusinessGetById($user,$bizId);
        return $result;
    }


    //获取推广业务
    public static function appYinliuBusinessGet($user){
        $result = SiteDao::appYinliuBusinessGet($user);
        return $result;
    }

    //获取业务下推广产品
    public static function appYinliuProductGet($user,$page,$businessId){
        $result = SiteDao::appYinliuProductGet($user,$page,$businessId);
        return $result;
    }

}