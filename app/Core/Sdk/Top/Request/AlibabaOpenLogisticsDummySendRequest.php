<?php
/**
 * TOP API: alibaba.open.logistics.dummy.send request
 * 
 * @author auto create
 * @since 1.0, 2016.06.29
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenLogisticsDummySendRequest
{
	/** 
	 * 发货时间
	 **/
	private $gmtSystemSend;
	
	/** 
	 * 订单明细ID, 多个明细请用英文逗号分隔
	 **/
	private $orderEntryIds;
	
	/** 
	 * 订单ID
	 **/
	private $orderId;
	
	/** 
	 * 用户备注
	 **/
	private $remarks;
	
	/** 
	 * 交易订单来源
	 **/
	private $tradeSourceType;
	
	private $apiParas = array();
	
	public function setGmtSystemSend($gmtSystemSend)
	{
		$this->gmtSystemSend = $gmtSystemSend;
		$this->apiParas["gmt_system_send"] = $gmtSystemSend;
	}

	public function getGmtSystemSend()
	{
		return $this->gmtSystemSend;
	}

	public function setOrderEntryIds($orderEntryIds)
	{
		$this->orderEntryIds = $orderEntryIds;
		$this->apiParas["order_entry_ids"] = $orderEntryIds;
	}

	public function getOrderEntryIds()
	{
		return $this->orderEntryIds;
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

	public function setRemarks($remarks)
	{
		$this->remarks = $remarks;
		$this->apiParas["remarks"] = $remarks;
	}

	public function getRemarks()
	{
		return $this->remarks;
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
		return "alibaba.open.logistics.dummy.send";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->gmtSystemSend,"gmtSystemSend");
		RequestCheckUtil::checkNotNull($this->orderEntryIds,"orderEntryIds");
		RequestCheckUtil::checkNotNull($this->orderId,"orderId");
		RequestCheckUtil::checkNotNull($this->tradeSourceType,"tradeSourceType");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
