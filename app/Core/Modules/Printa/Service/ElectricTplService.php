<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/1/14
 * Time: 16:48
 */
namespace App\Core\Modules\Printa\Service;
use App\Core\Remote\BirdApi;
use App\Core\Modules\Printa\Dao\ElectricTplDao;
class ElectricTplService{


    //获取面单公司
    public static function getElectricCompanies(){
        $result = ElectricTplDao::getElectricCompanies();
        return $result;
    }

    //删除面单账号
    public static function deleteAccounts($ids){
        foreach ($ids as $i=>$id){
            ElectricTplDao::deleteAccount($id);
        }
        return true;
    }

    //设置面单账号
    public static function setAccount($user,$account){
        $result =   ElectricTplDao::setAccount($user,$account);
        return $result;
    }

    //根据公司id 获取面单账号
    public static function getAccount($user,$companyId){
        $userId = $user->user_id;
        $result = ElectricTplDao::getAccount($userId,$companyId);
        return $result;
    }

    //获取面单账号列表
    public static function getAccountsList($user,$page){
        $userId = $user->user_id;
        $pageNum =  $page->page;
        $pageSize = $page->limit;
        $result = ElectricTplDao::getAccountsList($userId,$pageSize,$pageNum);
        return $result;
    }



    //获取面单模版
    public static function getElectricTpl($user,$order,$products,$sender,$receiver,$account){
        $appKey = $user->appkey;
        
        $orderId = $order->order_id;
        $remark = $order->seller_remark;

        
        
        $customerName = $account->customer_name;
        $customerPwd = $account->customer_pwd;
        $monthCode = $account->month_code;
        $sendSite = $account->send_site;

        $logisticShortName=  $order->logistic_company_no;
        
        $isNotice = '0';
        $IsReturnPrintTemplate = '1';
        $payType='1';
        $expType='1';
        $productsTotal = 1;
        $result = BirdApi::BirdEOrderGetRequest($appKey,$customerName,$customerPwd,$monthCode,$sendSite,$logisticShortName,$orderId,$payType,$expType,
            $sender,$receiver,$products,$isNotice,$IsReturnPrintTemplate,$productsTotal,$remark);
        return $result;
    }


}