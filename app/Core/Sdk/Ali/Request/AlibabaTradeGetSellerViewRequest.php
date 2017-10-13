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
class AlibabaTradeGetSellerViewRequest extends Request
{

	protected $namespace = 'com.alibaba.trade';
	protected $version = '1';
	protected $method_name = 'alibaba.trade.get.sellerView';

	private $webSite;
    private $orderId;

    /**
     * @return mixed
     */
    public function getWebSite()
    {
        return $this->webSite;
    }

    /**
     * @param mixed $webSite
     */
    public function setWebSite($webSite)
    {
        $this->webSite = $webSite;
        $this->apiParas["webSite"] = $webSite;
    }

    /**
     * @return mixed
     */
    public function getOrderId()
    {
        return $this->orderId;
    }

    /**
     * @param mixed $orderId
     */
    public function setOrderId($orderId)
    {
        $this->orderId = $orderId;
        $this->apiParas["orderId"] = $orderId;
    }




	public function check()
	{
		RequestCheckUtil::checkNotNull($this->webSite,"webSite");
        RequestCheckUtil::checkNotNull($this->orderId,"orderId");
	}

}
