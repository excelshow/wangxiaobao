<?php
/**
 * TOP API: alibaba.open.trade.order.list request
 * 
 * @author auto create
 * @since 1.0, 2016.07.05
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenTradeOrderListRequest
{
	/** 
	 * 业务过滤类型（如代销）
	 **/
	private $bizTypeStrSet;
	
	/** 
	 * 买家memberId，买卖家memberId必填其一
	 **/
	private $buyerMemberId;
	
	/** 
	 * 买家评论状态，4(买家已评价), 5（买家未评价）6（不需要评价）
	 **/
	private $buyerRateStatus;
	
	/** 
	 * 订单创建时间（查询结束值）
	 **/
	private $createEndTime;
	
	/** 
	 * 订单创建时间（查询开始值）
	 **/
	private $createStartTime;
	
	/** 
	 * 是否历史订单
	 **/
	private $his;
	
	/** 
	 * 修改时间（查询结束值）
	 **/
	private $modifyEndTime;
	
	/** 
	 * 修改时间（查询开始值）
	 **/
	private $modifyStartTime;
	
	/** 
	 * 订单id列表，不能多于20个
	 **/
	private $orderIdSet;
	
	/** 
	 * 订单状态
	 **/
	private $orderStatusEnum;
	
	/** 
	 * 页码
	 **/
	private $page;
	
	/** 
	 * 页面大小
	 **/
	private $pageSize;
	
	/** 
	 * 支付时间（查询结束值），已废弃
	 **/
	private $payEndTime;
	
	/** 
	 * 支付时间（查询开始值）, 已废弃
	 **/
	private $payStartTime;
	
	/** 
	 * 货品名称
	 **/
	private $productName;
	
	/** 
	 * 退款状态
	 **/
	private $refundStatus;
	
	/** 
	 * 卖家memberId，买卖家memberId必填其一
	 **/
	private $sellerMemberId;
	
	/** 
	 * 卖家评论状态，4(卖家已评价), 5（卖家未评价）6（不需要评价）
	 **/
	private $sellerRateStatus;
	
	/** 
	 * 订单类型
	 **/
	private $tradeTypeEnum;
	
	private $apiParas = array();
	
	public function setBizTypeStrSet($bizTypeStrSet)
	{
		$this->bizTypeStrSet = $bizTypeStrSet;
		$this->apiParas["biz_type_str_set"] = $bizTypeStrSet;
	}

	public function getBizTypeStrSet()
	{
		return $this->bizTypeStrSet;
	}

	public function setBuyerMemberId($buyerMemberId)
	{
		$this->buyerMemberId = $buyerMemberId;
		$this->apiParas["buyer_member_id"] = $buyerMemberId;
	}

	public function getBuyerMemberId()
	{
		return $this->buyerMemberId;
	}

	public function setBuyerRateStatus($buyerRateStatus)
	{
		$this->buyerRateStatus = $buyerRateStatus;
		$this->apiParas["buyer_rate_status"] = $buyerRateStatus;
	}

	public function getBuyerRateStatus()
	{
		return $this->buyerRateStatus;
	}

	public function setCreateEndTime($createEndTime)
	{
		$this->createEndTime = $createEndTime;
		$this->apiParas["create_end_time"] = $createEndTime;
	}

	public function getCreateEndTime()
	{
		return $this->createEndTime;
	}

	public function setCreateStartTime($createStartTime)
	{
		$this->createStartTime = $createStartTime;
		$this->apiParas["create_start_time"] = $createStartTime;
	}

	public function getCreateStartTime()
	{
		return $this->createStartTime;
	}

	public function setHis($his)
	{
		$this->his = $his;
		$this->apiParas["his"] = $his;
	}

	public function getHis()
	{
		return $this->his;
	}

	public function setModifyEndTime($modifyEndTime)
	{
		$this->modifyEndTime = $modifyEndTime;
		$this->apiParas["modify_end_time"] = $modifyEndTime;
	}

	public function getModifyEndTime()
	{
		return $this->modifyEndTime;
	}

	public function setModifyStartTime($modifyStartTime)
	{
		$this->modifyStartTime = $modifyStartTime;
		$this->apiParas["modify_start_time"] = $modifyStartTime;
	}

	public function getModifyStartTime()
	{
		return $this->modifyStartTime;
	}

	public function setOrderIdSet($orderIdSet)
	{
		$this->orderIdSet = $orderIdSet;
		$this->apiParas["order_id_set"] = $orderIdSet;
	}

	public function getOrderIdSet()
	{
		return $this->orderIdSet;
	}

	public function setOrderStatusEnum($orderStatusEnum)
	{
		$this->orderStatusEnum = $orderStatusEnum;
		$this->apiParas["order_status_enum"] = $orderStatusEnum;
	}

	public function getOrderStatusEnum()
	{
		return $this->orderStatusEnum;
	}

	public function setPage($page)
	{
		$this->page = $page;
		$this->apiParas["page"] = $page;
	}

	public function getPage()
	{
		return $this->page;
	}

	public function setPageSize($pageSize)
	{
		$this->pageSize = $pageSize;
		$this->apiParas["page_size"] = $pageSize;
	}

	public function getPageSize()
	{
		return $this->pageSize;
	}

	public function setPayEndTime($payEndTime)
	{
		$this->payEndTime = $payEndTime;
		$this->apiParas["pay_end_time"] = $payEndTime;
	}

	public function getPayEndTime()
	{
		return $this->payEndTime;
	}

	public function setPayStartTime($payStartTime)
	{
		$this->payStartTime = $payStartTime;
		$this->apiParas["pay_start_time"] = $payStartTime;
	}

	public function getPayStartTime()
	{
		return $this->payStartTime;
	}

	public function setProductName($productName)
	{
		$this->productName = $productName;
		$this->apiParas["product_name"] = $productName;
	}

	public function getProductName()
	{
		return $this->productName;
	}

	public function setRefundStatus($refundStatus)
	{
		$this->refundStatus = $refundStatus;
		$this->apiParas["refund_status"] = $refundStatus;
	}

	public function getRefundStatus()
	{
		return $this->refundStatus;
	}

	public function setSellerMemberId($sellerMemberId)
	{
		$this->sellerMemberId = $sellerMemberId;
		$this->apiParas["seller_member_id"] = $sellerMemberId;
	}

	public function getSellerMemberId()
	{
		return $this->sellerMemberId;
	}

	public function setSellerRateStatus($sellerRateStatus)
	{
		$this->sellerRateStatus = $sellerRateStatus;
		$this->apiParas["seller_rate_status"] = $sellerRateStatus;
	}

	public function getSellerRateStatus()
	{
		return $this->sellerRateStatus;
	}

	public function setTradeTypeEnum($tradeTypeEnum)
	{
		$this->tradeTypeEnum = $tradeTypeEnum;
		$this->apiParas["trade_type_enum"] = $tradeTypeEnum;
	}

	public function getTradeTypeEnum()
	{
		return $this->tradeTypeEnum;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.trade.order.list";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
