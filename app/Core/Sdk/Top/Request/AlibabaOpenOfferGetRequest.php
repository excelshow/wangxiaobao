<?php
/**
 * TOP API: alibaba.open.offer.get request
 * 
 * @author auto create
 * @since 1.0, 2016.08.23
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenOfferGetRequest
{
	/** 
	 * offerID
	 **/
	private $offerId;
	
	/** 
	 * 自定义返回字段。多个字段以半角逗号分隔;其中如下参数无法通过该API获得：freightTemplateId、freightType、productUnitWeight、retailPrice、sendGoodsId、unit
	 **/
	private $returnFields;
	
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

	public function setReturnFields($returnFields)
	{
		$this->returnFields = $returnFields;
		$this->apiParas["return_fields"] = $returnFields;
	}

	public function getReturnFields()
	{
		return $this->returnFields;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.offer.get";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->offerId,"offerId");
		RequestCheckUtil::checkNotNull($this->returnFields,"returnFields");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
