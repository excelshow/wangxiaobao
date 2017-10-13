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
class AlibabaCnp4pUnionOfferbyqueryListRequest extends Request
{

	protected $namespace = 'com.alibaba.p4p';
	protected $version = '1';
	protected $method_name = 'alibaba.cnp4p.union.offerbyquery.list';

	private $unionPid;
	private $query;
	private $requestIp;
	private $requestUserAgent;
	private $requestReferer;
	private $pageNo;
	private $pageSize;

	/**
	 * @return mixed
	 */
	public function getUnionPid()
	{
		return $this->unionPid;
	}

	/**
	 * @param mixed $unionPid
	 */
	public function setUnionPid($unionPid)
	{
		$this->unionPid = $unionPid;
		$this->apiParas["unionPid"] = $unionPid;
	}

	/**
	 * @return mixed
	 */
	public function getQuery()
	{
		return $this->query;
	}

	/**
	 * @param mixed $query
	 */
	public function setQuery($query)
	{
		$this->query = $query;
		$this->apiParas["query"] = $query;
	}

	/**
	 * @return mixed
	 */
	public function getRequestIp()
	{
		return $this->requestIp;
	}

	/**
	 * @param mixed $requestIp
	 */
	public function setRequestIp($requestIp)
	{
		$this->requestIp = $requestIp;
		$this->apiParas["requestIp"] = $requestIp;
	}

	/**
	 * @return mixed
	 */
	public function getRequestUserAgent()
	{
		return $this->requestUserAgent;
	}

	/**
	 * @param mixed $requestUserAgent
	 */
	public function setRequestUserAgent($requestUserAgent)
	{
		$this->requestUserAgent = $requestUserAgent;
		$this->apiParas["requestUserAgent"] = $requestUserAgent;
	}

	/**
	 * @return mixed
	 */
	public function getRequestReferer()
	{
		return $this->requestReferer;
	}

	/**
	 * @param mixed $requestReferer
	 */
	public function setRequestReferer($requestReferer)
	{
		$this->requestReferer = $requestReferer;
		$this->apiParas["requestReferer"] = $requestReferer;
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
		RequestCheckUtil::checkNotNull($this->unionPid,"unionPid");
		RequestCheckUtil::checkNotNull($this->query,"query");
		RequestCheckUtil::checkNotNull($this->requestIp,"requestIp");
		RequestCheckUtil::checkNotNull($this->requestUserAgent,"requestUserAgent");
		RequestCheckUtil::checkNotNull($this->pageNo,"pageNo");
		RequestCheckUtil::checkNotNull($this->pageSize,"pageSize");
	}

}
