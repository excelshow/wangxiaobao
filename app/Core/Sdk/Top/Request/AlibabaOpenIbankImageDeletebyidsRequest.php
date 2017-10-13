<?php
/**
 * TOP API: alibaba.open.ibank.image.deletebyids request
 * 
 * @author auto create
 * @since 1.0, 2016.06.29
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenIbankImageDeletebyidsRequest
{
	/** 
	 * 图片ID序列，以半角分号”;”分隔。每次最多支持删除500张图片。
	 **/
	private $imageIds;
	
	private $apiParas = array();
	
	public function setImageIds($imageIds)
	{
		$this->imageIds = $imageIds;
		$this->apiParas["image_ids"] = $imageIds;
	}

	public function getImageIds()
	{
		return $this->imageIds;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.ibank.image.deletebyids";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->imageIds,"imageIds");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
