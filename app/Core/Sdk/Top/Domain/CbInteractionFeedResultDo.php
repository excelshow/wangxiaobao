<?php

/**
 * 动态详细内容
 * @author auto create
 */
class CbInteractionFeedResultDo
{
	
	/** 
	 * 错误详细信息，如果成功，则为空或者null
	 **/
	public $err_msg;
	
	/** 
	 * 错误详细信息，如果成功，则为空或者null
	 **/
	public $err_trace;
	
	/** 
	 * 动态内容json
	 **/
	public $module;
	
	/** 
	 * 错误码，如果成功，则为0
	 **/
	public $ret_code;
	
	/** 
	 * true：调用成功，false：调用失败
	 **/
	public $success;	
}
?>