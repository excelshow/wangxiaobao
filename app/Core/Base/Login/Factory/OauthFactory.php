<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/16
 * Time: 0:13
 */
namespace App\Core\Base\Login\Factory;
use App\Core\Common\Model\BaseUserShop;

class OauthFactory{


    //ali 数据转化
    public static function formatOauth($token){
        $model = new BaseUserShop();
        $model->appkey = @$token->appkey;
        $model->app_name = @$token->app_name;
        $model->nick = @$token->resource_owner;
        $model->login_id = @$token->resource_owner;
        $model->member_id = @$token->memberId;
        $model->ali_id = @$token->aliId;
        $model->device = @$token->device;
        $model->access_token = @$token->access_token;
        $model->expires_in = @$token->expires_in;
        $model->expire_time = @date('Y-m-d H:i:s',$token->expire_time);
        $model->refresh_token = @$token->refresh_token;
        $model->re_expires_in = @$token->re_expires_in;
        $model->refresh_token_valid_time = @date_create(substr($token->refresh_token_timeout,0,14))->format('Y-m-d H:i:s');
        return $model;
    }


}