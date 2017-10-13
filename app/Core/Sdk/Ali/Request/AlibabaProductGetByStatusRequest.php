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
class AlibabaProductGetByStatusRequest extends Request
{

	protected $namespace = 'com.alibaba.product';
	protected $version = '1';
	protected $method_name = 'alibaba.product.getByStatus';

	private $pageNo;
	private $pageSize;
	private $statusList;

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

	/**
	 * @return mixed
	 */
	public function getStatusList()
	{
		return $this->statusList;
	}

	/**
	 * @param mixed $statusList
	 */
	public function setStatusList($statusList)
	{
		$this->statusList = $statusList;
		$this->apiParas["statusList"] = $statusList;
	}
	
	
	public function check()
	{
		RequestCheckUtil::checkNotNull($this->pageNo,"pageNo");
		RequestCheckUtil::checkNotNull($this->pageSize,"pageSize");
		RequestCheckUtil::checkNotNull($this->statusList,"statusList");
	}

}
