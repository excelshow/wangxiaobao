<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/11/28
 * Time: 15:24
 */
namespace App\Core\Modules\Yinliu\Dao;


use App\Core\Common\Model\BaseProduct;
use App\Core\Common\Model\YinliuShareSite;
use Illuminate\Support\Facades\DB;

class ShareDao{


    //获取所有网站
    public static function appYinliuShareSiteGet(){
        $result = YinliuShareSite::where('status','Y')->get();
        return $result;
    }

    //下载商品
    public static function appYinliuProductDownload($user,$product){
        $userId = $user->user_id;
        $itemId = $product->item_id;
        $record = BaseProduct::where('user_id',$userId)
            ->where('item_id',$itemId)
            ->first();
        if(!$record){
            $record = new BaseProduct();
            $record->item_id = $itemId;
            $record->user_id = $userId;
            $record->user_nick = $user->nick;
        }
        if($product->category_id){
            $record->category_id = $product->category_id;
        }
        if($product->group_id){
            $record->group_id = $product->group_id;
        }
        $record->title = $product->title;
        $record->price = $product->price;
        $record->img_url = $product->img_url;
        $record->product_unit = $product->product_unit;
        $record->price_unit = $product->price_unit;
        $record->business_type = $product->business_type;
        $record->save();
        return $record;
    }



    //查询用户商品
    public static function appYinliuBaseProductGet($user,$page,$itemId=''){
        $userId = $user->user_id;
        $pageNo = $page->page;
        $limit = $page->limit;
        $start = ($pageNo-1)*$limit;
        $result = new \stdClass();
        $result->total = 0;
        $result->rows = [];

        $tSql = "select count(t2.id) total from (select b1.id from base_product b1 where b1.user_id=$userId ORDER BY b1.id ASC ) t1,base_product t2 where t1.id=t2.id";
        $rSql = "select t2.* from (select b1.id from base_product b1 where b1.user_id=$userId ORDER BY b1.id ASC limit $start,$limit) t1,base_product t2 where t1.id=t2.id";
        if($itemId){
            $tSql = "select count(t2.id) total from (select b1.id from base_product b1  where b1.user_id=$userId and b1.item_id='$itemId' ORDER BY b1.id ASC ) t1,base_product t2 where t1.id=t2.id";
            $rSql = "select t2.* from (select b1.id from base_product b1 where b1.user_id=$userId and b1.item_id='$itemId' ORDER BY b1.id ASC limit $start,$limit) t1,base_product t2 where t1.id=t2.id";
        }

        $total = DB::select($tSql)[0];

        if (!$total->total){
            return $result;
        }

        $total = $total->total;
        $rows = DB::select($rSql);

        $result->total = $total;
        $result->rows = $rows;
        return $result;
    }



}