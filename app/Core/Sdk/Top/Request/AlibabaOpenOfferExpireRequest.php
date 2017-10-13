<?php
/**
 * TOP API: alibaba.open.offer.expire request
 * 
 * @author auto create
 * @since 1.0, 2016.07.05
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenOfferExpireRequest
{
	/** 
	 * offer ID列表；多个ID半角分号分隔
	 **/
	private $offerIds;
	
	private $apiParas = array();
	
	public function setOfferIds($offerIds)
	{
		$this->offerIds = $offerIds;
		$this->apiParas["offer_ids"] = $offerIds;
	}

	public function getOfferIds()
	{
		return $this->offerIds;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.offer.expire";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->offerIds,"offerIds");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
