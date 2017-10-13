<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/26
 * Time: 13:12
 */
namespace App\Http\Controllers\Printa;
use App\Core\Modules\Printa\Service\PrinterService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
class PrinterController extends Controller{


    //获取打印机设置
    public static function getPrinterSetting(){
        $user = session('user');
        $result = PrinterService::getPrinterSetting($user);
        return json_encode($result);
    }

    //保存打印机设置
    public static function savePrinterSetting(Request $request){
        $user = session('user');
        $params= json_decode($request->input('params'));
        $printer = $params->printers;
        $result = PrinterService::savePrinterSetting($printer,$user);
        return json_encode($result);
    }
}