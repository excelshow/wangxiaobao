<?php
/**
 * TOP API: alibaba.open.search.title.stuffing request
 * 
 * @author auto create
 * @since 1.0, 2016.06.30
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenSearchTitleStuffingRequest
{
	/** 
	 * Offer 发布类目id,对应为offer的发布类目id，字段名为catid
	 **/
	private $catid;
	
	/** 
	 * demo
	 **/
	private $title;
	
	private $apiParas = array();
	
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
		return "alibaba.open.search.title.stuffing";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->catid,"catid");
		RequestCheckUtil::checkNotNull($this->title,"title");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
