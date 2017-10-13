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
use App\Core\Sdk\Ali\Request\MemberGetRequest;

//use App\Core\Sdk\Ali\Request\;
//use App\Core\Sdk\Ali\Request\;
//use App\Core\Sdk\Ali\Request\;
//use App\Core\Sdk\Ali\Request\;
//use App\Core\Sdk\Ali\Request\;
//use App\Core\Sdk\Ali\Request\;
//use App\Core\Sdk\Ali\Request\;
//use App\Core\Sdk\Ali\Request\;
//use App\Core\Sdk\Ali\Request\;



class MemberApi
{

    //1.获取member 信息
    public static function MemberGetRequest($appKey,$sessionKey,$memberId,$returnFields = ''){
        $c =  App::getClient($appKey);
        $req = new MemberGetRequest();
        $req->setMemberId($memberId);
        $req->setReturnFields($returnFields);
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }



}