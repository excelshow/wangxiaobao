<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/2/22
 * Time: 14:44
 */
namespace App\Core\Sdk\Bird;

class Request
{

    protected $method_name = '';
    protected $apiParas = array();

    
    public function getSignUrl(){
  
        $apiName = $this->method_name;
        $urlPath = $apiName;
        return $urlPath;
    }
    
    
    
    public function getApiMethodName()
    {
        return $this->method_name;
    }

    public function getApiParas()
    {
        $params = $this->apiParas;
        ksort($params);
        return $params;
    }
    
    public function putOtherTextParam($key, $value) {
        $this->apiParas[$key] = $value;
        $this->$key = $value;
    }
}