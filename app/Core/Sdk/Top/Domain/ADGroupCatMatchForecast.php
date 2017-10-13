<?php

/**
 * 类目出价预估信息
 * @author auto create
 */
class ADGroupCatMatchForecast
{
	
	/** 
	 * 推广组ID
	 **/
	public $adgroup_id;
	
	/** 
	 * 类目出价ID
	 **/
	public $catmatch_id;
	
	/** 
	 * 昵称
	 **/
	public $nick;
	
	/** 
	 * 点击预估；根据出价预估点击量 40:784,50:1007表示出价40分点击量为783；出价50分点击量为1007
	 **/
	public $price_click;
	
	/** 
	 * 消耗预估；根据出价预估消耗。40:20,50:21表示出价40元分，消耗20分；出价50分消耗21分
	 **/
	public $price_cust;
	
	/** 
	 * 排名预估;根据出价预估排名。 40:101,41:101表示出价40分排名101位；出价41分排名101位
	 **/
	public $price_rank;	
}
?>