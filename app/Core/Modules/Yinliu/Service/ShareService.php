<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/26
 * Time: 12:46
 */
namespace App\Core\Modules\Yinliu\Service;

use App\Core\Modules\Yinliu\Dao\ShareDao;
use App\Core\App\Ali\ProductApi;
use Illuminate\Support\Facades\Cache;
use App\Core\Modules\Yinliu\Factory\ProductFactory;
class ShareService
{

    //获取所有分享网站
    public static function appYinliuShareSiteGet(){
        $result = ShareDao::appYinliuShareSiteGet();
        return $result;
    }

    //获取商品下载进度
    public static function appYinliuProductDownloadProcessGet($user){
        $result = Cache::get('product_download_process');
        return $result;
    }


    //下载商品

    public static function appYinliuProductDownload($user){
        ini_set('max_execution_time', '0');
        $sessionKey = $user->access_token;
        $appKey = $user->appkey;
        $pageNo = 1;
        $pageSize = 50;
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
                ShareDao::appYinliuProductDownload($user,$model);
                $hasDownload = $hasDownload + 1;
                $record->download = $hasDownload;
                Cache::put('product_download_process',$record,10);
            }
        }
        return $total;
    }


    //获取全部商品
    public static function appYinliuBaseProductGet($user, $page, $itemId = '')
    {
        $result = ShareDao::appYinliuBaseProductGet($user, $page, $itemId);
        return $result;

    }
}