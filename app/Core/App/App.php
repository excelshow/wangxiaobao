<?php
namespace  App\Core\App;

use App\Core\Sdk\Ali\AliClient;
use App\Core\Sdk\Bird\BirdClient;
use App\Core\Sdk\Top\TopClient;
class App{


	protected static $password = 'dahuzi';


	protected static $apps = [


        //网销宝精准省钱推广
        '9439746'=>[
            'type'=>'alipc',
            'name'=>'网销宝精准省钱推广',
            'online'=>'dev',
            'key'=>'9439746',
            'secret'=>'b2ukjb7TLwKE',
            'redirectUrl'=>'http://shengqian.imomoda.net/app/oauth/alipc/9439746',
            'testRedirectUrl'=>'http://shengqian.imomoda.net/app/oauth/alipc/9439746',
            'owner'=>'杭州亦迅科技有限公司',
            'siteAddress'=>'',
            'bird'=>[
                'key'=>'1280255',
                'secret'=>'340273e4-762c-44d7-999a-66cc238bab7c',
            ]
        ],


        //精准引流_自动推广_网销宝助手
        '1336910'=>[
            'type'=>'alipc',
            'name'=>'精准引流_自动推广_网销宝助手',
            'online'=>'dev',
            'key'=>'1336910',
            'secret'=>'SsOvVfvyoG',
            'redirectUrl'=>'http://wxb.imomoda.net/app/oauth/alipc/1336910',
            'testRedirectUrl'=>'http://bdyl.imomoda.net/app/oauth/alipc/1336910',
            'owner'=>'杭州亦迅科技有限公司',
            'siteAddress'=>'',
            'bird'=>[
                'key'=>'1280255',
                'secret'=>'340273e4-762c-44d7-999a-66cc238bab7c',
            ]
        ],


        //精准引流_百度推广
        '2583796'=>[
            'type'=>'alipc',
            'name'=>'精准引流_百度推广',
            'online'=>'dev',
            'key'=>'2583796',
            'secret'=>'Xsz1ojQJbqe',
            'redirectUrl'=>'http://bdyl.imomoda.net/app/oauth/alipc/2583796',
            'testRedirectUrl'=>'http://bdyl.imomoda.net/app/oauth/alipc/2583796',
            'owner'=>'杭州亦迅科技有限公司',
            'siteAddress'=>'',
            'bird'=>[
                'key'=>'1280255',
                'secret'=>'340273e4-762c-44d7-999a-66cc238bab7c',
            ]
        ],


	    //自动打印发货
        '4343549'=>[
            'type'=>'alipc',
            'name'=>'测试88',
            'online'=>'online',
            'key'=>'4343549',
            'secret'=>'yd2fIwxTvQ',
            'redirectUrl'=>'http://auto.imomoda.net/app/oauth/alipc/4343549',
            'testRedirectUrl'=>'http://auto.imomoda.net/app/oauth/alipc/4343549',
            'owner'=>'杭州亦迅科技有限公司',
            'siteAddress'=>'',
            'bird'=>[
                'key'=>'1280255',
                'secret'=>'340273e4-762c-44d7-999a-66cc238bab7c',
            ]
        ],


        //亦迅交易
        '1023934'=>[
            'type'=>'alipc',
            'name'=>'亦迅交易',
            'online'=>'online',
            'key'=>'1023934',
            'secret'=>'xmKDr71Eo0yn',
            'redirectUrl'=>'http://trade.imomoda.net/app/oauth/alipc/1023934',
            'testRedirectUrl'=>'http://trade.imomoda.net/app/oauth/alipc/1023934',
            'owner'=>'alitestforisv01',
            'siteAddress'=>'',
            'bird'=>[
                'key'=>'1280255',
                'secret'=>'340273e4-762c-44d7-999a-66cc238bab7c',
            ]
        ],

	    //测试应用
		'4452515'=>[
			'type'=>'alipc',
			'name'=>'测试88',
			'online'=>'dev',
			'key'=>'4452515',
			'secret'=>'MbOtBrDtokt7',
			'redirectUrl'=>'http://www.local.com/app/oauth/alipc/4452515',
			'testRedirectUrl'=>'http://www.local.com/app/oauth/alipc/4452515',
			'owner'=>'alitestforisv01',
			'siteAddress'=>'',
            'bird'=>[
                'key'=>'1280255',
                'secret'=>'340273e4-762c-44d7-999a-66cc238bab7c',
            ]
		],

        //测试应用
        '23524194'=>[
            'type'=>'qnpc',
            'name'=>'测试开发2',
            'online'=>'dev',
            'key'=>'23524194',
            'secret'=>'a1c94249e1e91edf51ba2307af25e49d',
            'redirectUrl'=>'http://niu.local.com/app/oauth/qnpc/23524194',
            'testRedirectUrl'=>'http://niu.local.com/app/oauth/qnpc/23524194',
            'owner'=>'杭州亦迅科技有限公司',
            'siteAddress'=>'',
            'bird'=>[
                'key'=>'1280255',
                'secret'=>'340273e4-762c-44d7-999a-66cc238bab7c',
            ]
        ],

	];

	//获取app
	public static function getApp($key){
		$app = self::$apps[$key];
		return $app;
	}

	public static function getPassword(){
		return self::$password;
	}
    //alli client
    public static function getClient($appKey){

        $app = self::getApp($appKey);
        $type = $app['type'];
        switch ($type){
            case 'alipc':
                $client = new AliClient();
                break;
            case 'qnpc':
                if (!defined("TOP_SDK_WORK_DIR"))
                {
                    define("TOP_SDK_WORK_DIR", "/tmp/");
                }
                if (!defined("TOP_SDK_DEV_MODE"))
                {
                    define("TOP_SDK_DEV_MODE", true);
                }
                $client = new TopClient();
                break;
            default: $client = new AliClient();
        }
        $client->appkey = $app['key'];
        $client->secretKey = $app['secret'];
        return $client;
    }
    //快递鸟
    public static function getBirdClient($appKey){
        $client = new BirdClient();

        $app = self::getApp($appKey);
        $bird = $app['bird'];
        $client->appkey = $bird['key'];
        $client->secretKey = $bird['secret'];
        return $client;
    }



}

?>