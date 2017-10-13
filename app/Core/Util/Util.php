<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2015/9/16
 * Time: 16:16
 */

namespace App\Core\Util;
class Util {


    //获取过去的时间数组
    public static function getPeriodDates($period)
    {
        $days = array ();

        for($i=0;$i<$period;$i++)
        {
            $days[$i] = date("Y-m-d", @time() - 86400 * $i);
        }
        $days  = array_reverse($days);
        return $days;
    }


    //获取日期时间段
    public static function getDatePeriod($period)
    {
        $days = new \stdClass();
        $startDate = date("Y-m-d", @time() - 86400 * ($period-1));
        $endDate = date("Y-m-d", @time()+86400);
        $days->start_date = $startDate;
        $days->end_date = $endDate;
        return $days;
    }

    //获取日期时间段
    public static function getDatePeriodAli($period)
    {
        $days = new \stdClass();
        $startDate = date("Ymd000000000+0800", time() - 86400 * ($period-1));

        //$endDate = date("Ymd000000000+0800", @time());
        $endDate = date("Ymd000000000+0800", time() + 86400 );
        $days->start_date = $startDate;
        $days->end_date = $endDate;
        return $days;
    }


    public static function formatAliDate($date){
        $result = date("Ymd000000000+0800", strtotime($date));
        return $result;
    }

    //获取时间段
    public static function dateTimePeriod($period)
    {
        $days = new \stdClass();
        $startDate = date("Y-m-d", @time() - 86400 * $period);
        $endDate = date("Y-m-d", @time());

        $startDate = $startDate." 00:00:00";
        $endDate = $endDate." 24:00:00";
        $days->start_date = $startDate;
        $days->end_date = $endDate;
        return $days;
    }
}
?>