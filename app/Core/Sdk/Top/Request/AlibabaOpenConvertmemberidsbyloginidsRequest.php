<?php
/**
 * TOP API: alibaba.open.convertmemberidsbyloginids request
 * 
 * @author auto create
 * @since 1.0, 2016.05.17
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenConvertmemberidsbyloginidsRequest
{
	/** 
	 * 中文站登录id！最大数量不超过110个，数量太大时抛出异常！loginIds中不包含子账号的loginid
	 **/
	private $loginIds;
	
	private $apiParas = array();
	
	public function setLoginIds($loginIds)
	{
		$this->loginIds = $loginIds;
		$this->apiParas["login_ids"] = $loginIds;
	}

	public function getLoginIds()
	{
		return $this->loginIds;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.convertmemberidsbyloginids";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->loginIds,"loginIds");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
