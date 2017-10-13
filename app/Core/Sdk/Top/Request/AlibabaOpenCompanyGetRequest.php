<?php
/**
 * TOP API: alibaba.open.company.get request
 * 
 * @author auto create
 * @since 1.0, 2016.05.17
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenCompanyGetRequest
{
	/** 
	 * 会员ID
	 **/
	private $memberId;
	
	/** 
	 * 自定义返回字段。在companInfo结构中选择需要返回的字段名称，半角逗号分隔
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
		return "alibaba.open.company.get";
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
