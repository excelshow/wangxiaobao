<?php
/**
 * TOP API: alibaba.open.ibank.profile.get request
 * 
 * @author auto create
 * @since 1.0, 2016.06.28
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenIbankProfileGetRequest
{
	/** 
	 * unused
	 **/
	private $unused;
	
	private $apiParas = array();
	
	public function setUnused($unused)
	{
		$this->unused = $unused;
		$this->apiParas["unused"] = $unused;
	}

	public function getUnused()
	{
		return $this->unused;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.ibank.profile.get";
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
