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
class AppOrderGetRequest extends Request
{

	protected $namespace = 'cn.alibaba.open';
	protected $version = '1';
	protected $method_name = 'app.order.get';

	private $gmtCreate;
	private $memberId;
	private $bizStatusList;
	private $pageSize;
	private $startIndex;

	/**
	 * @return mixed
	 */
	public function getGmtCreate()
	{
		return $this->gmtCreate;
	}

	/**
	 * @param mixed $gmtCreate
	 */
	public function setGmtCreate($gmtCreate)
	{
		$this->gmtCreate = $gmtCreate;
		$this->apiParas["gmtCreate"] = $gmtCreate;
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
		RequestCheckUtil::checkNotNull($this->gmtCreate,"gmtCreate");
	}

}
