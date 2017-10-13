<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/27
 * Time: 13:58
 */
namespace App\Core\Modules\Printa\Factory;


class ProductFactory {

    //格式化商品
    public static function formatProduct($product){
        $model = new \stdClass();
        $model->item_id = @$product->productID;
        $model->category_id =  @$product->categoryID;
        $model->group_id = @$product->groupID[0];
        $url = @$product->image->images[0];
        if($url){
            $url = 'http://cbu01.alicdn.com/'.$url;
        }
        $model->img_url = $url;
        $model->title = @$product->subject;
        $model->price = @$product->price? @$product->price*100:'0';
        $model->product_unit = @$product->saleInfo->unit;
        $model->business_type = @$product->bizType;
        $model->price_unit = null;
        return $model;
    }
}