<?php
/**
 * TOP API: alibaba.open.offer.new request
 * 
 * @author auto create
 * @since 1.0, 2016.07.05
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenOfferNewRequest
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
		return "alibaba.open.offer.new";
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
