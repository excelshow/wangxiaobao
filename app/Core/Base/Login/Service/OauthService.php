<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/2/21
 * Time: 12:29
 */
namespace App\Core\Base\Login\Service;
use App\Core\App\App;
use App\Core\Base\Login\Dao\LoginDao;
use App\Core\Base\Login\Factory\OauthFactory;
use App\Core\Remote\OauthApi;


class OauthService{

    //授权登录
    public static function oauth($device,$appKey,$code)
    {
        $token = OauthApi::getToken($appKey,$code);

        $token->device = $device;
        $token->appkey = $appKey;
        $token->app_name = App::getApp($appKey)['name'];
        $oauth = OauthFactory::formatOauth($token);
        $user = LoginDao::oauth($oauth);
        session(['user'=>$user]);
        return $user;
    }

    
}