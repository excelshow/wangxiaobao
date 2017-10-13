<?php

/**
 * 资源位信息对象新版
 * @author auto create
 */
class AdzoneDTO
{
	
	/** 
	 * 资源位id标识
	 **/
	public $adzone_id;
	
	/** 
	 * 创意等级要求，99:未分级，1:一级
	 **/
	public $adzone_level;
	
	/** 
	 * 资源位名称
	 **/
	public $adzone_name;
	
	/** 
	 * 尺寸
	 **/
	public $adzone_size;
	
	/** 
	 * 创意类型（位运算）,1文字，2 图片，4 Flash，8 视频，16 文字链， 32 图文广告， 64 JS广告牌， 128 HTML， 256 flash不遮盖 ,  512创意模板
	 **/
	public $allow_ad_format;
	
	/** 
	 * 广告主类型，-1:不限,1:淘宝,2:天猫,3:淘宝和天猫
	 **/
	public $allow_adv_type;
	
	/** 
	 * 站内/外，1站内，0站外
	 **/
	public $is_inside;
	
	/** 
	 * 最低CPM价格
	 **/
	public $min_cpm_price;
	
	/** 
	 * 媒体信息
	 **/
	public $site_name;
	
	/** 
	 * 媒体url
	 **/
	public $site_url;
	
	/** 
	 * 资源位图例
	 **/
	public $snapshot_path;
	
	/** 
	 * 可投放类目，空代表不限
	 **/
	public $suited_ad_cats;
	
	/** 
	 * 资源位动态
	 **/
	public $trend;	
}
?>