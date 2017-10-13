<?php
/**
 * TOP API: alibaba.open.search.title.properties.inconsistent request
 * 
 * @author auto create
 * @since 1.0, 2016.06.30
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenSearchTitlePropertiesInconsistentRequest
{
	/** 
	 * Offer属性,对应为offer的属性，字段名为brief。brief的字段格式要求为： key：value 多个间空格分开
	 **/
	private $brief;
	
	/** 
	 * Offer 发布类目id,对应为offer的发布类目id，字段名为catid
	 **/
	private $catid;
	
	/** 
	 * Offer标题,对应为offer的标题，字段名为title
	 **/
	private $title;
	
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

	public function setTitle($title)
	{
		$this->title = $title;
		$this->apiParas["title"] = $title;
	}

	public function getTitle()
	{
		return $this->title;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.search.title.properties.inconsistent";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->brief,"brief");
		RequestCheckUtil::checkNotNull($this->catid,"catid");
		RequestCheckUtil::checkNotNull($this->title,"title");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
