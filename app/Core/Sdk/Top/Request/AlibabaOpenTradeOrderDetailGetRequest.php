<?php
/**
 * TOP API: alibaba.open.trade.order.detail.get request
 * 
 * @author auto create
 * @since 1.0, 2016.08.09
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenTradeOrderDetailGetRequest
{
	/** 
	 * 订单号
	 **/
	private $id;
	
	/** 
	 * 是否需要发票信息
	 **/
	private $needInvoiceInfo;
	
	/** 
	 * 是否需要物流单信息
	 **/
	private $needLogisticsOrderList;
	
	/** 
	 * 是否需要订单明细
	 **/
	private $needOrderEntries;
	
	/** 
	 * 是否需要订单备注
	 **/
	private $needOrderMemoList;
	
	private $apiParas = array();
	
	public function setId($id)
	{
		$this->id = $id;
		$this->apiParas["id"] = $id;
	}

	public function getId()
	{
		return $this->id;
	}

	public function setNeedInvoiceInfo($needInvoiceInfo)
	{
		$this->needInvoiceInfo = $needInvoiceInfo;
		$this->apiParas["need_invoice_info"] = $needInvoiceInfo;
	}

	public function getNeedInvoiceInfo()
	{
		return $this->needInvoiceInfo;
	}

	public function setNeedLogisticsOrderList($needLogisticsOrderList)
	{
		$this->needLogisticsOrderList = $needLogisticsOrderList;
		$this->apiParas["need_logistics_order_list"] = $needLogisticsOrderList;
	}

	public function getNeedLogisticsOrderList()
	{
		return $this->needLogisticsOrderList;
	}

	public function setNeedOrderEntries($needOrderEntries)
	{
		$this->needOrderEntries = $needOrderEntries;
		$this->apiParas["need_order_entries"] = $needOrderEntries;
	}

	public function getNeedOrderEntries()
	{
		return $this->needOrderEntries;
	}

	public function setNeedOrderMemoList($needOrderMemoList)
	{
		$this->needOrderMemoList = $needOrderMemoList;
		$this->apiParas["need_order_memo_list"] = $needOrderMemoList;
	}

	public function getNeedOrderMemoList()
	{
		return $this->needOrderMemoList;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.trade.order.detail.get";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->id,"id");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
