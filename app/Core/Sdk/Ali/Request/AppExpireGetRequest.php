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
class AppExpireGetRequest extends Request
{

	protected $namespace = 'cn.alibaba.open';
	protected $version = '1';
	protected $method_name = 'app.expire.get ';

	private $gmtServiceEnd;
	private $memberId;
	private $bizStatusList;
	private $pageSize;
	private $startIndex;

	/**
	 * @return mixed
	 */
	public function getGmtServiceEnd()
	{
		return $this->gmtServiceEnd;
	}

	/**
	 * @param mixed $gmtServiceEnd
	 */
	public function setGmtServiceEnd($gmtServiceEnd)
	{
		$this->gmtServiceEnd = $gmtServiceEnd;
		$this->apiParas["gmtServiceEnd"] = $gmtServiceEnd;
	}

	/**
	 * @return mixed
	 */
	public function getMemberId()
	{
		return $this->memberId;
	}

	/**
	 * @param mixed $memberId
	 */
	public function setMemberId($memberId)
	{
		$this->memberId = $memberId;
		$this->apiParas["memberId"] = $memberId;
	}

	/**
	 * @return mixed
	 */
	public function getBizStatusList()
	{
		return $this->bizStatusList;
	}

	/**
	 * @param mixed $bizStatusList
	 */
	public function setBizStatusList($bizStatusList)
	{
		$this->bizStatusList = $bizStatusList;
		$this->apiParas["bizStatusList"] = $bizStatusList;
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

	/**
	 * @return mixed
	 */
	public function getStartIndex()
	{
		return $this->startIndex;
	}

	/**
	 * @param mixed $startIndex
	 */
	public function setStartIndex($startIndex)
	{
		$this->startIndex = $startIndex;
		$this->apiParas["startIndex"] = $startIndex;
	}

	
	
	public function check()
	{
		RequestCheckUtil::checkNotNull($this->gmtServiceEnd,"gmtServiceEnd");
	}

}
