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
class AlibabaCnp4pKeywordPriceUpdateRequest extends Request
{

	protected $namespace = 'com.alibaba.p4p';
	protected $version = '1';
	protected $method_name = 'alibaba.cnp4p.keyword.price.update';

	private $keywords;

	/**
	 * @return mixed
	 */
	public function getKeywords()
	{
		return $this->keywords;
	}

	/**
	 * @param mixed $keywords
	 */
	public function setKeywords($keywords)
	{
		$this->keywords = $keywords;
		$this->apiParas["keywords"] = $keywords;
	}

	
	public function check()
	{
		RequestCheckUtil::checkNotNull($this->keywords,"keywords");
	}

}
