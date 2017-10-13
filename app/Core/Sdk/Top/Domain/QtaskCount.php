<?php

/**
 * 用于桌面插件的统计类型
 * @author auto create
 */
class QtaskCount
{
	
	/** 
	 * 未完成的会员任务
	 **/
	public $member;
	
	/** 
	 * 需要提醒的任务
	 **/
	public $remind;
	
	/** 
	 * 未完成的交易任务
	 **/
	public $trade;
	
	/** 
	 * 未完成的发起的任务
	 **/
	public $wait_for_other;
	
	/** 
	 * 未完成的收到的任务
	 **/
	public $wait_for_self;	
}
?>