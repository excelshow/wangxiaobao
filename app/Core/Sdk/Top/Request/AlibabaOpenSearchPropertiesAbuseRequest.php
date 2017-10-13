<?php
/**
 * TOP API: alibaba.open.search.properties.abuse request
 * 
 * @author auto create
 * @since 1.0, 2016.10.17
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenSearchPropertiesAbuseRequest
{
	/** 
	 * Offer属性,对应为offer的属性，字段名为brief。brief的字段格式要求为： key：value 多个间空格分开
	 **/
	private $brief;
	
	/** 
	 * Offer 发布类目id,对应为offer的发布类目id，字段名为catid
	 **/
	private $catid;
	
	private $apiParas = array();
	
	public function setBrief($brief)
	{
		$this->brief = $brief;
		$this->apiParas["brief"] = $brief;
	}

	public function getBrief()
	{
		return $this->brief;
	}

	public function setCatid($catid)
	{
		$this->catid = $catid;
		$this->apiParas["catid"] = $catid;
	}

	public function getCatid()
	{
		return $this->catid;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.search.properties.abuse";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->brief,"brief");
		RequestCheckUtil::checkNotNull($this->catid,"catid");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
