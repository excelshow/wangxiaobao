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
class AlibabaCnp4pKeywordByAdgroupidListRequest extends Request
{

	protected $namespace = 'com.alibaba.p4p';
	protected $version = '1';
	protected $method_name = 'alibaba.cnp4p.keyword.byadgroupid.list';

	private $adGroupId;

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
	
	public function check()
	{
		RequestCheckUtil::checkNotNull($this->adGroupId,"adGroupId");
	}

}
