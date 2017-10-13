<?php
/**
 * TOP API: alibaba.open.ibank.album.delete request
 * 
 * @author auto create
 * @since 1.0, 2016.06.29
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenIbankAlbumDeleteRequest
{
	/** 
	 * 相册ID序列，以半角分号”;”分隔。每次最多支持删除500个相册。
	 **/
	private $albumIds;
	
	private $apiParas = array();
	
	public function setAlbumIds($albumIds)
	{
		$this->albumIds = $albumIds;
		$this->apiParas["album_ids"] = $albumIds;
	}

	public function getAlbumIds()
	{
		return $this->albumIds;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.ibank.album.delete";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->albumIds,"albumIds");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
