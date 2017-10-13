<?php
namespace App\Core\Sdk\Bird;

class BirdClient
{
	public $appkey;

	public $secretKey;

	//public $gatewayUrl = "http://api.kdniao.cc/api/Eorderservice";
    public $gatewayUrl = "http://testapi.kdniao.cc:8081/api";

	public $format = "json";

	public $connectTimeout;

	public $readTimeout;
	/** 是否打开入参check**/
	public $checkRequest = false;
	
	protected $sdkVersion = "bird-sdk-php-20170425";

	public function __construct($appkey = "",$secretKey = ""){
		$this->appkey = $appkey;
		$this->secretKey = $secretKey ;
	}

	protected function generateSign($params)
	{
		$data = json_encode($params);
		$secret = $this->secretKey;
		return urlencode(base64_encode(md5($data.$secret)));
	}

	public function curl($url, $postFields = null)
	{
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_FAILONERROR, false);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		if ($this->readTimeout) {
			curl_setopt($ch, CURLOPT_TIMEOUT, $this->readTimeout);
		}
		if ($this->connectTimeout) {
			curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $this->connectTimeout);
		}
		//https 请求
		if(strlen($url) > 5 && strtolower(substr($url,0,5)) == "https" ) {
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
			curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
		}

		if (is_array($postFields) && 0 < count($postFields))
		{
			$postBodyString = "";
			$postMultipart = false;
			foreach ($postFields as $k => $v)
			{
				//if(!is_string($v))
				//continue ;
				if("@" != substr($v, 0, 1))//判断是不是文件上传
				{
					$postBodyString .= "$k=" . urlencode($v) . "&";
				}
				else//文件上传用multipart/form-data，否则用www-form-urlencoded
				{
					$postMultipart = true;
					if(class_exists('\CURLFile')){
						$postFields[$k] = new \CURLFile(substr($v, 1));
					}
				}
			}
			unset($k, $v);
			curl_setopt($ch, CURLOPT_POST, true);
			if ($postMultipart)
			{
				if (class_exists('\CURLFile')) {
					curl_setopt($ch, CURLOPT_SAFE_UPLOAD, true);
				} else {
					if (defined('CURLOPT_SAFE_UPLOAD')) {
						curl_setopt($ch, CURLOPT_SAFE_UPLOAD, false);
					}
				}
				//print_r($postFields);
				curl_setopt($ch, CURLOPT_POSTFIELDS, $postFields);
			}
			else
			{
				$header = array("content-type: application/x-www-form-urlencoded; charset=UTF-8");
				curl_setopt($ch,CURLOPT_HTTPHEADER,$header);
				curl_setopt($ch, CURLOPT_POSTFIELDS, substr($postBodyString,0,-1));
			}
		}
		$reponse = curl_exec($ch);

		if (curl_errno($ch))
		{
			//print_r(curl_errno($ch));
			//throw new Exception(curl_error($ch),0);
		}
		else
		{
			$httpStatusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
			if (200 !== $httpStatusCode)
			{
				//throw new Exception($reponse,$httpStatusCode);
			}
		}
		curl_close($ch);
		return $reponse;
	}


	public function execute($request, $session = null)
	{
		$apiParams = $request->getApiParas();

		//组装系统参数
		$params["EBusinessID"] = $this->appkey;
		$params["RequestType"] = 1007;
		$params["RequestData"] = urlencode(json_encode($apiParams));
		$params["DataType"] = 2;
		//签名
		$params["DataSign"] = $this->generateSign($apiParams);

		$requestUrl = $this->gatewayUrl.'/'.$request->getSignUrl();

		$resp = $this->curl($requestUrl, $params);
		//解析TOP返回结果
		if ("json" == $this->format)
		{
			$respObject = json_decode($resp);
		}
		else if("xml" == $this->format)
		{
			$respObject = @simplexml_load_string($resp);
		}

		return $respObject;
	}

}
