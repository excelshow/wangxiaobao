<?php
/**
 * TOP API: alibaba.open.offerpostfeatures.get request
 * 
 * @author auto create
 * @since 1.0, 2016.06.30
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenOfferpostfeaturesGetRequest
{
	/** 
	 * 类目ID
	 **/
	private $categoryId;
	
	/** 
	 * 时间戳
	 **/
	private $timeStamp;
	
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

	public function setTimeStamp($timeStamp)
	{
		$this->timeStamp = $timeStamp;
		$this->apiParas["time_stamp"] = $timeStamp;
	}

	public function getTimeStamp()
	{
		return $this->timeStamp;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.offerpostfeatures.get";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->categoryId,"categoryId");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
