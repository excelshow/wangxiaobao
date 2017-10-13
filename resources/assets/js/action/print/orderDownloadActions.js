/**
 * Created by Administrator on 2017/3/12.
 */
import Reflux from 'reflux';


let OrderDownloadActions = Reflux.createActions({
    //选择下载时间
    selectPeriod:{},
    //下载订单
    download:{},
    //获取最新订单数
    getNewOrderTotal:{},
    //获取下载时间
    getWaitDownloadInfo:{},
    //关闭对话框
    closeDialog:{},
    //取消下载
    cancel:{}
});
export {OrderDownloadActions}
