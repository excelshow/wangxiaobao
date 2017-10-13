<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/26
 * Time: 13:12
 */
namespace App\Http\Controllers\Printa;
use App\Core\Modules\Printa\Service\ElectricTplService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
class ElectricTplController extends Controller{


    //删除账户
    public static function deleteElectricAccounts(Request $request){
        $params= json_decode($request->input('params'));
        $ids = $params->ids;
        $result = ElectricTplService::deleteAccounts($ids);
        return json_encode($result);
    }

    //设置面单账户
    public static function setElectricAccount(Request $request){
        $user = session('user');
        $params= json_decode($request->input('params'));
        $account = $params->account;
        $result = ElectricTplService::setAccount($user,$account);
        return json_encode($result);

    }

    //获取支持面单的公司
    public static function getElectricCompanies(){
        $result = ElectricTplService::getElectricCompanies();
        return json_encode($result);
    }

    //面单账户列表
    public static function getAccountsList(Request $request){
        $user = session('user');
        $page = json_decode($request->input('page'));

        $result = ElectricTplService::getAccountsList($user,$page);
        return json_encode($result);
    }




    //获取面单设置
    public static function getElectricTplSetting(){
        $user = session('user');
        $result = ElectricTplService::getElectricTplSetting($user);
        return json_encode($result);
    }

    //面单设置
    public static function saveElectricTplSetting(Request $request){
        $user = session('user');
        $params= json_decode($request->input('params'));
        $electricCustomerName = $params->elec_name;
        $electricCustomerPwd = $params->elec_pwd;
        $result = ElectricTplService::saveElectricTplSetting($electricCustomerName,$electricCustomerPwd,$user);
        return json_encode($result);
    }

}