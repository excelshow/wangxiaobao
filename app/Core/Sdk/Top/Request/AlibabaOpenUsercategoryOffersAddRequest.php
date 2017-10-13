<?php
/**
 * TOP API: alibaba.open.usercategory.offers.add request
 * 
 * @author auto create
 * @since 1.0, 2016.06.29
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenUsercategoryOffersAddRequest
{
	/** 
	 * 要添加到的自定义分类ID
	 **/
	private $groupId;
	
	/** 
	 * 需要添加的产品序列。多个产品id半角分号分隔
	 **/
	private $offerIds;
	
	private $apiParas = array();
	
	public function setGroupId($groupId)
	{
		$this->groupId = $groupId;
		$this->apiParas["group_id"] = $groupId;
	}

	public function getGroupId()
	{
		return $this->groupId;
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

	public function getApiMethodName()
	{
		return "alibaba.open.usercategory.offers.add";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->groupId,"groupId");
		RequestCheckUtil::checkNotNull($this->offerIds,"offerIds");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
