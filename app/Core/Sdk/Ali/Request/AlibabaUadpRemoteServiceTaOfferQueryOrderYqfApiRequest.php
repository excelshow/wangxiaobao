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
class AlibabaUadpRemoteServiceTaOfferQueryOrderYqfApiRequest extends Request
{

	protected $namespace = 'cn.alibaba.open';
	protected $version = '1';
	protected $method_name = 'alibaba.uadp.remote.service.ta.offer.query.order.yqf.api';

	private $time;
    private $timeType;
    private $pageOffset;
    private $pageSize;

    /**
     * @return mixed
     */
    public function getTime()
    {
        return $this->time;
    }

    /**
     * @param mixed $time
     */
    public function setTime($time)
    {
        $this->time = $time;
        $this->apiParas["time"] = $time;
    }

    /**
     * @return mixed
     */
    public function getTimeType()
    {
        return $this->timeType;
    }

    /**
     * @param mixed $timeType
     */
    public function setTimeType($timeType)
    {
        $this->timeType = $timeType;
        $this->apiParas["timeType"] = $timeType;
    }

    /**
     * @return mixed
     */
    public function getPageOffset()
    {
        return $this->pageOffset;
    }

    /**
     * @param mixed $pageOffset
     */
    public function setPageOffset($pageOffset)
    {
        $this->pageOffset = $pageOffset;
        $this->apiParas["pageOffset"] = $pageOffset;
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



	public function check()
	{
		RequestCheckUtil::checkNotNull($this->time,"time");
        RequestCheckUtil::checkNotNull($this->timeType,"timeType");
        RequestCheckUtil::checkNotNull($this->pageOffset,"pageOffset");
        RequestCheckUtil::checkNotNull($this->pageSize,"pageSize");
	}

}
