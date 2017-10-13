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


class OauthApi
{

    //获取授权信息
    public static function getToken($appKey,$code){
        $app = App::getApp($appKey);
        $appSecret = $app['secret'];
        $redirectUri = $app['redirectUrl'];
        $url = 'https://gw.open.1688.com/openapi/http/1/system.oauth2/getToken/'.$appKey;
        $header = array(
            'Content-Type: application/x-www-form-urlencoded'
        );
        $postData = array(
            'grant_type'=>'authorization_code',
            'need_refresh_token'=>'true',
            'client_id'=>$appKey,
            'client_secret'=>$appSecret,
            'redirect_uri'=>$redirectUri,
            'code'=>$code
        );


        $data = http_build_query($postData);

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);//https请求必须加上此项
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
        // 		$version = curl_setopt($ch, CURLOPT_SSLVERSION,3);
        curl_setopt($ch, CURLOPT_POST, true);//启用post请求
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);


        $result = curl_exec($ch);
        $result = json_decode($result);
        $errorno = curl_errno($ch);
        $error = curl_error($ch);
        $httpCode = curl_getinfo($ch);
        // 关闭cURL资源，并且释放系统资源
        curl_close($ch);

        return $result;
    }


    //刷新授权
    public static function refreshToken($appKey,$refreshToken){
        $app = App::getApp($appKey);
        $appSecret = $app['secret'];
        $url = 'https://gw.api.alibaba.com/openapi/param2/1/system.oauth2/getToken/'.$appKey;
        $postData = array(
            'grant_type'=>'refresh_token',
            'client_id'=>$appKey,
            'client_secret'=>$appSecret,
            'refresh_token'=>$refreshToken
        );


        $data = http_build_query($postData);
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);//https请求必须加上此项
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
        // 		$version = curl_setopt($ch, CURLOPT_SSLVERSION,3);
        curl_setopt($ch, CURLOPT_POST, true);//启用post请求
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);


        $result = curl_exec($ch);
        $result = json_decode($result);
        $errorno = curl_errno($ch);
        $error = curl_error($ch);
        $httpCode = curl_getinfo($ch);
        // 关闭cURL资源，并且释放系统资源
        curl_close($ch);
        return $result;
    }



}