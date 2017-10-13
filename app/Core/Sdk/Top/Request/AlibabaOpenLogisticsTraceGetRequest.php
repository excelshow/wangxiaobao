<?php
/**
 * TOP API: alibaba.open.logistics.trace.get request
 * 
 * @author auto create
 * @since 1.0, 2016.06.30
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenLogisticsTraceGetRequest
{
	/** 
	 * 该订单下的物流编号
	 **/
	private $logisticsId;
	
	/** 
	 * 订单号
	 **/
	private $orderId;
	
	/** 
	 * 交易订单来源,支持的来源有：cbu-trade
	 **/
	private $tradeSourceType;
	
	private $apiParas = array();
	
	public function setLogisticsId($logisticsId)
	{
		$this->logisticsId = $logisticsId;
		$this->apiParas["logistics_id"] = $logisticsId;
	}

	public function getLogisticsId()
	{
		return $this->logisticsId;
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
		return "alibaba.open.logistics.trace.get";
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
