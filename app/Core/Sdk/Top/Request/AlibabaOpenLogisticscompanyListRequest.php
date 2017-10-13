<?php
/**
 * TOP API: alibaba.open.logisticscompany.list request
 * 
 * @author auto create
 * @since 1.0, 2016.07.05
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenLogisticscompanyListRequest
{
	/** 
	 * 会员ID
	 **/
	private $memberId;
	
	private $apiParas = array();
	
	public function setMemberId($memberId)
	{
		$this->memberId = $memberId;
		$this->apiParas["member_id"] = $memberId;
	}

	public function getMemberId()
	{
		return $this->memberId;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.logisticscompany.list";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
