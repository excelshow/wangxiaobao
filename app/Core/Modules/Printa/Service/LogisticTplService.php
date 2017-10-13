<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/12/20
 * Time: 13:27
 */
namespace App\Core\Modules\Printa\Service;


use App\Core\Modules\Printa\Dao\LogisticDao;
use App\Core\Modules\Printa\Dao\LogisticTplDao;
class LogisticTplService {



    //获取模版列表
    public static function getLogisticTpls($tplName,$page,$user){
        $pageSize = $page->limit;
        $pageNum = $page->page;
        $userId = $user->user_id;
        $result = LogisticTplDao::getLogisticTpls($tplName,$pageSize,$pageNum,$userId);
        return $result;
    }

    //根据物流公司id 获取物流模版列表
    public static function getLogisticTplsByCompanyId($companyId,$user){
        $userId = $user->user_id;
        $result = LogisticTplDao::getLogisticTplsByCompanyId($companyId,$userId);
        return $result;
    }
    
    
    
    
    //设为快递默认运单模版
    public static function setDefaultLogisticTpl($tpl,$user)
    {
        $userId = $user->user_id;
        $nick = $user->nick;
        $result = LogisticTplDao::setDefaultLogisticTpl($tpl, $nick, $userId);
        return $result;
    }
    //修改模版
    public static function updateLogisticTpl($tpl,$items,$user){
        $userId  = $user->user_id;
        $nick = $user->nick;
        $result = LogisticTplDao::updateLogisticTpl($tpl,$items,$userId,$nick);
        return $result;

    }

    //新建模版
    public static function addLogisticTpl($tpl,$items,$user){
        $userId  = $user->user_id;
        $nick = $user->nick;
        $result = LogisticTplDao::addLogisticTpl($tpl,$items,$userId,$nick);
        return $result;
    }

    //删除货单模版
    public static function deleteLogisticTpls($tpls){

        foreach ($tpls as $t=>$tplId){
            LogisticTplDao::deleteLogisticTpl($tplId);
        }
        return $tpls;
    }

    

    //根据模版id 获取 模版和打印项
    public static function getLogisticTpl($tplId){
        $result = LogisticTplDao::getLogisticTpl($tplId);
        if($result){
            $items  = LogisticTplDao::getLogisticTplItems($tplId);
            $result->items = $items;
        }
        return $result;
    }

    
    //根据物流公司获取系统模版和用户模版
    public static function getLogisticTplWithoutItem($companyId,$user){
        $nick = $user->nick;
        $result = LogisticTplDao::getLogisticTplWithoutItem($companyId,$nick);
        if($result->isEmpty()){
            $result [] = self::getBlankTpl();
        }
        return $result;
    }
    

    //获取默认物流和模版
    public static function getLogisticDefaultAndTpl($user){
        $userId = $user->user_id;

        $result = new \stdClass();
        $result->company='';
        $result->tpl = '';
        $companyDefault = LogisticDao::getLogisticCompanyCooperateDefault($userId);
        if(!$companyDefault){
            return $result;
        }


        $result->company=$companyDefault;
        $result->tpl = '';
        $tplId = $companyDefault->tpl_id;
        if(!$tplId){
            return $result;
        }
        //根据物流公司获取模版
        $tpl = LogisticTplDao::getLogisticCompanyDefaultTpl($tplId);
        if(!$tpl){
            return $result;
        }
        $items = LogisticTplDao::getLogisticTplItems($tplId);
        $tpl->items = $items;
        $result->tpl = $tpl;
        return $result;
    }


}