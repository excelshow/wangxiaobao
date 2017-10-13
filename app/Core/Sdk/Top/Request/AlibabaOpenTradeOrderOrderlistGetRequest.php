<?php
/**
 * TOP API: alibaba.open.trade.order.orderlist.get request
 * 
 * @author auto create
 * @since 1.0, 2016.07.05
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenTradeOrderOrderlistGetRequest
{
	/** 
	 * 买家会员名，该订单中的买家会员名。sellerMemberId与buyerMemberId至少填写一个。
	 **/
	private $buyerMemberId;
	
	/** 
	 * 下单结束时间（确认订购），格式 yyyy-MM-dd HH:mm:ss
	 **/
	private $createEndTime;
	
	/** 
	 * 下单开始时间(进入订单确认页面)，格式 yyyy-MM-dd HH:mm:ss
	 **/
	private $createStartTime;
	
	/** 
	 * 已废弃，请使用createEndTime
	 **/
	private $gmtCreateEnd;
	
	/** 
	 * 已废弃，请使用createStartTime
	 **/
	private $gmtCreateStart;
	
	/** 
	 * 已废弃
	 **/
	private $gmtPayEnd;
	
	/** 
	 * 已废弃
	 **/
	private $gmtPayStart;
	
	/** 
	 * 是否查询历史订单，即3个月以前的订单，默认为false，即不查询历史订单
	 **/
	private $isHis;
	
	/** 
	 * 订单更新结束时间，格式 yyyy-MM-dd HH:mm:ss
	 **/
	private $modifyEndTime;
	
	/** 
	 * 订单更新开始时间，格式 yyyy-MM-dd HH:mm:ss
	 **/
	private $modifyStartTime;
	
	/** 
	 * 订单编号，指定该参数相当于查询订单明细
	 **/
	private $orderId;
	
	/** 
	 * 订单交易状态，默认为全部交易状态。若值不为空，合法取值列举如下:
担保交易共有5个状态： waitbuyerpay(等待买家付款), waitsellersend(等待卖家发货), waitbuyerreceive(等待买家收货), success(交易成功), cancel(交易取消，违约金等交割完毕); 
即时到账交易共有4个状态： waitbuyerpay(等待买家付款), waitsellersend(等待卖家发货),(交易成功), cancel(交易取消，违约金等交割完毕)
分阶段交易包括：waitbuyerpay(等待买家付款), waitsellersend(等待卖家发货), waitbuyerreceive(等待买家收货), success(交易成功), cancel(交易取消，违约金等交割完毕),waitselleract(等待卖家操作),waitbuyerconfirmaction(等待买家确认操作),waitsellerpush(等待卖家推进)
	 **/
	private $orderStatus;
	
	/** 
	 * 页码，取值范围:大于零的整数;默认值为1，即返回第一页数据。
	 **/
	private $pageNo;
	
	/** 
	 * 分页条数，返回订单列表结果集分页条数。取值范围:大于零的整数；最大值：20；默认值：10。
	 **/
	private $pageSize;
	
	/** 
	 * 已废弃
	 **/
	private $payEndTime;
	
	/** 
	 * 已废弃
	 **/
	private $payStartTime;
	
	/** 
	 * 订单中的商品名称
	 **/
	private $productName;
	
	/** 
	 * 卖家会员ID，该订单中的卖家会员名。sellerMemberId与buyerMemberId至少填写一个。
	 **/
	private $sellerMemberId;
	
	/** 
	 * 交易类型，取值范围：担保交易-1,预存款交易-2,ETC境外收单交易-3,即时到帐交易-4,保障金安全交易-5,统一交易流程-6,分阶段交易-7,货到付款交易-8
	 **/
	private $tradeType;
	
	private $apiParas = array();
	
	public function setBuyerMemberId($buyerMemberId)
	{
		$this->buyerMemberId = $buyerMemberId;
		$this->apiParas["buyer_member_id"] = $buyerMemberId;
	}

	public function getBuyerMemberId()
	{
		return $this->buyerMemberId;
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

	public function setGmtCreateEnd($gmtCreateEnd)
	{
		$this->gmtCreateEnd = $gmtCreateEnd;
		$this->apiParas["gmt_create_end"] = $gmtCreateEnd;
	}

	public function getGmtCreateEnd()
	{
		return $this->gmtCreateEnd;
	}

	public function setGmtCreateStart($gmtCreateStart)
	{
		$this->gmtCreateStart = $gmtCreateStart;
		$this->apiParas["gmt_create_start"] = $gmtCreateStart;
	}

	public function getGmtCreateStart()
	{
		return $this->gmtCreateStart;
	}

	public function setGmtPayEnd($gmtPayEnd)
	{
		$this->gmtPayEnd = $gmtPayEnd;
		$this->apiParas["gmt_pay_end"] = $gmtPayEnd;
	}

	public function getGmtPayEnd()
	{
		return $this->gmtPayEnd;
	}

	public function setGmtPayStart($gmtPayStart)
	{
		$this->gmtPayStart = $gmtPayStart;
		$this->apiParas["gmt_pay_start"] = $gmtPayStart;
	}

	public function getGmtPayStart()
	{
		return $this->gmtPayStart;
	}

	public function setIsHis($isHis)
	{
		$this->isHis = $isHis;
		$this->apiParas["is_his"] = $isHis;
	}

	public function getIsHis()
	{
		return $this->isHis;
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

	public function setOrderId($orderId)
	{
		$this->orderId = $orderId;
		$this->apiParas["order_id"] = $orderId;
	}

	public function getOrderId()
	{
		return $this->orderId;
	}

	public function setOrderStatus($orderStatus)
	{
		$this->orderStatus = $orderStatus;
		$this->apiParas["order_status"] = $orderStatus;
	}

	public function getOrderStatus()
	{
		return $this->orderStatus;
	}

	public function setPageNo($pageNo)
	{
		$this->pageNo = $pageNo;
		$this->apiParas["page_no"] = $pageNo;
	}

	public function getPageNo()
	{
		return $this->pageNo;
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

	public function setSellerMemberId($sellerMemberId)
	{
		$this->sellerMemberId = $sellerMemberId;
		$this->apiParas["seller_member_id"] = $sellerMemberId;
	}

	public function getSellerMemberId()
	{
		return $this->sellerMemberId;
	}

	public function setTradeType($tradeType)
	{
		$this->tradeType = $tradeType;
		$this->apiParas["trade_type"] = $tradeType;
	}

	public function getTradeType()
	{
		return $this->tradeType;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.trade.order.orderlist.get";
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
