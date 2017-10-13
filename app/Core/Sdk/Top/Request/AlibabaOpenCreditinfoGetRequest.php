<?php
/**
 * TOP API: alibaba.open.creditinfo.get request
 * 
 * @author auto create
 * @since 1.0, 2016.06.30
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenCreditinfoGetRequest
{
	/** 
	 * SMALL 小图标；STANDARD 标准图标；WINPORT 旺铺图标；CREDIT 信用标识（默认值）；LARGE_TRANSPARENT 透明图标；SMALL_SEARCH 搜索引擎页面展示诚信通logo图标
	 **/
	private $logoStyle;
	
	/** 
	 * 会员ID，多个ID半角用分号连接，如：test1;test2 最多可以传200个会员ID
	 **/
	private $memberIds;
	
	private $apiParas = array();
	
	public function setLogoStyle($logoStyle)
	{
		$this->logoStyle = $logoStyle;
		$this->apiParas["logo_style"] = $logoStyle;
	}

	public function getLogoStyle()
	{
		return $this->logoStyle;
	}

	public function setMemberIds($memberIds)
	{
		$this->memberIds = $memberIds;
		$this->apiParas["member_ids"] = $memberIds;
	}

	public function getMemberIds()
	{
		return $this->memberIds;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.creditinfo.get";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->memberIds,"memberIds");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
