<?php
/**
 * TOP API: alibaba.open.search.graph.offer.info request
 * 
 * @author auto create
 * @since 1.0, 2016.05.17
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenSearchGraphOfferInfoRequest
{
	/** 
	 * 淘宝用户的登陆的nickName
	 **/
	private $taobaoNickName;
	
	private $apiParas = array();
	
	public function setTaobaoNickName($taobaoNickName)
	{
		$this->taobaoNickName = $taobaoNickName;
		$this->apiParas["taobao_nick_name"] = $taobaoNickName;
	}

	public function getTaobaoNickName()
	{
		return $this->taobaoNickName;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.search.graph.offer.info";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->taobaoNickName,"taobaoNickName");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
