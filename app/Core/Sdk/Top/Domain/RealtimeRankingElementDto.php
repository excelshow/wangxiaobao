<?php

/**
 * 实时排名实体
 * @author auto create
 */
class RealtimeRankingElementDto
{
	
	/** 
	 * 关键词ID
	 **/
	public $bidwordid;
	
	/** 
	 * 移动排名（说明:返回值增加对于设备的判断，值如下：创意未投放、计划未投放，优先判断创意设备）
	 **/
	public $mobile_rank;
	
	/** 
	 * 计算机排名（说明:返回值增加对于设备的判断，值如下：创意未投放、计划未投放，优先判断创意设备）
	 **/
	public $pc_rank;
	
	/** 
	 * 算法返回状态
	 **/
	public $stat;	
}
?>