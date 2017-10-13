<?php
/**
 * TOP API: alibaba.open.spubyattribute.get request
 * 
 * @author auto create
 * @since 1.0, 2016.06.30
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenSpubyattributeGetRequest
{
	/** 
	 * 叶子类目ID
	 **/
	private $categoryId;
	
	/** 
	 * 产品关键属性和值，以“>”为分隔符，输入格式如示例 ：属性:属性值>属性:属性值
	 **/
	private $keyAttributes;
	
	private $apiParas = array();
	
	public function setCategoryId($categoryId)
	{
		$this->categoryId = $categoryId;
		$this->apiParas["category_id"] = $categoryId;
	}

	public function getCategoryId()
	{
		return $this->categoryId;
	}

	public function setKeyAttributes($keyAttributes)
	{
		$this->keyAttributes = $keyAttributes;
		$this->apiParas["key_attributes"] = $keyAttributes;
	}

	public function getKeyAttributes()
	{
		return $this->keyAttributes;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.spubyattribute.get";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->categoryId,"categoryId");
		RequestCheckUtil::checkNotNull($this->keyAttributes,"keyAttributes");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
