<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/26
 * Time: 13:12
 */
namespace App\Http\Controllers\Printa;

use App\Core\Modules\Printa\Service\ProductTplService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
class ProductTplController extends Controller{


    //获取货单模版列表
    public static function getProductTpls(Request $request){
        $user = session('user');
        $page = json_decode($request->input('page'));
        $result =ProductTplService::getProductTpls($page,$user);
        return json_encode($result);
    }

    //新建货单模版
    public static function addProductTpl(Request $request){
        $user = session('user');
        $params= json_decode($request->input('params'));
        $tpl = $params->tpl;
        $items = $params->items;
        $result =ProductTplService::addProductTpl($tpl,$items,$user);
        return json_encode($result);
    }

    //更新货单模版
    public static function updateProductTpl(Request $request){
        $user = session('user');
        $params= json_decode($request->input('params'));
        $tpl = $params->tpl;
        $items = $params->items;
        $result =ProductTplService::updateProductTpl($tpl,$items,$user);
        return json_encode($result);
    }

    //删除货单模版
    public static function deleteProductTpls(Request $request){
        $user = session('user');
        $params= json_decode($request->input('params'));
        $tpls = $params->tpls;

        $result =ProductTplService::deleteProductTpls($tpls);
        return json_encode($result);
    }

    //设为默认货单模版
    public static function setDefaultProductTpl(Request $request){
        $user = session('user');
        $params= json_decode($request->input('params'));
        $tplId = $params->tpl_id;
        $tplType = $params->tpl_type;
        $tplName = $params->tpl_name;
        $result =ProductTplService::setDefaultProductTpl($tplId,$tplType,$tplName,$user);
        return json_encode($result);
    }
}