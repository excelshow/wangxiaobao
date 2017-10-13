<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/11/28
 * Time: 15:24
 */
namespace App\Core\Modules\Yinliu\Dao;


use App\Core\Common\Model\YinliuCompany;

class CompanyDao{


    //设置企业推广
    public static function appYinliuCompanySet($company,$user){
        $userId = $user->user_id;
        $record = YinliuCompany::where('user_id',$userId)->first();
        if(!$record){
            $record = new YinliuCompany();
            $record->user_id = $userId;
            $record->nick = $user->nick;
        }
        $record->domain = @$company->domain;
        $record->site_address = @$company->site_address;
        $record->company_name = @$company->company_name;
        $record->business = @$company->business;
        $record->introduction = @$company->introduction;
        $record->detail = @$company->detail;
        $record->address = @$company->address;
        $record->mobile = @$company->mobile;
        $record->phone = @$company->phone;
        $record->shop_url = @$company->shop_url;
        //$record->site_tpl_id = @$company->site_tpl_id;
        $record->save();
        return $record;
    }


    //获取企业推广
    public static function appYinliuCompanyGet($user){
        $userId = $user->user_id;
        $result = YinliuCompany::where('user_id',$userId)->first();
        return $result;
    }

    //获取域名是否可用
    public static function appYinliuCompanyDomainGet($domain){
        $result = YinliuCompany::where('domain',$domain)->first();
        return $result;
    }


}