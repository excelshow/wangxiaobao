<?php
/**
 * TOP API: alibaba.open.search.category.cheating request
 * 
 * @author auto create
 * @since 1.0, 2016.06.30
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenSearchCategoryCheatingRequest
{
	/** 
	 * Offer 发布类目id,对应为offer的发布类目id，字段名为catid
	 **/
	private $catid;
	
	/** 
	 * Offer标题,对应为offer的标题，字段名为title
	 **/
	private $title;
	
	/** 
	 * 卖家id（1688的memberId）,对应为该offer的旺铺userid
	 **/
	private $userid;
	
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

	public function setUserid($userid)
	{
		$this->userid = $userid;
		$this->apiParas["userid"] = $userid;
	}

	public function getUserid()
	{
		return $this->userid;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.search.category.cheating";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->catid,"catid");
		RequestCheckUtil::checkNotNull($this->title,"title");
		RequestCheckUtil::checkNotNull($this->userid,"userid");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
