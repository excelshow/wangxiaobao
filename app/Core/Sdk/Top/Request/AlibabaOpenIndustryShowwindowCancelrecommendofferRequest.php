<?php
/**
 * TOP API: alibaba.open.industry.showwindow.cancelrecommendoffer request
 * 
 * @author auto create
 * @since 1.0, 2016.07.05
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenIndustryShowwindowCancelrecommendofferRequest
{
	/** 
	 * 产品ID
	 **/
	private $offerId;
	
	private $apiParas = array();
	
	public function setOfferId($offerId)
	{
		$this->offerId = $offerId;
		$this->apiParas["offer_id"] = $offerId;
	}

	public function getOfferId()
	{
		return $this->offerId;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.industry.showwindow.cancelrecommendoffer";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->offerId,"offerId");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
