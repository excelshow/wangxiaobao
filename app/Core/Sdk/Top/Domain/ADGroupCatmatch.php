<?php

/**
 * 推广组类目出价
 * @author auto create
 */
class ADGroupCatmatch
{
	
	/** 
	 * 推广组id
	 **/
	public $adgroup_id;
	
	/** 
	 * 推广计划Id
	 **/
	public $campaign_id;
	
	/** 
	 * 类目出价Id
	 **/
	public $catmatch_id;
	
	/** 
	 * 创建时间
	 **/
	public $create_time;
	
	/** 
	 * 是否使用推广组默认出价，false-不使用默认出价  true-使用默认出价；默认true
	 **/
	public $is_default_price;
	
	/** 
	 * 类目出价，单位为分，不能小于5
	 **/
	public $max_price;
	
	/** 
	 * 最后修改时间
	 **/
	public $modified_time;
	
	/** 
	 * 推广组主人昵称
	 **/
	public $nick;
	
	/** 
	 * 是否启用类目出价；offline-不启用；online-启用；默认启用
	 **/
	public $online_status;
	
	/** 
	 * 类目出价质量得分
	 **/
	public $qscore;	
}
?>