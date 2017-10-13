<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/2/22
 * Time: 11:08
 */
namespace  App\Core\Remote;
use App\Core\App\App;

use App\Core\Sdk\Ali\Request\AlibabaCnp4pAccountBalanceRequest;
use App\Core\Sdk\Ali\Request\AlibabaCnp4pAccountRealtimeCostRequest;
use App\Core\Sdk\Ali\Request\AlibabaCnp4pAdgroupAddRequest;
use App\Core\Sdk\Ali\Request\AlibabaCnp4pAdgroupBycampaignidsListRequest;
use App\Core\Sdk\Ali\Request\AlibabaCnp4pAdgroupDeleteRequest;
use App\Core\Sdk\Ali\Request\AlibabaCnp4pAdgroupListRequest;
use App\Core\Sdk\Ali\Request\AlibabaCnp4pAdgroupUpdateRequest;
use App\Core\Sdk\Ali\Request\AlibabaCnp4pCampaignAddRequest;
use App\Core\Sdk\Ali\Request\AlibabaCnp4pCampaignAreaListRequest;
use App\Core\Sdk\Ali\Request\AlibabaCnp4pCampaignAreaUpdateRequest;
use App\Core\Sdk\Ali\Request\AlibabaCnp4pCampaignBudgetUpdateRequest;
use App\Core\Sdk\Ali\Request\AlibabaCnp4pCampaignListRequest;
use App\Core\Sdk\Ali\Request\AlibabaCnp4pCampaignScheduleUpdateRequest;
use App\Core\Sdk\Ali\Request\AlibabaCnp4pCampaignUpdateRequest;
use App\Core\Sdk\Ali\Request\AlibabaCnp4pKeywordAddRequest;
use App\Core\Sdk\Ali\Request\AlibabaCnp4pKeywordByAdgroupidListRequest;
use App\Core\Sdk\Ali\Request\AlibabaCnp4pKeywordDeleteRequest;
use App\Core\Sdk\Ali\Request\AlibabaCnp4pKeywordListRequest;
use App\Core\Sdk\Ali\Request\AlibabaCnp4pKeywordPriceUpdateRequest;
use App\Core\Sdk\Ali\Request\AlibabaCnp4pKeywordQualityListRequest;
use App\Core\Sdk\Ali\Request\AlibabaCnp4pKeywordRankGetRequest;
use App\Core\Sdk\Ali\Request\AlibabaCnp4pKeywordRecommendListRequest;
use App\Core\Sdk\Ali\Request\AlibabaCnp4pReportAdGroupEffectRequest;
use App\Core\Sdk\Ali\Request\AlibabaCnp4pReportCampaignEffectRequest;
use App\Core\Sdk\Ali\Request\AlibabaCnp4pReportCustEffectRequest;
use App\Core\Sdk\Ali\Request\AlibabaCnp4pReportKeywordEffectRequest;
use App\Core\Sdk\Ali\Request\AlibabaCnp4pUnionOfferbyqueryListRequest;

class WxbApi
{
    //1.获取网销宝客户账户余额
    public static function AlibabaCnp4pAccountBalanceRequest($appKey,$sessionKey){

        $c =  App::getClient($appKey);
        $req = new AlibabaCnp4pAccountBalanceRequest();
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }

    //2.获取网销宝账户实时消耗，单位：元
    public static function AlibabaCnp4pAccountRealtimeCostRequest($appKey,$sessionKey){
        $c =  App::getClient($appKey);
        $req = new AlibabaCnp4pAccountRealtimeCostRequest();
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }

    //3.新增网销宝推广单元
    public static function AlibabaCnp4pAdgroupAddRequest($appKey,$sessionKey,$campaignId,$onlineStatus,$bidPrice,$offerId){
        $c =  App::getClient($appKey);
        $req = new AlibabaCnp4pAdgroupAddRequest();
        $req->setCampaignId($campaignId);
        $req->setOnlineState($onlineStatus);//推广单元上下线状态：0下线；1上线
        $req->setBidPrice($bidPrice);//推广单元默认出价，单位元
        $req->setOfferId($offerId);
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }

    //4.根据推广计划获取网销宝推广单元列表
    public static function AlibabaCnp4pAdgroupBycampaignidsListRequest ($appKey,$sessionKey,$campaignId,$pageNo=1,$pageSize=20){
        $c =  App::getClient($appKey);
        $req = new AlibabaCnp4pAdgroupBycampaignidsListRequest();
        $req->setCampaignId($campaignId);
        $req->setPageNo($pageNo);
        $req->setPageSize($pageSize);//分页页条数，最大200
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }

    //5.删除网销宝推广单元
    public static function AlibabaCnp4pAdgroupDeleteRequest($appKey,$sessionKey,$adgrouId){
        $c =  App::getClient($appKey);
        $req = new AlibabaCnp4pAdgroupDeleteRequest();
        $req->setAdGroupId($adgrouId);
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }

    //6.获取网销宝推广单元列表
    public static function AlibabaCnp4pAdgroupListRequest($appKey,$sessionKey,$adgroupIdList){
        $c =  App::getClient($appKey);
        $req = new AlibabaCnp4pAdgroupListRequest();
        $req->setAdGroupIdList($adgroupIdList);
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }

    //7.更新网销宝推广单元
    public static function AlibabaCnp4pAdgroupUpdateRequest($appKey,$sessionKey,$campaignId,$adgroupId,$onlineState=null,$bidPrice=null){
        $c =  App::getClient($appKey);
        $req = new AlibabaCnp4pAdgroupUpdateRequest();
        $req->setCampaignId($campaignId);
        $req->setAdGroupId($adgroupId);
        $req->setOnlineState($onlineState);
        $req->setBidPrice($bidPrice);
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }

    //8.添加网销宝推广计划
    public static function AlibabaCnp4pCampaignAddRequest($appKey,$sessionKey,$title,$budget,$onlineStatus,$promoteArea=null,$schedule=null,$cositeFlag=null){
        $c =  App::getClient($appKey);
        $req = new AlibabaCnp4pCampaignAddRequest();
        $req->setTitle($title);
        $req->setBudget($budget);
        $req->setOnlineStatus($onlineStatus); //0 1

        $req->setPromoteArea($promoteArea);//否  计划投放地域，全部则为“0”，多个以英文逗号",分隔"
        $req->setSchedule($schedule);//否  计划投放时段，7*24小时分别用0、1代表暂停和投放。
        $req->setCositeFlag($cositeFlag);//否  计划是否支持站外定向推广：0不支持，1支持
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }

    //9.更新网销宝推广计划投放地域
    public static function AlibabaCnp4pCampaignAreaUpdateRequest($appKey,$sessionKey,$campaignId,$promoteArea){
        $c =  App::getClient($appKey);
        $req = new AlibabaCnp4pCampaignAreaUpdateRequest();
        $req->setCampaignId($campaignId);
        $req->setPromoteArea($promoteArea);//否  计划投放地域，全部则为“0”，多个以英文逗号",分隔"
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }

    //10.获取可投放的地域列表
    public static function AlibabaCnp4pCampaignAreaListRequest($appKey,$sessionKey){
        $c =  App::getClient($appKey);
        $req = new AlibabaCnp4pCampaignAreaListRequest();
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }

    //11.更新网销宝计划日预算
    public static function AlibabaCnp4pCampaignBudgetUpdateRequest($appKey,$sessionKey,$campaignId,$budget){
        $c =  App::getClient($appKey);
        $req = new AlibabaCnp4pCampaignBudgetUpdateRequest();
        $req->setCampaignId($campaignId);
        $req->setBudget($budget);
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }

    //12.获取网销宝计划列表
    public static function AlibabaCnp4pCampaignListRequest($appKey,$sessionKey,$campaignIdList){
        $c =  App::getClient($appKey);
        $req = new AlibabaCnp4pCampaignListRequest();
        $req->setCampaignIdList($campaignIdList);//否
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }

    //13.更新网销宝推广计划投放时段
    public static function AlibabaCnp4pCampaignScheduleUpdateRequest($appKey,$sessionKey,$campaignId,$schedule){
        $c =  App::getClient($appKey);
        $req = new AlibabaCnp4pCampaignScheduleUpdateRequest();
        $req->setCampaignId($campaignId);
        $req->setSchedule($schedule);
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }

    //14.更新网销宝推广计划
    public static function AlibabaCnp4pCampaignUpdateRequest($appKey,$sessionKey,$campaignId,$budget,$onlineStatus,$promoteArea,$schedule,$cositeFlag){
        $c =  App::getClient($appKey);
        $req = new AlibabaCnp4pCampaignUpdateRequest();
        $req->setCampaignId($campaignId);
        $req->setBudget($budget); //否
        $req->setOnlineStatus($onlineStatus); // 否 0 1
        $req->setPromoteArea($promoteArea);//否  计划投放地域，全部则为“0”，多个以英文逗号",分隔"
        $req->setSchedule($schedule);//否  计划投放时段，7*24小时分别用0、1代表暂停和投放。
        $req->setCositeFlag($cositeFlag);//否  计划是否支持站外定向推广：0不支持，1支持
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }

    //15.添加网销宝关键词
    public static function AlibabaCnp4pKeywordAddRequest($appKey,$sessionKey,$adgroupId,$keywords){
        $c =  App::getClient($appKey);
        $req = new AlibabaCnp4pKeywordAddRequest();
        $req->setAdGroupId($adgroupId);
        $req->setKeywords($keywords);//关键词列表，关键词和出价json字符串，keyword:词，不能有一些特殊字符。bidPrice：出价，以“元”为单位，保留两位小数，不能大于日限额。 [ { "keyword": "西瓜汁", "bidPrice": 0.5 }, { "keyword": "苹果汁","bidPrice": 1.2} ]
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }

    //16.根据adGroupId获取网销宝关键词列表
    public static function AlibabaCnp4pKeywordByAdgroupidListRequest($appKey,$sessionKey,$adgroupId){
        $c =  App::getClient($appKey);
        $req = new AlibabaCnp4pKeywordByAdgroupidListRequest();
        $req->setAdGroupId($adgroupId);
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }

    //17.删除网销宝推广关键词
    public static function AlibabaCnp4pKeywordDeleteRequest($appKey,$sessionKey,$campaignId,$keywordIdList){
        $c =  App::getClient($appKey);
        $req = new AlibabaCnp4pKeywordDeleteRequest();
        $req->setCampaignId($campaignId);
        $req->setKeywordIdList($keywordIdList);
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }

    //18.获取网销宝关键词列表
    public static function AlibabaCnp4pKeywordListRequest($appKey,$sessionKey,$campaignId,$keywordIdList){
        $c =  App::getClient($appKey);
        $req = new AlibabaCnp4pKeywordListRequest();
        $req->setCampaignId($campaignId);
        $req->setKeywordIdList($keywordIdList);
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }

    //19.更新网销宝推广关键词价格
    public static function AlibabaCnp4pKeywordPriceUpdateRequest($appKey,$sessionKey,$keywords){
        $c =  App::getClient($appKey);
        $req = new AlibabaCnp4pKeywordPriceUpdateRequest();
        $req->setKeywords($keywords);//关键词列表，由keywordId、adGroupId、bidPrice组成的json字符串，其中keywordId为关键词id，adGroupId为单元id，bidPrice出价，以“元”为单位，保留两位小数，不能大于日限额。
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }

    //20.获取网销宝关键词质量分
    public static function AlibabaCnp4pKeywordQualityListRequest($appKey,$sessionKey,$adgroupId,$keywordIdList){
        $c =  App::getClient($appKey);
        $req = new AlibabaCnp4pKeywordQualityListRequest();
        $req->setAdGroupId($adgroupId);
        $req->setKeywordIdList($keywordIdList);
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }

    //21.获取网销宝关键词排名
    public static function AlibabaCnp4pKeywordRankGetRequest($appKey,$sessionKey,$adgroupId,$keywordId){
        $c =  App::getClient($appKey);
        $req = new AlibabaCnp4pKeywordRankGetRequest();
        $req->setAdGroupId($adgroupId);
        $req->setKeywordId($keywordId);
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }

    //22.获取网销宝指定推广单元的推荐词
    public static function AlibabaCnp4pKeywordRecommendListRequest($appKey,$sessionKey,$adgroupId,$pageNo,$pageSize){
        $c =  App::getClient($appKey);
        $req = new AlibabaCnp4pKeywordRecommendListRequest();
        $req->setAdGroupId($adgroupId);
        $req->setPageNo($pageNo);
        $req->setPageSize($pageSize);
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }

    //23.获取网销宝推广单元报表详情
    public static function AlibabaCnp4pReportAdGroupEffectRequest($appKey,$sessionKey,$startTime,$endTime,$campaignId,$adgroupId,$pageNo,$pageSize){
        $c =  App::getClient($appKey);
        $req = new AlibabaCnp4pReportAdGroupEffectRequest();
        $req->setStartTime($startTime);
        $req->setEndTime($endTime);
        $req->setCampaignId($campaignId);
        $req->setAdGroupId($adgroupId);//否
        $req->setPageNo($pageNo);
        $req->setPageSize($pageSize);
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }

    //24.获取网销宝推广计划报表详情
    public static function AlibabaCnp4pReportCampaignEffectRequest($appKey,$sessionKey,$startTime,$endTime,$campaignId,$reportType,$pageNo,$pageSize){
        $c =  App::getClient($appKey);
        $req = new AlibabaCnp4pReportCampaignEffectRequest();
        $req->setStartTime($startTime);
        $req->setEndTime($endTime);
        $req->setCampaignId($campaignId);//否
        $req->setReportType($reportType);//否
        $req->setPageNo($pageNo);
        $req->setPageSize($pageSize);
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }

    //25.获取网销宝客户报表详情
    public static function AlibabaCnp4pReportCustEffectRequest($appKey,$sessionKey,$startTime,$endTime,$reportType,$pageNo,$pageSize){
        $c =  App::getClient($appKey);
        $req = new AlibabaCnp4pReportCustEffectRequest();
        $req->setStartTime($startTime);
        $req->setEndTime($endTime);
        $req->setReportType($reportType);//否 报表类型，为空则全部；site_in则为站内，site_out则为站外
        $req->setPageNo($pageNo);
        $req->setPageSize($pageSize);
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }

    //26.获取网销宝关键词报表详情
    public static function AlibabaCnp4pReportKeywordEffectRequest($appKey,$sessionKey,$startTime,$endTime,$campaignId,$adgroupId,$keywordId,$pageNo,$pageSize){
        $c =  App::getClient($appKey);
        $req = new AlibabaCnp4pReportKeywordEffectRequest();
        $req->setStartTime($startTime);
        $req->setEndTime($endTime);
        $req->setCampaignId($campaignId);//否
        $req->setAdGroupId($adgroupId);//否
        $req->setKeywordId($keywordId);//否 报表类型，为空则全部；site_in则为站内，site_out则为站外
        $req->setPageNo($pageNo);
        $req->setPageSize($pageSize);
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }

    //27.根据关键词查询联盟offer列表
    public static function AlibabaCnp4pUnionOfferbyqueryListRequest($appKey,$sessionKey,$unionPid,$query,$ip,$agent,$referer,$pageNo,$pageSize){
        $c =  App::getClient($appKey);
        $req = new AlibabaCnp4pUnionOfferbyqueryListRequest();
        $req->setUnionPid($unionPid);//联盟推广位ID
        $req->setQuery($query);//查询关键词
        $req->setRequestIp($ip);//请求者的IP
        $req->setRequestUserAgent($agent);//请求者的UA
        $req->setRequestReferer($referer);//请求者的Referer  否
        $req->setPageNo($pageNo);
        $req->setPageSize($pageSize);
        $resp = $c->execute($req,$sessionKey);
        return $resp;
    }
}