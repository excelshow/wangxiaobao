<?php
/**
 * TOP API: alibaba.open.officialsite.seo.getoffermetainfos request
 * 
 * @author auto create
 * @since 1.0, 2016.06.29
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenOfficialsiteSeoGetoffermetainfosRequest
{
	/** 
	 * 产品ID列表，一次最多支持20个
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
		return "alibaba.open.officialsite.seo.getoffermetainfos";
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
