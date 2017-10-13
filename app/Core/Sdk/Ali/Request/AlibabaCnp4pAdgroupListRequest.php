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
class AlibabaCnp4pAdgroupListRequest extends Request
{

	protected $namespace = 'com.alibaba.p4p';
	protected $version = '1';
	protected $method_name = 'alibaba.cnp4p.adgroup.list';

	private $adGroupIdList;

	/**
	 * @return mixed
	 */
	public function getAdGroupIdList()
	{
		return $this->adGroupIdList;
	}

	/**
	 * @param mixed $adGroupIdList
	 */
	public function setAdGroupIdList($adGroupIdList)
	{
		$this->adGroupIdList = $adGroupIdList;
		$this->apiParas["adGroupIdList"] = $adGroupIdList;
	}

	
	//$this->apiParas["memberId"] = $memberId;
	public function check()
	{
		RequestCheckUtil::checkNotNull($this->adGroupIdList,"adGroupIdList");
	}

}
