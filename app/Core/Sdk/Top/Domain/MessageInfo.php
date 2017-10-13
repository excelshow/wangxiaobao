<?php

/**
 * 卖家移动工作平台返回资源计数结构体
 * @author auto create
 */
class MessageInfo
{
	
	/** 
	 * 最新的一个消息
	 **/
	public $last_msg;
	
	/** 
	 * 资源的数量
	 **/
	public $number;
	
	/** 
	 * 子账号userid
	 **/
	public $sub_user_id;
	
	/** 
	 * 业务类型，比如：item表示商品
	 **/
	public $topic;
	
	/** 
	 * 总数
	 **/
	public $total;
	
	/** 
	 * 主账号userid
	 **/
	public $user_id;	
}
?>