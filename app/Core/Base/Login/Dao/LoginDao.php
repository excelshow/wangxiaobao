<?php
/**
 * Created by PhpStorm.
 * User: pc
 * Date: 2015/10/17
 * Time: 7:00
 */

namespace App\Core\Base\Login\Dao;
use App\Core\Common\Model\BaseApp;
use App\Core\Common\Model\BaseUserInfo;
use App\Core\Common\Model\BaseUserShop;
use App\Core\App\App;
class LoginDao{

    //获取全部应用
    public static function appsGet(){
        $result = BaseApp::select('id','name','appkey')->get();
        return $result;
    }

    //用户登录
    public static function login($user,$app){
        $name = $user->name;
        $password = $user->pwd;
        $appkey = $app->appkey;
        $pwd = md5($password);
        $user = BaseUserInfo::where('appkey',$appkey)
            ->where('user_name',$name)
            ->where('user_password',$pwd)
            ->first();
        if(!$user){
            return $user;
        }

        $nick = $user->bind_shop;
        unset($user->user_password);
        $shop = BaseUserShop::where('appkey',$appkey)
            ->where('nick',$nick)
            ->first();
        $shop = $shop?$shop->toArray():[];
        $user = $user->toArray();
        $user = (object)array_merge($shop,$user);
        return $user;
    }

    //注册
    public static function register($user,$app){
        $name = $user->name;
        $pwd = $user->pwd;
        $nick = $user->wangwang;

        $appName = $app->app_name;
        $appkey = $app->appkey;
        $result = new \stdClass();
        $result->success = false;
        $result->code = '1';
        $result->msg = '用户名已经被注册';
        $record = BaseUserInfo::where('appkey',$appkey)->where('user_name',$name)->first();
        if($record){
            return $result;
        }

        $record = BaseUserShop::where('appkey',$appkey)->where('nick',$nick)->first();
        if($record){
            $result->code = '2';
            $result->msg = '店铺已经存在，如果是您的店铺，可以用店铺授权登录，然后关联到一个用户下';
            return $result;
        }

        //注册
        $password = md5($name.$pwd);
        $model = new User();
        $model->appkey = $appkey;
        $model->app_name = $appName;
        $model->user_name = $name;
        $model->user_password = $password;
        $model->bind_shop = $nick;
        $model->source = 'register';
        $model->save();

        $user = BaseUserInfo::where('user_name',$name)->first();
        $userId = $user->id;
        $model = new BaseUserShop();
        $model->appkey = $appkey;
        $model->app_name = $appName;
        $model->user_id = $userId;
        $model->nick = $nick;
        $model->save();
        $result->success = true;
        $result->code = '1';
        $result->msg = '注册成功';
        return $result;
    }


    //授权登录
    public static function oauth($shop)
    {
        $nick = $shop->nick;
        $appkey = $shop->appkey;
        $appName = $shop->app_name;
        $record = BaseUserShop::where('appkey',$appkey)->where('nick', $nick)->first();

        if ($record) {
            $userId = $record->user_id;
            $record->device = $shop->device;
            $record->access_token = $shop->access_token;
            $record->expires_in = $shop->expires_in;
            $record->expire_time = $shop->expire_time;
            $record->refresh_token = $shop->refresh_token;
            $record->refresh_token_valid_time = $shop->refresh_token_valid_time;
            $record->re_expires_in = $shop->re_expires_in;
            $record->save();

        } else {

            $user = BaseUserInfo::where('appkey',$appkey)
                ->where('user_name', $nick)
                ->where('user_password',md5($nick))
               // ->where('source','oauth')
                ->first();
            if(!$user){
                $pwd = md5(App::getPassword());
                $model = new BaseUserInfo();
                $model->appkey = $appkey;
                $model->app_name = $appName;
                $model->user_name = $nick;
                $model->user_password = $pwd;
                $model->bind_shop = $nick;
                $model->source = 'oauth';
                $model->save();
                $user = BaseUserInfo::where('appkey',$appkey)
                    ->where('user_name', $nick)
                    ->where('user_password',$pwd)
                    ->first();
            }
            $userId = $user->id;

            $model = new BaseUserShop();
            $model->appkey = $appkey;
            $model->app_name = $appName;
            $model->user_id = $userId;
            $model->nick = $nick;
            $model->login_id = $shop->login_id;
            $model->member_id = $shop->member_id;
            $model->ali_id = $shop->ali_id;
            $model->device = $shop->device;
            $model->access_token = $shop->access_token;
            $model->expires_in = $shop->expires_in;
            $model->expire_time = $shop->expire_time;
            $model->refresh_token = $shop->refresh_token;
            $model->refresh_token_valid_time = $shop->refresh_token_valid_time;
            $model->re_expires_in = $shop->re_expires_in;
            $model->save();
        }


        $user = BaseUserInfo::where('id', $userId)->first();
        unset($user->user_password);
        $shop = BaseUserShop::where('appkey',$appkey)->where('nick',$nick)->first();
        $shop = $shop?$shop->toArray():[];
        $user = $user?$user->toArray():[];
        $user = (object)array_merge($shop,$user);
        return $user;
    }


    //刷新授权
    public static function refresh($user){

        $appkey = $user->appkey;
        $userId = $user->user_id;
        $token = $user->access_token;
        $result = BaseUserShop::where('appkey',$appkey)->where('user_id', $userId)->update(['access_token'=>$token]);
        return $result;

    }

}