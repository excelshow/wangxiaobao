<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/11/28
 * Time: 15:24
 */
namespace App\Core\Modules\Yinliu\Dao;


use App\Core\Common\Model\YinliuCompany;
use App\Core\Common\Model\YinliuBusiness;
use Illuminate\Support\Facades\DB;

class SiteDao{



    //获取企业推广
    public static function appYinliuSiteGet($domain){

        $result = YinliuCompany::where('domain',$domain)->first();
        return $result;
    }

    //获取打印业务
    public static function appYinliuBusinessGetById($user,$id){
        $userId = $user->user_id;
        $result = YinliuBusiness::where('user_id',$userId)->where('id',$id)->first();
        return $result;

    }

    //获取全部引流业务
    public static function appYinliuBusinessGet($user){
        $userId = $user->user_id;
        $result = YinliuBusiness::where('user_id',$userId)->get();
        return $result;

    }

    //获取业务下推广产品
    public static function appYinliuProductGet($user,$page,$businessId=''){
        $userId = $user->user_id;
        $pageNo = $page->page;
        $limit = $page->limit;
        $start = ($pageNo-1)*$limit;
        $result = new \stdClass();
        $result->total = 0;
        $result->rows = [];

        $tSql = "select count(t2.id) total from (select id from yinliu_product where user_id=$userId ) t1,yinliu_product t2 where t1.id=t2.id";
        $rSql = "select t2.* from (select id from yinliu_product y1 where y1.user_id=$userId ORDER BY y1.id DESC  limit $start,$limit  ) t1,yinliu_product t2 where t1.id=t2.id";
        if($businessId){
            $tSql = "select count(t2.id) total from (select id from yinliu_product where user_id=$userId and business_id = $businessId ) t1,yinliu_product t2 where t1.id=t2.id";
            $rSql = "select t2.* from (select id from yinliu_product y1 where y1.user_id=$userId and business_id = $businessId ORDER BY y1.id DESC limit $start,$limit ) t1,yinliu_product t2 where t1.id=t2.id";
        }

        $total = DB::select($tSql)[0];

        if (!$total->total){
            return $result;
        }

        $total = $total->total;
        $rows = DB::select($rSql);

        $result->total = $total;
        $result->rows = $rows;
        return $result;
    }


}