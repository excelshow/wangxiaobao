<?php

/**
 * 轻任务元数据
 * @author auto create
 */
class QTaskMetadata
{
	
	/** 
	 * 点击动作的协议
	 **/
	public $action;
	
	/** 
	 * 轻任务附件信息，userId_timestamp_随机字符串，例如：23434_1234458623_seresfto
	 **/
	public $attachments;
	
	/** 
	 * 我的安排的任务上的提醒时间
	 **/
	public $biz_remind_time;
	
	/** 
	 * 是biz_remind_time的数字格式
	 **/
	public $biz_remind_time_long;
	
	/** 
	 * 来源系统ID
	 **/
	public $biz_sys_id;
	
	/** 
	 * 任务在来源系统的类型, 这个是业务系统的自定义类型
	 **/
	public $biz_sys_task_type;
	
	/** 
	 * 接收的任务类型，所有相关的任务的类型一致时有效。当任务类型不一致时为diff
	 **/
	public $biz_type;
	
	/** 
	 * biztype的中文名
	 **/
	public $biz_type_str;
	
	/** 
	 * 当前任务的评论数
	 **/
	public $comment_count;
	
	/** 
	 * 任务摘要内容
	 **/
	public $content;
	
	/** 
	 * 任务结束时间，格式：当前时间毫秒数
	 **/
	public $end_time;
	
	/** 
	 * end_time的数字格式
	 **/
	public $end_time_long;
	
	/** 
	 * 完成的任务数。如果完成策略是只需要1个人完成的，则只要一个人完成就会返回总任务条数。如果是所有人都要完成的，则会返回实际完成条数。
	 **/
	public $finish_count;
	
	/** 
	 * 任务完成标识： 0表示只要有一个人完成任务即可，1表示所有人需要各自都完成任务
	 **/
	public $finish_strategy;
	
	/** 
	 * 创建时间
	 **/
	public $gmt_create;
	
	/** 
	 * gmt_create的数字格式
	 **/
	public $gmt_create_long;
	
	/** 
	 * 任务更新时间
	 **/
	public $gmt_modified;
	
	/** 
	 * gmt_modified的数字格式
	 **/
	public $gmt_modified_long;
	
	/** 
	 * 主键
	 **/
	public $id;
	
	/** 
	 * 任务元备注
	 **/
	public $memo;
	
	/** 
	 * 优先级，0低，1中，2高
	 **/
	public $priority;
	
	/** 
	 * 任务的接收人
	 **/
	public $receiver;
	
	/** 
	 * 提醒标志位： 0表示不需要提醒，1表示需要状态变更提醒
	 **/
	public $reminder_flag;
	
	/** 
	 * 发起者用户昵称
	 **/
	public $sender_nick;
	
	/** 
	 * 发起者用户数字ID
	 **/
	public $sender_uid;
	
	/** 
	 * 任务开始时间，格式：当前时间毫秒数
	 **/
	public $start_time;
	
	/** 
	 * start_time的数字格式
	 **/
	public $start_time_long;
	
	/** 
	 * 0为未完成，2为完成，4为取消
	 **/
	public $status;
	
	/** 
	 * 与此任务元相关的任务数
	 **/
	public $task_count;
	
	/** 
	 * 任务标题
	 **/
	public $title;
	
	/** 
	 * 同次操作的任务元数
	 **/
	public $total_count;
	
	/** 
	 * 语音备注的文件名
	 **/
	public $voice_file;	
}
?>