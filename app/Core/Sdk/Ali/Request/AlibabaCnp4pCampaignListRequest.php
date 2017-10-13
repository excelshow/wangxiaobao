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
class AlibabaCnp4pCampaignListRequest extends Request
{

	protected $namespace = 'com.alibaba.p4p';
	protected $version = '1';
	protected $method_name = 'alibaba.cnp4p.campaign.list';

	private $campaignIdList;

	/**
	 * @return mixed
	 */
	public function getCampaignIdList()
	{
		return $this->campaignIdList;
	}

	/**
	 * @param mixed $campaignIdList
	 */
	public function setCampaignIdList($campaignIdList)
	{
		$this->campaignIdList = $campaignIdList;
		$this->apiParas["campaignIdList"] = $campaignIdList;
	}

	
	public function check()
	{

	}

}
