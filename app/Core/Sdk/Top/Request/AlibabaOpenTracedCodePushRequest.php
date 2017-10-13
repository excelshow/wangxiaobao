<?php
/**
 * TOP API: alibaba.open.traced.code.push request
 * 
 * @author auto create
 * @since 1.0, 2016.05.20
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenTracedCodePushRequest
{
	/** 
	 * 批次ID
	 **/
	private $batchId;
	
	/** 
	 * 批次密码
	 **/
	private $batchPassword;
	
	/** 
	 * 批量关联码模型
	 **/
	private $models;
	
	private $apiParas = array();
	
	public function setBatchId($batchId)
	{
		$this->batchId = $batchId;
		$this->apiParas["batch_id"] = $batchId;
	}

	public function getBatchId()
	{
		return $this->batchId;
	}

	public function setBatchPassword($batchPassword)
	{
		$this->batchPassword = $batchPassword;
		$this->apiParas["batch_password"] = $batchPassword;
	}

	public function getBatchPassword()
	{
		return $this->batchPassword;
	}

	public function setModels($models)
	{
		$this->models = $models;
		$this->apiParas["models"] = $models;
	}

	public function getModels()
	{
		return $this->models;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.traced.code.push";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->batchId,"batchId");
		RequestCheckUtil::checkNotNull($this->batchPassword,"batchPassword");
		RequestCheckUtil::checkNotNull($this->models,"models");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
