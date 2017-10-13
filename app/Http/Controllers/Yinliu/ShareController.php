<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/5/31
 * Time: 16:53
 */
namespace App\Http\Controllers\Yinliu;

use App\Core\Modules\Yinliu\Service\ShareService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ShareController extends Controller{


    //获取自动打印设置
    public static function index(Request $request){

        return view('yinliu.share');

    }

    //获取全部商品
    public static function appYinliuBaseProductGet(Request $request){
        $user = session('user');
        $page = json_decode($request->input('page'));
        $params = json_decode($request->input('params'));
        $itemId = $params->item_id;
        $result = ShareService::appYinliuBaseProductGet($user,$page,$itemId);
        return json_encode($result);
    }

    //下载商品
    public static function appYinliuProductDownload(Request $request){
        $user = session('user');
        $result = ShareService::appYinliuProductDownload($user);
        return json_encode($result);
    }

    //下载商品进度
    public static function appYinliuProductDownloadProcessGet(Request $request){
        $user = session('user');

        $result = ShareService::appYinliuProductDownloadProcessGet($user);
        return json_encode($result);
    }

    //获取所有分享网站
    public static function appYinliuShareSiteGet(){

        $result = ShareService::appYinliuShareSiteGet();
        return json_encode($result);
    }


}