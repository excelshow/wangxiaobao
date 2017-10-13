<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/11/28
 * Time: 15:24
 */
namespace App\Core\Modules\Printa\Dao;


use App\Core\Common\Model\PrintElectricTplAccount;
use App\Core\Common\Model\PrintLogisticCompany;
use App\Core\Common\Model\PrintSetting;

class ElectricTplDao{


    //获取面单公司
    public static function getElectricCompanies(){
        $result = PrintLogisticCompany::where('has_electric_tpl','Y')
            ->get();
        return $result;
    }

    //删除面单账号
    public static function deleteAccount($id){
        $result = PrintElectricTplAccount::where('id',$id)->delete();
        return $result;
    }

    //设置面单账号
    public static function setAccount($user,$account){
        $userId = $user->user_id;
        $companyId = $account->company_id;
        $record = PrintElectricTplAccount::where('user_id',$userId)
            ->where('company_id',$companyId)
            ->first();
        if(!$record){
            $record = new PrintElectricTplAccount();
            $record->user_id = $userId;
            $record->user_nick = $user->nick;
            $record->company_id = $account->company_id;
        }
        $record->company_name = $account->company_name;
        $record->company_no = $account->company_no;
        $record->customer_name =  $account->customer_name;
        $record->customer_pwd =  $account->customer_pwd;
        $record->month_code =  $account->month_code;
        $record->send_site =  $account->send_site;
        $record->save();
    }

    //根据快递公司id 获取面单账号
    public static function getAccount($userId,$companyId){
        $result = PrintElectricTplAccount::where('user_id',$userId)
            ->where('company_id',$companyId)
            ->first();
        return $result;
    }

    //获取电子面单账号列表
    public static function getAccountsList($userId,$pageSize,$pageNum){
        $skip = $pageSize*($pageNum-1);

        $result = new \stdClass();
        $result->total = 0;
        $result->rows = [];

        $query =  PrintElectricTplAccount::where('user_id',$userId);
        $total = $query->count();
        $rows = $query
            ->skip($skip)
            ->take($pageSize)
            ->get();
        $result->total = $total;
        $result->rows = $rows;
        return $result;
    }








    //获取面单设置
    public static function getElectricTplSetting($userId){
        $result = PrintSetting::where('user_id',$userId)
            ->first();
        return $result;
    }

    //保存面单设置
    public static function saveElectricTplSetting($electricCustomerName,$electricCustomerPwd,$nick,$userId){

        $record = PrintSetting::where('user_id',$userId)
            ->first();
        if(!$record){
            $record = new PrintSetting();
            $record->user_id = $userId;
            $record->user_nick = $nick;
        }
        $record->electric_tpl_customer_name = $electricCustomerName;
        $record->electric_tpl_customer_pwd = $electricCustomerPwd;
        $record->save();
        return $record;
    }
}