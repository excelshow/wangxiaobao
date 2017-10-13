<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/5/31
 * Time: 16:53
 */
namespace App\Http\Controllers\Yinliu;

use App\Core\Modules\Yinliu\Service\CompanyService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CompanyController extends Controller{


    //获取自动打印设置
    public static function index(){
       // $user = session('user');

        return view('yinliu.company');
    }

    //获取企业推广信息
    public static function appYinliuCompanyGet(){
        $user = session('user');
        $result =  CompanyService::appYinliuCompanyGet($user);
        return json_encode($result);
    }

    //设置企业推广信息
    public static function appYinliuCompanySet(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));

        $company = $params->company;
        $result =  CompanyService::appYinliuCompanySet($company,$user);
        return json_encode($result);
    }

    //获取域名是否推广
    public static function appYinliuCompanyDomainGet(Request $request){
        $params = json_decode($request->input('params'));

        $domain = $params->domain;
        $result =  CompanyService::appYinliuCompanyDomainGet($domain);
        return json_encode($result);
    }


}