<?php

/**
 * 创意
 * @author auto create
 */
class Creative
{
	
	/** 
	 * 推广组id
	 **/
	public $adgroup_id;
	
	/** 
	 * 审核拒绝原因描述
	 **/
	public $audit_desc;
	
	/** 
	 * 审核状态： audit_wait-待审核；audit_pass-审核通过(上线)；audit_reject-审核拒绝；默认为audit_pass。
	 **/
	public $audit_status;
	
	/** 
	 * 推广计划Id
	 **/
	public $campaign_id;
	
	/** 
	 * 创建时间
	 **/
	public $create_time;
	
	/** 
	 * 创意id
	 **/
	public $creative_id;
	
	/** 
	 * 创意图片地址，必须是推广组对应商品的图片之一
	 **/
	public $img_url;
	
	/** 
	 * 最后修改时间
	 **/
	public $modified_time;
	
	/** 
	 * 主人昵称
	 **/
	public $nick;
	
	/** 
	 * 创意标题，最多20个汉字
	 **/
	public $title;	
}
?>