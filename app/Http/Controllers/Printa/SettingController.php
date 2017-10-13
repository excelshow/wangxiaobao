<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/5/31
 * Time: 16:53
 */
namespace App\Http\Controllers\Printa;

use App\Core\Modules\Printa\Service\PrinterService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SettingController extends Controller{
    //页面
    public static function index(){

        return view('print.setting');
    }



    //根据物流公司id获取物流模版
    public static function getLogisticTplWithoutItem(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));
        $companyId = $params->company_id;
        $result = LogisticTplService::getLogisticTplWithoutItem($companyId,$user);
        return json_encode($result);
    }
    
    //获取常用物流公司
    public static function getLogisticCompanyOften(){
        $result = LogisticCompanyService::getLogisticCompanyOften();
        return json_encode($result);
    }



    //根据物流公司id 获取系统物流模版和用户物流模版
    public static function getLogisticTplByCompanyId(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));
        $companyId = $params->company_id;
        $result = LogisticTplService::getLogisticTplByCompanyId($companyId,$user);
        return json_encode($result);

    }



}