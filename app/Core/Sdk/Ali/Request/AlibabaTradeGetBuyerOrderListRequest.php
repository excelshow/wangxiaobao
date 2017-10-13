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
class AlibabaTradeGetBuyerOrderListRequest extends Request
{

	protected $namespace = 'com.alibaba.trade';
	protected $version = '1';
	protected $method_name = 'alibaba.trade.getBuyerOrderList';

	private $createEndTime;
    private $createStartTime;
    private $isHis;
    private $modifyEndTime;
    private $modifyStartTime;
    private $orderStatus;
    private $page;
    private $pageSize;
    private $refundStatus;
    private $sellerMemberId;
    private $sellerRateStatus;
    private $tradeType;
    private $bizTypes;

    /**
     * @return mixed
     */
    public function getCreateEndTime()
    {
        return $this->createEndTime;
    }

    /**
     * @param mixed $createEndTime
     */
    public function setCreateEndTime($createEndTime)
    {
        $this->createEndTime = $createEndTime;
        $this->apiParas["createEndTime"] = $createEndTime;
    }

    /**
     * @return mixed
     */
    public function getCreateStartTime()
    {
        return $this->createStartTime;
    }

    /**
     * @param mixed $createStartTime
     */
    public function setCreateStartTime($createStartTime)
    {
        $this->createStartTime = $createStartTime;
        $this->apiParas["createStartTime"] = $createStartTime;
    }

    /**
     * @return mixed
     */
    public function getIsHis()
    {
        return $this->isHis;
    }

    /**
     * @param mixed $isHis
     */
    public function setIsHis($isHis)
    {
        $this->isHis = $isHis;
        $this->apiParas["isHis"] = $isHis;
    }

    /**
     * @return mixed
     */
    public function getModifyEndTime()
    {
        return $this->modifyEndTime;
    }

    /**
     * @param mixed $modifyEndTime
     */
    public function setModifyEndTime($modifyEndTime)
    {
        $this->modifyEndTime = $modifyEndTime;
        $this->apiParas["modifyEndTime"] = $modifyEndTime;
    }

    /**
     * @return mixed
     */
    public function getModifyStartTime()
    {
        return $this->modifyStartTime;
    }

    /**
     * @param mixed $modifyStartTime
     */
    public function setModifyStartTime($modifyStartTime)
    {
        $this->modifyStartTime = $modifyStartTime;
        $this->apiParas["modifyStartTime"] = $modifyStartTime;
    }

    /**
     * @return mixed
     */
    public function getOrderStatus()
    {
        return $this->orderStatus;
    }

    /**
     * @param mixed $orderStatus
     */
    public function setOrderStatus($orderStatus)
    {
        $this->orderStatus = $orderStatus;
        $this->apiParas["orderStatus"] = $orderStatus;
    }

    /**
     * @return mixed
     */
    public function getPage()
    {
        return $this->page;
    }

    /**
     * @param mixed $page
     */
    public function setPage($page)
    {
        $this->page = $page;
        $this->apiParas["page"] = $page;
    }

    /**
     * @return mixed
     */
    public function getPageSize()
    {
        return $this->pageSize;
    }

    /**
     * @param mixed $pageSize
     */
    public function setPageSize($pageSize)
    {
        $this->pageSize = $pageSize;
        $this->apiParas["pageSize"] = $pageSize;
    }

    /**
     * @return mixed
     */
    public function getRefundStatus()
    {
        return $this->refundStatus;
    }

    /**
     * @param mixed $refundStatus
     */
    public function setRefundStatus($refundStatus)
    {
        $this->refundStatus = $refundStatus;
        $this->apiParas["refundStatus"] = $refundStatus;
    }

    /**
     * @return mixed
     */
    public function getSellerMemberId()
    {
        return $this->sellerMemberId;
    }

    /**
     * @param mixed $sellerMemberId
     */
    public function setSellerMemberId($sellerMemberId)
    {
        $this->sellerMemberId = $sellerMemberId;
        $this->apiParas["sellerMemberId"] = $sellerMemberId;
    }

    /**
     * @return mixed
     */
    public function getSellerRateStatus()
    {
        return $this->sellerRateStatus;
    }

    /**
     * @param mixed $sellerRateStatus
     */
    public function setSellerRateStatus($sellerRateStatus)
    {
        $this->sellerRateStatus = $sellerRateStatus;
        $this->apiParas["sellerRateStatus"] = $sellerRateStatus;
    }



    /**
     * @return mixed
     */
    public function getTradeType()
    {
        return $this->tradeType;
    }

    /**
     * @param mixed $tradeType
     */
    public function setTradeType($tradeType)
    {
        $this->tradeType = $tradeType;
        $this->apiParas["tradeType"] = $tradeType;
    }

    /**
     * @return mixed
     */
    public function getBizTypes()
    {
        return $this->bizTypes;
    }

    /**
     * @param mixed $bizTypes
     */
    public function setBizTypes($bizTypes)
    {
        $this->bizTypes = $bizTypes;
        $this->apiParas["bizTypes"] = $bizTypes;
    }




	public function check()
	{
		RequestCheckUtil::checkNotNull($this->isHis,"isHis");
	}

}
