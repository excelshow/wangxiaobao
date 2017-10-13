<?php

/**
 * 轻任务
 * @author auto create
 */
class QTask
{
	
	/** 
	 * json格式的字符串，包含跳转协议
	 **/
	public $action;
	
	/** 
	 * 附件的文件名
	 **/
	public $attachments;
	
	/** 
	 * 业务入口
	 **/
	public $biz_entry;
	
	/** 
	 * 业务ID
	 **/
	public $biz_id;
	
	/** 
	 * 点击业务号时的动作
	 **/
	public $biz_id_action;
	
	/** 
	 * 业务号的展示名称
	 **/
	public $biz_id_name;
	
	/** 
	 * 与业务相关的对象。当前主要用于保存买家nick
	 **/
	public $biz_nick;
	
	/** 
	 * 业务参数
	 **/
	public $biz_param;
	
	/** 
	 * 业务类型
	 **/
	public $biz_type;
	
	/** 
	 * biz_type的类型中文名
	 **/
	public $biz_type_str;
	
	/** 
	 * 当前任务的评论数
	 **/
	public $comment_count;
	
	/** 
	 * 新任务的内容
	 **/
	public $content;
	
	/** 
	 * 表示是否为本条记录接收人实际完成
	 **/
	public $finish_flag;
	
	/** 
	 * 任务完成标识, 0-一个人完成整个任务, 1-所有人完成整个任务完成，冗余任务元数据字段
	 **/
	public $finish_strategy;
	
	/** 
	 * 任务创建时间
	 **/
	public $gmt_create;
	
	/** 
	 * gmt_create的数字格式
	 **/
	public $gmt_create_long;
	
	/** 
	 * 任务完成时间，格式：当前时间毫秒数
	 **/
	public $gmt_finished;
	
	/** 
	 * gmt_finished的数字格式
	 **/
	public $gmt_finished_long;
	
	/** 
	 * 任务更新时间
	 **/
	public $gmt_modified;
	
	/** 
	 * gmt_modified的数字格式
	 **/
	public $gmt_modified_long;
	
	/** 
	 * 任务ID
	 **/
	public $id;
	
	/** 
	 * 是否删除
	 **/
	public $is_deleted;
	
	/** 
	 * 任务备注
	 **/
	public $memo;
	
	/** 
	 * 关联的任务元数据
	 **/
	public $meta;
	
	/** 
	 * 任务元id
	 **/
	public $metadata_id;
	
	/** 
	 * 父任务的id
	 **/
	public $parent_task_id;
	
	/** 
	 * 优先级，同任务元中的priority值，方便查询使用。
	 **/
	public $priority;
	
	/** 
	 * 任务&ldquo;已读&rdquo;、&ldquo;未读&rdquo;状态，0：已读，1：未读
	 **/
	public $read_status;
	
	/** 
	 * 执行者用户昵称
	 **/
	public $receiver_nick;
	
	/** 
	 * 执行者用户数字ID
	 **/
	public $receiver_uid;
	
	/** 
	 * 到期提醒的方式。0-不提醒 1-pc和移动提醒 2-仅pc提醒 3-仅移动提醒。在查询类接口中，只需要传2或3即可，为1的数据都会包含在其中。
	 **/
	public $remind_flag;
	
	/** 
	 * 提醒时间
	 **/
	public $remind_time;
	
	/** 
	 * remind_time的数字格式
	 **/
	public $remind_time_long;
	
	/** 
	 * 发起人nick
	 **/
	public $sender_nick;
	
	/** 
	 * 发起人uid
	 **/
	public $sender_uid;
	
	/** 
	 * 任务状态：0-未执行，1-执行中，2-执行完成，3-超时，4-取消，5-忽略
	 **/
	public $status;
	
	/** 
	 * 子业务类型
	 **/
	public $sub_biz_type;
	
	/** 
	 * 子任务状态，由业务方自定义
	 **/
	public $sub_status;
	
	/** 
	 * 任务标签
	 **/
	public $tag;
	
	/** 
	 * 同次操作相关的任务数
	 **/
	public $total_count;
	
	/** 
	 * 语音附件的文件名
	 **/
	public $voice_file;	
}
?>