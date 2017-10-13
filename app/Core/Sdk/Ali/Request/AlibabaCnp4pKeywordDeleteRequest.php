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
class AlibabaCnp4pKeywordDeleteRequest extends Request
{

	protected $namespace = 'com.alibaba.p4p';
	protected $version = '1';
	protected $method_name = 'alibaba.cnp4p.keyword.delete';

	private $campaignId;
	private $keywordIdList;

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
	public function getKeywordIdList()
	{
		return $this->keywordIdList;
	}

	/**
	 * @param mixed $keywordIdList
	 */
	public function setKeywordIdList($keywordIdList)
	{
		$this->keywordIdList = $keywordIdList;
		$this->apiParas["keywordIdList"] = $keywordIdList;
	}

	

	public function check()
	{
		RequestCheckUtil::checkNotNull($this->campaignId,"campaignId");
		RequestCheckUtil::checkNotNull($this->keywordIdList,"keywordIdList");
	}

}
