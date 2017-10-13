<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/5/31
 * Time: 16:53
 */
namespace App\Http\Controllers\Yinliu;

use App\Core\Modules\Yinliu\Service\BusinessService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BusinessController extends Controller{


    //业务推广页面
    public static function index(Request $request){
        $user = session('user');

        return view('yinliu.business');
    }


    //获取推广业务
    public static function appYinliuBusinessGet(Request $request){
        $user = session('user');
        $result = BusinessService::appYinliuBusinessGet($user);
        return json_encode($result);
    }

    //删除推广业务
    public static function appYinliuBusinessDelete(Request $request){
        //$user = session('user');
        $params = json_decode($request->input('params'));
        $ids = $params->ids;
        $result = BusinessService::appYinliuBusinessDelete($ids);
        return json_encode($result);
    }


    //新建推广业务
    public static function appYinliuBusinessAdd(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));
        $business = $params->business;
        $result = BusinessService::appYinliuBusinessAdd($user,$business);
        return json_encode($result);
    }

    //编辑推广业务
    public static function appYinliuBusinessEdit(Request $request){
        //$user = session('user');
        $params = json_decode($request->input('params'));
        $business = $params->business;
        $result = BusinessService::appYinliuBusinessEdit($business);
        return json_encode($result);
    }

}