<?php
/**
 * TOP API: alibaba.open.member.get request
 * 
 * @author auto create
 * @since 1.0, 2016.06.30
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenMemberGetRequest
{
	/** 
	 * 会员id
	 **/
	private $memberId;
	
	/** 
	 * 返回字段
	 **/
	private $returnFields;
	
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

	public function setReturnFields($returnFields)
	{
		$this->returnFields = $returnFields;
		$this->apiParas["return_fields"] = $returnFields;
	}

	public function getReturnFields()
	{
		return $this->returnFields;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.member.get";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->memberId,"memberId");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
