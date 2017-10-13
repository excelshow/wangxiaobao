<?php
/**
 * TOP API: alibaba.open.ibank.image.modify request
 * 
 * @author auto create
 * @since 1.0, 2016.06.29
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenIbankImageModifyRequest
{
	/** 
	 * 图片描述。最长2000个中文字符。不传默认为不修改。
	 **/
	private $description;
	
	/** 
	 * 图片ID
	 **/
	private $imageId;
	
	/** 
	 * 图片名称。最长30个中文字符。不传默认为不修改。
	 **/
	private $name;
	
	private $apiParas = array();
	
	public function setDescription($description)
	{
		$this->description = $description;
		$this->apiParas["description"] = $description;
	}

	public function getDescription()
	{
		return $this->description;
	}

	public function setImageId($imageId)
	{
		$this->imageId = $imageId;
		$this->apiParas["image_id"] = $imageId;
	}

	public function getImageId()
	{
		return $this->imageId;
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

	public function getApiMethodName()
	{
		return "alibaba.open.ibank.image.modify";
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
