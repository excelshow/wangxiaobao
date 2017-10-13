<?php
/**
 * TOP API: alibaba.open.officialsite.seo.setoffermetainfos request
 * 
 * @author auto create
 * @since 1.0, 2016.06.29
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenOfficialsiteSeoSetoffermetainfosRequest
{
	/** 
	 * 产品的关键词信息,属性字段包括：title，offerId，keywords，description
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
		return "alibaba.open.officialsite.seo.setoffermetainfos";
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
