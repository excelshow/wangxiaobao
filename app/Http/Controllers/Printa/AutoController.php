<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/5/31
 * Time: 16:53
 */
namespace App\Http\Controllers\Printa;


use App\Core\Modules\Printa\Service\AutoPrintService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AutoController extends Controller{


    //获取自动打印设置
    public static function getAutoPrint(Request $request){
        $user = session('user');
        $result = AutoPrintService::getAutoPrint($user);
        return json_encode($result);
    }


    //保存自动打印设置
    public static function setAutoPrint(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));
        $auto = $params->auto;
        $result = AutoPrintService::setAutoPrint($user,$auto);
        return json_encode($result);

    }


}