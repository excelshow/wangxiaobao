<?php
/**
 * TOP API: alibaba.open.offers.modify request
 * 
 * @author auto create
 * @since 1.0, 2016.07.05
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenOffersModifyRequest
{
	/** 
	 * 数量
	 **/
	private $amounts;
	
	/** 
	 * 是否修改
	 **/
	private $isModify;
	
	/** 
	 * 产品id
	 **/
	private $offerIds;
	
	/** 
	 * 价格范围
	 **/
	private $priceRanges;
	
	/** 
	 * 产品标题
	 **/
	private $subjects;
	
	private $apiParas = array();
	
	public function setAmounts($amounts)
	{
		$this->amounts = $amounts;
		$this->apiParas["amounts"] = $amounts;
	}

	public function getAmounts()
	{
		return $this->amounts;
	}

	public function setIsModify($isModify)
	{
		$this->isModify = $isModify;
		$this->apiParas["is_modify"] = $isModify;
	}

	public function getIsModify()
	{
		return $this->isModify;
	}

	public function setOfferIds($offerIds)
	{
		$this->offerIds = $offerIds;
		$this->apiParas["offer_ids"] = $offerIds;
	}

	public function getOfferIds()
	{
		return $this->offerIds;
	}

	public function setPriceRanges($priceRanges)
	{
		$this->priceRanges = $priceRanges;
		$this->apiParas["price_ranges"] = $priceRanges;
	}

	public function getPriceRanges()
	{
		return $this->priceRanges;
	}

	public function setSubjects($subjects)
	{
		$this->subjects = $subjects;
		$this->apiParas["subjects"] = $subjects;
	}

	public function getSubjects()
	{
		return $this->subjects;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.offers.modify";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->offerIds,"offerIds");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
