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
class ConvertMemberIdsByLoginIdsRequest extends Request
{

	protected $namespace = 'cn.alibaba.open';
	protected $version = '1';
	protected $method_name = 'convertMemberIdsByLoginIds';

	private $loginIds;

	/**
	 * @return mixed
	 */
	public function getLoginIds()
	{
		return $this->loginIds;
	}

	/**
	 * @param mixed $loginIds
	 */
	public function setLoginIds($loginIds)
	{
		$this->loginIds = $loginIds;
		$this->apiParas["loginIds"] = $loginIds;
	}
	
	public function check()
	{
		RequestCheckUtil::checkNotNull($this->loginIds,"loginIds");
	}

}
