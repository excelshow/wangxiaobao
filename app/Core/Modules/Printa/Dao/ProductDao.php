<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/6/1
 * Time: 12:50
 */
namespace App\Core\Modules\Printa\Dao;
use App\Core\Common\Model\BaseProduct;

use App\Core\Common\Model\PrintProduct;


class ProductDao {

    //设置商品简称
    public static function setProductShort($product,$user){
        $userId = $user->user_id;

        $itemId = $product->item_id;
        $record = PrintProduct::where('user_id',$userId)
            ->where('item_id',$itemId)
            ->first();
        if(!$record){
            $record = new  PrintProduct();
            $record->user_id = $userId;
            $record->user_nick = $user->nick;
            $record->item_id = $product->item_id;
            $record->title = @$product->title;
        }
        $record->title_short = $product->title_short;
        $record->save();
        return $record;
    }

    //删除商品
    public static function deleteProduct($id){
        $result = BaseProduct::where('id',$id)->delete();
        return $result;
    }

    //下载商品
    public static function setProduct($product,$user){
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

    //获取简称列表
    public static function getProductsList($title,$pageSize,$pageNum,$userId){
        $skip = $pageSize*($pageNum-1);

        $result = new \stdClass();
        $result->total = 0;
        $result->rows = [];
        $query =  BaseProduct::where('base_product.user_id',$userId);
        $query = $query->leftJoin('print_product', function ($join) {
            $join->on('base_product.user_id', '=', 'print_product.user_id')
            ->on('base_product.item_id', '=', 'print_product.item_id');
        });

        if($title){
            $query =  $query
                ->where(function ($query) use ($title){
                    $query->orWhere('base_product.item_id',$title)
                        ->orWhere('base_product.title','like','%'.$title.'%')
                        ->orWhere('print_product.title_short','like','%'.$title.'%');
                });
        };

        $query = $query
            ->select(
                'base_product.*',
                'print_product.title_short'
            );
        $total = $query->count();
        $rows = $query
            ->orderBy('id','asc')
            ->skip($skip)
            ->take($pageSize)
            ->get();
        $result->total = $total;
        $result->rows = $rows;
        return $result;
    }
}