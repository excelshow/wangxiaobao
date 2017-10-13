<?php
/**
 * TOP API: alibaba.open.ibank.album.create request
 * 
 * @author auto create
 * @since 1.0, 2016.06.29
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenIbankAlbumCreateRequest
{
	/** 
	 * 相册访问权限。取值范围:0-不公开；1-公开；2-密码访问。只有开通旺铺的会员可以设置相册访问权限为“1-公开”和“2-密码访问”，未开通旺铺的会员相册访问权限限制为“0-不公开”。
	 **/
	private $authority;
	
	/** 
	 * 相册描述。最长2000个中文字符
	 **/
	private $description;
	
	/** 
	 * 相册名称。最长30个中文字符
	 **/
	private $name;
	
	/** 
	 * 相册访问密码。4-16位非中文字符。当authority为2-密码访问时必填。
	 **/
	private $password;
	
	private $apiParas = array();
	
	public function setAuthority($authority)
	{
		$this->authority = $authority;
		$this->apiParas["authority"] = $authority;
	}

	public function getAuthority()
	{
		return $this->authority;
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

	public function setName($name)
	{
		$this->name = $name;
		$this->apiParas["name"] = $name;
	}

	public function getName()
	{
		return $this->name;
	}

	public function setPassword($password)
	{
		$this->password = $password;
		$this->apiParas["password"] = $password;
	}

	public function getPassword()
	{
		return $this->password;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.ibank.album.create";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->authority,"authority");
		RequestCheckUtil::checkNotNull($this->name,"name");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
