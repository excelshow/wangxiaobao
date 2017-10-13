<?php
/**
 * TOP API: alibaba.open.convertmemberidsbyloginids request
 * 
 * @author auto create
 * @since 1.0, 2016.05.17
 */
namespace App\Core\Sdk\Ali\Request;
use App\Core\Sdk\Ali\Request;
use App\Core\Sdk\Ali\RequestCheckUtil;
class AlibabaProductGetRequest extends Request
{

	protected $namespace = 'com.alibaba.product';
	protected $version = '1';
	protected $method_name = 'alibaba.product.get';

	private $productID;
	private $webSite;

	/**
	 * @return mixed
	 */
	public function getProductID()
	{
		return $this->productID;
	}

	/**
	 * @param mixed $productID
	 */
	public function setProductID($productID)
	{
		$this->productID = $productID;
		$this->apiParas["productID"] = $productID;
	}

	/**
	 * @return mixed
	 */
	public function getWebSite()
	{
		return $this->webSite;
	}

	/**
	 * @param mixed $webSite
	 */
	public function setWebSite($webSite)
	{
		$this->webSite = $webSite;
		$this->apiParas["webSite"] = $webSite;
	}

	
	public function check()
	{
		RequestCheckUtil::checkNotNull($this->productID,"productID");
		RequestCheckUtil::checkNotNull($this->webSite,"webSite");
	}

}
