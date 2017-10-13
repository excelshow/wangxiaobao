<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/6/1
 * Time: 13:02
 */
namespace App\Core\Modules\Printa\Service;
use App\Core\Modules\Printa\Factory\ProductFactory;
use App\Core\App\Ali\ProductApi;
use App\Core\Modules\Printa\Dao\ProductDao;
use Illuminate\Support\Facades\Cache;

class ProductService {


    //设置商品简称
    public static function setProductShort($product,$user){
        $result = ProductDao::setProductShort($product,$user);
        return $result;
    }

    //删除商品
    public static function deleteProducts($ids){
        foreach ($ids as $i=>$id){
            ProductDao::deleteProduct($id);
        }
        return true;
    }
    //获取商品列表
    public static function getProductsList($title,$page,$user){
        $userId = $user->user_id;
        $pageNum =  $page->page;
        $pageSize = $page->limit;
        $result = ProductDao::getProductsList($title,$pageSize,$pageNum,$userId);
        return $result;
    }


    //获取商品下载进度
    public static function getDownloadProcess(){
        $result = Cache::get('product_download_process');
        return $result;
    }

    //下载商品
    public static function download($user){
        ini_set('max_execution_time', '0');
        $sessionKey = $user->access_token;
        $appKey = $user->appkey;
        $pageNo = 1;
        $pageSize = 30;
        $resp = ProductApi::AlibabaProductGetListRequest($appKey,$sessionKey,'1688',$pageNo,$pageSize);

        $total = $resp->count;

        $pages = ceil($total/$pageSize);
        $hasDownload = 0;
        $record = new \stdClass();
        $record->total = $total;
        $record->download = 0;
        Cache::forget('product_download_process');
        Cache::put('product_download_process',$record,10);

        for($i=0;$i<$pages;$i++){
            $pageNo = $i+1;
            $resp = ProductApi::AlibabaProductGetListRequest($appKey,$sessionKey,'1688',$pageNo,$pageSize);
            $products = @$resp->productInfos;
            if(empty($products)){
                continue;
            }
            foreach ($products as $p=>$product){
                $model = ProductFactory::formatProduct($product);
                ProductDao::setProduct($model,$user);
                $hasDownload = $hasDownload + 1;
                $record->download = $hasDownload;
                Cache::put('product_download_process',$record,10);
            }
        }
        return $total;
    }
}