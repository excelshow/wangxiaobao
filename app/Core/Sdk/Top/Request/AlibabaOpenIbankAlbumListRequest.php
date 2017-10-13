<?php
/**
 * TOP API: alibaba.open.ibank.album.list request
 * 
 * @author auto create
 * @since 1.0, 2016.06.29
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenIbankAlbumListRequest
{
	/** 
	 * 相册类型.CUSTOM-自定义相册 MY-我的相册 OFF-下架相册
	 **/
	private $albumType;
	
	/** 
	 * 页码。取值范围:大于零的整数;默认值为1，即返回第一页数据。
	 **/
	private $pageNo;
	
	/** 
	 * 返回列表结果集分页条数。取值范围:大于零的整数;最大值：500；默认值：10。
	 **/
	private $pageSize;
	
	private $apiParas = array();
	
	public function setAlbumType($albumType)
	{
		$this->albumType = $albumType;
		$this->apiParas["album_type"] = $albumType;
	}

	public function getAlbumType()
	{
		return $this->albumType;
	}

	public function setPageNo($pageNo)
	{
		$this->pageNo = $pageNo;
		$this->apiParas["page_no"] = $pageNo;
	}

	public function getPageNo()
	{
		return $this->pageNo;
	}

	public function setPageSize($pageSize)
	{
		$this->pageSize = $pageSize;
		$this->apiParas["page_size"] = $pageSize;
	}

	public function getPageSize()
	{
		return $this->pageSize;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.ibank.album.list";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->albumType,"albumType");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
