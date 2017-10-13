<?php
/**
 * TOP API: alibaba.open.ibank.album.get request
 * 
 * @author auto create
 * @since 1.0, 2016.06.29
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenIbankAlbumGetRequest
{
	/** 
	 * 相册ID
	 **/
	private $albumId;
	
	private $apiParas = array();
	
	public function setAlbumId($albumId)
	{
		$this->albumId = $albumId;
		$this->apiParas["album_id"] = $albumId;
	}

	public function getAlbumId()
	{
		return $this->albumId;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.ibank.album.get";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->albumId,"albumId");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
