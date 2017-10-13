<?php
/**
 * TOP API: alibaba.open.logistics.offline.send request
 * 
 * @author auto create
 * @since 1.0, 2016.09.18
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenLogisticsOfflineSendRequest
{
	/** 
	 * 卖家发货时间
	 **/
	private $gmtLogisticsCompanySend;
	
	/** 
	 * 系统发货时间
	 **/
	private $gmtSystemSend;
	
	/** 
	 * 物流公司运单号
	 **/
	private $logisticsBillNo;
	
	/** 
	 * 物流公司ID
	 **/
	private $logisticsCompanyId;
	
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
	 * logisticsCompanyId=8时，这个字段必填，需要填写其他的物流公司名称
	 **/
	private $selfCompanyName;
	
	/** 
	 * 交易订单来源,支持的来源有：cbu-trade
	 **/
	private $tradeSourceType;
	
	private $apiParas = array();
	
	public function setGmtLogisticsCompanySend($gmtLogisticsCompanySend)
	{
		$this->gmtLogisticsCompanySend = $gmtLogisticsCompanySend;
		$this->apiParas["gmt_logistics_company_send"] = $gmtLogisticsCompanySend;
	}

	public function getGmtLogisticsCompanySend()
	{
		return $this->gmtLogisticsCompanySend;
	}

	public function setGmtSystemSend($gmtSystemSend)
	{
		$this->gmtSystemSend = $gmtSystemSend;
		$this->apiParas["gmt_system_send"] = $gmtSystemSend;
	}

	public function getGmtSystemSend()
	{
		return $this->gmtSystemSend;
	}

	public function setLogisticsBillNo($logisticsBillNo)
	{
		$this->logisticsBillNo = $logisticsBillNo;
		$this->apiParas["logistics_bill_no"] = $logisticsBillNo;
	}

	public function getLogisticsBillNo()
	{
		return $this->logisticsBillNo;
	}

	public function setLogisticsCompanyId($logisticsCompanyId)
	{
		$this->logisticsCompanyId = $logisticsCompanyId;
		$this->apiParas["logistics_company_id"] = $logisticsCompanyId;
	}

	public function getLogisticsCompanyId()
	{
		return $this->logisticsCompanyId;
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

	public function setSelfCompanyName($selfCompanyName)
	{
		$this->selfCompanyName = $selfCompanyName;
		$this->apiParas["self_company_name"] = $selfCompanyName;
	}

	public function getSelfCompanyName()
	{
		return $this->selfCompanyName;
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
		return "alibaba.open.logistics.offline.send";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->gmtLogisticsCompanySend,"gmtLogisticsCompanySend");
		RequestCheckUtil::checkNotNull($this->gmtSystemSend,"gmtSystemSend");
		RequestCheckUtil::checkNotNull($this->logisticsBillNo,"logisticsBillNo");
		RequestCheckUtil::checkNotNull($this->logisticsCompanyId,"logisticsCompanyId");
		RequestCheckUtil::checkNotNull($this->orderEntryIds,"orderEntryIds");
		RequestCheckUtil::checkNotNull($this->orderId,"orderId");
		RequestCheckUtil::checkNotNull($this->tradeSourceType,"tradeSourceType");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
