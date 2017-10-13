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
class AlibabaCnp4pReportCampaignEffectRequest extends Request
{

	protected $namespace = 'com.alibaba.p4p';
	protected $version = '1';
	protected $method_name = 'alibaba.cnp4p.report.campaignEffect';

	private $startTime;
	private $endTime;
	private $campaignId;
	private $reportType;
	private $pageNo;
	private $pageSize;

	/**
	 * @return mixed
	 */
	public function getStartTime()
	{
		return $this->startTime;
	}

	/**
	 * @param mixed $startTime
	 */
	public function setStartTime($startTime)
	{
		$this->startTime = $startTime;
		$this->apiParas["startTime"] = $startTime;
	}

	/**
	 * @return mixed
	 */
	public function getEndTime()
	{
		return $this->endTime;
	}

	/**
	 * @param mixed $endTime
	 */
	public function setEndTime($endTime)
	{
		$this->endTime = $endTime;
		$this->apiParas["endTime"] = $endTime;
	}

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
	public function getReportType()
	{
		return $this->reportType;
	}

	/**
	 * @param mixed $reportType
	 */
	public function setReportType($reportType)
	{
		$this->reportType = $reportType;
		$this->apiParas["reportType"] = $reportType;
	}

	
	/**
	 * @return mixed
	 */
	public function getPageNo()
	{
		return $this->pageNo;
	}

	/**
	 * @param mixed $pageNo
	 */
	public function setPageNo($pageNo)
	{
		$this->pageNo = $pageNo;
		$this->apiParas["pageNo"] = $pageNo;
	}

	/**
	 * @return mixed
	 */
	public function getPageSize()
	{
		return $this->pageSize;
	}

	/**
	 * @param mixed $pageSize
	 */
	public function setPageSize($pageSize)
	{
		$this->pageSize = $pageSize;
		$this->apiParas["pageSize"] = $pageSize;
	}
	
	public function check()
	{

		RequestCheckUtil::checkNotNull($this->startTime,"startTime");
		RequestCheckUtil::checkNotNull($this->endTime,"endTime");
		RequestCheckUtil::checkNotNull($this->pageNo,"pageNo");
		RequestCheckUtil::checkNotNull($this->pageSize,"pageSize");
	}

}
