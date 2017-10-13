<?php
/**
 * Created by PhpStorm.
 * User: pc
 * Date: 2015/9/9
 * Time: 18:37
 */

namespace App\Http\Controllers\Login;
use App\Core\Base\Login\Service\LoginService;
use App\Core\Base\Login\Service\OauthService;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

class LoginController extends Controller{

    /*
     * 用户登录有两种方式：
     * 1.授权登录：通过服务平台授权登录
     * 2.普通登录：通过软件 帐号密码 登录
     */
    //登录界面
    public static function loginView(){

        return view('login.login');
    }

    //授权
    public static function oauth($device='alipc',$appKey=null,Request $request){

        $data = $request->all();
        $code = $data['code'];

        $user = OauthService::oauth($device,$appKey,$code);
        if($user){
            return redirect('app/home');
        }else{
            return view('errors.failed');
        }
    }

    //获取apps
    public static function appsGet(){
        $result = LoginService::appsGet();
        return json_encode($result);

    }

    //密码登录
    public static function login(Request $request){
        $params = $request->input('params');
        $params = json_decode($params);
        $user = $params->user;
        $app = $params->app;
        $user = LoginService::login($user,$app);
        return json_encode($user);
    }

    //退出系统
    public static function logout(){
        LoginService::logout();
    }

}
?>