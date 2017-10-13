<?php
/**
 * TOP API: alibaba.open.offergroup.set request
 * 
 * @author auto create
 * @since 1.0, 2016.06.29
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenOffergroupSetRequest
{
	/** 
	 * on或者off，on对应设置显示标记的开启，即：显示；off对应显示标记的关闭，即：不显示
	 **/
	private $switchType;
	
	private $apiParas = array();
	
	public function setSwitchType($switchType)
	{
		$this->switchType = $switchType;
		$this->apiParas["switch_type"] = $switchType;
	}

	public function getSwitchType()
	{
		return $this->switchType;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.offergroup.set";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->switchType,"switchType");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
