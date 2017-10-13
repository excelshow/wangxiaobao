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
class AlibabaAppPieceOrderGetRequest extends Request
{

	protected $namespace = 'cn.alibaba.open';
	protected $version = '1';
	protected $method_name = 'alibaba.app.pieceorder.get';

	private $startIndex;
	private $gmtCreate;
	private $aliId;
	private $pageSize;
	private $bizStatusList;

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
	public function getAliId()
	{
		return $this->aliId;
	}

	/**
	 * @param mixed $aliId
	 */
	public function setAliId($aliId)
	{
		$this->aliId = $aliId;
		$this->apiParas["aliId"] = $aliId;
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



	public function check()
	{
		RequestCheckUtil::checkNotNull($this->gmtCreate,"gmtCreate");
	}

}
