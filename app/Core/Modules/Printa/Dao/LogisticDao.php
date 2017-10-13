<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/11/28
 * Time: 15:24
 */
namespace App\Core\Modules\Printa\Dao;

use App\Core\Common\Model\PrintCompanyCooperate;
use App\Core\Common\Model\PrintLogisticCompany;

class LogisticDao{

    //获取合作物流公司
    public static function getLogisticCompanyCooperate($pageSize,$pageNum,$userId){

        $result = new \stdClass();
        $result->total = '0';
        $result->rows = [];

        $skip = $pageSize*($pageNum-1);

        $query = PrintCompanyCooperate::where('user_id',$userId);
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

    //设为默认物流公司
    public static function setDefaultLogisticCompany($id,$userId){

        PrintCompanyCooperate::where('user_id',$userId)
            ->update(['is_default'=>'N']);
        PrintCompanyCooperate::where('user_id',$userId)
            ->where('id',$id)
            ->update(['is_default'=>'Y']);
        return true;
    }
    //取消合作
    public static function cancelCooperateCompany($id){
        $result = PrintCompanyCooperate::where('id',$id)
            ->delete();
        return $result;
    }

    //查询物流公司
    public static function selectLogisticCompany($name){

        $result = PrintLogisticCompany::where('company_name','like','%'.$name.'%')
            ->orWhere('company_no','like','%'.$name.'%')
            ->get();
        return $result;
    }
    //获取常用物流公司
    public static function getLogisticCompanyOften(){
        $result = PrintLogisticCompany::where('often','Y')->get();
        return $result;

    }

    //下载物流公司
    public static function setLogisticCompany($company){
        $companyId = $company->company_id;
        $model = PrintLogisticCompany::where('company_id',$companyId)->first();
        if(!$model){
            $model = new PrintLogisticCompany();
        }

        $model->company_id=$company->company_id;
        $model->company_name=$company->company_name;
        $model->company_no=$company->company_no;
        $model->often=$company->often;
        $model->save();
        return $model;
    }


    //新建合作物流公司
    public static function setCooperateLogisticCompany($company,$tpl,$user){
        $nick = $user->nick;
        $userId = $user->user_id;
        //print_r($company);
        $isDefault = $company->is_default;
        if($isDefault=='Y'){
            PrintCompanyCooperate::where('user_id',$userId)
                ->update(['is_default'=>'N']);
        }
        $companyId =  $company->company_id;
        $record = PrintCompanyCooperate::where('user_id',$userId)
            ->where('company_id',$companyId)
            ->first();
        if(!$record){
            $record = new PrintCompanyCooperate();
            $record->user_nick = $nick;
            $record->user_id = $userId;
            $record->company_id = $company->company_id;
        }
        $record->ali_id = $company->ali_id;
        $record->company_name = $company->company_name;
        $record->company_no = $company->company_no;
        $record->is_default = $isDefault;
        $record->has_electric_tpl = $company->has_electric_tpl;
        $record->tpl_id = $tpl->id;
        $record->tpl_type = $tpl->tpl_type;
        $record->tpl_name = $tpl->tpl_name;
        $record->save();
        return $record;
    }


    //获取默认合作物流公司
    public static function getLogisticCompanyCooperateDefault($userId){
        $result = PrintCompanyCooperate::where('user_id',$userId)
            ->where('is_default','Y')
            ->first();
        return $result;
    }


}