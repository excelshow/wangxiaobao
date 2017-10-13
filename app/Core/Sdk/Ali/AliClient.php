<?php
namespace App\Core\Sdk\Ali;

class AliClient
{
	public $appkey;

	public $secretKey;

	public $gatewayUrl = "http://gw.open.1688.com/openapi";

	public $format = "json";

	public $connectTimeout;

	public $readTimeout;
	/** 是否打开入参check**/
	public $checkRequest = false;
	
	protected $sdkVersion = "ali-sdk-php-20170225";

	public function __construct($appkey = "",$secretKey = ""){
		$this->appkey = $appkey;
		$this->secretKey = $secretKey ;
	}

	protected function generateSign($params)
	{
		ksort($params);
		$signUrl = $params['sign_url'];
		unset($params['sign_url']);
		$appkey = $this->appkey;
		$appsecret = $this->secretKey;
		$urlPath = $signUrl.'/'.$appkey;
		$signStr = '';
		foreach ($params as $key=>$val)
		{
			$signStr .= $key . $val;
		}
		$signStr = $urlPath.$signStr;
		$signature = strtoupper(bin2hex(hash_hmac('sha1', $signStr, $appsecret, true)));
		return $signature;
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
		//curl_setopt ( $ch, CURLOPT_USERAGENT, "top-sdk-php" );
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
	
	public function curl_with_memory_file($url, $postFields = null, $fileFields = null)
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
		curl_setopt ( $ch, CURLOPT_USERAGENT, "top-sdk-php" );
		//https 请求
		if(strlen($url) > 5 && strtolower(substr($url,0,5)) == "https" ) {
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
			curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
		}
		//生成分隔符
		$delimiter = '-------------' . uniqid();
		//先将post的普通数据生成主体字符串
		$data = '';
		if($postFields != null){
			foreach ($postFields as $name => $content) {
			    $data .= "--" . $delimiter . "\r\n";
			    $data .= 'Content-Disposition: form-data; name="' . $name . '"';
			    //multipart/form-data 不需要urlencode，参见 http:stackoverflow.com/questions/6603928/should-i-url-encode-post-data
			    $data .= "\r\n\r\n" . $content . "\r\n";
			}
			unset($name,$content);
		}

		//将上传的文件生成主体字符串
		if($fileFields != null){
			foreach ($fileFields as $name => $file) {
			    $data .= "--" . $delimiter . "\r\n";
			    $data .= 'Content-Disposition: form-data; name="' . $name . '"; filename="' . $file['name'] . "\" \r\n";
			    $data .= 'Content-Type: ' . $file['type'] . "\r\n\r\n";//多了个文档类型

			    $data .= $file['content'] . "\r\n";
			}
			unset($name,$file);
		}
		//主体结束的分隔符
		$data .= "--" . $delimiter . "--";

		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_HTTPHEADER , array(
		    'Content-Type: multipart/form-data; boundary=' . $delimiter,
		    'Content-Length: ' . strlen($data))
		); 
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

		$reponse = curl_exec($ch);
		unset($data);

		if (curl_errno($ch))
		{
			throw new Exception(curl_error($ch),0);
		}
		else
		{
			$httpStatusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
			if (200 !== $httpStatusCode)
			{
				throw new Exception($reponse,$httpStatusCode);
			}
		}
		curl_close($ch);
		return $reponse;
	}

	public function execute($request, $session = null)
	{
		//组装系统参数
		$sysParams["sign_url"] = $request->getSignUrl();
		$sysParams["_aop_timestamp"] = floor(microtime(true)*1000);

		if (null != $session)
		{
			$sysParams["access_token"] = $session;
		}
		$apiParams = array();

		//获取业务参数
		$apiParams = $request->getApiParas();
		//print_r($apiParams);
		//系统参数放入GET请求串
		$params = array_merge($apiParams, $sysParams);
		//签名
		$params["_aop_signature"] = $this->generateSign($params);

		unset($params['sign_url']);

		$fileFields = array();
		foreach ($apiParams as $key => $value) {
			if(is_array($value) && array_key_exists('type',$value) && array_key_exists('content',$value) ){
				$value['name'] = $key;
				$fileFields[$key] = $value;
				unset($apiParams[$key]);
			}
		}

		$requestUrl = $this->gatewayUrl.'/'.$request->getSignUrl().'/'.$this->appkey.'?'.http_build_query($params);
		//发起HTTP请求
		if(count($fileFields) > 0){
			$resp = $this->curl_with_memory_file($requestUrl, $apiParams, $fileFields);
		}else{
			$resp = $this->curl($requestUrl, $apiParams);
		}
		//print_r($apiParams);
		unset($apiParams);
		unset($fileFields);
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
