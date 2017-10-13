<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/4/19
 * Time: 18:37
 */
namespace  App\Core\Remote;
use App\Core\App\App;

use App\Core\Sdk\Bird\Request\BirdEOrderGetRequest;

class BirdApi
{
    
    public static function BirdEOrderGetRequest($appKey,$customerName,$customerPwd,$monthCode,$sendSite,
                                                $logisticShortName,$orderId,$payType,$expType,
                                                $sender,$receiver,$products,$isNotice,$IsReturnPrintTemplate,$productsTotal='',$remark='',
                                                $logisticCode='',$callback='',$cost='',$startDate='',$endDate='',
                                                $memberId='',$otherCost='',$volume='',$weight='')
    {
        $c =  App::getBirdClient($appKey);
        $req = new BirdEOrderGetRequest();

        $req->setCallBack($callback);
        $req->setCommodity($products);
        $req->setCost($cost);

        $req->setCustomerName($customerName);//面单帐号
        $req->setCustomerPwd($customerPwd);//面单密码
        $req->setMonthCode($monthCode);
        $req->setSendSite($sendSite);

        $req->setShipperCode($logisticShortName);//快递编码

        $req->setEndDate($endDate);
        $req->setExpType($expType);// 1 标准快件

        $req->setIsNotice($isNotice);
        $req->setIsReturnPrintTemplate($IsReturnPrintTemplate);
        $req->setLogisticCode($logisticCode);
        $req->setMemberID($memberId);

        $req->setOrderCode($orderId);
        $req->setOtherCost($otherCost);
        $req->setPayType($payType); //1 寄付 2 到付

        $req->setQuantity($productsTotal);//件数  一件返回 一个面单号。。2件返回两个面单号。。
        $req->setReceiver($receiver);
        $req->setRemark($remark);
        $req->setSender($sender);


        $req->setStartDate($startDate);
        $req->setVolume($volume);
        $req->setWeight($weight);
        
        $resp = $c->execute($req);
        return $resp;
    }
}