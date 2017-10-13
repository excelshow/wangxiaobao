<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/11/28
 * Time: 15:24
 */
namespace App\Core\Modules\Printa\Dao;

use App\Core\Common\Model\PrintProductTpl;
use App\Core\Common\Model\PrintProductTplItem;
use App\Core\Common\Model\PrintSetting;
class ProductTplDao{
    //获取货单模版和打印项
    public static function getProductTpls($pageSize,$pageNum,$userId){
        $result = new \stdClass();
        $result->total = '0';
        $result->rows = [];

        $skip = $pageSize*($pageNum-1);

        $query = PrintProductTpl::where('tpl_type','sys')
            ->orWhere(function ($query) use ($userId){
                $query->where('tpl_type','user')
                    ->where('print_product_tpl.user_id',$userId);
            });

        $query = $query->leftJoin('print_setting', function ($join) use($userId) {
            $join->on('print_product_tpl.id', '=', 'print_setting.default_product_tpl_id')
                ->where('print_setting.user_id', '=', $userId);
        })
            ->select(
                'print_product_tpl.*',
                'print_setting.default_product_tpl_id',
                'print_setting.default_product_tpl_name'
            );


        $total = $query->count();
        $rows = $query
            ->orderBy('id','asc')
            ->skip($skip)
            ->take($pageSize)
            ->get();

        if($total==0){
            return $result;
        }

        foreach ($rows as $r=>$record){
            $tplId = $record->id;
            $items = PrintProductTplItem::where('tpl_id',$tplId)->get();
            $record->items = $items;
        }
        $result->total = $total;
        $result->rows = $rows;
        return $result;
    }

    //新建货单模版
    public static function addProductTpl($tpl,$items,$user){
        $nick = $user->nick;
        $userId = $user->user_id;

        $type = $tpl->tpl_type;

        $model = new PrintProductTpl();
        $model->user_id = $userId;
        $model->user_nick = $nick;
        $model->tpl_name = $tpl->tpl_name;
        $model->tpl_type = $tpl->tpl_type;
        $model->page_name = $tpl->page_name;
        $model->page_width = $tpl->page_width;
        $model->page_height = $tpl->page_height;
        $model->padding_top = $tpl->padding_top;
        $model->padding_left = $tpl->padding_left;
        $model->sorter_key = $tpl->sorter_key;
        $model->sorter_order = $tpl->sorter_order;
        $model->sorter_name = $tpl->sorter_name;
        $model->font_size = $tpl->font_size;
        $model->font_family =$tpl->font_family;
        $model->font_weight = $tpl->font_weight;
        $model->save();

        $record = PrintProductTpl::where('user_nick',$nick)
            ->where('tpl_type',$type)
            ->orderBy('id','desc')
            ->first();
        if(!$record){
            return $record;
        }

        $tplId = $record->id;
        foreach ($items as $i=>$item){
            $model = new PrintProductTplItem();
            $model->tpl_id = $tplId;
            $model->item_name = $item->item_name;
            $model->status = 'Y';
            $model->content = $item->content;
            $model->save();
        }

        $tpl->items = $items;
        return $tpl;
    }
    //更新货单模版
    public static function updateProductTpl($tpl,$items,$user){

        //$userId = $user->user_id;

        $tplId = $tpl->id;
        $record = PrintProductTpl::where('id',$tplId)
            ->first();
        if(!$record){
            return $record;
        }

        $record->tpl_name = $tpl->tpl_name;
        $record->page_name = $tpl->page_name;
        $record->page_width = $tpl->page_width;
        $record->page_height = $tpl->page_height;
        $record->padding_top = $tpl->padding_top;
        $record->padding_left = $tpl->padding_left;
        $record->sorter_key = $tpl->sorter_key;
        $record->sorter_order = $tpl->sorter_order;
        $record->sorter_name = $tpl->sorter_name;
        $record->font_size = $tpl->font_size;
        $record->font_family =$tpl->font_family;
        $record->font_weight = $tpl->font_weight;
        $record->save();

        PrintProductTplItem::where('tpl_id',$tplId)
            ->update(['status'=>'N']);
        foreach ($items as $i=>$item){
            $name  = $item->item_name;
            $model =  PrintProductTplItem::where('tpl_id',$tplId)
                ->where('item_name',$name)
                ->first();
            if(!$model){
                $model = new PrintProductTplItem();
                $model->tpl_id = $tplId;
                $model->item_name = $item->item_name;
            }
            $model->status = 'Y';
            $model->content = $item->content;
            $model->save();
        }
        $tpl->items = $items;
        return $tpl;
    }
    //删除货单模版
    public static function deleteProductTpl($tplId){
        PrintProductTpl::where('id',$tplId)->delete();
        PrintProductTplItem::where('tpl_id',$tplId)->delete();
        return true;
    }

    //设为默认
    public static function setDefaultProductTpl($tplId,$tplType,$tplName,$nick,$userId){

        $record = PrintSetting::where('user_id',$userId)
            ->first();

        if(!$record){
            $record = new PrintSetting();
            $record->user_id = $userId;
            $record->user_nick = $nick;
        }
        $record->default_product_tpl_id = $tplId;
        $record->default_product_tpl_name = $tplName;
        $record->default_product_tpl_type = $tplType;
        $record->save();
        return $record;
    }




    //获取默认货单模版和打印项
    public static function getDefaultProductTpl($userId){
        $setting = PrintSetting::where('user_id',$userId)->first();
        if(!$setting){
            return null;
        }
        $tplId = $setting->default_product_tpl_id;
        if(!$tplId){
            return null;
        }

        $tpl = PrintProductTpl::where('id',$tplId)->first();

        if(!$tpl){
            return null;
        }
        $items = PrintProductTplItem::where('tpl_id',$tplId)->get();

        $tpl->items = $items;
        return $tpl;
    }
}