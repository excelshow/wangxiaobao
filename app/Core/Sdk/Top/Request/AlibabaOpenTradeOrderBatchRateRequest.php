<?php
/**
 * TOP API: alibaba.open.trade.order.batch.rate request
 * 
 * @author auto create
 * @since 1.0, 2016.07.05
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenTradeOrderBatchRateRequest
{
	/** 
	 * 订单评价：Map(String,TradeRateParam[]),前者为订单号，后者为评价内容与星级,结构请看数据结构订单评价参数。
评价星级(starLevel)必须是1-5, 当starLevel < 4 时必须同时指定评价内容
	 **/
	private $orders;
	
	private $apiParas = array();
	
	public function setOrders($orders)
	{
		$this->orders = $orders;
		$this->apiParas["orders"] = $orders;
	}

	public function getOrders()
	{
		return $this->orders;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.trade.order.batch.rate";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->orders,"orders");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
