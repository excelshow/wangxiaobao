<?php
/**
 * TOP API: alibaba.open.offer.search request
 * 
 * @author auto create
 * @since 1.0, 2016.05.17
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenOfferSearchRequest
{
	/** 
	 * 供货地址
	 **/
	private $address;
	
	/** 
	 * 无用
	 **/
	private $bizType;
	
	/** 
	 * 发布类目编号
	 **/
	private $category;
	
	/** 
	 * 城市中文名
	 **/
	private $city;
	
	/** 
	 * 诚信保障金额
	 **/
	private $creditMoney;
	
	/** 
	 * 查询修改时间结束时刻.要求 gmtModifedBegin 早于 gmtModifiedEnd
	 **/
	private $gmtModifiedBegin;
	
	/** 
	 * 查询修改时间结束时刻.要求 gmtModifedEnd 晚于 gmtModifiedBegin
	 **/
	private $gmtModifiedEnd;
	
	/** 
	 * 会员自定义类别ID
	 **/
	private $groupIds;
	
	/** 
	 * 无用
	 **/
	private $isTradeOffer;
	
	/** 
	 * 产品会员ID
	 **/
	private $memberId;
	
	/** 
	 * 无用
	 **/
	private $offerId;
	
	/** 
	 * 无用
	 **/
	private $online;
	
	/** 
	 * 排序字段：gmtexpire:asc|desc,gmt_modified:asc|desc
	 **/
	private $orderBy;
	
	/** 
	 * 当分页查询时指定请求的数据页
	 **/
	private $pageNo;
	
	/** 
	 * 默认20条,每页返回条数20~200
	 **/
	private $pageSize;
	
	/** 
	 * 价格区间
	 **/
	private $price;
	
	/** 
	 * 省份中文名
	 **/
	private $province;
	
	/** 
	 * 搜索关键字，现在主要支持按标题搜索
	 **/
	private $q;
	
	/** 
	 * 供应产品星级
	 **/
	private $qualityLevel;
	
	/** 
	 * 最小起批量
	 **/
	private $quantityBegin;
	
	/** 
	 * 返回的字段列表
	 **/
	private $returnFields;
	
	/** 
	 * 无用
	 **/
	private $showType;
	
	/** 
	 * 最低销售额
	 **/
	private $soldQuantity;
	
	/** 
	 * Offer状态
	 **/
	private $status;
	
	/** 
	 * 无用
	 **/
	private $tpType;
	
	/** 
	 * 诚信通开能年限
	 **/
	private $tpYear;
	
	/** 
	 * 无用
	 **/
	private $tradeType;
	
	private $apiParas = array();
	
	public function setAddress($address)
	{
		$this->address = $address;
		$this->apiParas["address"] = $address;
	}

	public function getAddress()
	{
		return $this->address;
	}

	public function setBizType($bizType)
	{
		$this->bizType = $bizType;
		$this->apiParas["biz_type"] = $bizType;
	}

	public function getBizType()
	{
		return $this->bizType;
	}

	public function setCategory($category)
	{
		$this->category = $category;
		$this->apiParas["category"] = $category;
	}

	public function getCategory()
	{
		return $this->category;
	}

	public function setCity($city)
	{
		$this->city = $city;
		$this->apiParas["city"] = $city;
	}

	public function getCity()
	{
		return $this->city;
	}

	public function setCreditMoney($creditMoney)
	{
		$this->creditMoney = $creditMoney;
		$this->apiParas["credit_money"] = $creditMoney;
	}

	public function getCreditMoney()
	{
		return $this->creditMoney;
	}

	public function setGmtModifiedBegin($gmtModifiedBegin)
	{
		$this->gmtModifiedBegin = $gmtModifiedBegin;
		$this->apiParas["gmt_modified_begin"] = $gmtModifiedBegin;
	}

	public function getGmtModifiedBegin()
	{
		return $this->gmtModifiedBegin;
	}

	public function setGmtModifiedEnd($gmtModifiedEnd)
	{
		$this->gmtModifiedEnd = $gmtModifiedEnd;
		$this->apiParas["gmt_modified_end"] = $gmtModifiedEnd;
	}

	public function getGmtModifiedEnd()
	{
		return $this->gmtModifiedEnd;
	}

	public function setGroupIds($groupIds)
	{
		$this->groupIds = $groupIds;
		$this->apiParas["group_ids"] = $groupIds;
	}

	public function getGroupIds()
	{
		return $this->groupIds;
	}

	public function setIsTradeOffer($isTradeOffer)
	{
		$this->isTradeOffer = $isTradeOffer;
		$this->apiParas["is_trade_offer"] = $isTradeOffer;
	}

	public function getIsTradeOffer()
	{
		return $this->isTradeOffer;
	}

	public function setMemberId($memberId)
	{
		$this->memberId = $memberId;
		$this->apiParas["member_id"] = $memberId;
	}

	public function getMemberId()
	{
		return $this->memberId;
	}

	public function setOfferId($offerId)
	{
		$this->offerId = $offerId;
		$this->apiParas["offer_id"] = $offerId;
	}

	public function getOfferId()
	{
		return $this->offerId;
	}

	public function setOnline($online)
	{
		$this->online = $online;
		$this->apiParas["online"] = $online;
	}

	public function getOnline()
	{
		return $this->online;
	}

	public function setOrderBy($orderBy)
	{
		$this->orderBy = $orderBy;
		$this->apiParas["order_by"] = $orderBy;
	}

	public function getOrderBy()
	{
		return $this->orderBy;
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

	public function setPrice($price)
	{
		$this->price = $price;
		$this->apiParas["price"] = $price;
	}

	public function getPrice()
	{
		return $this->price;
	}

	public function setProvince($province)
	{
		$this->province = $province;
		$this->apiParas["province"] = $province;
	}

	public function getProvince()
	{
		return $this->province;
	}

	public function setQ($q)
	{
		$this->q = $q;
		$this->apiParas["q"] = $q;
	}

	public function getQ()
	{
		return $this->q;
	}

	public function setQualityLevel($qualityLevel)
	{
		$this->qualityLevel = $qualityLevel;
		$this->apiParas["quality_level"] = $qualityLevel;
	}

	public function getQualityLevel()
	{
		return $this->qualityLevel;
	}

	public function setQuantityBegin($quantityBegin)
	{
		$this->quantityBegin = $quantityBegin;
		$this->apiParas["quantity_begin"] = $quantityBegin;
	}

	public function getQuantityBegin()
	{
		return $this->quantityBegin;
	}

	public function setReturnFields($returnFields)
	{
		$this->returnFields = $returnFields;
		$this->apiParas["return_fields"] = $returnFields;
	}

	public function getReturnFields()
	{
		return $this->returnFields;
	}

	public function setShowType($showType)
	{
		$this->showType = $showType;
		$this->apiParas["show_type"] = $showType;
	}

	public function getShowType()
	{
		return $this->showType;
	}

	public function setSoldQuantity($soldQuantity)
	{
		$this->soldQuantity = $soldQuantity;
		$this->apiParas["sold_quantity"] = $soldQuantity;
	}

	public function getSoldQuantity()
	{
		return $this->soldQuantity;
	}

	public function setStatus($status)
	{
		$this->status = $status;
		$this->apiParas["status"] = $status;
	}

	public function getStatus()
	{
		return $this->status;
	}

	public function setTpType($tpType)
	{
		$this->tpType = $tpType;
		$this->apiParas["tp_type"] = $tpType;
	}

	public function getTpType()
	{
		return $this->tpType;
	}

	public function setTpYear($tpYear)
	{
		$this->tpYear = $tpYear;
		$this->apiParas["tp_year"] = $tpYear;
	}

	public function getTpYear()
	{
		return $this->tpYear;
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
		return "alibaba.open.offer.search";
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
