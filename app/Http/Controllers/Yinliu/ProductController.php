<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/5/31
 * Time: 16:53
 */
namespace App\Http\Controllers\Yinliu;

use App\Core\Modules\Yinliu\Service\ProductService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProductController extends Controller{


    //获取自动打印设置
    public static function index(Request $request){
        $user = session('user');

        return view('yinliu.product');
    }


    //获取全部商品
    public static function appYinliuBaseProductGet(Request $request){
        $user = session('user');
        $page = json_decode($request->input('page'));
        $params = json_decode($request->input('params'));
        $itemId = $params->item_id;
        $result = ProductService::appYinliuBaseProductGet($user,$page,$itemId);
        return json_encode($result);
    }



    //获取推广产品
    public static function appYinliuProductGet(Request $request){
        $user = session('user');
        $page = json_decode($request->input('page'));
        $params = json_decode($request->input('params'));
        $businessId = $params->business_id;
        $result = ProductService::appYinliuProductGet($user,$page,$businessId);
        return json_encode($result);
    }

    //删除推广产品
    public static function appYinliuProductDelete(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));
        $ids = $params->ids;
        $result = ProductService::appYinliuProductDelete($ids);
        return json_encode($result);
    }

    //添加推广产品
    public static function appYinliuProductAdd(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));
        $business = $params->business;
        $products = $params->products;
        $result = ProductService::appYinliuProductAdd($user,$business,$products);
        return json_encode($result);
    }

    //下载商品
    public static function appYinliuProductDownload(Request $request){
        $user = session('user');
        $result = ProductService::appYinliuProductDownload($user);
        return json_encode($result);
    }

    //下载商品进度
    public static function appYinliuProductDownloadProcessGet(Request $request){
        $user = session('user');

        $result = ProductService::appYinliuProductDownloadProcessGet($user);
        return json_encode($result);
    }




}