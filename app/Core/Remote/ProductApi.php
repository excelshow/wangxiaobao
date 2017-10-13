<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/2/22
 * Time: 11:08
 */
namespace  App\Core\Remote;
use App\Core\App\App;
use App\Core\Sdk\Ali\Request\AlibabaProductGetListRequest;
use App\Core\Sdk\Ali\Request\AlibabaProductGetRequest;

//use App\Core\Sdk\Ali\Request\;
//use App\Core\Sdk\Ali\Request\;
//use App\Core\Sdk\Ali\Request\;
//use App\Core\Sdk\Ali\Request\;
//use App\Core\Sdk\Ali\Request\;
//use App\Core\Sdk\Ali\Request\;
//use App\Core\Sdk\Ali\Request\;
//use App\Core\Sdk\Ali\Request\;
//use App\Core\Sdk\Ali\Request\;
//use App\Core\Sdk\Ali\Request\;


class ProductApi
{

    //1.获取单个商品信息
    public static function AlibabaProductGetRequest($appKey,$sessionKey,$productId,$website){
        $c =  App::getClient($appKey);
        $req = new AlibabaProductGetRequest();
        $req->setProductID($productId);
        $req->setWebSite($website);
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }

    //2.获取出售中商品
    public static function AlibabaProductGetListRequest($appKey,$sessionKey,$website,$pageNo,$pageSize,$categoryId=null,$timeStamp=null,$endTimeStamp=null){
        $c =  App::getClient($appKey);
        $req = new AlibabaProductGetListRequest();
        $req->setCategoryID($categoryId);
        $req->setPageNo($pageNo);
        $req->setPageSize($pageSize);//30
        $req->setTimeStamp($timeStamp);
        $req->setWebSite($website);//（alibaba）还是1688网站（1688
        $req->setEndTimeStamp($endTimeStamp);
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }


}