<?php
/**
 * TOP API: alibaba.open.logistics.companies.get request
 * 
 * @author auto create
 * @since 1.0, 2016.06.29
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenLogisticsCompaniesGetRequest
{
	/** 
	 * 通过服务类型来获取支持该服务的物流公司列表，目前只支持自行发货（ZX）
	 **/
	private $serviceType;
	
	private $apiParas = array();
	
	public function setServiceType($serviceType)
	{
		$this->serviceType = $serviceType;
		$this->apiParas["service_type"] = $serviceType;
	}

	public function getServiceType()
	{
		return $this->serviceType;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.logistics.companies.get";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->serviceType,"serviceType");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
