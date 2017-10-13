<?php

/**
 * 缺陷结构
 * @author auto create
 */
class Bug
{
	
	/** 
	 * 缺陷指派人
	 **/
	public $assigned_to;
	
	/** 
	 * 缺陷创建者
	 **/
	public $author;
	
	/** 
	 * 缺陷注释。fields中设置为bug_comments.id、bug_comments.desc、bug_comments.position等形式就会返回相应的字段
	 **/
	public $bug_comments;
	
	/** 
	 * 缺陷图片。目前最多支持5张。fields中设置为bug_imgs.id、bug_imgs.url、bug_imgs.position 等形式就会返回相应的字段
	 **/
	public $bug_imgs;
	
	/** 
	 * 自定义属性过滤。xx表示自定义属性的编号。常用如下： cf_47:缺陷的发现阶段 值：["1-PRD评审前" "2-PRD评审时" "3-PRD评审后UC评审前" "4-UC评审时" "5-UC评审后测试执行前" "6-测试执行期间" "7-预发期间" "8-发布后" "9-daily回归" "10-测试用例评审时" "11-发布前遗留"] cf_55:浏览器
浏览器 cf_59:部署标志
	 **/
	public $cf_xx;
	
	/** 
	 * 缺陷关闭时间
	 **/
	public $closed_at;
	
	/** 
	 * 缺陷创建时间
	 **/
	public $created_at;
	
	/** 
	 * 详细描述
	 **/
	public $description;
	
	/** 
	 * 缺陷修复时间
	 **/
	public $fixed_at;
	
	/** 
	 * 缺陷ID
	 **/
	public $id;
	
	/** 
	 * 优先级。据不同的优先级，BUG的期望修复时间不同。可选值：1(urgent,为24小时内)，2(high)，3(medium)，4（low）
	 **/
	public $priority;
	
	/** 
	 * 产品ID
	 **/
	public $project_id;
	
	/** 
	 * 严重程度。可选值：1-blocker,2-major,3-normal,4-trivial
	 **/
	public $serious_level;
	
	/** 
	 * 缺陷状态
	 **/
	public $status;
	
	/** 
	 * 缺陷标题
	 **/
	public $subject;
	
	/** 
	 * 功能模块
	 **/
	public $testsuite;
	
	/** 
	 * 跟踪类型。默认产品缺陷
	 **/
	public $tracker;
	
	/** 
	 * 缺陷修改时间
	 **/
	public $updated_at;
	
	/** 
	 * 项目/日常ID
	 **/
	public $version_id;	
}
?>