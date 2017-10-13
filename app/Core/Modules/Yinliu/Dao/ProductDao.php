<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/11/28
 * Time: 15:24
 */
namespace App\Core\Modules\Yinliu\Dao;


use App\Core\Common\Model\YinliuProduct;
use App\Core\Common\Model\BaseProduct;
use Illuminate\Support\Facades\DB;

class ProductDao{


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

    //添加推广产品
    public static function appYinliuProductAdd($user,$business,$product){
        $userId = $user->user_id;
        $businessId = $business->id;
        $itemId = $product->item_id;

        $record = YinliuProduct::where('user_id',$userId)
            ->where('business_id',$businessId)
            ->where('item_id',$itemId)->first();
        if(!$record){
            $record = new YinliuProduct();
            $record->user_id = $userId;
            $record->nick = $user->nick;
            $record->business_id = $businessId;
            $record->item_id = $product->item_id;
        }
        $record->business = $business->business;
        $record->img_url = $product->img_url;
        $record->title = $product->title;
        $result = $record->save();
        return $result;
    }

    //删除已产品
    public static function appYinliuProductDelete($id){
        $result = YinliuProduct::where('id',$id)->delete();
        return $result;
    }

    //获取已推广产品
    public static function appYinliuProductGet($user,$page,$businessId=''){
        $userId = $user->user_id;
        $pageNo = $page->page;
        $limit = $page->limit;
        $start = ($pageNo-1)*$limit;
        $result = new \stdClass();
        $result->total = 0;
        $result->rows = [];

        $tSql = "select count(t2.id) total from (select id from yinliu_product where user_id=$userId ) t1,yinliu_product t2 where t1.id=t2.id";
        $rSql = "select t2.* from (select id from yinliu_product y1 where y1.user_id=$userId ORDER BY y1.id DESC  limit $start,$limit  ) t1,yinliu_product t2 where t1.id=t2.id";
        if($businessId){
            $tSql = "select count(t2.id) total from (select id from yinliu_product where user_id=$userId and business_id = $businessId ) t1,yinliu_product t2 where t1.id=t2.id";
            $rSql = "select t2.* from (select id from yinliu_product y1 where y1.user_id=$userId and business_id = $businessId ORDER BY y1.id DESC limit $start,$limit ) t1,yinliu_product t2 where t1.id=t2.id";
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


    //查询用户商品
    public static function appYinliuBaseProductGet($user,$page,$itemId=''){
        $userId = $user->user_id;
        $pageNo = $page->page;
        $limit = $page->limit;
        $start = ($pageNo-1)*$limit;
        $result = new \stdClass();
        $result->total = 0;
        $result->rows = [];

        $tSql = "select count(t2.id) total from (select b1.id,y1.item_id has_promoted from base_product b1 LEFT JOIN yinliu_product y1 ON b1.item_id=y1.item_id where b1.user_id=$userId ORDER BY b1.id ASC ) t1,base_product t2 where t1.id=t2.id";
        $rSql = "select t2.*,t1.has_promoted from (select b1.id,y1.item_id has_promoted from base_product b1 LEFT JOIN yinliu_product y1 ON b1.item_id=y1.item_id where b1.user_id=$userId ORDER BY b1.id ASC limit $start,$limit) t1,base_product t2 where t1.id=t2.id";
        if($itemId){
            $tSql = "select count(t2.id) total from (select b1.id,y1.item_id has_promoted from base_product b1 LEFT JOIN yinliu_product y1 ON b1.item_id=y1.item_id where b1.user_id=$userId and b1.item_id='$itemId' ORDER BY b1.id ASC ) t1,base_product t2 where t1.id=t2.id";
            $rSql = "select t2.*,t1.has_promoted from (select b1.id,y1.item_id has_promoted from base_product b1 LEFT JOIN yinliu_product y1 ON b1.item_id=y1.item_id where b1.user_id=$userId and b1.item_id='$itemId' ORDER BY b1.id ASC limit $start,$limit) t1,base_product t2 where t1.id=t2.id";
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