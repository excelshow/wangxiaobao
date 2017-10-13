<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/26
 * Time: 13:12
 */
namespace App\Http\Controllers\Printa;

use App\Core\Modules\Printa\Service\LogisticTplService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
class LogisticTplController extends Controller{


    //获取快递模版列表
    public static function getLogisticTpls(Request $request){
        $user = session('user');
        $page = json_decode($request->input('page'));
        $params = json_decode($request->input('params'));
        $tplName = $params->tpl_name;

        $result = LogisticTplService::getLogisticTpls($tplName,$page,$user);
        return json_encode($result);
    }

    //设为默认运单模版
    public static function setDefaultLogisticTpl(Request $request){
        $user = session('user');
        $params= json_decode($request->input('params'));
        $tpl = $params->tpl;
        $result = LogisticTplService::setDefaultLogisticTpl($tpl,$user);
        return json_encode($result);
    }

    //修改物流模版
    public static function updateLogisticTpl(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));
        $tpl = $params->tpl;
        $items = $params->items;
        $result = LogisticTplService::updateLogisticTpl($tpl,$items,$user);
        return json_encode($result);
    }

    //新建物流模版
    public static function addLogisticTpl(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));
        $tpl = $params->tpl;
        $items = $params->items;
        $result = LogisticTplService::addLogisticTpl($tpl,$items,$user);
        return json_encode($result);
    }

    //删除物流模版
    public static function deleteLogisticTpls(Request $request){
        $user = session('user');
        $params= json_decode($request->input('params'));
        $tpls = $params->tpls;
        $result = LogisticTplService::deleteLogisticTpls($tpls);
        return json_encode($result);
    }
}