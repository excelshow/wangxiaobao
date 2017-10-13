<?php
/**
 * TOP API: alibaba.open.logistics.orders.get request
 * 
 * @author auto create
 * @since 1.0, 2016.06.30
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenLogisticsOrdersGetRequest
{
	/** 
	 * 需要返回的字段，目前有:company.name,sender,receiver,sendgood。返回的字段要用英文逗号分隔开
	 **/
	private $fields;
	
	/** 
	 * 交易订单ID
	 **/
	private $orderId;
	
	/** 
	 * 交易订单来源,支持的来源有：cbu-trade
	 **/
	private $tradeSourceType;
	
	private $apiParas = array();
	
	public function setFields($fields)
	{
		$this->fields = $fields;
		$this->apiParas["fields"] = $fields;
	}

	public function getFields()
	{
		return $this->fields;
	}

	public function setOrderId($orderId)
	{
		$this->orderId = $orderId;
		$this->apiParas["order_id"] = $orderId;
	}

	public function getOrderId()
	{
		return $this->orderId;
	}

	public function setTradeSourceType($tradeSourceType)
	{
		$this->tradeSourceType = $tradeSourceType;
		$this->apiParas["trade_source_type"] = $tradeSourceType;
	}

	public function getTradeSourceType()
	{
		return $this->tradeSourceType;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.logistics.orders.get";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->orderId,"orderId");
		RequestCheckUtil::checkNotNull($this->tradeSourceType,"tradeSourceType");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
