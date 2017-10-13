<?php
/**
 * TOP API: alibaba.open.ibank.image.upload request
 * 
 * @author auto create
 * @since 1.0, 2016.07.25
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenIbankImageUploadRequest
{
	/** 
	 * 传入相册的Id. 必传.
	 **/
	private $albumId;
	
	/** 
	 * 图片描述. 可选.最长2000个中文字符
	 **/
	private $description;
	
	/** 
	 * 是否需要打水印. 必传.
	 **/
	private $drawTxt;
	
	/** 
	 * 图片名称. 必传.最长30个中文字符
	 **/
	private $name;
	
	/** 
	 * 传入图片二进制,不能大于5M
	 **/
	private $picBytes;
	
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

	public function setDescription($description)
	{
		$this->description = $description;
		$this->apiParas["description"] = $description;
	}

	public function getDescription()
	{
		return $this->description;
	}

	public function setDrawTxt($drawTxt)
	{
		$this->drawTxt = $drawTxt;
		$this->apiParas["draw_txt"] = $drawTxt;
	}

	public function getDrawTxt()
	{
		return $this->drawTxt;
	}

	public function setName($name)
	{
		$this->name = $name;
		$this->apiParas["name"] = $name;
	}

	public function getName()
	{
		return $this->name;
	}

	public function setPicBytes($picBytes)
	{
		$this->picBytes = $picBytes;
		$this->apiParas["pic_bytes"] = $picBytes;
	}

	public function getPicBytes()
	{
		return $this->picBytes;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.ibank.image.upload";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->albumId,"albumId");
		RequestCheckUtil::checkNotNull($this->drawTxt,"drawTxt");
		RequestCheckUtil::checkNotNull($this->name,"name");
		RequestCheckUtil::checkNotNull($this->picBytes,"picBytes");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
