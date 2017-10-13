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
class AlibabaProductGetListRequest extends Request
{

	protected $namespace = 'com.alibaba.product';
	protected $version = '1';
	protected $method_name = 'alibaba.product.getList';

	private $categoryID;
	private $pageNo;
	private $pageSize;
	private $timeStamp;
	private $webSite;
	private $endTimeStamp;

	/**
	 * @return mixed
	 */
	public function getCategoryID()
	{
		return $this->categoryID;
	}

	/**
	 * @param mixed $categoryID
	 */
	public function setCategoryID($categoryID)
	{
		$this->categoryID = $categoryID;
		$this->apiParas["categoryID"] = $categoryID;
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

	/**
	 * @return mixed
	 */
	public function getTimeStamp()
	{
		return $this->timeStamp;
	}

	/**
	 * @param mixed $timeStamp
	 */
	public function setTimeStamp($timeStamp)
	{
		$this->timeStamp = $timeStamp;
		$this->apiParas["timeStamp"] = $timeStamp;
	}

	/**
	 * @return mixed
	 */
	public function getWebSite()
	{
		return $this->webSite;
	}

	/**
	 * @param mixed $webSite
	 */
	public function setWebSite($webSite)
	{
		$this->webSite = $webSite;
		$this->apiParas["webSite"] = $webSite;
	}

	/**
	 * @return mixed
	 */
	public function getEndTimeStamp()
	{
		return $this->endTimeStamp;
	}

	/**
	 * @param mixed $endTimeStamp
	 */
	public function setEndTimeStamp($endTimeStamp)
	{
		$this->endTimeStamp = $endTimeStamp;
		$this->apiParas["endTimeStamp"] = $endTimeStamp;
	}
	
	
	public function check()
	{
		RequestCheckUtil::checkNotNull($this->webSite,"webSite");
	}

}
