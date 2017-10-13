<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/5/31
 * Time: 16:53
 */
namespace App\Http\Controllers\Printa;



use App\Core\Modules\Printa\Service\OrderService;
use App\Core\Modules\Printa\Service\LogisticTplService;
use App\Core\Modules\Printa\Service\PrintService;
use App\Core\Modules\Printa\Service\ProductTplService;
use App\Core\Modules\Printa\Service\SenderService;
use App\Core\Modules\Printa\Service\ElectricTplService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PrintController extends Controller{
    //页面
    public static function index(){

        return view('print.print');
    }

    //批量发货
    public static function sendAll(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));

        $logisticType = $params->logistic_type;
        $orders = $params->orders;
        $logistic = $params->logistic;
        $result = OrderService::sendAll($user,$logisticType,$orders,$logistic);
        return json_encode($result);
    }

    //发货
    public static function sendGoods(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));

        $logisticType = $params->logistic_type;
        $order = $params->order;
        $logistic = $params->logistic;

        $result = OrderService::sendGoods($user,$logisticType,$order,$logistic);
        return json_encode($result);
    }


    //根据公司id 获取面单账号
    public static function getElectricAccount(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));
        $companyId = @$params->company_id;
        $result = ElectricTplService::getAccount($user,$companyId);
        return json_encode($result);
    }

    //获取面单
    public static function getElectricTpl(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));

        $order = $params->order;
        $products = $params->products;
        $sender = $params->sender;
        $receiver = $params->receiver;
        $account = $params->account;

        $result = ElectricTplService::getElectricTpl($user,$order,$products,$sender,$receiver,$account);
        return json_encode($result);
    }




    //设置运单打印状态
    public static function setElectricListPrintStatus(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));
        $orderId = $params->order_id;
        $status = $params->status;
        $logisticNum = $params->logistic_num;
        $result = PrintService::setOrderElectricListPrintStatus($orderId,$status,$logisticNum,$user);
        return json_encode($result);
    }



    //设置运单打印状态
    public static function setLogisticListPrintStatus(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));
        $orderId = $params->order_id;
        $status = $params->status;
        $result = PrintService::setOrderLogisticListPrintStatus($orderId,$status,$user);
        return json_encode($result);
    }
    
    //设置货单打印状态
    public static function setProductListPrintStatus(Request $request){
        $user = session('user');
        $params = json_decode($request->input('params'));
        $orderId = $params->order_id;
        $status = $params->status;
        $result = PrintService::setOrderGoodsListPrintStatus($orderId,$status,$user);
        return json_encode($result); 
    }
    
    //获取默认发货地址
    public static function getDefaultSenderAddress(){
        $user = session('user');
        $result = SenderService::getDefaultSenderAddress($user);
        return json_encode($result);
    }


    //获取默认货单模版
    public static function getDefaultProductTpl(){
        $user = session('user');
        $result = ProductTplService::getDefaultProductTpl($user);
        return json_encode($result);
    }


    //获取默认物流和模版
    public static function getLogisticDefaultAndTpl(){
        $user = session('user');
        $result = LogisticTplService::getLogisticDefaultAndTpl($user);
        return json_encode($result);
    }
    
    //获取物流模版 by tpl_id
    public static function getLogisticTpl(Request $request){
        
        $params = json_decode($request->input('params'));
        $tplId = $params->tpl_id;
        $result = LogisticTplService::getLogisticTpl($tplId);
        return json_encode($result);
    }



    //获取打印设置
    public static function getPrintSetting(){
        $user = session('user');
        $result =  PrintService::getPrintSetting($user);
        return json_encode($result);
    }
    



}