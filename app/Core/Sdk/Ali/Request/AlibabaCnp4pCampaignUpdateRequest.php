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
class AlibabaCnp4pCampaignUpdateRequest extends Request
{

	protected $namespace = 'com.alibaba.p4p';
	protected $version = '1';
	protected $method_name = 'alibaba.cnp4p.campaign.update';

	private $campaignId;
	private $budget;
	private $onlineStatus;
	private $promoteArea;
	private $schedule;
	private $cositeFlag;

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
	public function getBudget()
	{
		return $this->budget;
	}

	/**
	 * @param mixed $budget
	 */
	public function setBudget($budget)
	{
		$this->budget = $budget;
		$this->apiParas["budget"] = $budget;
	}

	/**
	 * @return mixed
	 */
	public function getOnlineStatus()
	{
		return $this->onlineStatus;
	}

	/**
	 * @param mixed $onlineStatus
	 */
	public function setOnlineStatus($onlineStatus)
	{
		$this->onlineStatus = $onlineStatus;
		$this->apiParas["onlineStatus"] = $onlineStatus;
	}

	/**
	 * @return mixed
	 */
	public function getPromoteArea()
	{
		return $this->promoteArea;
	}

	/**
	 * @param mixed $promoteArea
	 */
	public function setPromoteArea($promoteArea)
	{
		$this->promoteArea = $promoteArea;
		$this->apiParas["promoteArea"] = $promoteArea;
	}

	/**
	 * @return mixed
	 */
	public function getSchedule()
	{
		return $this->schedule;
	}

	/**
	 * @param mixed $schedule
	 */
	public function setSchedule($schedule)
	{
		$this->schedule = $schedule;
		$this->apiParas["schedule"] = $schedule;
	}

	/**
	 * @return mixed
	 */
	public function getCositeFlag()
	{
		return $this->cositeFlag;
	}

	/**
	 * @param mixed $cositeFlag
	 */
	public function setCositeFlag($cositeFlag)
	{
		$this->cositeFlag = $cositeFlag;
		$this->apiParas["cositeFlag"] = $cositeFlag;
	}
	
	public function check()
	{
		RequestCheckUtil::checkNotNull($this->campaignId,"campaignId");
	}

}
