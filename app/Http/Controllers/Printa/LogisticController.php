<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/26
 * Time: 13:12
 */
namespace App\Http\Controllers\Printa;

use App\Core\Modules\Printa\Service\LogisticService;
use App\Http\Controllers\Controller;
use App\Core\Modules\Printa\Service\LogisticTplService;
use Illuminate\Http\Request;
class LogisticController extends Controller{


    //获取合作物流
    public static function getLogisticCompanyCooperate(Request $request){
        $user = session('user');
        $page = json_decode($request->input('page'));
        $result = LogisticService::getLogisticCompanyCooperate($page,$user);
        return json_encode($result);
    }

    //设为默认合作物流
    public static function setDefaultCooperateLogisticCompany(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));
        $id = $params->id;
        $result = LogisticService::setDefaultLogisticCompany($id,$user);
        return json_encode($result);
    }
    //取消合作
    public static function cancelCooperateLogisticCompany(Request $request){
        //$user = session('user');
        $params = json_decode($request->input('params'));
        $ids = $params->ids;
        $result = LogisticService::cancelCooperateLogisticCompany($ids);
        return json_encode($result);
    }
    //查询物流公司
    public static function selectLogisticCompany(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));
        $name = $params->name;
        $result = LogisticService::selectLogisticCompany($name);
        return json_encode($result);
    }

    //添加合作物流
    public static function setLogisticCompanyCooperate(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));
        $company = $params->company;
        $tpl = $params->tpl;
        $result = LogisticService::setCooperateLogisticCompany($company,$tpl,$user);
        return json_encode($result);
    }

    //根据物流公司id 获取物流模版列表供关联
    public static function getLogisticTplsByCompanyId(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));
        $companyId = $params->company_id;
        $result = LogisticTplService::getLogisticTplsByCompanyId($companyId,$user);
        return json_encode($result);
    }
}