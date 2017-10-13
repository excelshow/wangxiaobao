<?php
/**
 * TOP API: alibaba.open.category.level.attr.get request
 * 
 * @author auto create
 * @since 1.0, 2016.06.30
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenCategoryLevelAttrGetRequest
{
	/** 
	 * 叶子类目ID
	 **/
	private $catId;
	
	/** 
	 * 属性名和属性值以冒号隔开，子属性以大于号隔开。如offer发布连衣裙类目中，要获取 货源类别: 现货 > 是否库存: 是 下面的属性名和属性值，传入 100000691:46874>7108:21958
	 **/
	private $pathValues;
	
	private $apiParas = array();
	
	public function setCatId($catId)
	{
		$this->catId = $catId;
		$this->apiParas["cat_id"] = $catId;
	}

	public function getCatId()
	{
		return $this->catId;
	}

	public function setPathValues($pathValues)
	{
		$this->pathValues = $pathValues;
		$this->apiParas["path_values"] = $pathValues;
	}

	public function getPathValues()
	{
		return $this->pathValues;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.category.level.attr.get";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->catId,"catId");
		RequestCheckUtil::checkNotNull($this->pathValues,"pathValues");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
