<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/26
 * Time: 13:12
 */
namespace App\Http\Controllers\Printa;

use App\Core\Modules\Printa\Service\SenderService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
class SenderController extends Controller{




    //设为默认地址
    public static function setDefaultSenderAddress(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));
        $id = $params->id;
        $result = SenderService::setDefaultSenderAddress($id,$user);
        return json_encode($result);
    }

    //删除地址
    public static function deleteSenderAddress(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));
        $ids = $params->ids;
        $result = SenderService::deleteSenderAddress($ids);
        return json_encode($result);

    }
    //修改地址
    public static function updateSenderAddress(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));
        $sender = $params->sender;
        $result = SenderService::updateSenderAddress($sender,$user);
        return json_encode($result);
    }


    //新建地址
    public static function addSenderAddress(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));
        $sender = $params->sender;
        $result = SenderService::addSenderAddress($sender,$user);
        return json_encode($result);
    }

    //根据区id 获取邮编
    public static function getPost(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));
        $areaId = $params->area_id;
        $result = SenderService::getPosts($areaId);
        return json_encode($result);
    }

    //根据城市id 获取区
    public static function getAreas(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));
        $cityId = $params->city_id;
        $result = SenderService::getAreas($cityId);
        return json_encode($result);
    }

    //根据省份id 获取市
    public static function getCities(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));
        $provinceId = $params->province_id;
        $result = SenderService::getCities($provinceId);
        return json_encode($result);
    }

    //获取所有省份
    public static function getProvinces(Request $request){
        $user = session('user');
        $result = SenderService::getProvinces();
        return json_encode($result);
    }

    //获取户发货地址 默认和 全部
    public static function getSenderAddress(Request $request){
        $user = session('user');
        //$params = json_decode($request->input('params'));
        $page = json_decode($request->input('page'));
        $result = SenderService::getSenderAddress($page,$user);
        return json_encode($result);
    }
}