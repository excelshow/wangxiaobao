<?php

/**
 * 质量分新实体
 * @author auto create
 */
class QScoreSplitDto
{
	
	/** 
	 * 推广组id
	 **/
	public $adgroup_id;
	
	/** 
	 * 类目质量得分
	 **/
	public $cat_match_score;
	
	/** 
	 * 关键词新质量得分列表，包含PC和移动的质量分
	 **/
	public $word_score_list;	
}
?>