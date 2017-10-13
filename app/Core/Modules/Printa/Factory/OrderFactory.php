<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/18
 * Time: 12:03
 */
namespace App\Core\Modules\Printa\Factory;

use App\Core\Remote\MemberApi;

class OrderFactory {

    //格式化order
    public static function formatOrder($user,$order){
        $model = new \stdClass();
        $model->user_id = $user->user_id;

        $baseInfo = @$order->baseInfo;
        $nativeLogistics = @$order->nativeLogistics;
        $orderRateInfo = @$order->orderRateInfo;
        $products = $order->productItems;

        $buyerMemberId = @$baseInfo->buyerID;
        $appKey = $user->appkey;
        $sessionKey = $user->access_token;
        $resp = MemberApi::MemberGetRequest($appKey,$sessionKey,$buyerMemberId);
        $buyer = $resp->result->toReturn[0];

        $model->order_id = @$baseInfo->id;

        $productsTotal = count($products);
        $productName = @$products[0]->name;
        if($productName){
            $productName = $productName.'等'.$productsTotal.'件';
        }

        $model->product_name = $productName;
        $status = @$baseInfo->status;

        switch ($status){
            case 'success':$status = 'SUCCESS';break;
            case 'cancel':$status = 'CANCEL';break;
            case 'waitbuyerpay':$status = 'WAIT_BUYER_PAY';break;
            case 'waitsellersend':$status = 'WAIT_SELLER_SEND';break;
            case 'waitbuyerreceive':$status = 'WAIT_BUYER_RECEIVE';break;
            default: $status = $status;
        }
        $model->status = $status;

        $refundStatus = @$baseInfo->refundStatus;
        switch ($refundStatus){
            case 'refundsuccess':$refundStatus = 'REFUND_SUCCESS';break;
            case 'REFUND_CLOSED':$refundStatus = 'REFUND_CLOSED';break;
            case 'waitselleragree':$refundStatus = 'WAIT_SELLER_AGREE';break;
            case 'waitbuyermodify':$refundStatus = 'WAIT_BUYER_MODIFY';break;
            case 'waitbuyersend':$refundStatus = 'WAIT_BUYER_SEND';break;
            case 'waitsellerreceive':$refundStatus = 'WAIT_SELLER_RECEIVE';break;
            default: $refundStatus = null;
        }
        $model->refund_status = $refundStatus;
        $model->buyer_rate_status = @$orderRateInfo->buyerRateStatus;
        $model->seller_rate_status = @$orderRateInfo->sellerRateStatus;

        $model->wireless_order = null;

        $model->gmt_payment = @date_create(substr(@$baseInfo->payTime,0,14))->format('Y-m-d H:i:s');
        $model->gmt_goods_send = @date_create(substr(@$baseInfo->allDeliveredTime,0,14))->format('Y-m-d H:i:s');
        $model->gmt_confirmed = @date_create(substr(@$baseInfo->receivingTime,0,14))->format('Y-m-d H:i:s');
        $model->gmt_modified = @date_create(substr(@$baseInfo->modifyTime,0,14))->format('Y-m-d H:i:s');
        $model->gmt_create = @date_create(substr(@$baseInfo->createTime,0,14))->format('Y-m-d H:i:s');

        $model->business_type = @$baseInfo->businessType;

        $model->discount = @$baseInfo->discount?@$baseInfo->discount*100:'0';
        $model->carriage = @$baseInfo->shippingFee?@$baseInfo->shippingFee*100:'0';
        $model->refund_payment = @$baseInfo->refundPayment?@$baseInfo->refundPayment*100:'0';
        $model->sum_payment = @$baseInfo->totalAmount?@$baseInfo->totalAmount*100:'0';
        $model->sum_product_payment = null;
        $model->sum_product_payment_with_coupon = null;

        $model->close_reason = null;
        $model->buyer_message = @$baseInfo->remark;
        $model->buyer_remark = @$baseInfo->buyerMemo;
        $model->buyer_remark_icon = null;
        $model->seller_remark = @$baseInfo->sellerMemo;
        $model->seller_remark_icon = @$baseInfo->sellerRemarkIcon;
        $model->seller_remark_2 = null;

        $model->seller_nick = $user->nick;
        $model->seller_member_id = @$baseInfo->sellerID;
        $model->seller_company_name = null;
        $model->seller_name = null;
        $model->seller_phone = null;
        $model->seller_mobile = null;
        $model->seller_ali_id = null;
        $model->seller_sex = null;
        $model->seller_alipay_id = null;

        $model->buyer_nick = @$buyer->loginId;
        $model->buyer_member_id = @$baseInfo->buyerID;
        $model->buyer_company_name = @$buyer->companyName;
        $model->buyer_name = @$buyer->sellerName;
        $model->buyer_phone = null;
        $model->buyer_mobile = null;
        $model->buyer_sex = @$buyer->sex=='先生'?'F':'M';
        $model->buyer_ali_id = null;
        $model->buyer_alipay_id = null;

        $model->receiver_country = null;
        $model->receiver_province = @$nativeLogistics->province;
        $model->receiver_city = @$nativeLogistics->city;
        $model->receiver_area = @$nativeLogistics->area;
        $model->receiver_area_code = @$nativeLogistics->areaCode;
        $model->receiver_street = @$nativeLogistics->address;
        $model->receiver_address = @$nativeLogistics->province.' '.@$nativeLogistics->city.' '.@$nativeLogistics->area.' '.@$nativeLogistics->address;
        $model->receiver_post = @$nativeLogistics->zip;
        $model->receiver_name = @$nativeLogistics->contactPerson;
        $model->receiver_phone = @$nativeLogistics->telephone;
        $model->receiver_mobile = @$nativeLogistics->mobile;

        $model->logistic_num = @$nativeLogistics->logisticsItems->logisticsCode;

        return $model;
    }

    //格式化订单商品
    public static function formatProduct($user,$product,$order){
        $model = new \stdClass();
        $model->user_id = $user->user_id;

        $model->order_id = @$order->order_id;
        $model->entry_id = @$product->subItemID;
        $model->seller_nick = @$order->seller_nick;
        $model->buyer_nick = @$order->buyer_nick;
        $model->item_id = @$product->productID;

        $model->category_id = null;
        $model->sku_id = @$product->skuID;
        $model->spec_id = @$product->specId;
        $model->product_cargo_number = @$product->productCargoNumber;
        $model->cargo_number = @$product->cargoNumber;

        $model->product_name = @$product->name;
        $model->img_url = @$product->productImgUrl[0];
        $model->activity_id = null;
        $model->price = @$product->price?@$product->price*100:'0';
        $model->price_after_promotion = null;

        $model->amount = null;
        $model->amount_with_discount_and_promotion = @$product->itemAmount?@$product->itemAmount*100:'0';
        $model->discount = null;
        $model->discount_price = null;//折扣价
        $model->entry_discount =  @$product->entryDiscount?@$product->entryDiscount:'0';

        $model->quantity = @$product->quantity;
        $model->weight = @$product->weight;
        $model->weight_unit = @$product->weightUnit;
        $items = @$product->skuInfos;
        $specs = '';
        if($items){
            foreach ($items as $k=>$item){
                $specs = @$specs.$item->name.':'.@$item->value.';';
            }
        }

        $model->spec_items = $specs;
        $model->product_unit = @$product->unit;
        $model->price_unit = null;
        $model->gmt_create = @$order->gmt_create;
        $model->gmt_modified = @$order->gmt_modified;

        return $model;
    }

}