<?php
/**
 * TOP API: alibaba.open.convertloginidsbymemberids request
 * 
 * @author auto create
 * @since 1.0, 2016.05.17
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenConvertloginidsbymemberidsRequest
{
	/** 
	 * 需要转换的memberId列表
	 **/
	private $memberIds;
	
	private $apiParas = array();
	
	public function setMemberIds($memberIds)
	{
		$this->memberIds = $memberIds;
		$this->apiParas["member_ids"] = $memberIds;
	}

	public function getMemberIds()
	{
		return $this->memberIds;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.convertloginidsbymemberids";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->memberIds,"memberIds");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
