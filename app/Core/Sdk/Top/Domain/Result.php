<?php

/**
 * 接口返回model
 * @author auto create
 */
class Result
{
	
	/** 
	 * 返回的数据
	 **/
	public $data;
	
	/** 
	 * 错误码
	 **/
	public $err_code;
	
	/** 
	 * 错误信息
	 **/
	public $err_msg;
	
	/** 
	 * xxx
	 **/
	public $module_map;
	
	/** 
	 * 注册抽奖活动失败
	 **/
	public $success;
	
	/** 
	 * 方便追踪请求的唯一标识
	 **/
	public $trace_id;	
}
?>