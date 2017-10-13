/**
 * Created by Administrator on 2017/3/12.
 */
import Reflux from 'reflux';
import { OrderDownloadActions } from '../../action/print/orderDownloadActions';

class OrderDownloadStore extends Reflux.Store{
    constructor(){
        super();
        this.listenables=[OrderDownloadActions];
        this.state = {
            state:'BEFORE',
            period:3,
            download_time:'-',
            dialog_visible:false,
            wait_total:0,//提示待下载数
            process_id:'1',
            order_total:0,//正在同步的数
            download_total:0,//已同步数
            percent:0,
            error:{
                msg:'',
                visible:'hidden'
            }
        };
    }

    //获取待下载订单
    onGetWaitDownloadInfo(){
        let state = this.state;
        $.ajax({
            url:'/app/print/order/download/getWaitDownloadInfo',
            data:'',
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            if(response){
                state.wait_total = response.wait_total;
                state.download_time = response.download_time;
                this.setState(state);
            }

        }).fail((response)=>{
            console.log('请求失败'+response);
        })
    }


    //选择下载时间
    onSelectPeriod(period){
        let state = this.state;
        state.period = period;
        this.setState(state);
    }

    //获取下载进度
    getProcessInterval(){

        let state = this.state;

        let process = setInterval(()=> {
            let cancel = state.state;
            if(cancel!='DOING'){
                clearInterval(process);
                this.onCancel();
                return;
            }

            let processId = this.state.process_id;
            let data = {
                params:JSON.stringify({process_id:processId}),
            };
            $.ajax({
                url:'/app/print/order/download/getProcess',
                data:data,
                type:'POST',
                dataType:'json'
            }).done((response)=>{
                if(!response){
                    return;
                }
                let orderTotal =  response.order_total;
                let downloadTotal =  response.download_total;
                let percent = orderTotal=='0'?100:Math.round(downloadTotal/orderTotal*100);

                let done = response.status;
                if(done=='DONE'){
                    clearInterval(process);
                    state.state = 'BEFORE';
                    state.wait_total = '0';
                    state.download_time = response.end_time;
                    state.error.visible = 'download-order-success';
                    state.error.msg = '同步完成';

                }

                state.order_total = response.order_total;
                state.download_total = response.download_total;
                state.percent = percent;
                this.setState(state);

            }).fail((response)=>{

                clearInterval(process);
                let postState = 'BEFORE';
                let {error} = this.state;
                error.visible = 'download-order-failed';
                error.msg = '获取下载进度超时';
                this.setState({state:postState,error:error});
                console.log('请求失败'+response)
            });

        },1000)
}

    //下载订单
    onDownload(){
        let state = this.state;
        state.dialog_visible = true;
        this.setState(state);
        let done = state.state;
        if(done=='DOING'){
            this.getProcessInterval();
            return;
        }
        let processId =  new Date().getTime();
        state.order_total = 0;
        state.download_total = 0;
        state.percent = 0;
        state.process_id = processId;
        state.state = 'DOING';
        this.setState(state);
        this.doDownload();
        this.getProcessInterval();
    }


    onCloseDialog(){
        let state = this.state;
        state.dialog_visible = false;
        let percent = state.percent;
        if(percent==100){
            state.order_total = 0;
            state.download_total = 0;
            state.percent = 0;
            state.state = 'BEFORE';
        }
        state.error.msg = '';
        state.error.visible = '';
        this.setState(state);
    }
    //取消下载
    onCancel(){
        let state = this.state;
        state.dialog_visible = false;
        state.state = 'BEFORE';
        state.error.msg = '';
        state.error.visible = '';
        this.setState(state);
    }

    //下载函数
    doDownload(){
        let {period,process_id} = this.state;

        let data = {
            params:JSON.stringify({period,process_id}),
        };
        $.ajax({
            url:'/app/print/order/download',
            data:data,
            type:'POST',
            dataType:'json'
        }).fail((response)=>{
            let {error} = this.state;
            error.visible = 'download-order-failed';
            error.msg = '同步失败 ： 请求异常，同步终止，请联系客服';
            this.setState({state:'BEFORE',error:error});
            console.log('请求失败'+response);
        })
    }
}
export {OrderDownloadStore};