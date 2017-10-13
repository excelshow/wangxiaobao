<?php

/**
 * 一页ADGroupCatMatch列表
 * @author auto create
 */
class ADGroupCatMatchPage
{
	
	/** 
	 * 类目出价列表
	 **/
	public $adgroup_catmatch_list;
	
	/** 
	 * 返回第几页的数据从1开始
	 **/
	public $page_no;
	
	/** 
	 * 每页数据大小
	 **/
	public $page_size;
	
	/** 
	 * 所查询的数据总数，只有当返回第一页数据时有值，当要求返回的数据非第一页时，此返回值无效
	 **/
	public $total_item;	
}
?>