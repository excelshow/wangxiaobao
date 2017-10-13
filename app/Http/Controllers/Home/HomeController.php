<?php
/**
 * Created by PhpStorm.
 * User: pc
 * Date: 2015/9/9
 * Time: 18:37
 */

namespace App\Http\Controllers\Home;
use App\Core\Service\Account\AccountRptDetailService;
use App\Core\Service\Account\AccountService;
use App\Http\Controllers\Controller;
use App\Core\Service\User\UserService;
use App\Core\Service\App\AppService;
use App\Core\Service\App\NoticeService;
use App\Core\Service\Account\AccountRptTodayService;
use Illuminate\Http\Request;


class HomeController extends Controller{

    /*
     * 用户登录有两种方式：
     * 1.授权登录：通过服务平台授权登录
     * 2.普通登录：通过软件 帐号密码 登录
     */
    //home界面
    public static function index(){
        
        //return view('home.home');
        return view('yinliu.company');
        //return view('print.print');
    }

}
?>