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
class AlibabaCnp4pAdgroupBycampaignidsListRequest extends Request
{

	protected $namespace = 'com.alibaba.p4p';
	protected $version = '1';
	protected $method_name = 'alibaba.cnp4p.adgroup.bycampaignids.list';

	private $campaignId;
	private $pageNo;
	private $pageSize;

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
		RequestCheckUtil::checkNotNull($this->campaignId,"campaignId");
		RequestCheckUtil::checkNotNull($this->pageNo,"pageNo");
		RequestCheckUtil::checkNotNull($this->pageSize,"pageSize");
	}

}
