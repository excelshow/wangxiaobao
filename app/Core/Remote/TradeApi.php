<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/18
 * Time: 12:57
 */

namespace  App\Core\Remote;
use App\Core\App\App;

use App\Core\Sdk\Ali\Request\AlibabaTradeGetSellerOrderListRequest;
use App\Core\Sdk\Ali\Request\AlibabaTradeGetBuyerOrderListRequest;
use App\Core\Sdk\Ali\Request\AlibabaTradeGetSellerViewRequest;
use App\Core\Sdk\Ali\Request\AlibabaTradeGetBuyerViewRequest;

//use App\Core\Sdk\Ali\Request\;
//use App\Core\Sdk\Ali\Request\;
//use App\Core\Sdk\Ali\Request\;
//use App\Core\Sdk\Ali\Request\;
//use App\Core\Sdk\Ali\Request\;
//use App\Core\Sdk\Ali\Request\;
//use App\Core\Sdk\Ali\Request\;
//use App\Core\Sdk\Ali\Request\;
//use App\Core\Sdk\Ali\Request\;



class TradeApi
{
    //1.订单列表查看卖家视角
    public static function AlibabaTradeGetSellerOrderListRequest($appKey,$sessionKey,$createStart='',$createEnd='',$modifyStart='',$modifyEnd='',
                                                                 $pageNum='',$pageSize='',$status='',$refundStatus='',$buyerRateStatus='',$buyerMemberId='',$tradeType='',$bizType='',$isHis='false')
    {
        $c =  App::getClient($appKey);
        $req = new AlibabaTradeGetSellerOrderListRequest();
        $req->setCreateStartTime($createStart);
        $req->setCreateEndTime($createEnd);
        $req->setIsHis($isHis);
        $req->setModifyStartTime($modifyStart);
        $req->setCreateEndTime($modifyEnd);
        $req->setOrderStatus($status);
        $req->setPage($pageNum);
        $req->setPageSize($pageSize);
        $req->setRefundStatus($refundStatus);
        $req->setBuyerRateStatus($buyerRateStatus);
        $req->setBuyerMemberId($buyerMemberId);
        $req->setTradeType($tradeType);
        $req->setBizTypes($bizType);
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }

    //2.订单列表查看买家视角
    public static function AlibabaTradeGetBuyerOrderListRequest($appKey,$sessionKey,$createStart='',$createEnd='',$modifyStart='',$modifyEnd='',
                                                                $pageNum='',$pageSize='',$status='',$refundStatus='',$sellerRateStatus='',$sellerMemberId='',$tradeType='',$bizType='',$isHis='false')
    {
        $c =  App::getClient($appKey);
        $req = new AlibabaTradeGetBuyerOrderListRequest();
        $req->setCreateStartTime($createStart);
        $req->setCreateEndTime($createEnd);
        $req->setIsHis($isHis);
        $req->setModifyStartTime($modifyStart);
        $req->setCreateEndTime($modifyEnd);
        $req->setOrderStatus($status);
        $req->setPage($pageNum);
        $req->setPageSize($pageSize);
        $req->setRefundStatus($refundStatus);
        $req->setSellerRateStatus($sellerRateStatus);
        $req->setSellerMemberId($sellerMemberId);
        $req->setTradeType($tradeType);
        $req->setBizTypes($bizType);
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }

    //3.获取订单详情卖家视角
    public static function AlibabaTradeGetSellerViewRequest($appKey,$sessionKey,$oderId,$website='1688'){
        $c =  App::getClient($appKey);
        $req = new AlibabaTradeGetSellerViewRequest();
        $req->setOrderId($oderId);
        $req->setWebSite($website);
        $resp = $c->execute($req,$sessionKey);
        return $resp;

    }

    //4.获取订单详情买家视角
    public static function AlibabaTradeGetBuyerViewRequest($appKey,$sessionKey,$oderId,$website='1688'){
        $c =  App::getClient($appKey);

        $req = new AlibabaTradeGetBuyerViewRequest();
        $req->setOrderId($oderId);
        $req->setWebSite($website);
        $resp = $c->execute($req,$sessionKey);
        return $resp;

    }


}