<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/26
 * Time: 12:46
 */
namespace App\Core\Modules\Printa\Service;

use App\Core\Modules\Printa\Dao\LogisticDao;
use App\Core\Modules\Printa\Dao\LogisticTplDao;
class LogisticService{





    //获取合作物流公司列表
    public static function getLogisticCompanyCooperate($page,$user){
        $userId = $user->user_id;
        $pageSize = $page->limit;
        $pageNum = $page->page;
        $result = LogisticDao::getLogisticCompanyCooperate($pageSize,$pageNum,$userId);
        return $result;
    }

    //设为默认物流公司
    public static function setDefaultLogisticCompany($id,$user){
        $userId = $user->user_id;
        $result = LogisticDao::setDefaultLogisticCompany($id,$userId);
        return $result;
    }

    //取消合作物流公司
    public static function cancelCooperateLogisticCompany($ids){
        foreach ($ids as $i=>$id){
            LogisticDao::cancelCooperateCompany($id);
        }
        return $ids;
    }

    //查询物流公司
    public static function selectLogisticCompany($name){
        if(!$name){
            $result = LogisticDao::getLogisticCompanyOften();
        }else{
            $result = LogisticDao::selectLogisticCompany($name);
        }
        return $result;
    }

    //获取常用物流公司
    public static function getLogisticCompanyOften(){
        $result = LogisticDao::getLogisticCompanyOften();
        return $result;
    }

    //新建或者编辑合作物流公司
    public static function setCooperateLogisticCompany($company,$tpl,$user){
        LogisticDao::setCooperateLogisticCompany($company,$tpl,$user);
        return true;
    }



    //下载物流公司
    public static function logisticCompanyDownload($user){
        $sessionKey = $user->access_token;
        $memberId = $user->member_id;
        $resp = OrderApi::AlibabaOpenLogisticscompanyListRequest($memberId,$sessionKey);
        $companies = $resp->logisticscompany_list->struct;
        foreach ($companies as $k=>$company){
            $factory = new LogisticCompanyFactory();
            $factory->convert($company);
            LogisticDao::setLogisticCompany($factory);
        }
        LogisticDao::updateLogisticCompaniesImg();
    }
}