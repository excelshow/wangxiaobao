<?php
/**
 * TOP API: alibaba.open.officialsite.seo.setmetainfos request
 * 
 * @author auto create
 * @since 1.0, 2016.06.29
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenOfficialsiteSeoSetmetainfosRequest
{
	/** 
	 * 要设置的seo元数据列表
	 **/
	private $metaInfos;
	
	private $apiParas = array();
	
	public function setMetaInfos($metaInfos)
	{
		$this->metaInfos = $metaInfos;
		$this->apiParas["meta_infos"] = $metaInfos;
	}

	public function getMetaInfos()
	{
		return $this->metaInfos;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.officialsite.seo.setmetainfos";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->metaInfos,"metaInfos");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
