<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/2/22
 * Time: 14:44
 */
namespace App\Core\Sdk\Ali;

class Request
{
    protected $format = 'param2';
    protected $namespace = 'cn.alibaba.open';
    protected $version = '1';
    protected $method_name = '';
    protected $apiParas = array();

    
    public function getSignUrl(){
        $format = $this->format;
        $version = $this->version;
        $namespace = $this->namespace;
        $apiName = $this->method_name;
        $urlPath = $format.'/'.$version.'/'.$namespace.'/'.$apiName;
        return $urlPath;
    }

    public function getApiFormat()
    {
        return $this->format;
    }

    public function getApiNamespace()
    {
        return $this->namespace;
    }

    public function getApiVersion()
    {
        return $this->version;
    }
    
    public function getApiMethodName()
    {
        return $this->method_name;
    }

    public function getApiParas()
    {
        $params = $this->apiParas;
        foreach ($params as $p=>$param){
            if($param==''){
                unset($params[$p]);
            }
        }
        return $params;
    }
    
    public function putOtherTextParam($key, $value) {
        $this->apiParas[$key] = $value;
        $this->$key = $value;
    }
}