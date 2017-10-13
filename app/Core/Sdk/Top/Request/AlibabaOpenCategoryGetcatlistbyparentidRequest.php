<?php
/**
 * TOP API: alibaba.open.category.getcatlistbyparentid request
 * 
 * @author auto create
 * @since 1.0, 2016.06.30
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenCategoryGetcatlistbyparentidRequest
{
	/** 
	 * 获取该父类目的所有子类目
	 **/
	private $getAllChildren;
	
	/** 
	 * 父类目ID
	 **/
	private $parentCategoryId;
	
	private $apiParas = array();
	
	public function setGetAllChildren($getAllChildren)
	{
		$this->getAllChildren = $getAllChildren;
		$this->apiParas["get_all_children"] = $getAllChildren;
	}

	public function getGetAllChildren()
	{
		return $this->getAllChildren;
	}

	public function setParentCategoryId($parentCategoryId)
	{
		$this->parentCategoryId = $parentCategoryId;
		$this->apiParas["parent_category_id"] = $parentCategoryId;
	}

	public function getParentCategoryId()
	{
		return $this->parentCategoryId;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.category.getcatlistbyparentid";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->parentCategoryId,"parentCategoryId");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
