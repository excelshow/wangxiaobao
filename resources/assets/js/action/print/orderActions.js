/**
 * Created by Administrator on 2017/3/12.
 */
import Reflux from 'reflux';

//订单action 
let OrderActions = Reflux.createActions({

    //查询订单
    getOrders:{},
    //排序
    sort:{},
    //初始化页码
    initPage:{},
    //切换页码
    changePage:{},
    //设置每页大小
    setPageSize:{},
    //展开合上
    openAllToggle:{},
    //每行展开合上
    rowExpendedChange:{},
    //选择记录
    changeSelectedRows:{},
    //订单备注
    remark:{},
    //订单评价
    rate:{},
    //改价
    updatePrice:{},
    //免邮
    updateCarriage:{},
    //修改地址
    updateReceiverAddress:{},
    
    //获取默认物流和模版
    getLogisticDefaultAndTpl:{},
    //获取合作物流
    getLogisticsCooperate:{},
    //获取常用物流
    getLogisticsOften:{},
    //获取默认发货地址
    getSenderAddress:{},
    //获取打印设置
    getPrintSetting:{},
    //获取默认货单模版
    getDefaultProductTpl:{},
    //获取面单账号
    getElectricAccount:{},


    //选择发货物流
    selectLogisticCompany:{},
    
    //打印货单
    printProductPage:{},
    //打印运单
    printLogisticPage:{},
    //打印面单
    printElectricPage:{},

    //顺延单号
    createLogisticNums:{},

    //关闭顺延对话框
    closeLogisticNumsCreater:{},
    //确认设置初始单号
    setOriginalLogisticNum:{},

    //获取自动打印设置
    getAutoPrintSetting:{},
    //开关自动打印发货
    toggleAutoPrint:{},
    //关闭自动发货
    closeAutoEditor:{},
    //确认自动设置初始单号
    setAutoLogisticNum:{},


    //批量发货
    sendAll:{},

    //一键打印发货
    oneKeyPrint:{},


    //发货
    send:{},
    //取消发货
    closeSendEditor:{ },
    //发货提交
    sendSubmit:{ },
    //选择发货产品
    selectSendProducts:{},
    //选择发货物流
    selectSendLogistic:{},
    //选择物流方式
    selectSendWay:{},
    //设置单号
    setLogisticNum:{},

});

export {OrderActions}
