<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/12/19
 * Time: 14:54
 */
namespace App\Core\Modules\Printa\Dao;
use App\Core\Common\Model\PrintLogisticTpl;
use App\Core\Common\Model\PrintLogisticTplItem;

class LogisticTplDao{


    //获取运单模版和打印项
    public static function getLogisticTpls($tplName,$pageSize,$pageNum,$userId){
        $result = new \stdClass();
        $result->total = 0;
        $result->rows = [];
        $skip = $pageSize*($pageNum-1);

        $query = PrintLogisticTpl::where('tpl_type','sys')
            ->orWhere(function ($query) use ($userId){
                $query->where('tpl_type','user')
                    ->where('user_id',$userId);
            });

        if($tplName){

            $query = $query->where(function ($query) use ($tplName){
                $query->where('tpl_name','like','%'.$tplName.'%')
                    ->orWhere('company_name','like','%'.$tplName.'%')
                    ->orWhere('company_no','like','%'.$tplName.'%');
            });
        }


        $total = $query->count();
        $rows = $query
            ->orderBy('id','desc')
            ->skip($skip)
            ->take($pageSize)
            ->get();

        if($total==0){
            return $result;
        }

        foreach ($rows as $r=>$record){
            $tplId = $record->id;
            $items = PrintLogisticTplItem::where('tpl_id',$tplId)->get();
            $record->items = $items;
        }
        $result->total = $total;
        $result->rows = $rows;
        return $result;
    }


    //根据物流公司id获取模版
    public static function getLogisticTplsByCompanyId($companyId,$userId){

        $query = PrintLogisticTpl::where('tpl_type','sys')
            ->where('company_id',$companyId)
            ->orWhere(function ($query) use ($userId,$companyId){
                $query->where('tpl_type','user')
                    ->where('company_id','=',$companyId)
                    ->where('user_id',$userId);

            });

        $result = $query
            ->orderBy('id','asc')
            ->get();

        return $result;
    }


    //修改模版
    public static function updateLogisticTpl($tpl,$items,$userId,$nick){
        $tplId = $tpl->id;

        $model = PrintLogisticTpl::where('id',$tplId)->first();
        $model->tpl_name=$tpl->tpl_name;
        $model->company_id=$tpl->company_id;
        $model->company_name=$tpl->company_name;
        $model->company_no=$tpl->company_no;
        $model->page_width=$tpl->page_width;
        $model->page_height=$tpl->page_height;
        $model->background_img=$tpl->background_img;
        $model->padding_top=$tpl->padding_top;
        $model->padding_left=$tpl->padding_left;
        $model->font_family=$tpl->font_family;
        $model->font_size=$tpl->font_size;
        $model->font_weight=$tpl->font_weight;
        $model->save();

        PrintLogisticTplItem::where('tpl_id',$tplId)->update(['status'=>'N']);

        foreach ($items as $i=>$item){
            //print_r($item);
            $name = $item->item_name;
            $m = PrintLogisticTplItem::where('tpl_id',$tplId)
                ->where('item_name',$name)
                ->first();

            if(!$m){
                $m= new PrintLogisticTplItem();
                $m->tpl_id=$tplId;
                $m->item_name=$item->item_name;
            }

            $m->margin_top=$item->margin_top;
            $m->margin_left = $item->margin_left;
            $m->width=$item->width;
            $m->height=$item->height;
            $m->content=$item->content;
            $m->font_family=$item->font_family;
            $m->font_size=$item->font_size;
            $m->font_weight=$item->font_weight;
            $m->status = $item->status;
            $m->save();
        }
        $tpl->items = $items;
        return $tpl;
    }

    //新建模版
    public static function addLogisticTpl($tpl,$items,$userId,$nick){

        $companyId = $tpl->company_id;


        $model = new PrintLogisticTpl();
        $model->user_id=$userId;
        $model->user_nick = $nick;
        $model->company_id = $tpl->company_id;
        $model->company_name = $tpl->company_name;
        $model->company_no = $tpl->company_no;
        $model->tpl_name =  $tpl->tpl_name;
        $model->tpl_type = $tpl->tpl_type;
        $model->page_width = $tpl->page_width;
        $model->page_height = $tpl->page_height;
        $model->background_img = $tpl->background_img;
        $model->padding_top = $tpl->padding_top;
        $model->padding_left = $tpl->padding_left;
        $model->font_family = $tpl->font_family;
        $model->font_size = $tpl->font_size;
        $model->font_weight = $tpl->font_weight;
        $model->save();

        //print_r($model);
        $record = PrintLogisticTpl::where('user_id',$userId)
            ->where('company_id',$companyId)
            ->orderBy('created_at','desc')
            ->first();
        $tplId = $record->id;
        foreach ($items as $i=>$item){
            $model = new PrintLogisticTplItem();
            $model->tpl_id= $tplId;
            $model->item_name = $item->item_name;
            $model->margin_top = $item->margin_top;
            $model->margin_left= $item->margin_left;
            $model->width = $item->width;
            $model->height = $item->height;
            $model->content = $item->content;
            $model->font_family = $item->font_family;
            $model->font_size = $item->font_size;
            $model->font_weight = $item->font_weight;
            $model->status =$item->status;
            $model->save();
        }
        $record->items = $items;
        return $record;

    }

    //删除货单模版
    public static function deleteLogisticTpl($tplId){
        PrintLogisticTpl::where('id',$tplId)->delete();
        PrintLogisticTplItem::where('tpl_id',$tplId)->delete();
        return true;
    }


    //根据id 获取物流公司默认模版
    public static function getLogisticCompanyDefaultTpl($tplId){
        $result = PrintLogisticTpl::where('id',$tplId)
            ->first();
        return $result;
    }



    //根据模版id 获取模版
    public static function getLogisticTpl($tplId){
        $result  = PrintLogisticTpl::where('id',$tplId)
            ->first();
        return $result;
    }

    //根据模版id 获取打印项
    public static function getLogisticTplItems($tplId){
        $result  = PrintLogisticTplItem::where('tpl_id',$tplId)
            ->where('status','Y')
            ->get();
        return $result;
    }


}