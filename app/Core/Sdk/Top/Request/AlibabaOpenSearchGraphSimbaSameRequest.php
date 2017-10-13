<?php
/**
 * TOP API: alibaba.open.search.graph.simba.same request
 * 
 * @author auto create
 * @since 1.0, 2016.05.17
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenSearchGraphSimbaSameRequest
{
	/** 
	 * 查询的数量，最大4
	 **/
	private $number;
	
	/** 
	 * 淘宝的offer的id
	 **/
	private $taobaoOfferId;
	
	private $apiParas = array();
	
	public function setNumber($number)
	{
		$this->number = $number;
		$this->apiParas["number"] = $number;
	}

	public function getNumber()
	{
		return $this->number;
	}

	public function setTaobaoOfferId($taobaoOfferId)
	{
		$this->taobaoOfferId = $taobaoOfferId;
		$this->apiParas["taobao_offer_id"] = $taobaoOfferId;
	}

	public function getTaobaoOfferId()
	{
		return $this->taobaoOfferId;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.search.graph.simba.same";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->number,"number");
		RequestCheckUtil::checkNotNull($this->taobaoOfferId,"taobaoOfferId");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
