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
class ConvertLoginIdsByMemberIdsRequest extends Request
{

	protected $namespace = 'cn.alibaba.open';
	protected $version = '1';
	protected $method_name = 'convertLoginIdsByMemberIds';

	private $memberIds;

	/**
	 * @return mixed
	 */
	public function getMemberIds()
	{
		return $this->memberIds;
	}

	/**
	 * @param mixed $memberIds
	 */
	public function setMemberIds($memberIds)
	{
		$this->memberIds = $memberIds;
		$this->apiParas["memberIds"] = $memberIds;
	}

	public function check()
	{
		RequestCheckUtil::checkNotNull($this->memberIds,"memberIds");
	}

}
