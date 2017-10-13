<?php
/**
 * TOP API: alibaba.open.offer.modify.stock request
 * 
 * @author auto create
 * @since 1.0, 2016.07.05
 */
namespace App\Core\Sdk\Top\Request;
use App\Core\Sdk\Top\RequestCheckUtil;
class AlibabaOpenOfferModifyStockRequest
{
	/** 
	 * 总库存改变量
	 **/
	private $offerAmountChange;
	
	/** 
	 * 产品编号
	 **/
	private $offerId;
	
	/** 
	 * Sku报价产品，指定规格的库存变量，注是所有规格改变量之和要等于offerAmountChange
如果产品没有sku，可以不用填。数据格式{"specId":"number"},key是sku信息中的specId，后者为库存变更量
	 **/
	private $skuAmountChange;
	
	private $apiParas = array();
	
	public function setOfferAmountChange($offerAmountChange)
	{
		$this->offerAmountChange = $offerAmountChange;
		$this->apiParas["offer_amount_change"] = $offerAmountChange;
	}

	public function getOfferAmountChange()
	{
		return $this->offerAmountChange;
	}

	public function setOfferId($offerId)
	{
		$this->offerId = $offerId;
		$this->apiParas["offer_id"] = $offerId;
	}

	public function getOfferId()
	{
		return $this->offerId;
	}

	public function setSkuAmountChange($skuAmountChange)
	{
		$this->skuAmountChange = $skuAmountChange;
		$this->apiParas["sku_amount_change"] = $skuAmountChange;
	}

	public function getSkuAmountChange()
	{
		return $this->skuAmountChange;
	}

	public function getApiMethodName()
	{
		return "alibaba.open.offer.modify.stock";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->offerAmountChange,"offerAmountChange");
		RequestCheckUtil::checkNotNull($this->offerId,"offerId");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
