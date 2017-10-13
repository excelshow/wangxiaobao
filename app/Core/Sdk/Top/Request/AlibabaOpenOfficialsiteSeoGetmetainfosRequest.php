<?php
/**
 * TOP API: alibaba.open.officialsite.seo.getmetainfos request
 * 
 * @author auto create
 * @since 1.0, 2016.06.29
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenOfficialsiteSeoGetmetainfosRequest
{
	/** 
	 * 要获取的pagename列表
	 **/
	private $pageNames;
	
	private $apiParas = array();
	
	public function setPageNames($pageNames)
	{
		$this->pageNames = $pageNames;
		$this->apiParas["page_names"] = $pageNames;
	}

	public function getPageNames()
	{
		return $this->pageNames;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.officialsite.seo.getmetainfos";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->pageNames,"pageNames");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
