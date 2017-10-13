<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/26
 * Time: 12:46
 */
namespace App\Core\Modules\Printa\Service;
use App\Core\Modules\Printa\Dao\ProductTplDao;

class ProductTplService{


    //获取货单模版列表
    public static function getProductTpls($page,$user){
        $pageSize = $page->limit;
        $pageNum = $page->page;
        $userId = $user->user_id;
        $result = ProductTplDao::getProductTpls($pageSize,$pageNum,$userId);
        if($result->total>0){
            return $result;
        }

        $result->total=0;
        //$tpl = self::getBlankGoodsListTpl();
        $result->rows = [];
        return $result;
    }

    //新建货单模版
    public static function addProductTpl($tpl,$items,$user){
        $result = ProductTplDao::addProductTpl($tpl,$items,$user);
        return $result;
    }

    //更新货单模版
    public static function updateProductTpl($tpl,$items,$user){
        $result = ProductTplDao::updateProductTpl($tpl,$items,$user);
        return $result;
    }

    //删除货单模版
    public static function deleteProductTpls($tpls){

        foreach ($tpls as $t=>$tplId){
            ProductTplDao::deleteProductTpl($tplId);
        }
        return $tpls;
    }

    //设为默认
    public static function setDefaultProductTpl($tplId,$tplType,$tplName,$user){
        $userId = $user->user_id;
        $nick =  $user->nick;
        $result = ProductTplDao::setDefaultProductTpl($tplId,$tplType,$tplName,$nick,$userId);
        return $result;
    }

    //获取默认货单模版
    public static function getDefaultProductTpl($user){
        $userId = $user->user_id;
        $result = ProductTplDao::getDefaultProductTpl($userId);
        return $result;
    }

}