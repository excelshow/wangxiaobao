<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/18
 * Time: 12:57
 */

namespace  App\Core\Remote;
use App\Core\App\App;

use App\Core\Sdk\Ali\Request\AlibabaAppPieceOrderGetRequest;
use App\Core\Sdk\Ali\Request\AppExpireGetRequest;
use App\Core\Sdk\Ali\Request\AppOrderGetRequest;


class ServiceApi
{

    //1.订购的订单列表
    public static function AlibabaAppPieceOrderGetRequest($appKey,$gmtCreate,$pageNo='1',$pageSize='50',$aliId='',$bizStatusList=''){
        $c =  App::getClient($appKey);
        $req = new AlibabaAppPieceOrderGetRequest();
        $req->setGmtCreate($gmtCreate);
        $req->setAliId($aliId);
        $req->setBizStatusList($bizStatusList);
        $req->setStartIndex($pageNo);
        $req->setPageSize($pageSize);
        $resp = $c->execute($req);
        return $resp;

    }

    //2.获取某个应用最近一个月的到期订单信息
    public static function AppExpireGetRequest($appKey,$gmtServiceEnd,$pageNo='1',$pageSize='50',$memberId='',$bizStatusList=''){
        $c =  App::getClient($appKey);

        $req = new AppExpireGetRequest();
        $req->setGmtServiceEnd($gmtServiceEnd);
        $req->setMemberId($memberId);
        $req->setBizStatusList($bizStatusList);
        $req->setStartIndex($pageNo);
        $req->setPageSize($pageSize);
        $resp = $c->execute($req);
        return $resp;

    }

    //3.获取调用该api的app在服务市场被订购的订单列表
    public static function AppOrderGetRequest($appKey,$gmtCreate,$pageNo='1',$pageSize='50',$memberId='',$bizStatusList=''){
        $c =  App::getClient($appKey);

        $req = new AppOrderGetRequest();
        $req->setGmtCreate($gmtCreate);
        $req->setMemberId($memberId);
        $req->setBizStatusList($bizStatusList);
        $req->setStartIndex($pageNo);
        $req->setPageSize($pageSize);
        $resp = $c->execute($req);
        return $resp;

    }


}