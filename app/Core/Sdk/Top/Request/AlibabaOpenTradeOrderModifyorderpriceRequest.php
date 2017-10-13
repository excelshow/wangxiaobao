<?php
/**
 * TOP API: alibaba.open.trade.order.modifyorderprice request
 * 
 * @author auto create
 * @since 1.0, 2016.07.05
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenTradeOrderModifyorderpriceRequest
{
	/** 
	 * 订单修改之后的运费，单位为分
	 **/
	private $carriage;
	
	/** 
	 * 改价明细,discount值的单位为分，正数为涨价，负数为减价
	 **/
	private $entryDiscounts;
	
	/** 
	 * 订单id
	 **/
	private $orderId;
	
	private $apiParas = array();
	
	public function setCarriage($carriage)
	{
		$this->carriage = $carriage;
		$this->apiParas["carriage"] = $carriage;
	}

	public function getCarriage()
	{
		return $this->carriage;
	}

	public function setEntryDiscounts($entryDiscounts)
	{
		$this->entryDiscounts = $entryDiscounts;
		$this->apiParas["entry_discounts"] = $entryDiscounts;
	}

	public function getEntryDiscounts()
	{
		return $this->entryDiscounts;
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

	public function getApiMethodName()
	{
		return "alibaba.open.trade.order.modifyorderprice";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->carriage,"carriage");
		RequestCheckUtil::checkNotNull($this->entryDiscounts,"entryDiscounts");
		RequestCheckUtil::checkNotNull($this->orderId,"orderId");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
