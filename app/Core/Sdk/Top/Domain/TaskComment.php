<?php

/**
 * 轻任务评论
 * @author auto create
 */
class TaskComment
{
	
	/** 
	 * 评论的附件信息，userId_timestamp_随机字符串
	 **/
	public $attachments;
	
	/** 
	 * 评论内容
	 **/
	public $content;
	
	/** 
	 * 创建时间
	 **/
	public $gmt_create;
	
	/** 
	 * 评论id
	 **/
	public $id;
	
	/** 
	 * 任务号
	 **/
	public $task_id;
	
	/** 
	 * 评论人的userid
	 **/
	public $user_id;
	
	/** 
	 * 评论人nick
	 **/
	public $user_nick;	
}
?>