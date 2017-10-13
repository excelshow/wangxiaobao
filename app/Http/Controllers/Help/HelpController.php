<?php
/**
 * Created by PhpStorm.
 * User: pc
 * Date: 2015/9/9
 * Time: 18:37
 */

namespace App\Http\Controllers\Help;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Core\Service\App\NoticeService;
use App\Core\Service\App\AppService;
class HelpController extends Controller{

    public static function index(){
        
        return view('help.help');
    }

    //下载插件
    public static function get($file){


        if($file=='lodop32'){
            //$pathToFile = 'assets/lodop/install_lodop32.exe';
            $pathToFile = 'assets/lodop/CLodop_Setup_for_Win32NT.exe';
        }

        if($file=='lodop64'){
            //$pathToFile = 'assets/lodop/install_lodop64.exe';
            $pathToFile = 'assets/lodop/CLodop_Setup_for_Win32NT.exe';
        }
        if($file=='clodop'){
            $pathToFile = 'assets/lodop/CLodop_Setup_for_Win32NT.exe';
        }
        
        return response()->download($pathToFile);
    }
}
?>