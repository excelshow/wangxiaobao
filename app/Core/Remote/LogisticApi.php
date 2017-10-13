<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/18
 * Time: 12:57
 */

namespace  App\Core\Remote;
use App\Core\App\App;

use App\Core\Sdk\Ali\Request\AlibabaLogisticsOpDeliverySendOrderOfflineRequest;
use App\Core\Sdk\Ali\Request\AlibabaLogisticsOpDeliverySendOrderDummyRequest;
//use App\Core\Sdk\Ali\Request\;
//use App\Core\Sdk\Ali\Request\;
//use App\Core\Sdk\Ali\Request\;
//use App\Core\Sdk\Ali\Request\;
//use App\Core\Sdk\Ali\Request\;
//use App\Core\Sdk\Ali\Request\;
//use App\Core\Sdk\Ali\Request\;



class LogisticApi
{


    //1.1688大市场订单，卖家自己联系物流发货，支持合并发货，即：多个订单一次发货；支持子订单(orderEntry)级别的发货，不支持按数量发货。
    public static function AlibabaLogisticsOpDeliverySendOrderOfflineRequest($appKey,$sessionKey,$products,$extBody,$sendTime='',$remarks='',$receiver='',$extParam=''){
        $c =  App::getClient($appKey);

        $req = new AlibabaLogisticsOpDeliverySendOrderOfflineRequest();
        $req->setSendGoods($products);
        $req->setRemarks($remarks);
        $req->setGmtSend($sendTime);
        $req->setExtBody($extBody);
        $req->setExtParam($extParam);
        $req->setReceiverInfo($receiver);
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }
    public static function AlibabaLogisticsOpDeliverySendOrderDummyRequest($appKey,$sessionKey,$products,$extBody,$sendTime='',$remarks='',$receiver='',$extParam=''){
        $c =  App::getClient($appKey);

        $req = new AlibabaLogisticsOpDeliverySendOrderDummyRequest();
        $req->setSendGoods($products);
        $req->setRemarks($remarks);
        $req->setGmtSend($sendTime);
        $req->setExtBody($extBody);
        $req->setExtParam($extParam);
        $req->setReceiverInfo($receiver);
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }



}