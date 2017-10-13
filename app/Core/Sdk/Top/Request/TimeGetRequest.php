<?php
/**
 * TOP API: taobao.time.get request
 * 
 * @author auto create
 * @since 1.0, 2016.10.12
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class TimeGetRequest
{
	
	private $apiParas = array();
	
	public function getApiMethodName()
	{
		return "taobao.time.get";
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
