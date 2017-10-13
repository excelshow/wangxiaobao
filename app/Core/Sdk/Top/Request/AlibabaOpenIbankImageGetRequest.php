<?php
/**
 * TOP API: alibaba.open.ibank.image.get request
 * 
 * @author auto create
 * @since 1.0, 2016.06.29
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenIbankImageGetRequest
{
	/** 
	 * 图片ID
	 **/
	private $imageId;
	
	private $apiParas = array();
	
	public function setImageId($imageId)
	{
		$this->imageId = $imageId;
		$this->apiParas["image_id"] = $imageId;
	}

	public function getImageId()
	{
		return $this->imageId;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.ibank.image.get";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->imageId,"imageId");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
