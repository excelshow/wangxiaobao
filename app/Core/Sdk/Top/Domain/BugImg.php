<?php

/**
 * 缺陷图片结构
 * @author auto create
 */
class BugImg
{
	
	/** 
	 * 添加时间.格式:yyyy-mm-dd hh:mm:ss
	 **/
	public $created_at;
	
	/** 
	 * 图片格式
	 **/
	public $format;
	
	/** 
	 * 缺陷图片ID
	 **/
	public $id;
	
	/** 
	 * 图片名称
	 **/
	public $name;
	
	/** 
	 * 图片序号。图片展示顺序，数据越小越靠前。要求是正整数。
	 **/
	public $position;
	
	/** 
	 * 图片地址.(绝对地址,格式:http://host/image_path)
	 **/
	public $url;	
}
?>