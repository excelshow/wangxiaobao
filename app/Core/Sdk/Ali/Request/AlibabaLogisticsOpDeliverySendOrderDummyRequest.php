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
class AlibabaLogisticsOpDeliverySendOrderDummyRequest extends Request
{

	protected $namespace = 'com.alibaba.logistics';
	protected $version = '1';
	protected $method_name = 'alibaba.logistics.OpDeliverySendOrder.dummy';

	private $sendGoods;
	private $remarks;
	private $gmtSend;
	private $extBody;
	private $extParam;
	private $receiverInfo;

    /**
     * @return mixed
     */
    public function getSendGoods()
    {
        return $this->sendGoods;
    }

    /**
     * @param mixed $sendGoods
     */
    public function setSendGoods($sendGoods)
    {
        $this->sendGoods = $sendGoods;
        $this->apiParas["sendGoods"] = $sendGoods;
    }

    /**
     * @return mixed
     */
    public function getRemarks()
    {
        return $this->remarks;
    }

    /**
     * @param mixed $remarks
     */
    public function setRemarks($remarks)
    {
        $this->remarks = $remarks;
        $this->apiParas["remarks"] = $remarks;
    }

    /**
     * @return mixed
     */
    public function getGmtSend()
    {
        return $this->gmtSend;
    }

    /**
     * @param mixed $gmtSend
     */
    public function setGmtSend($gmtSend)
    {
        $this->gmtSend = $gmtSend;
        $this->apiParas["gmtSend"] = $gmtSend;
    }

    /**
     * @return mixed
     */
    public function getExtBody()
    {
        return $this->extBody;
    }

    /**
     * @param mixed $extBody
     */
    public function setExtBody($extBody)
    {
        $this->extBody = $extBody;
        $this->apiParas["extBody"] = $extBody;
    }

    /**
     * @return mixed
     */
    public function getExtParam()
    {
        return $this->extParam;
    }

    /**
     * @param mixed $extParam
     */
    public function setExtParam($extParam)
    {
        $this->extParam = $extParam;
        $this->apiParas["extParam"] = $extParam;
    }

    /**
     * @return mixed
     */
    public function getReceiverInfo()
    {
        return $this->receiverInfo;
    }

    /**
     * @param mixed $receiverInfo
     */
    public function setReceiverInfo($receiverInfo)
    {
        $this->receiverInfo = $receiverInfo;
        $this->apiParas["receiverInfo"] = $receiverInfo;
    }


	public function check()
	{
		RequestCheckUtil::checkNotNull($this->sendGoods,"sendGoods");
        RequestCheckUtil::checkNotNull($this->extBody,"extBody");
	}

}
