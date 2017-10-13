<?php
/**
 * Created by PhpStorm.
 * User: pc
 * Date: 2015/9/9
 * Time: 18:37
 */

namespace App\Http\Controllers\Printa;
use App\Core\Modules\Printa\Service\ProductService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProductController extends Controller{

    //获取商品列表
    public static function getProductsList(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));
        $page = json_decode($request->input('page'));
        $title = $params->title;
        $result = ProductService::getProductsList($title,$page,$user);
        return json_encode($result);
    }

    //删除商品
    public static function deleteProducts(Request $request){
        $params = json_decode($request->input('params'));
        $ids = $params->ids;
        $result = ProductService::deleteProducts($ids);
        return json_encode($result);

    }

    //设置商品简称
    public static function setProductShort(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));
        $product = $params;
        $result = ProductService::setProductShort($product,$user);
        return json_encode($result);
    }


    //获取商品下载进度
    public static function getDownloadProcess(){
        $result= ProductService::getDownloadProcess();
        return json_encode($result);
    }

    //下载商品
    public static function download(Request $request){
        $user = session('user');
        $result =  ProductService::download($user);
        return json_encode($result);
    }

}
?>