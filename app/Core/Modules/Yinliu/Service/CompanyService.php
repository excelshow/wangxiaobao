<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/26
 * Time: 12:46
 */
namespace App\Core\Modules\Yinliu\Service;

use App\Core\Modules\Yinliu\Dao\CompanyDao;

class CompanyService{


    //设置推广企业
    public static function appYinliuCompanySet($company,$user){

        $result = CompanyDao::appYinliuCompanySet($company,$user);
        return $result;
    }

    //获取推广企业
    public static function appYinliuCompanyGet($user){

        $result = CompanyDao::appYinliuCompanyGet($user);
        return $result;
    }

    //获取域名是否可用
    public static function appYinliuCompanyDomainGet($domain){
        $result = CompanyDao::appYinliuCompanyDomainGet($domain);
        return $result;
    }


}