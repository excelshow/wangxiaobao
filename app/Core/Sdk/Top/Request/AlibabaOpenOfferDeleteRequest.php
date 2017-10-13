<?php
/**
 * TOP API: alibaba.open.offer.delete request
 * 
 * @author auto create
 * @since 1.0, 2016.07.05
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenOfferDeleteRequest
{
	/** 
	 * offer ID列表；目前只支持单个产品删除
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
		return "alibaba.open.offer.delete";
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
