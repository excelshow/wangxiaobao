<?php
/**
 * TOP API: alibaba.open.app.order.get request
 * 
 * @author auto create
 * @since 1.0, 2016.09.21
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenAppOrderGetRequest
{
	/** 
	 * 订单详细状态 audit_pass:审核通过，issue_ready：待发布，service：服务中，suspend：挂起 arrear_suspend：欠费挂起，closed：关闭，cancel：作废
	 **/
	private $bizStatusExts;
	
	/** 
	 * 订单服务状态列表 B:服务前，S:服务中，P：挂起，E：关闭，C:作废
	 **/
	private $bizStatusList;
	
	/** 
	 * 订单创建时间,获取该时间前一个月内创建的所有订单列表
	 **/
	private $gmtCreateStart;
	
	/** 
	 * 每页大小（用于分页） 限制：小于等于50
	 **/
	private $pageSize;
	
	/** 
	 * 第几页 （用于分页）
	 **/
	private $startIndex;
	
	private $apiParas = array();
	
	public function setBizStatusExts($bizStatusExts)
	{
		$this->bizStatusExts = $bizStatusExts;
		$this->apiParas["biz_status_exts"] = $bizStatusExts;
	}

	public function getBizStatusExts()
	{
		return $this->bizStatusExts;
	}

	public function setBizStatusList($bizStatusList)
	{
		$this->bizStatusList = $bizStatusList;
		$this->apiParas["biz_status_list"] = $bizStatusList;
	}

	public function getBizStatusList()
	{
		return $this->bizStatusList;
	}

	public function setGmtCreateStart($gmtCreateStart)
	{
		$this->gmtCreateStart = $gmtCreateStart;
		$this->apiParas["gmt_create_start"] = $gmtCreateStart;
	}

	public function getGmtCreateStart()
	{
		return $this->gmtCreateStart;
	}

	public function setPageSize($pageSize)
	{
		$this->pageSize = $pageSize;
		$this->apiParas["page_size"] = $pageSize;
	}

	public function getPageSize()
	{
		return $this->pageSize;
	}

	public function setStartIndex($startIndex)
	{
		$this->startIndex = $startIndex;
		$this->apiParas["start_index"] = $startIndex;
	}

	public function getStartIndex()
	{
		return $this->startIndex;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.app.order.get";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkMaxListSize($this->bizStatusExts,20,"bizStatusExts");
		RequestCheckUtil::checkMaxListSize($this->bizStatusList,20,"bizStatusList");
		RequestCheckUtil::checkNotNull($this->gmtCreateStart,"gmtCreateStart");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
