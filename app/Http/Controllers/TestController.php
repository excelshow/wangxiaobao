<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/5/31
 * Time: 16:53
 */
namespace App\Http\Controllers;

use App\Core\Base\Modules\Printa\Service\OrderService;
use App\Core\Remote\WxbApi;
use Illuminate\Http\Request;


class TestController extends Controller{



    public static function test4(){
        $user = session('user');
        $appKey = $user->appkey;
        $sessionKey = $user->access_token;
        $resp = WxbApi::AlibabaCnp4pAccountBalanceRequest($appKey,$sessionKey);
        print_r($resp);

    }

    public static function test3(){
        $status = 'waitbuyerpay';
        OrderService::downloadOrderByStatus($status);
    }

    public static function test2(){
        OrderService::downloadOrdersByPeriod(3,1);
    }



    //修改文件
    public static function test1(){
        $dir = 'E:\phpserver\www\print.local.com\app\Core\Sdk\Top\Request';
        //$dir = 'E:\phpserver\www\zhitongche.local.com\app\Core\Sdk\Top\test';
        if(is_dir($dir))
        {
            if ($dh = opendir($dir))
            {
                while (($file = readdir($dh)) !== false)
                {
                    if($file!="." && $file!="..")
                    {
                        echo $file."<br>";
                        $file=$dir.'\\'.$file;;
                        $code="测试1";
                        $code = 'namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;';
                        $f=fopen($file,"r+");
                        $content=fread($f,filesize($file));
                        fclose($f);
                        if(!strstr($content,$code)){
                            $arrInsert = self::insertContent($file, $code, 7);
                            unlink($file);
                            foreach($arrInsert as $value)
                            {
                                //echo '11';
                                //echo '11';
                                file_put_contents($file, $value, FILE_APPEND);
                            }
                        }


                    }

                }
                closedir($dh);
            }
        }
    }

    public static  function insertContent($source, $s, $iLine) {
        $file_handle = fopen($source, "r");
        $i = 0;
        $arr = array();
        while (!feof($file_handle)) {
            $line = fgets($file_handle);
            ++$i;
            if ($i == $iLine) {
                $arr[] = $line .$s . "\n";
            }else {
                $arr[] = $line;
            }
        }
        fclose($file_handle);
        return $arr;
    }


}