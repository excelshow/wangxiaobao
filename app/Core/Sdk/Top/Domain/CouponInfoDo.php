<?php

/**
 * 千牛卖家优惠券信息
 * @author auto create
 */
class CouponInfoDo
{
	
	/** 
	 * 优惠券面额
	 **/
	public $amount;
	
	/** 
	 * 已经领用优惠券数量
	 **/
	public $apply_count;
	
	/** 
	 * 优惠券领用链接
	 **/
	public $apply_url;
	
	/** 
	 * 优惠券结束时间
	 **/
	public $end_time;
	
	/** 
	 * 使用优惠券是否有前提条件
	 **/
	public $has_limit;
	
	/** 
	 * 优惠券id（uuid）
	 **/
	public $id;
	
	/** 
	 * 优惠券使用前提
	 **/
	public $start_fee;
	
	/** 
	 * 优惠券有效起始时间
	 **/
	public $start_time;
	
	/** 
	 * 优惠券是否领取，0未领取 1已领取
	 **/
	public $status;
	
	/** 
	 * 卖家优惠券code
	 **/
	public $template_code;
	
	/** 
	 * 买家优惠券id
	 **/
	public $template_id;
	
	/** 
	 * 优惠券名字
	 **/
	public $title;
	
	/** 
	 * 优惠券总量
	 **/
	public $total_count;
	
	/** 
	 * 优惠券类型：店铺优惠券或商品优惠券
	 **/
	public $type;	
}
?>