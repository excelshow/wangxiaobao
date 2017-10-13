<?php
/**
 * TOP API: alibaba.open.convertmemberidsbyloginids request
 * 
 * @author auto create
 * @since 1.0, 2016.05.17
 */
namespace App\Core\Sdk\Ali\Request;
use App\Core\Sdk\Ali\Request;
use App\Core\Sdk\Ali\RequestCheckUtil;
class AlibabaCnp4pAdgroupUpdateRequest extends Request
{

	protected $namespace = 'com.alibaba.p4p';
	protected $version = '1';
	protected $method_name = 'alibaba.cnp4p.adgroup.update';

	private $campaignId;
	private $adGroupId;
	private $onlineState;
	private $bidPrice;

	/**
	 * @return mixed
	 */
	public function getCampaignId()
	{
		return $this->campaignId;
	}

	/**
	 * @param mixed $campaignId
	 */
	public function setCampaignId($campaignId)
	{
		$this->campaignId = $campaignId;
		$this->apiParas["campaignId"] = $campaignId;
	}

	/**
	 * @return mixed
	 */
	public function getAdGroupId()
	{
		return $this->adGroupId;
	}

	/**
	 * @param mixed $adGroupId
	 */
	public function setAdGroupId($adGroupId)
	{
		$this->adGroupId = $adGroupId;
		$this->apiParas["adGroupId"] = $adGroupId;
	}

	/**
	 * @return mixed
	 */
	public function getOnlineState()
	{
		return $this->onlineState;
	}

	/**
	 * @param mixed $onlineState
	 */
	public function setOnlineState($onlineState)
	{
		$this->onlineState = $onlineState;
		$this->apiParas["onlineState"] = $onlineState;
	}

	/**
	 * @return mixed
	 */
	public function getBidPrice()
	{
		return $this->bidPrice;
	}

	/**
	 * @param mixed $bidPrice
	 */
	public function setBidPrice($bidPrice)
	{
		$this->bidPrice = $bidPrice;
		$this->apiParas["bidPrice"] = $bidPrice;
	}


	//$this->apiParas["memberId"] = $memberId;
	public function check()
	{
		RequestCheckUtil::checkNotNull($this->campaignId,"campaignId");
		RequestCheckUtil::checkNotNull($this->adGroupId,"adGroupId");
	}

}
