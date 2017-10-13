<?php
/**
 * TOP API: alibaba.open.offer.modify request
 * 
 * @author auto create
 * @since 1.0, 2016.08.22
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenOfferModifyRequest
{
	/** 
	 * 描述offer的json串，需要进行URLEncode 编码，编码方式为GBK
	 **/
	private $offer;
	
	private $apiParas = array();
	
	public function setOffer($offer)
	{
		$this->offer = $offer;
		$this->apiParas["offer"] = $offer;
	}

	public function getOffer()
	{
		return $this->offer;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.offer.modify";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->offer,"offer");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
