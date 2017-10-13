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
class AlibabaCnp4pCampaignScheduleUpdateRequest extends Request
{

	protected $namespace = 'com.alibaba.p4p';
	protected $version = '1';
	protected $method_name = 'alibaba.cnp4p.campaign.schedule.update';

	private $campaignId;
	private $schedule;

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
	
	public function check()
	{
		RequestCheckUtil::checkNotNull($this->campaignId,"campaignId");
		RequestCheckUtil::checkNotNull($this->schedule,"campaignId");

	}

}
