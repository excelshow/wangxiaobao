<?php
/**
 * TOP API: alibaba.open.convertmemberidsbyloginids request
 * 
 * @author auto create
 * @since 1.0, 2016.05.17
 */
namespace App\Core\Sdk\Bird\Request;
use App\Core\Sdk\Bird\Request;
use App\Core\Sdk\Bird\RequestCheckUtil;
class BirdEOrderGetRequest extends Request
{

	protected $method_name = 'Eorderservice';

	//面单帐号
	private $CustomerName;
	//面单密码
	private $CustomerPwd;
	//快递编码
	private $ShipperCode;
	//订单编号
	private $OrderCode;
	//付款方式 1。寄付 2，到付
	private $PayType;
	//快件类型 1.标准快件
	private $ExpType;
	//寄件人信息
	private $Sender;
	//收件人信息
	private $Receiver;
	//商品信息
	private $Commodity;




	//是否上门拦件
	private $IsNotice;
	//是否返回面单信息
	private $IsReturnPrintTemplate;

	//用户自定义回调
	private $CallBack;
	//会员标识
	private $MemberID;

	//收件网点标识
	private $SendSite;
	//快递单号
	private $LogisticCode;

	//寄件费用
	private $Cost;
	//其他费用
	private $OtherCost;

	//上门取货时间
	private $StartDate;
	//上门取货时间
	private $EndDate;


	//重量
	private $Weight;
	//件数
	private $Quantity;
	
	//体积
	private $Volume;
	//备注
	private $Remark;
	
	//月结编码
	private $MonthCode;



	//parseSender
	public function parseSender($sender){
		$model = new \stdClass();
		$model->Address = @$sender->street;
		$model->CityName = @$sender->city;
		$model->ExpAreaName = @$sender->area;
		$model->Mobile = @$sender->mobile;
		$model->Name = @$sender->sender_name;
		$model->ProvinceName = @$sender->province;
		return $model;
	}

	public function parseReceiver($receiver){
		$model = new \stdClass();
		$model->Address = @$receiver->receiver_street;
		$model->CityName = @$receiver->receiver_city;
		$model->ExpAreaName = @$receiver->receiver_area;
		$model->Mobile = @$receiver->receiver_mobile;
		$model->Name = @$receiver->receiver_name;
		$model->ProvinceName = @$receiver->receiver_province;
		return $model;
	}

	//parse 商品
	public function parseProducts($products){
		$datas = [];
		foreach ($products as $p=>$product){
			$model = new \stdClass();
			$model->GoodsCode = @$product->prduct_cargo_number? @$product->prduct_cargo_number:'';
			$model->GoodsDesc = @$product->spec_items?@$product->spec_items:'';
			$model->GoodsName = @$product->product_name?@$product->product_name:'';
			$model->GoodsPrice = @$product->price?@$product->price/100:'';
			$model->Goodsquantity = @$product->quantity?$product->quantity:'';
			$model->GoodsVol = @$product->volume?$product->volume:'';
			$model->GoodsWeight = @$product->weight?$product->weight:'';
			$datas[] = $model;
		}
		return $datas;
	}
	
	

	/**
	 * @return mixed
	 */
	public function getCustomerName()
	{
		return $this->CustomerName;
	}

	/**
	 * @param mixed $CustomerName
	 */
	public function setCustomerName($CustomerName)
	{
		$this->CustomerName = $CustomerName;
		$this->apiParas["CustomerName"] = $CustomerName;
	}

	/**
	 * @return mixed
	 */
	public function getCustomerPwd()
	{
		return $this->CustomerPwd;
	}

	/**
	 * @param mixed $CustomerPwd
	 */
	public function setCustomerPwd($CustomerPwd)
	{
		$this->CustomerPwd = $CustomerPwd;
		$this->apiParas["CustomerPwd"] = $CustomerPwd;
	}

	/**
	 * @return mixed
	 */
	public function getShipperCode()
	{
		return $this->ShipperCode;
	}

	/**
	 * @param mixed $ShipperCode
	 */
	public function setShipperCode($ShipperCode)
	{
		$this->ShipperCode = $ShipperCode;
		$this->apiParas["ShipperCode"] = $ShipperCode;
	}

	/**
	 * @return mixed
	 */
	public function getOrderCode()
	{
		return $this->OrderCode;
	}

	/**
	 * @param mixed $OrderCode
	 */
	public function setOrderCode($OrderCode)
	{
		$this->OrderCode = $OrderCode;
		$this->apiParas["OrderCode"] = $OrderCode;
	}

	/**
	 * @return mixed
	 */
	public function getPayType()
	{
		return $this->PayType;
	}

	/**
	 * @param mixed $PayType
	 */
	public function setPayType($PayType)
	{
		$this->PayType = $PayType;
		$this->apiParas["PayType"] = $PayType;
	}

	/**
	 * @return mixed
	 */
	public function getExpType()
	{
		return $this->ExpType;
	}

	/**
	 * @param mixed $ExpType
	 */
	public function setExpType($ExpType)
	{
		$this->ExpType = $ExpType;
		$this->apiParas["ExpType"] = $ExpType;
	}

	/**
	 * @return mixed
	 */
	public function getSender()
	{
		return $this->Sender;
	}

	/**
	 * @param mixed $Sender
	 */
	public function setSender($Sender)
	{
		$Sender = $this->parseSender($Sender);
		$this->Sender = $Sender;
		$this->apiParas["Sender"] = $Sender;
	}

	/**
	 * @return mixed
	 */
	public function getReceiver()
	{
		return $this->Receiver;
	}

	/**
	 * @param mixed $Receiver
	 */
	public function setReceiver($Receiver)
	{
		$Receiver = $this->parseReceiver($Receiver);
		$this->Receiver = $Receiver;
		$this->apiParas["Receiver"] = $Receiver;
	}

	/**
	 * @return mixed
	 */
	public function getCommodity()
	{
		return $this->Commodity;
	}

	/**
	 * @param mixed $Commodity
	 */
	public function setCommodity($products)
	{
		$Commodity = $this->parseProducts($products);
		$this->Commodity = $Commodity;
		$this->apiParas["Commodity"] = $Commodity;
	}

	/**
	 * @return mixed
	 */
	public function getCallBack()
	{
		return $this->CallBack;
	}

	/**
	 * @param mixed $CallBack
	 */
	public function setCallBack($CallBack)
	{
		$this->CallBack = $CallBack;
		$this->apiParas["CallBack"] = $CallBack;
	}

	/**
	 * @return mixed
	 */
	public function getMemberID()
	{
		return $this->MemberID;
	}

	/**
	 * @param mixed $MemberID
	 */
	public function setMemberID($MemberID)
	{
		$this->MemberID = $MemberID;
		$this->apiParas["MemberID"] = $MemberID;
	}

	/**
	 * @return mixed
	 */
	public function getStartDate()
	{
		return $this->StartDate;
	}

	/**
	 * @param mixed $StartDate
	 */
	public function setStartDate($StartDate)
	{
		$this->StartDate = $StartDate;
		$this->apiParas["StartDate"] = $StartDate;
	}

	/**
	 * @return mixed
	 */
	public function getEndDate()
	{
		return $this->EndDate;
	}

	/**
	 * @param mixed $EndDate
	 */
	public function setEndDate($EndDate)
	{
		$this->EndDate = $EndDate;
		$this->apiParas["EndDate"] = $EndDate;
	}

	/**
	 * @return mixed
	 */
	public function getIsReturnPrintTemplate()
	{
		return $this->IsReturnPrintTemplate;
	}

	/**
	 * @param mixed $IsReturnPrintTemplate
	 */
	public function setIsReturnPrintTemplate($IsReturnPrintTemplate)
	{
		$this->IsReturnPrintTemplate = $IsReturnPrintTemplate;
		$this->apiParas["IsReturnPrintTemplate"] = $IsReturnPrintTemplate;
	}

	/**
	 * @return mixed
	 */
	public function getSendSite()
	{
		return $this->SendSite;
	}

	/**
	 * @param mixed $SendSite
	 */
	public function setSendSite($SendSite)
	{
		$this->SendSite = $SendSite;
		$this->apiParas["SendSite"] = $SendSite;
	}

	/**
	 * @return mixed
	 */
	public function getLogisticCode()
	{
		return $this->LogisticCode;
	}

	/**
	 * @param mixed $LogisticCode
	 */
	public function setLogisticCode($LogisticCode)
	{
		$this->LogisticCode = $LogisticCode;
		$this->apiParas["LogisticCode"] = $LogisticCode;
	}

	/**
	 * @return mixed
	 */
	public function getIsNotice()
	{
		return $this->IsNotice;
	}

	/**
	 * @param mixed $IsNotice
	 */
	public function setIsNotice($IsNotice)
	{
		$this->IsNotice = $IsNotice;
		$this->apiParas["IsNotice"] = $IsNotice;
	}

	/**
	 * @return mixed
	 */
	public function getCost()
	{
		return $this->Cost;
	}

	/**
	 * @param mixed $Cost
	 */
	public function setCost($Cost)
	{
		$this->Cost = $Cost;
		$this->apiParas["Cost"] = $Cost;
	}

	/**
	 * @return mixed
	 */
	public function getOtherCost()
	{
		return $this->OtherCost;
	}

	/**
	 * @param mixed $OtherCost
	 */
	public function setOtherCost($OtherCost)
	{
		$this->OtherCost = $OtherCost;
		$this->apiParas["OtherCost"] = $OtherCost;
	}

	/**
	 * @return mixed
	 */
	public function getWeight()
	{
		return $this->Weight;
	}

	/**
	 * @param mixed $Weight
	 */
	public function setWeight($Weight)
	{
		$this->Weight = $Weight;
		$this->apiParas["Weight"] = $Weight;
	}

	/**
	 * @return mixed
	 */
	public function getQuantity()
	{
		return $this->Quantity;
	}

	/**
	 * @param mixed $Quantity
	 */
	public function setQuantity($Quantity)
	{
		$this->Quantity = $Quantity;
		$this->apiParas["Quantity"] = $Quantity;
	}

	/**
	 * @return mixed
	 */
	public function getVolume()
	{
		return $this->Volume;
	}

	/**
	 * @param mixed $Volume
	 */
	public function setVolume($Volume)
	{
		$this->Volume = $Volume;
		$this->apiParas["Volume"] = $Volume;
	}

	/**
	 * @return mixed
	 */
	public function getRemark()
	{
		return $this->Remark;
	}

	/**
	 * @param mixed $Remark
	 */
	public function setRemark($Remark)
	{
		$this->Remark = $Remark;
		$this->apiParas["Remark"] = $Remark;
	}

	/**
	 * @return mixed
	 */
	public function getMonthCode()
	{
		return $this->MonthCode;
	}

	/**
	 * @param mixed $MonthCode
	 */
	public function setMonthCode($MonthCode)
	{
		$this->MonthCode = $MonthCode;
		$this->apiParas["MonthCode"] = $MonthCode;
	}






	public function check()
	{
		RequestCheckUtil::checkNotNull($this->CustomerName,"CustomerName");
		RequestCheckUtil::checkNotNull($this->CustomerPwd,"CustomerPwd");
		RequestCheckUtil::checkNotNull($this->ShipperCode,"ShipperCode");
		RequestCheckUtil::checkNotNull($this->OrderCode,"OrderCode");
		RequestCheckUtil::checkNotNull($this->PayType,"PayType");
		RequestCheckUtil::checkNotNull($this->ExpType,"ExpType");
		RequestCheckUtil::checkNotNull($this->Sender,"Sender");
		RequestCheckUtil::checkNotNull($this->Receiver,"Receiver");
		RequestCheckUtil::checkNotNull($this->Commodity,"Commodity");
	}

}
