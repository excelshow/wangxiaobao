<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/5/31
 * Time: 16:53
 */
namespace App\Http\Controllers\Yinliu;

use App\Core\Modules\Yinliu\Service\SiteService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

//define('LEGAL_DOMAIN','site');
define('LEGAL_DOMAIN','imemeda');

class SiteController extends Controller{

    //网站首页
    public static function index(Request $request){

        $host = $_SERVER['HTTP_HOST'];
        $has = strpos($host, LEGAL_DOMAIN);
        if(!$has){
            return view('welcome');
        }

        $domain = explode('.',$host)[0];

        $site = SiteService::appYinliuSiteGet($domain);

        if(!$site){
            abort(404);
            //return view('errors.404');
        }
        return view('site.home')->with(['site'=>$site]);

    }


    //获取推广业务
    public static function siteBusinessGet(Request $request){
        $host = $_SERVER['HTTP_HOST'];
        $has = strpos($host, LEGAL_DOMAIN);
        if(!$has){
            return null;
        }
        $domain = explode('.',$host)[0];
        $user = SiteService::appYinliuSiteGet($domain);
        $result = SiteService::appYinliuBusinessGet($user);
        return json_encode($result);

    }

    //获取业务下推广产品
    public static function siteProductGet(Request $request){
        $host = $_SERVER['HTTP_HOST'];
        $has = strpos($host, LEGAL_DOMAIN);
        if(!$has){
            return null;
        }

        $domain = explode('.',$host)[0];
        $user = SiteService::appYinliuSiteGet($domain);
        if(!$user){
            return null;
        }

        $page = json_decode($request->input('page'));
        $params = json_decode($request->input('params'));
        $businessId = $params->business_id;
        $result = SiteService::appYinliuProductGet($user,$page,$businessId);
        return json_encode($result);

    }

    //获取业务下推广产品
    public static function siteCompanyGet(Request $request){
        $host = $_SERVER['HTTP_HOST'];
        $has = strpos($host, LEGAL_DOMAIN);
        if(!$has){
            return null;
        }

        $domain = explode('.',$host)[0];
        $result = SiteService::appYinliuSiteGet($domain);
        return json_encode($result);
    }


    //公司介绍
    public static function siteCompanyPageGet($page='company',Request $request){

        $host = $_SERVER['HTTP_HOST'];
        $has = strpos($host, LEGAL_DOMAIN);
        if(!$has){
            return view('welcome');
        }

        $domain = explode('.',$host)[0];

        $site = SiteService::appYinliuSiteGet($domain);

        if(!$site){
            abort(404);
            //return view('errors.404');
        }
        switch ($page){
            case 'company':
                return view('site.company.company')->with(['site'=>$site]);
                break;
            case 'culture':
                return view('site.company.culture')->with(['site'=>$site]);
                break;
            case 'ethic':
                return view('site.company.ethic')->with(['site'=>$site]);
                break;
            case 'sale':
                return view('site.company.sale')->with(['site'=>$site]);
                break;
            case 'shop':
                return view('site.company.shop')->with(['site'=>$site]);
                break;
            default:
                abort(404);
        }
    }

    //业务介绍
    public static function siteBusinessPageGet($businessId='',Request $request){

        $host = $_SERVER['HTTP_HOST'];
        $has = strpos($host, LEGAL_DOMAIN);
        if(!$has){
            return view('welcome');
        }

        $domain = explode('.',$host)[0];

        $site = SiteService::appYinliuSiteGet($domain);
        $business = SiteService::appYinliuBusinessGetById($site,$businessId);
        $businesses =  SiteService::appYinliuBusinessGet($site);
        if(!$site){
            abort(404);
            //return view('errors.404');
        }
        if(!$businessId){
            //abort(404);
            $business = @$businesses[0];
        }
        return view('site.business.business')->with(['site'=>$site,'businesses'=>$businesses,'business'=>$business]);

    }

    //客户服务
    public static function siteServicePageGet($page='service',Request $request){

        $host = $_SERVER['HTTP_HOST'];
        $has = strpos($host, LEGAL_DOMAIN);
        if(!$has){
            return view('welcome');
        }

        $domain = explode('.',$host)[0];

        $site = SiteService::appYinliuSiteGet($domain);

        if(!$site){
            abort(404);
            //return view('errors.404');
        }
        switch ($page){
            case 'service':
                return view('site.service.service')->with(['site'=>$site]);
                break;
            case 'policy':
                return view('site.service.policy')->with(['site'=>$site]);
                break;

            default:
                abort(404);
        }
        //return view('site.company.ethic')->with(['site'=>$site]);
    }


    //人才招聘
    public static function siteJobPageGet($page='job',Request $request){

        $host = $_SERVER['HTTP_HOST'];
        $has = strpos($host, LEGAL_DOMAIN);
        if(!$has){
            return view('welcome');
        }

        $domain = explode('.',$host)[0];

        $site = SiteService::appYinliuSiteGet($domain);

        if(!$site){
            abort(404);
            //return view('errors.404');
        }
        switch ($page){
            case 'job':
                return view('site.job.job')->with(['site'=>$site]);
                break;

            default:
                abort(404);
        }
        //return view('site.company.ethic')->with(['site'=>$site]);
    }

    //业务介绍
    public static function siteProductPageGet($businessId='',Request $request){

        $host = $_SERVER['HTTP_HOST'];
        $has = strpos($host, LEGAL_DOMAIN);
        if(!$has){
            return view('welcome');
        }

        $domain = explode('.',$host)[0];

        $site = SiteService::appYinliuSiteGet($domain);
        $business = SiteService::appYinliuBusinessGetById($site,$businessId);
        $businesses =  SiteService::appYinliuBusinessGet($site);

        $page = new \stdClass();
        $page->page = 1;
        $page->limit = 200;
        $page->start = 0;
        $products = SiteService::appYinliuProductGet($site,$page,$businessId);
        $products = $products->total>0?$products->rows:[];
        if(!$site){
            abort(404);
            //return view('errors.404');
        }
        if(!$businessId){
            //abort(404);
            $business = @$businesses[0];
        }

        return view('site.product.product')->with(['site'=>$site,'businesses'=>$businesses,'business'=>$business,'products'=>$products]);

    }

}