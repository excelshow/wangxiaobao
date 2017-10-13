<?php
/**
 * TOP API: alibaba.open.category.getpostcatlist request
 * 
 * @author auto create
 * @since 1.0, 2016.06.30
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenCategoryGetpostcatlistRequest
{
	/** 
	 * 类目ID列表，支持多个ID批量查询，多个ID以半角冒逗分隔
	 **/
	private $catIds;
	
	private $apiParas = array();
	
	public function setCatIds($catIds)
	{
		$this->catIds = $catIds;
		$this->apiParas["cat_ids"] = $catIds;
	}

	public function getCatIds()
	{
		return $this->catIds;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.category.getpostcatlist";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->catIds,"catIds");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
