<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/2/21
 * Time: 12:29
 */
namespace App\Core\Base\Login\Service;
use App\Core\Base\Login\Dao\LoginDao;
use App\Core\Remote\OauthApi;


class LoginService{

    //获取全部应用
    public static function appsGet(){
        $result = LoginDao::appsGet();
        return $result;
    }

    //密码登录
    public static function login($user,$app){
        $user = LoginDao::login($user,$app);

        if(@$user->device=='alipc'){
            $appkey = $user->appkey;
            $refreshToken = $user->refresh_token;
            $token = OauthApi::refreshToken($appkey,$refreshToken);
            $token = @$token->access_token;
            if($token){
                $user->access_token = $token;
                LoginDao::refresh($user);
            }
        }
        session()->forget('user');
        session(['user'=>$user]);
        return $user;
    }


    //退出
    public static function logout(){

    }
}