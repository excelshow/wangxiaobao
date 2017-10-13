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
class MemberGetRequest extends Request
{

	protected $namespace = 'cn.alibaba.open';
	protected $version = '1';
	protected $method_name = 'member.get';

	private $memberId;
	private $returnFields;

	/**
	 * @return mixed
	 */
	public function getMemberId()
	{
		return $this->memberId;
	}

	/**
	 * @param mixed $memberId
	 */
	public function setMemberId($memberId)
	{
		$this->memberId = $memberId;
		$this->apiParas["memberId"] = $memberId;
	}

	/**
	 * @return mixed
	 */
	public function getReturnFields()
	{
		return $this->returnFields;
	}

	/**
	 * @param mixed $returnFields
	 */
	public function setReturnFields($returnFields)
	{
		$this->returnFields = $returnFields;
		$this->apiParas["returnFields"] = $returnFields;
	}

	
	public function check()
	{
		RequestCheckUtil::checkNotNull($this->memberId,"memberId");
	}

}
