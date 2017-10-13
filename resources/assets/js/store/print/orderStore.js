/**
 * Created by Administrator on 2017/3/12.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Reflux from 'reflux';
import Dialog from 'qnui/lib/dialog';
import Feedback from 'qnui/lib/feedback';
const Toast = Feedback.toast;
import moment from 'qnui/lib/moment';
import { OrderActions } from '../../action/print/orderActions';
import {SearchTabActions} from '../../action/print/searchActions';
import {EditorArea as ProductTpl} from '../../lib/print/setting/productTpl';

//获取打印项数据
function getPrintItemContent(itemName,order={},sender={}){
    let data = '';
    let {products} = order;
    if(!order.order_id){
        return data;
    }

    switch (itemName){
        //订单信息
        case 'tpl-order-id':data = order.order_id;break;
        case 'tpl-order-create-time':data = order.gmt_create;break;
        case 'tpl-order-pay-time':data = order.gmt_payment;break;
        case 'tpl-order-send-time':data = moment().format('YYYY-MM-DD HH:mm:ss');break;
        case 'tpl-order-product-payment': data = order.sum_product_payment/100;break;

        case 'tpl-order-discount':data = order.discount/100;break;
        case 'tpl-order-carriage':data = order.carriage/100;break;
        case 'tpl-order-payment':data = order.sum_payment/100;break;
        case 'tpl-order-product-short-title':data = order.product_name;break;
        case 'tpl-order-product-total':data = (order.products)?order.products.length:'';break;

        //买家信息
        case 'tpl-buyer-nick':data = order.buyer_nick;break;
        case 'tpl-buyer-name':data = order.buyer_name;break;
        case 'tpl-buyer-mobile':data = order.buyer_mobile;break;
        case 'tpl-buyer-phone':data = order.buyer_phone;break;
        case 'tpl-buyer-message':data = order.buyer_message;break;

        //卖家信息
        case 'tpl-seller-nick':data = order.seller_nick;break;
        case 'tpl-seller-name':data = order.seller_name;break;
        case 'tpl-seller-mobile':data = order.seller_mobile;break;
        case 'tpl-seller-phone':data = order.seller_phone;break;
        case 'tpl-seller-remark':data = order.seller_remark;break;

        //寄件人信息
        case 'tpl-sender-name':data = sender.sender_name;break;
        case 'tpl-sender-mobile':data = sender.mobile;break;
        case 'tpl-sender-phone':data = sender.phone;break;
        case 'tpl-sender-post':data = sender.post;break;
        case 'tpl-sender-province':data = sender.province;break;
        case 'tpl-sender-address':data = sender.address;break;

        //收件人信息
        case 'tpl-receiver-name':data = order.receiver_name;break;
        case 'tpl-receiver-mobile':data = order.receiver_mobile;break;
        case 'tpl-receiver-phone':data = order.receiver_phone;break;
        case 'tpl-receiver-post':data = order.receiver_post;break;
        case 'tpl-receiver-province':data = order.receiver_province;break;
        case 'tpl-receiver-address':data = order.receiver_address;break;

        //商品信息
        case 'tpl-product-title':

            if(!products){
                break;
            }
            let titles = [];
            for(let product of products){
                titles.push(product.product_name);
            }
            data = titles.join('/');
            break;
        case 'tpl-product-short-title':
            if(!products){
                break;
            }
            let shortTitles = [];
            for(let product of products){
                shortTitles.push(product.title_short);
            }
            data = shortTitles.join('/');
            break;

        case 'tpl-product-short-info':
            if(!products){
                break;
            }
            let infos = [];
            for(let product of products){
                let unit = product.product_unit?product.product_unit:'';
                let productInfo = product.title_short + ' ( ' +product.spec_items+' '+product.quantity+' '+unit+' ) ';
                infos.push(productInfo);
            }
            data = infos.join('/');
            break;

        //自定义信息
        case 'tpl-self-info-1':data = '';break;
        case 'tpl-self-info-2':data = '';break;
        case 'tpl-self-info-3':data = '';break;

    }
    return data;
}

//面单尺寸
const electricPageSizes = {
    EMS:{width:100,height:180},//EMS
    YTO:{width:100,height:180},//圆通
    ZTO:{width:100,height:180},//中通
    STO:{width:100,height:180},//申通
    HTKY:{width:100,height:180},//百世快递

    YD:{width:100,height:180},//韵达
    FAST:{width:100,height:180},//快捷
    HHTT:{width:100,height:180},//天天
    GTO:{width:100,height:180},//国通
    QFKD:{width:100,height:180},//全峰

    UC:{width:100,height:180},//优速
    DBL:{width:100,height:180},//德邦
    XFEX:{width:100,height:180},//信丰
    ANE:{width:100,height:180},//安能

    SF:{width:100,height:150},//顺丰
    ZHQKD:{width:100,height:180},//宅急送
    BLANK:{width:100,height:180}//空白纸张
}

class OrderStore extends Reflux.Store
{
    constructor()
    {
        super();
        this.listenables = [OrderActions];
        this.state = {
            loading:false,
            page:{
                page:1,
                start:0,
                limit:10
            },
            sorter:{
                key:'gmt_create',
                order:'desc'
            },
            orders:{
                total:0,
                rows:[]
            },
            open:{
                open:false,
                text:'展开全部',
                icon:'arrow-down',
                opened_keys:[]
            },
            //订单 的 id
            row_keys:[],

            selectedKeys:[],//选中id
            selectedRecords:[],//选中记录

            //运单打印模版
            logisticTpl:{},
            //货单单打印模版
            productTpl:{},
            //面单打印模版
            electricTpl:{},
            //面单账号
            electricTplAccount:{},

            //默认物流
            logisticDefault:{company_name:'',company_no:''},
            //合作物流
            logisticsCooperate:[],
            //发货地址
            sender:{},
            //打印设置
            printSetting:{},

            //自动打印
            autoPrint:false,

            //自动打印设置
            autoPrintSetting:{
                logistic_type:'1',
                print_product_list:'Y',
                print_logistic_list:'Y',
                print_electric_list:'N',
                auto_send:'Y',
                order_period:'1',
                start_time:'14',
                end_time:'18',
            },

            
            //物流打印进度查询器 interval
            logisticInterval:'',
            //面单打印进度查询器
            electricInterval:'',
            //货单打印进度查询器
            productInterval:'',

            //顺延单号对话框
            logisticNumCreater:{
                title:'顺延单号',
                visible: false,
                align: 'cc cc',
                style: {
                    width: '500px',
                    //height:'300px'
                },
                originalNum:'',
                type:'auto',
                confirm:false,//确认
            },
            //生成单号的订单
            createLogisticNumOrders:[],


            //立即发货
            sendEditor:{
                title:'发货',
                visible: false,
                align: 'cc cc',
                style: {
                    width: '1000px',
                    //height:'500px'
                }
            },
            //一键打印
            oneKeyPrint:{
                disabled:false
            },

            //立即发货订单
            sendGoodsOrder:{},
            //发货商品
            sendGoodsKeys:[],
            //发货方式 默认为1 线下物流 需要 单号，  2，不要单号 虚拟发货
            logisticWay:1,

            //自动打印发货订单
            autoPrintOrders:{
                new:false,
                total:0,
                rows:[],
            }
        }
    }





    //一键打印,自动打印准备工作
    checkAutoPrintSetting(){
        let {sender,printSetting,autoPrintSetting,selectedRecords,logisticDefault} = this.state;

        if(!autoPrintSetting.id){
            Dialog.alert({
                content:'您尚未进行【打印发货】设置,请在【打印设置】->【打印发货】设置后再试',
                closable: true,
                title: '提示',
                onOk: () => {
                    window.location.href = '/app/print/setting';
                },
            });
            return false;
        }

        let {print_product_list,print_logistic_list,print_electric_list} = autoPrintSetting;

        if(!logisticDefault.company_name){
            Dialog.alert({
                content:'尚未设置默认合作物流，请设置后再试',
                closable: true,
                title: '提示',
                onOk: () => {
                    window.location.href = '/app/print/setting';
                },
            });
            return false;
        }

        //没有设置发货地址
        if(!sender.id){
            Dialog.alert({
                content:'您尚未设置【默认发货地址】,请设置后再试',
                closable: true,
                title: '提示',
                onOk: () => {
                    window.location.href = '/app/print/setting';
                },
            });
            return false;
        }


        if(print_product_list=='Y'){

            let{productTpl:tpl,printSetting} = this.state;
            if(!tpl){
                Dialog.alert({
                    content:'您尚未设置默认货单模版,请设置后再试',
                    closable: true,
                    title: '提示',
                    onOk: () => {
                        window.location.href = '/app/print/setting';
                    }
                });
                return false;
            }
            if(!printSetting||!printSetting.product_tpl_printer_index){
                    Dialog.alert({
                        content: '您尚未设置货单打印机,请设置后再试',
                        closable: true,
                        title: '提示',
                        onOk: () => {
                            window.location.href = '/app/print/setting';
                        }
                    })
                    return false;
                }
        }
        if(print_logistic_list=='Y'){

            let {logistic_tpl_printer_index:printIndex} = printSetting;

            if(!printIndex){
                Dialog.alert({
                    content:'您尚未设置【运单打印机】,请设置后再试',
                    closable: true,
                    title: '提示',
                    onOk: () => {
                        window.location.href = '/app/print/setting';
                    },

                });
                return false;
            }
        }

        if(print_electric_list=='Y'){
            let {electricTplAccount:defaultAccount} = this.state;

            if(!defaultAccount.company_name){
                Dialog.alert({
                    content:'您尚未设置默认物流的【面单帐号】,请设置后再试',
                    closable: true,
                    title: '提示',
                    onOk: () => {
                        window.location.href = '/app/print/setting';
                    },

                });
                return false;
            }

            let {electric_tpl_printer_index:printIndex} = printSetting;
            if(!printIndex){
                Dialog.alert({
                    content:'您尚未设置【面单打印机】,请设置后再试',
                    closable: true,
                    title: '提示',
                    onOk: () => {
                        window.location.href = '/app/print/setting';
                    },

                });
                return false;
            }
        }

        return true;
    }
    //开始一键打印发货
    doOneKeyPrint(){
        let {oneKeyPrint,autoPrintSetting,selectedRecords,logisticDefault} = this.state;

        oneKeyPrint.disabled = true;
        this.setState({oneKeyPrint:oneKeyPrint});

        //打印货单
        let{logistic_type,print_product_list,print_logistic_list,print_electric_list,auto_send} = autoPrintSetting;

        selectedRecords.forEach((order)=>{
            if(print_product_list=='Y'){
                this.onPrintProductPage(order,'print');
            }
            if(print_logistic_list=='Y'){
                this.onPrintLogisticPage(order,'print');

            }
            if(print_electric_list=='Y'){
                this.onPrintElectricPage(order,'print');
            }
        })

        //自动发货
        if(auto_send=='Y'){

            //不需要物流发货
            if (logistic_type=='2'){
                this.sendAllSubmit();
                oneKeyPrint.disabled = false;
                this.setState({oneKeyPrint:oneKeyPrint});
                return;
            }


            //电子面单发货
            if(print_electric_list=='Y'){

                selectedRecords.forEach((order)=>{
                    //生成单号
                    let {logistic_num} = order;
                    if(logistic_num){
                        sendGoods(order,autoPrintSetting,logisticDefault);
                        return;
                    }

                    let process = setInterval(function(){
                        let {order_id} = order;
                        let {selectedRecords} = this.state;
                        selectedRecords.forEach((data)=>{
                            if(order_id ==data.order_id){
                                if(data.logistic_num){
                                    sendGoods(data,autoPrintSetting,logisticDefault);
                                    clearInterval(process);
                                }
                                if(data.electric_list_print_status=='FAILED'||data.electric_list_print_status=='SUCCESS'||data.electric_list_print_status=='PRINTED'){
                                    clearInterval(process);
                                }

                            }
                            })
                    }.bind(order),1500);
                    return order;
                });
                
                oneKeyPrint.disabled = false;
                this.setState({oneKeyPrint:oneKeyPrint,selectedRecords:selectedRecords});
                return;
            }

            //普通运单发货
            if(print_logistic_list=='Y'){

                selectedRecords.map((order)=>{
                    //生成单号
                    let {logistic_num} =order;
                    if(!logistic_num){
                        let num = this.createLogisticNum();
                        order.logistic_num = num;
                    }
                    return order;
                });

                this.sendAllSubmit();
                oneKeyPrint.disabled = false;
                this.setState({oneKeyPrint:oneKeyPrint,selectedRecords:selectedRecords});
                return;
            }

           function sendGoods(order,autoPrintSetting,logisticDefault){
                //let {autoPrintSetting,logisticDefault} = this.state;
                let querydata = {
                    logistic_type:autoPrintSetting.logistic_type,
                    order:order,
                    logistic:logisticDefault
                };
                //提交发货
                let data = {
                    params:JSON.stringify(querydata),
                };

                $.ajax({
                    url:'/app/print/sendGoods',
                    data:data,
                    type:'POST',
                    dataType:'json'
                }).done((response)=>{
                    let success = response.success;
                    if(success=='true'||success==true){
                        let info = '发货成功:'+order.order_id;
                        Toast.success(info);
                    }else {
                        let msg = response.errorMessage;
                        if(!msg){
                            msg = response.error_message;
                        }
                        let info = '发货失败:'+order.order_id+';错误：'+msg;
                        Toast.error(info);
                    }
                }).fail((response)=>{
                    let info = '发货失败:'+order.order_id+';错误：请求失败';
                    Toast.error(info);
                });
            }

        }

        oneKeyPrint.disabled = false;
        this.setState({oneKeyPrint:oneKeyPrint});

    }
    //一键打印发货
    onOneKeyPrint(){

        let {selectedRecords} = this.state;
        if(selectedRecords.length==0){
            Dialog.alert({
                content:'请选择需要一键打印发货的订单',
                closable: true,
                title: '提示',
                onOk: () => {

                },
            });
            return false;
        }


        let ok = this.checkAutoPrintSetting();
        if(!ok){
            return;
        }


        let {autoPrintSetting,logisticNumCreater} = this.state;
        let {logistic_type,print_electric_list,auto_send} = autoPrintSetting;

        if(logistic_type=='2'||print_electric_list=='Y'||auto_send=='N'){
            this.doOneKeyPrint();
            return;
        }

        let {confirm} = logisticNumCreater;
        let original = localStorage.getItem('originalLogisticNum');
        logisticNumCreater.type = 'oneKey';
        logisticNumCreater.originalNum = original;

        //首次点击
        if(!confirm){
            logisticNumCreater.visible = true;
            logisticNumCreater.confirm = true;
            this.setState({logisticNumCreater:logisticNumCreater});
            return;
        }

        logisticNumCreater.visible = false;
        logisticNumCreater.confirm = false;
        this.setState({logisticNumCreater:logisticNumCreater});
        this.doOneKeyPrint();
    }



    //批量发货
    onSendAll(){
        let {autoPrintSetting,selectedRecords,logisticDefault} = this.state;
        if(selectedRecords.length==0){
            Dialog.alert({
                content:'请选择需要批量发货的订单',
                closable: true,
                title: '提示',
                onOk: () => {
                },
            });
            return;
        }
        if(!logisticDefault.company_name){
            Dialog.alert({
                content:'尚未设置默认合作物流，请设置后再试',
                closable: true,
                title: '提示',
                onOk: () => {
                },
            });
            return;
        }
        let {logistic_type} = autoPrintSetting;
        if(!logistic_type){
            Dialog.alert({
                content:'尚未进行【打印发货】设置，请在 【打印设置】->【打印发货】->【发货物流方式】设置后再试',
                closable: true,
                title: '提示',
                onOk: () => {
                },
            });
            return;
        }

        this.sendAllSubmit();
    }


    //批量发货提交
    sendAllSubmit(){
        let {autoPrintSetting,selectedRecords,logisticDefault} = this.state;

        let querydata = {
            logistic_type:autoPrintSetting.logistic_type,
            orders:selectedRecords,
            logistic:logisticDefault
        };
        //提交发货
        let data = {
            params:JSON.stringify(querydata),
        };

        $.ajax({
            url:'/app/print/sendAll',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            if(!response){
                return;
            }

            let {success,fail,detail} = response;
            let successTotal = success.length;
            success = success.join(',');
            let failTotal = fail.length;
            let failedIds = fail.join(',');
            let msg = '';
            for(let  d in detail){
                msg = msg+d+':'+detail[d]+';'
            }



            let info = '成功订单['+successTotal+']条：['+success+'];失败订单['+failTotal+']条：['+failedIds+'];详细信息：'+msg;
            //Toast.prompt(info);
            Dialog.alert({
                content:info,
                closable: true,
                title: '提示',
                onOk: () => {
                },
            });

        }).fail((response)=>{
            Dialog.alert({
                content:'请求失败',
                closable: true,
                title: '提示',
                onOk: () => {
                },
            });
        });
    }

    //获取自动打印设置
    onGetAutoPrintSetting(){
        $.ajax({
            url:'/app/print/getAutoPrintSetting',
            data:'',
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            if(!response){
                return;
            }
            this.setState({autoPrintSetting:response});
        }).fail((response)=>{
            Dialog.alert({
                content:'获取自动打印设置失败,点击确定重试',
                closable: true,
                title: '提示',
                onOk: () => {
                    this.onGetAutoPrintSetting();
                }
            })
        })
    }

    //开关自动打印
    onToggleAutoPrint(checked){

        //关闭自动打印
        if(!checked){
            this.setState({autoPrint:checked});
            return;
        }
        let ok = this.checkAutoPrintSetting();
        if(!ok){
            return;
        }
        let {autoPrintSetting,logisticNumCreater} = this.state;
        let {logistic_type,auto_send,order_period} = autoPrintSetting;

        let start = moment().format('YYYY-MM-DD 00:00:00');
        let end  = moment().format('YYYY-MM-DD HH:mm:ss');
        if(order_period==2){
            start = moment().subtract(1, 'days').format('YYYY-MM-DD 00:00:00');
        }
        if(order_period==3){
            start = moment().subtract(10, 'days').format('YYYY-MM-DD 00:00:00');
        }
        if(order_period==4){
            start = '';
            end = '';
        }
        //SearchTabActions.setActiveTab('AUTO_PRINT','AUTO_PRINT');
        if(auto_send=='N'||logistic_type=='2'){
            //开启自动打印
            SearchTabActions.setActiveTab('printStatus','AUTO_PRINT',start,end);
            OrderActions.getOrders({});
            this.setState({autoPrint:checked});
            this.autoPrintTimed();
            return;
        }
        let original = localStorage.getItem('originalLogisticNum');
        logisticNumCreater.originalNum = original;
        logisticNumCreater.visible = true;
        logisticNumCreater.type = 'auto';
        this.setState({logisticNumCreater:logisticNumCreater});
        SearchTabActions.setActiveTab('printStatus','AUTO_PRINT',start,end);
        OrderActions.getOrders({});
        //开始自动打印
        this.autoPrintTimed();
    }



    //定时打印
    autoPrintTimed(){
        let {autoPrintSetting} = this.state;
        let {start_time,end_time} = autoPrintSetting;
        let start = start_time?start_time:0;
        let end = end_time?end_time:24;

        //console.log('start',start);
        //console.log('end',end);
        let process = setInterval(()=>{
            let now = parseInt(moment().format('h'));
            //console.log('now',now);
            if(now>=start&&now<=end){
                this.autoPrint();
                clearInterval(process);
            }
        },3000);

    }

    //执行自动打印发货
    autoPrint(){

        let {autoPrintSetting} = this.state;
        let {print_product_list,print_logistic_list,print_electric_list,auto_send,start_time,end_time} = autoPrintSetting;


        //3 秒 判断一次是否需要获取新订单，如果任务执行完毕，删除就订单，获取新订单
        let process1 = setInterval(()=>{
            let lock = sessionStorage.getItem('AUTO_PRINT_LOCK');
            if(lock=='BUSY'){
                return;
            }
            sessionStorage.setItem('AUTO_PRINT_LOCK','BUSY');
            let {autoPrintOrders} = this.state;

            //console.log('orders:',autoPrintOrders);
            let {rows} = autoPrintOrders;
            if(rows.length==0){
                this.getOrdersWaitSend();
            }

            sessionStorage.setItem('AUTO_PRINT_LOCK','FREE');
        },3000);


        //执行打印 3 秒
        let process2 = setInterval(()=>{

            let lock = sessionStorage.getItem('AUTO_PRINT_LOCK');
            if(lock=='BUSY'){
                return;
            }
            sessionStorage.setItem('AUTO_PRINT_LOCK','BUSY');

            let {autoPrintOrders} = this.state;
            //console.log('doprint',autoPrintOrders);
            if(autoPrintOrders.new){
                autoPrintOrders.new = false;
                this.setState({autoPrintOrders:autoPrintOrders});
                sessionStorage.setItem('AUTO_PRINT_LOCK','FREE');
                let {rows} = autoPrintOrders;
                rows.forEach((order)=>{
                    this.doAutoPrint(order);
                });
            }
            sessionStorage.setItem('AUTO_PRINT_LOCK','FREE');
        },3000);

        //return;


        //每隔2秒查询一次
        let process3 = setInterval(()=>{

            let lock = sessionStorage.getItem('AUTO_PRINT_LOCK');
            if(lock=='BUSY'){
                return;
            }
            sessionStorage.setItem('AUTO_PRINT_LOCK','BUSY');

            let {autoPrintOrders,autoPrintSetting,orders} = this.state;
            let {print_product_list,print_logistic_list,print_electric_list,auto_send} = autoPrintSetting;
            let todos = [];
            if(print_product_list=='Y'){
                todos.push('print_product_list');
            }
            if(print_logistic_list=='Y'){
                todos.push('print_logistic_list');
            }
            if(print_electric_list=='Y'){
                todos.push('print_electric_list');
            }
            if(auto_send=='Y'){
                todos.push('auto_send');
            }

            let {rows} = autoPrintOrders;
           // console.log('process_before',rows);
            rows = rows.filter((order)=>{

                let {order_id} =order;
                let autoResult = sessionStorage.getItem(order_id);
                autoResult = autoResult?JSON.parse(autoResult):[];
                if(autoResult.length==0){
                    //还未打印 留下
                    return true;
                }

                //未打印发货完成 留下
                if(autoResult.length<todos.length){
                    return true;
                }

                //相等时候打印发货完成
                let has = autoResult.find((x)=>{

                    if(x=='send_success'){
                        return true;
                    }
                });

                //完成发货，设置订单状态
                if(has){
                    let {rows:records} = orders;
                    records.map((data)=>{
                        if(order_id == data.order_id){
                            data.status = 'WAIT_BUYER_RECEIVE';
                        }
                        return data;
                    })
                    orders.rows = records;
                    this.setState({orders:orders});
                }

                sessionStorage.removeItem(order_id);
                //操作完成删除
                return false;
            });
            //console.log('process_after',rows);
            autoPrintOrders.rows = rows;
            this.setState({autoPrintOrders:autoPrintOrders});
            sessionStorage.setItem('AUTO_PRINT_LOCK','FREE');
        },2000);


        let process0 = setInterval(()=>{
            let {autoPrint} = this.state;
            if(!autoPrint){
                clearInterval(process0);
                clearInterval(process1);
                clearInterval(process2);
                clearInterval(process3);

                sessionStorage.setItem('PRINTER_USED','0');
                sessionStorage.setItem('RETURN_LOCK','FREE');
                sessionStorage.setItem('AUTO_PRINT_LOCK','FREE');
            }
        });
    }

    //执行自动打印
    doAutoPrint(order){
        let {autoPrintSetting,logisticDefault} = this.state;

        let {order_id} = order;
        let item = sessionStorage.getItem(order_id);
        item = item?JSON.parse(item):[];

        //打印货单
        let{logistic_type,print_product_list,print_logistic_list,print_electric_list,auto_send} = autoPrintSetting;

        if(print_product_list=='Y'){
            this.onPrintProductPage(order,'print');
            item.push('product_printed');
        }
        if(print_logistic_list=='Y'){
            this.onPrintLogisticPage(order,'print');
            item.push('logistic_printed');
        }
        if(print_electric_list=='Y'){
            this.onPrintElectricPage(order,'print');
            item.push('electric_printed');
        }
        sessionStorage.setItem(order_id,JSON.stringify(item));

        if(auto_send=='N'){
            return;
        }

        //自动发货

        //不需要物流发货
        if (logistic_type=='2'){

            sendGoods(order,autoPrintSetting,logisticDefault);
            return;
        }
        //电子面单发货
        if(print_electric_list=='Y'){
            let {logistic_num} = order;
            if(logistic_num){
                sendGoods(order,autoPrintSetting,logisticDefault);
                return;
            }
            let process = setInterval(function(){
                let {autoPrintOrders} = this.state;
                let {rows} = autoPrintOrders;
                rows.forEach((data)=>{
                    if(order_id ==data.order_id){
                        if(data.logistic_num){
                            sendGoods(order,autoPrintSetting,logisticDefault);
                            clearInterval(process);
                        }
                    }
                })
            }.bind(order),1000);
            return;
        }

        //普通运单发货
        if(print_logistic_list=='Y'){

            let {logistic_num} =order;
            if(!logistic_num){
                let num = this.createLogisticNum();
                order.logistic_num = num;
            }
            sendGoods(order,autoPrintSetting,logisticDefault);
        }


        //自动发货函数
        function sendGoods(order,autoPrintSetting,logisticDefault){
            //let {autoPrintSetting,logisticDefault} = this.state;
            let {order_id} = order;
            let querydata = {
                logistic_type:autoPrintSetting.logistic_type,
                order:order,
                logistic:logisticDefault
            };
            //提交发货
            let data = {
                params:JSON.stringify(querydata),
            };

            $.ajax({
                url:'/app/print/sendGoods',
                data:data,
                type:'POST',
                dataType:'json'
            }).done((response)=>{
                let item = sessionStorage.getItem(order_id);
                item = item?JSON.parse(item):[];
                let success = response.success;
                if(success=='true'||success==true){
                    let info = '发货成功:'+order_id;
                    Toast.success(info);
                    item.push('send_success');
                }else {
                    let msg = response.errorMessage;
                    if(!msg){
                        msg = response.error_message;
                    }
                    let info = '发货失败:'+order_id+';错误：'+msg;
                    Toast.error(info);
                    item.push('send_fail');
                }
            }).fail((response)=>{
                let info = '发货失败:'+order_id+';错误：请求失败';
                Toast.error(info);
                item.push('send_fail');
            });

            sessionStorage.setItem(order_id,JSON.stringify(item));
        }
    }

    //自动打印查询订单
    getOrdersWaitSend(){

        let {autoPrintSetting} = this.state;
        let {order_period} = autoPrintSetting;

        let start = moment().format('YYYY-MM-DD 00:00:00');
        let end  = moment().format('YYYY-MM-DD HH:mm:ss');
        if(order_period==2){
            start = moment().subtract(1, 'days').format('YYYY-MM-DD 00:00:00');
        }
        if(order_period==3){
            start = moment().subtract(10, 'days').format('YYYY-MM-DD 00:00:00');
        }
        if(order_period==4){
            start = '';
            end = '';
        }
        let page = {page:1,start:0, limit:10};
        let query = {field:'tradeStatus',data:'WAIT_SELLER_SEND',start:start,end:end};
        let sorter = {key:'gmt_create',order:'desc'};
        let data = {
            params:JSON.stringify(query),
            page:JSON.stringify(page),
            sorter:JSON.stringify(sorter),
        }
        $.ajax({
            url:'/app/print/order/get',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{

            if(!response){
                return;
            }
            let process = setInterval(()=>{

                let lock = sessionStorage.getItem('AUTO_PRINT_LOCK');
                if(lock=='BUSY'){
                    return;
                }
                sessionStorage.setItem('AUTO_PRINT_LOCK','BUSY');
                let {autoPrintOrders} = this.state;
                let {total,rows} = response;
                autoPrintOrders.new = true;
                autoPrintOrders.total = total;
                autoPrintOrders.rows = rows;

                this.setState({autoPrintOrders:autoPrintOrders});
                sessionStorage.setItem('AUTO_PRINT_LOCK','FREE');
                clearInterval(process);

            },100);



        }).fail((response)=>{
            console.log('请求失败'+response);
            sessionStorage.setItem('AUTO_PRINT_LOCK','FREE');
        })
    }


    //生成单号
    createLogisticNum(){
        let original = localStorage.getItem('originalLogisticNum');
        let base = original.substr(0,original.length-6);
        //console.log(startNum,base);
        let start = original.substr(original.length-6);
        start = parseInt(start);
        let last = base + (start+1);
        localStorage.setItem('originalLogisticNum',last);
        return original;
    }

    //批量生成单号
    doCreateLogisticNums(original){
        let {orders,logisticNumCreater,selectedRecords} = this.state;
        //截取后6位
        let base = original.substr(0,original.length-6);
        //console.log(startNum,base);
        let start = original.substr(original.length-6);
        start = parseInt(start);
        let last = original;
        selectedRecords.forEach((item)=>{
            let next = start;
            start ++;

            last = base + (next+1);
            next = base + next;

            orders.rows.map((data)=>{
                if(data.order_id==item.order_id){
                    data.logistic_num = next;
                }
                return data;
            })
        })
        logisticNumCreater.visible = false;
        logisticNumCreater.originalNum = last;
        localStorage.setItem('originalLogisticNum',last);
        this.setState({orders:orders,logisticNumCreater:logisticNumCreater});
    }

    //确认设置初始单号 执行自动打印，一键发货 ，顺延单号
    onSetOriginalLogisticNum(original){

        let {logisticNumCreater} = this.state;
        let {type} = logisticNumCreater;
        logisticNumCreater.visible = false;
        logisticNumCreater.originalNum = original;
        localStorage.setItem('originalLogisticNum',original);

        this.setState({logisticNumCreater:logisticNumCreater});

        //自动打印发货
        if(type=='auto'){
            this.setState({autoPrint:true});
            return;
        }

        //一键打印发货
        if(type=='oneKey'){

            this.onOneKeyPrint();
            return;
        }

        //批量顺延
        if(type=='createNums'){
            this.doCreateLogisticNums(original);
        }

    }


    //关闭顺延对话框
    onCloseLogisticNumsCreater(){
        let {logisticNumCreater} = this.state;
        logisticNumCreater.visible = false;
        this.setState({logisticNumCreater:logisticNumCreater});
    }

    //点击顺延单号
    onCreateLogisticNums(){
        let {selectedRecords,logisticNumCreater} = this.state;
        if(!selectedRecords.length){
            Dialog.alert({
                content:'请选择要顺延单号的订单',
                closable: true,
                title: '提示',
                onOk: () => {
                },
            });
            return;
        }
        let original = localStorage.getItem('originalLogisticNum');
        original = original?original:'';
        logisticNumCreater.visible = true;
        logisticNumCreater.originalNum = original;
        logisticNumCreater.type = 'createNums';
        this.setState({logisticNumCreater:logisticNumCreater});
    }



    //发货时候，填写物流单号
    onSetLogisticNum(logisticNum){
        let {sendGoodsOrder} = this.state;
        sendGoodsOrder.logistic_num = logisticNum;
        this.setState({sendGoodsOrder:sendGoodsOrder});
    }

    //选择发货方式
    onSelectSendWay(way){
        this.setState({logisticWay:way});
    }

    //选择发货物流
    onSelectSendLogistic(company){
        let {sendGoodsOrder} = this.state;
        sendGoodsOrder.logistic = company;
        this.setState({sendGoodsOrder:sendGoodsOrder});
    }

    //选择发货商品
    onSelectSendProducts(ids){
        this.setState({sendGoodsKeys:ids});
    }

    //立即发货
    onSend(order){
        let {sendEditor} = this.state;
        let {products} = order;
        sendEditor.visible = true;
        let selectedKeys = [];
        products.forEach(({entry_id})=>{
            selectedKeys.push(entry_id);
        })

        this.setState({sendGoodsOrder:order,sendGoodsKeys:selectedKeys,sendEditor:sendEditor});
    }

    //关闭发货
    onCloseSendEditor(){
        let {sendEditor} = this.state;
        sendEditor.visible = false;
        this.setState({sendEditor:sendEditor});
    }



    //确认发货
    onSendSubmit(){
        let {sendEditor,sendGoodsOrder,logisticDefault,sendGoodsKeys,logisticWay} = this.state;
        let{logistic,logistic_num:logisticNum,seller_remark:remark,order_id:orderId} = sendGoodsOrder;
        logistic = logistic?logistic:(logisticDefault.company_name?logisticDefault:{});

        if(sendGoodsKeys.length==0){
            Dialog.alert({
                content:'请选择需要发货的商品',
                closable: true,
                title: '提示',
                onOk: () => {
                },
            });
            return;
        }

        //线下发货
        if(logisticWay==1&&!logistic.ali_id){
            Dialog.alert({
                content:'该物流暂不支持线下发货，您可选择其他物流，或者虚拟发货',
                closable: true,
                title: '提示',
                onOk: () => {
                },
            });
            return;
        }

        if(logisticWay==1&&!logisticNum){
            Dialog.alert({
                content:'线下发货需要物流单号',
                closable: true,
                title: '提示',
                onOk: () => {
                },
            });
            return;
        }

        
        let querydata = {
            logistic_type:logisticWay,
            order:sendGoodsOrder,
            logistic:logistic
        };
        //提交发货
        let data = {
            params:JSON.stringify(querydata),
        };

        $.ajax({
            url:'/app/print/sendGoods',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            let success = response.is_success;
            if(success=='true'||success==true){
                Dialog.alert({
                    content:'发货成功',
                    closable: true,
                    title: '提示',
                    onOk: () => {
                    },
                });
                sendEditor.visible = false;
                this.setState({sendEditor:sendEditor});
            }else {
                let msg = response.result_msg;
                if(!msg){
                    msg = response.result_code;
                }
                Dialog.alert({
                    content:'发货失败:  '+msg,
                    closable: true,
                    title: '提示',
                    onOk: () => {
                    },
                });
            }
        }).fail((response)=>{
            Dialog.alert({
                content:'请求失败',
                closable: true,
                title: '提示',
                onOk: () => {
                },
            });
        });
    }


    //------------S-------货单打印相关
    // 1.打印货单
    onPrintProductPage(order,printType){
        let{productTpl:tpl,printSetting} = this.state;
        let {order_id:orderId,products} = order;
        let { items} = tpl;
        if(!tpl){
            Dialog.alert({
                content:'您尚未设置默认货单模版,请设置后再试',
                closable: true,
                title: '提示',
                onOk: () => {
                    window.location.href = '/app/print/setting';
                }
            });
            return;
        }

        if(printType=='preview'){
            ReactDOM.render(<ProductTpl tpl={tpl} items={ items} order={order} products ={products} printType={printType} printIndex={-1}></ProductTpl>,document.getElementById('div-product-tpl-render'));
            return;
        }
        if(!printSetting||!printSetting.product_tpl_printer_index){
            Dialog.alert({
                content: '您尚未设置货单打印机,请设置后再试',
                closable: true,
                title: '提示',
                onOk: () => {
                    window.location.href = '/app/print/setting';
                }
            })
            return;
        }

        //console.log(tpl);
        let printerIndex = printSetting.product_tpl_printer_index;
        ReactDOM.render(<ProductTpl tpl={tpl} items={ items} order={order} products ={products} printType={printType} printIndex={printerIndex}></ProductTpl>,document.getElementById('div-product-tpl-render'));

        //加入打印任务队列
        let {orders,productInterval} = this.state;
        orders.rows.map((data)=>{
            if(data.order_id==orderId){
                data.product_list_print_status = 'QUEUE';
            }
            return data;
        });

        //启动任务查询器
        if(!productInterval){
            setInterval(()=>{
                // console.log('interval:','run');
                this.getProductPrintProcess();
            },1500);
        }
        this.setState({orders:orders,productInterval:'run'});

    }

    //2. 查询货单打印进度
    getProductPrintProcess(){
        let{orders} = this.state;
        let tasks = sessionStorage.getItem('productPrintTasks');
        tasks = tasks?JSON.parse(tasks):{};

        //遍历orders 获取打印进度
        orders.rows.map((data)=>{
            let {order_id:orderId} = data;
            let task = tasks[orderId];
            //没有对应任务 不做修改
            if(!task){
                return data;
            }
            let {product_job:job,product_job_status:taskStatus} = task;
            String(taskStatus);
            switch (taskStatus){
                case '0':
                    data.product_list_print_status = 'PRINTED';
                    this.setProductPrintStatus(data);
                    delete tasks[orderId];
                    break;
                case '1':

                    data.product_list_print_status = 'QUEUE';
                    let lock = sessionStorage.getItem('RETURN_LOCK');
                    lock = lock?lock:'FREE';
                    if(lock!='FREE'){
                        //如果繁忙就继续询问
                        break;
                    }

                    //上锁
                    sessionStorage.setItem('RETURN_LOCK','BUSY');
                    LODOP.On_Return=function(TaskID,Value){
                        Value = Value?Value:'0';
                        task.product_job_status = Value;
                        let tasks = sessionStorage.getItem('productPrintTasks');
                        tasks = JSON.parse(tasks);
                        tasks[orderId] = task;
                        tasks = JSON.stringify(tasks);
                        sessionStorage.setItem('productPrintTasks',tasks);
                        //解锁
                        sessionStorage.setItem('RETURN_LOCK','FREE');

                    };
                    LODOP.GET_VALUE('PRINT_STATUS_EXIST',job);
                    break;
            }
            tasks = JSON.stringify(tasks);
            sessionStorage.setItem('productPrintTasks',tasks);
            return data;
        });
        this.setState({orders:orders});
    }
    //3. 设置货单数据库打印状态
    setProductPrintStatus(order){

        let data = {
            params:JSON.stringify({order_id:order.order_id,status:'PRINTED'}),
        }
        $.ajax({
            url:'/app/print/setProductListPrintStatus',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{

        }).fail((response)=>{
            console.log('更新货单打印状态失败:',response);
        })

    }
    //------------E-------货单打印相关



    //------------S-------面单打印相关
    //1.准备打印面单
    onPrintElectricPage(order,printType){

        let {logistic,order_id:orderId} = order;
        let {sender,printSetting,logisticDefault,logisticsCooperate,orders,electricInterval} = this.state;

        let url = '/app/print/setting';
        //没有设置合作物流
        if(!logisticDefault.id&&logisticsCooperate.length==0){
            Dialog.alert({
                content:'您尚未设置合作物流,如果您第一次使用，请按照【帮助文档】操作或者【设置合作物流】后再试',
                closable: true,
                title: '提示',
                onOk: () => {
                    window.location.href = url;
                }
            });
            return;
        }

        let company = logistic?logistic:logisticDefault;

        let {has_electric_tpl:hasElectricTpl,company_name:companyName} = company;
        if(hasElectricTpl=='N'){
            let msg = companyName+' 暂不支持电子面单，请重选选择物流再试';
            Dialog.alert({
                content:msg,
                closable: true,
                title: '提示',
                onOk: () => {
                   
                },
            });
            return; 
        }

        //没有设置发货地址
        if(!sender.id){
            Dialog.alert({
                content:'您尚未设置【默认发货地址】,请设置后再试',
                closable: true,
                title: '提示',
                onOk: () => {
                    window.location.href = url;
                },
            });
            return;
        }

        let {electric_tpl_printer_index:printIndex} = printSetting;
        if(!printIndex){
            Dialog.alert({
                content:'您尚未设置【面单打印机】,请设置后再试',
                closable: true,
                title: '提示',
                onOk: () => {
                    window.location.href = url;
                },

            });
            return;
        }

        let {electricTplAccount:orderAccount} = order;
        let {electricTplAccount:defaultAccount} = this.state;

        if(!orderAccount&&!defaultAccount.company_name){
            Dialog.alert({
                content:'您尚未设置默认物流的【面单帐号】,请设置后再试',
                closable: true,
                title: '提示',
                onOk: () => {
                    window.location.href = url;
                },

            });
            return;
        }


        let tasks = sessionStorage.getItem('electricPrintTasks');
        tasks = tasks?JSON.parse(tasks):{};
        let task = tasks[orderId]?tasks[orderId]:{};
        let {electric_tpl:tpl,logistic_num:logisticNum} = task;

        if(logisticNum){
            orders.rows.map((data)=>{
                if(data.order_id==orderId){
                    data.logistic_num = logisticNum;
                }
                return data;
            });
        }

        //获取电子面单 成功后回调打印
        if(!tpl){

            let account = defaultAccount;
            if(orderAccount&&orderAccount.company_name){
                account = orderAccount;
            }

            //获取面单并打印
            if(printType=='preview'){
                Dialog.confirm({
                    content:'面单的打印预览操作都将通知快递揽件，确定要预览吗',
                    closable: true,
                    title: '提示',
                    onOk: () => {
                        this.getElectricTpl(order,account,company,sender,printType);
                    },
                    onCancel:()=>{

                    }
                });
                return;
            }
            this.getElectricTpl(order,account,company,sender,printType);
            return;
        }

        //执行打印
        this.printElectricPage(printType,printIndex,tpl,company,order);
        //如果是预览则不用设置打印状态
        if(printType=='preview'){
            return;
        }


        orders.rows.map((data)=>{
            if(data.order_id==orderId){
                data.electric_list_print_status = 'QUEUE';
            }
            return data;
        });

        if(!electricInterval){
            setInterval(()=>{
                // console.log('interval:','run');
                this.getElectricPrintProcess();
            },1500);
        }
        this.setState({orders:orders,electricInterval:'run'});
    }

    //2.获取电子面单
    getElectricTpl(order,account,company,sender,printType='preview'){
        let {orders} = this.state;
        let {order_id:orderId,seller_remark:sellerRemark,products,
            receiver_name,receiver_mobile,receiver_province,receiver_city,receiver_area,receiver_street} = order;
        let receiver = {receiver_name,receiver_mobile,receiver_province,receiver_city,receiver_area,receiver_street};
        let {company_no:companyNo} = company;
        let orderInfo = {
            order_id:orderId,
            seller_remark:sellerRemark,
            logistic_company_no:companyNo
        };
        let data = {
            params:JSON.stringify({
                order:orderInfo,
                products:products,
                sender:sender,
                receiver:receiver,
                account:account
            }),
        };


        orders.rows.map((data)=>{
            if(data.order_id==orderId){
                data.electric_list_print_status = 'LOADING';
            }
            return data;
        });

        this.setState({orders:orders});
        
        $.ajax({
            url:'/app/print/getElectricTpl',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            let {Success,Reason,PrintTemplate:tpl,Order:EOrder} = response;
            if(!Success){
                Dialog.alert({
                    content:'获取面单失败 : '+Reason,
                    closable: true,
                    title: '提示',
                    onOk: () => {
                    },
                });
                orders.rows.map((data)=>{
                    if(data.order_id==orderId){
                        data.electric_list_print_status = 'FAILED';
                    }
                    return data;
                });
                this.setState({orders:orders});
            }else {

                let logisticNum = EOrder.LogisticCode;
                orders.rows.map((data)=>{
                    if(data.order_id==orderId){
                        data.logistic_num = logisticNum;
                        data.electric_list_print_status = 'SUCCESS';
                    }
                    return data;
                });

                this.setState({orders:orders});

                let tasks = sessionStorage.getItem('electricPrintTasks');
                tasks = tasks?JSON.parse(tasks):{};
                let task = {order_id:orderId,logistic_num:logisticNum,electric_tpl:tpl};
                //job
                tasks[orderId] = task;
                tasks = JSON.stringify(tasks);

                sessionStorage.setItem('electricPrintTasks',tasks);
                //调用打印
                this.onPrintElectricPage(order,printType);
            }


        }).fail((response)=>{
            console.log('获取面单失败:',response);
            Dialog.alert({
                content:'获取面单失败,请关闭重试',
                closable: true,
                title: '提示',
                onOk: () => {
                    //this.onPrintElectricPage();
                },
            });
            orders.rows.map((data)=>{
                if(data.order_id==orderId){
                    data.electric_list_print_status = 'FAILED';
                }
                return data;
            });
            this.setState({orders:orders});
        })

        
    }

    //3.打印电子面单
    printElectricPage(printType='preview',printerIndex=-1,tpl='',logistic,order){

        let {company_no:companyNo} = logistic;
        let {width:pageWidth,height:pageHeight} = electricPageSizes[companyNo];
        let {order_id:orderId} = order;

        if(printType!='print'&&printType!='preview'){
            return;
        }

        if(printType=='preview'){
            createPage();
            LODOP.PREVIEW();
            return;
        }
        if(!orderId){
            createPage();
            LODOP.PRINT();
            return;
        }

        let personCounter = sessionStorage.getItem('PRINTER_USED');
        personCounter = personCounter?personCounter:0;
        sessionStorage.setItem('PRINTER_USED',1);
        if(personCounter!=0){
            setTimeout(()=>{
                this.printElectricPage(printType,printerIndex,tpl,logistic,order);
            },100);
            return;
        }


        //打印
        setTimeout(()=>{
            let lock = sessionStorage.getItem('RETURN_LOCK');
            lock = lock?lock:'FREE';
            //上锁
            sessionStorage.setItem('RETURN_LOCK','BUSY');
            if(lock!='FREE'){
                //如果繁忙就继续询问
                this.printElectricPage(printType,printerIndex,tpl,logistic,order);
                return;
            }
            //console.log('receiverName',order.receiver_name);
            LODOP.On_Return=(TaskID,Value)=>{
                let tasks = sessionStorage.getItem('electricPrintTasks');
                tasks = tasks?JSON.parse(tasks):{};
                let job = Value;
                let task = {order_id:orderId,electric_job:job,electric_job_status:'1'};
                //job
                tasks[orderId] = task;
                tasks = JSON.stringify(tasks);
                sessionStorage.setItem('electricPrintTasks',tasks);
                //开锁
                sessionStorage.setItem('RETURN_LOCK','FREE');
                sessionStorage.setItem('PRINTER_USED',0);
            };
            createPage();
            LODOP.PRINT();
        },50);

        function createPage() {
            let html=tpl;
            let tplName = '面单'+orderId;
            LODOP.PRINT_INIT(tplName);
            LODOP.SET_PRINT_PAGESIZE(1,pageWidth+'mm',pageHeight+'mm','');
            LODOP.SET_PRINT_MODE("POS_BASEON_PAPER",true);
            LODOP.ADD_PRINT_HTM('-1mm','0.5mm','100%','100%',html);//上 左 宽  高
            LODOP.SET_PRINTER_INDEXA(printerIndex);
            LODOP.SET_PRINT_MODE('CATCH_PRINT_STATUS',true);
        }


    }

    //4.获取面单打印进度
    getElectricPrintProcess(){
        let{orders} = this.state;
        let tasks = sessionStorage.getItem('electricPrintTasks');
        tasks = tasks?JSON.parse(tasks):{};

        //遍历orders 获取打印进度
        orders.rows.map((data)=>{
            let {order_id:orderId} = data;
            let task = tasks[orderId];
            //没有对应任务 不做修改
            if(!task){
                return data;
            }
            let {electric_job:job,electric_job_status:taskStatus} = task;
            String(taskStatus);
            switch (taskStatus){
                case '0':
                    data.electric_list_print_status = 'PRINTED';
                    this.setElectricPrintStatus(data);
                    delete tasks[orderId];
                    break;
                case '1':

                    data.electric_list_print_status = 'QUEUE';
                    let lock = sessionStorage.getItem('RETURN_LOCK');
                    lock = lock?lock:'FREE';
                    if(lock!='FREE'){
                        //如果繁忙就继续询问
                        break;
                    }

                    //上锁
                    sessionStorage.setItem('RETURN_LOCK','BUSY');
                    LODOP.On_Return=function(TaskID,Value){
                        Value = Value?Value:'0';
                        task.electric_job_status = Value;
                        let tasks = sessionStorage.getItem('electricPrintTasks');
                        tasks = JSON.parse(tasks);
                        tasks[orderId] = task;
                        tasks = JSON.stringify(tasks);
                        sessionStorage.setItem('electricPrintTasks',tasks);
                        //解锁
                        sessionStorage.setItem('RETURN_LOCK','FREE');

                    };
                    LODOP.GET_VALUE('PRINT_STATUS_EXIST',job);
                    break;

            }
            tasks = JSON.stringify(tasks);
            sessionStorage.setItem('electricPrintTasks',tasks);
            return data;
        });
        this.setState({orders:orders});
    }
    //5.数据库设置面单打印结果
    setElectricPrintStatus(order){

        let {order_id:orderId,logistic_num:logisticNum} = order;
        let data = {
            params:JSON.stringify({order_id:orderId,status:'PRINTED',logistic_num:logisticNum}),
        }
        $.ajax({
            url:'/app/print/setElectricListPrintStatus',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{

        }).fail((response)=>{
            console.log('更新面单打印状态失败:',response);
        })

    }
    //------------E-------面单打印相关



    //------------S-------运单打印相关
    //1.准备打印运单
    onPrintLogisticPage(order,printType){
        let {order_id:orderId,logistic_tpl:tpl,use_tpl_type:useTplType} = order;
        let {logisticTpl,sender,printSetting,logisticDefault,logisticsCooperate,orders,logisticInterval} = this.state;
        let url = '/app/print/setting';
        //没有设置合作物流
        if(!logisticDefault.id&&logisticsCooperate.length==0){
            Dialog.alert({
                content:'您尚未设置合作物流,如果您第一次使用，请按照【帮助文档】操作或者【设置合作物流】后再试',
                closable: true,
                title: '提示',
                onOk: () => {
                    window.location.href = url;
                }
            });
            return;
        }

        //没有设置独立模版 且 默认物流为空
        if(!logisticDefault.id&&!useTplType){
            Dialog.alert({
                content:'您尚未设置默认物流,请对【设置默认物流】或者【重新选择物流】后再试',
                closable: true,
                title: '提示',
                onOk: () => {
                    window.location.href = url;
                }
            });
            return;
        }

        //没有设置发货地址
        if(!sender.id){
            Dialog.alert({
                content:'您尚未设置【默认发货地址】,请设置后再试',
                closable: true,
                title: '提示',
                onOk: () => {
                    window.location.href = url;
                },
            });
            return;
        }

        let {logistic_tpl_printer_index:printIndex} = printSetting;

        if(!printIndex){
            Dialog.alert({
                content:'您尚未设置【运单打印机】,请设置后再试',
                closable: true,
                title: '提示',
                onOk: () => {
                    window.location.href = url;
                },

            });
            return;
        }

        tpl = tpl?tpl:logisticTpl;

        this.printLogisticPage(printType,tpl,printIndex,order,sender);
        if(printType=='preview'){
            return;
        }
        //return;
        orders.rows.map((data)=>{
            if(data.order_id==orderId){
                data.logistic_list_print_status = 'QUEUE';
            }
            return data;
        });


        if(!logisticInterval){
            setInterval(()=>{
                //console.log('interval:','run');
                this.getLogisticPrintProcess();
            },1500);
        }
        this.setState({orders:orders,logisticInterval:'run'});
    }
    //4.数据库设置运单打印状态
    setLogisticPrintStatus(order){

        let data = {
            params:JSON.stringify({order_id:order.order_id,status:'PRINTED'}),
        }
        $.ajax({
            url:'/app/print/setLogisticListPrintStatus',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            
        }).fail((response)=>{
            console.log('更新物流打印状态失败:',response);
        })
        
    }
    //3.获取运单打印进度
    getLogisticPrintProcess(){
        let{orders} = this.state;
        let tasks = sessionStorage.getItem('logisticPrintTasks');
        tasks = tasks?JSON.parse(tasks):{};

        //遍历orders 获取打印进度
        orders.rows.map((data)=>{
            let {order_id:orderId} = data;
            let task = tasks[orderId];
            //没有对应任务 不做修改
            if(!task){
                return data;
            }
            let {logistic_job:job,logistic_job_status:taskStatus} = task;
            String(taskStatus);
            switch (taskStatus){
                case '0':
                    data.logistic_list_print_status = 'PRINTED';
                    this.setLogisticPrintStatus(data);
                    delete tasks[orderId];
                    break;
                case '1':
                    data.logistic_list_print_status = 'QUEUE';
                    let lock = sessionStorage.getItem('RETURN_LOCK');
                    lock = lock?lock:'FREE';
                    if(lock!='FREE'){
                        //如果繁忙就继续询问
                       break;
                    }

                    //上锁
                    sessionStorage.setItem('RETURN_LOCK','BUSY');
                    LODOP.On_Return=function(TaskID,Value){
                        Value = Value?Value:'0';
                        //console.log('Value',Value);
                        task.logistic_job_status = Value;
                        let tasks = sessionStorage.getItem('logisticPrintTasks');
                        tasks = JSON.parse(tasks);
                        tasks[orderId] = task;
                        tasks = JSON.stringify(tasks);
                        sessionStorage.setItem('logisticPrintTasks',tasks);
                        //解锁
                        sessionStorage.setItem('RETURN_LOCK','FREE');

                    };
                    LODOP.GET_VALUE('PRINT_STATUS_EXIST',job);
                    break;
            }
            tasks = JSON.stringify(tasks);
            sessionStorage.setItem('logisticPrintTasks',tasks);
            return data;
        });
        //console.log(orders.rows[0]);
        this.setState({orders:orders});
    }
    //2.执行打印运单
    printLogisticPage(printType,tpl={},printerIndex=-1,order={},sender={}){


        if(printType!='print'&&printType!='preview'){
            return;
        }
        if(!tpl.tpl_name){
            return;
        }
        let {order_id:orderId} = order;
        let {items} = tpl;
        if(!items){
            items = [];
        }

        //预览
        if(printType=='preview'){
            createPage();
            LODOP.PREVIEW();
            return;
        }
        if(!orderId){
            createPage();
            LODOP.PRINT();
            return;
        }


        //执行询问打印
        let personCounter = sessionStorage.getItem('PRINTER_USED');
        personCounter = personCounter?personCounter:0;
        sessionStorage.setItem('PRINTER_USED',1);
        if(personCounter!=0){
            setTimeout(()=>{
                this.printLogisticPage(printType,tpl,printerIndex,order,sender);
            },100);
            return;
        }

        //打印
        setTimeout(()=>{
            let lock = sessionStorage.getItem('RETURN_LOCK');
            lock = lock?lock:'FREE';
            //上锁
            sessionStorage.setItem('RETURN_LOCK','BUSY');
            if(lock!='FREE'){
                //如果繁忙就继续询问
                this.printLogisticPage(printType,tpl,printerIndex,order,sender);
                //ask();
                return;
            }
            //console.log('receiverName',order.receiver_name);
            LODOP.On_Return=(TaskID,Value)=>{
                let tasks = sessionStorage.getItem('logisticPrintTasks');
                tasks = tasks?JSON.parse(tasks):{};
                let job = Value;
                let task = {order_id:orderId,logistic_job:job,logistic_job_status:'1'};
                //job
                tasks[orderId] = task;
                tasks = JSON.stringify(tasks);
                sessionStorage.setItem('logisticPrintTasks',tasks);
                //开锁
                sessionStorage.setItem('RETURN_LOCK','FREE');
                sessionStorage.setItem('PRINTER_USED',0);
            };
            createPage();
            //LODOP.PRINT_DESIGN();
            LODOP.PRINT();
        },50);

        //函数内置函数  独立出来，防止被复写
        function createPage() {
            let taskName = order.order_id?'LOGISTIC'+order.order_id:tplName;
            let {tpl_name:tplName,page_width:pageWidth,page_height:pageHeight,padding_top:paddingTop,padding_left:paddingLeft,company_name:pageName,background_img:imgUrl} = tpl;
            let img = "<img border='0' src='"+imgUrl+"'/>" ;
            let pWidth = pageWidth+'mm';
            let pHeight = pageHeight+'mm';
            let pTop = paddingTop+'mm';
            let pLeft = paddingLeft+'mm';
           // LODOP.PRINT_INITA(paddingTop+'mm',paddingLeft+'mm',pageWidth+'mm',pageHeight+'mm',taskName);
            LODOP.PRINT_INITA(pTop,pLeft,pWidth,pHeight,taskName);
            LODOP.SET_PRINT_PAGESIZE(1,pWidth,pHeight,pageName);
            LODOP.ADD_PRINT_SETUP_BKIMG(img);
            LODOP.SET_PRINT_MODE("POS_BASEON_PAPER",true);
            LODOP.SET_SHOW_MODE('BKIMG_LEFT',0);
            LODOP.SET_SHOW_MODE('BKIMG_TOP',0);
            LODOP.SET_SHOW_MODE('BKIMG_WIDTH',pageWidth+'mm');
            //LODOP.SET_SHOW_MODE("BKIMG_HEIGHT",pageHeight+'mm'); //这句可不加，因宽高比例固定按原图的
            LODOP.SET_SHOW_MODE('BKIMG_IN_PREVIEW',1);
            for(let item of items){
                if(item.status=='N'){
                    continue;
                }
                var className = item.item_name;
                var weight = item.font_weight;
                if(weight=='bold'){
                    weight=700;
                }
                let content = item.content;
                if(!className.includes('tpl-self-info')){
                    content = order.order_id ? getPrintItemContent(className,order,sender) : item.content;
                }
                LODOP.ADD_PRINT_TEXTA(className,item.margin_top,item.margin_left,item.width,item.height,content);
                LODOP.SET_PRINT_STYLEA(className,'FontName',item.font_family);
                LODOP.SET_PRINT_STYLEA(className,'FontSize',item.font_size);
                LODOP.SET_PRINT_STYLEA(className,'Bold',weight);
            };
            LODOP.SET_PRINTER_INDEXA(printerIndex);
            LODOP.SET_PRINT_MODE('CATCH_PRINT_STATUS',true);
        }
    }
    //------------E-------运单打印相关



    //选择发货物流
    onSelectLogisticCompany(index,record,logistic) {
        
        //设置订单选择的物流信息 供面单 发货使用
        this.setRowOrderLogisticInfo(index,record,logistic);
        //设置运单
        this.setOrderLogisticTpl(index,record,logistic);
        //设置面单
        this.setOrderElectricTplAccount(index,record,logistic);

    }

    //选择物流时候获取单行记录物流对应面单账号
    setOrderElectricTplAccount(index,record,logistic){
        let data = {
            params:JSON.stringify(logistic),
        }
        $.ajax({
            url:'/app/print/getElectricAccount',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            if(!response){
                return;
            }

            let {orders} = this.state;
            let data = {};
            record.electricTplAccount = response;
            orders.rows[index]=record;
            data.orders = orders;
            this.setState(data);

        }).fail((response)=>{
            console.log('获取面单账号失败:',response);
            Dialog.alert({
                content:'获取面单账号失败,点击确认重试',
                closable: true,
                title: '提示',
                onOk: () => {
                    this.setOrderElectricTplAccount(index,record,logistic)
                }
            })
        })
    }


    //设置单行记录物流
    setRowOrderLogisticInfo(index,record,logistic){
     
        let {orders} = this.state;
        let data = {};
        record.logistic = logistic;
        orders.rows[index]=record;
        data.orders = orders;
        this.setState(data);
    }

    
    //设置单行订单运单模版
    setOrderLogisticTpl(index,record,logistic){
        let {tpl_id:tplId,is_default:isDefault} = logistic;
        let {orders} = this.state;
        
        let params = {
            params:JSON.stringify({tpl_id:tplId}),
        }
        $.ajax({
            url:'/app/print/getLogisticTpl',
            data:params,
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            if(!response){
                return;
            }
            let data = {};
            if(isDefault=='Y'){
                data.logisticTpl = response;
            }
            //把获取的物流模版设置的订单记录里
            record.logistic_tpl = response;
            record.use_tpl_type = 'selected';
            orders.rows[index]=record;
            data.orders = orders;
            this.setState(data);

        }).fail((response)=>{
            Dialog.alert({
                content:'获取物流模版失败,点击确认重试',
                closable: true,
                title: '提示',
                onOk: () => {
                    this.setOrderLogisticTpl(index,record,logistic);
                    //Dialog.alert({content:'alert content'});
                }
            })
        })
    }

    //获取打印设置
    onGetPrintSetting(){
        $.ajax({
            url:'/app/print/getPrintSetting',
            data:'',
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            if(!response){
                return;
            }
            this.setState({printSetting:response});

        }).fail((response)=>{
            console.log('获取打印设置失败:',response);
            Dialog.alert({
                content:'获取打印机和面单设置失败,点击确认重试',
                closable: true,
                title: '提示',
                onOk: () => {
                    this.onGetPrintSetting();
                }
            })
        })
        
    }
    //获取默认货单模版
    onGetDefaultProductTpl(){
        $.ajax({
            url:'/app/print/getDefaultProductTpl',
            data:'',
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            if(!response){
                return;
            }
            this.setState({productTpl:response});

        }).fail((response)=>{
            console.log('获取默认货单模版失败:',response);
            Dialog.alert({
                content:'获取默认货单模版失败,点击确认重试',
                closable: true,
                title: '提示',
                onOk: () => {
                    this.onGetDefaultProductTpl();
                }
            })
        })
    }
    //获取默认面单账号
    onGetElectricAccount(logistic){

        let data = {
            params:JSON.stringify(logistic),
        }
        $.ajax({
            url:'/app/print/getElectricAccount',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            if(!response){
                return;
            }
            this.setState({electricTplAccount:response});

        }).fail((response)=>{
            console.log('获取面单账号失败:',response);
            Dialog.alert({
                content:'获取面单账号失败,点击确认重试',
                closable: true,
                title: '提示',
                onOk: () => {
                    this.onGetElectricAccount(logistic);
                }
            })
        })

    }
    
    //获取默认发货地址
    onGetSenderAddress(){
        $.ajax({
            url:'/app/print/getDefaultSenderAddress',
            data:'',
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            if(!response){
                return;
            }
            this.setState({sender:response});

        }).fail((response)=>{
            console.log('获取默认发货地址失败:',response);
            Dialog.alert({
                content:'获取默认发货地址失败,点击确认重试',
                closable: true,
                title: '提示',
                onOk: () => {
                    this.onGetSenderAddress();
                }
            })
        })
    }
    //获取默认物流和模版 以及对应面单账号
    onGetLogisticDefaultAndTpl(){

        $.ajax({
            url:'/app/print/getLogisticDefaultAndTpl',
            data:'',
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            if(!response){
                return;
            }
            let{company,tpl} = response;
            let data = {};
            if(company){
                data.logisticDefault = company;
            }
            if(tpl){
                data.logisticTpl  = tpl;
            }
            this.setState(data);
            //获取默认物流面单账号
            this.onGetElectricAccount(company);

        }).fail((response)=>{
            console.log('获取默认物流和模版失败:',response);
            Dialog.alert({
                content:'获取默认物流和模版失败,点击确认重试',
                closable: true,
                title: '提示',
                onOk: () => {
                    this.onGetLogisticDefaultAndTpl();
                },
            });
        })

    }


    //获取合作物流
    onGetLogisticsCooperate(){
        let page = {page:1,limit:100,start:0};
        let data = {
            params:JSON.stringify({}),
            page:JSON.stringify(page),
            sorter:JSON.stringify({}),
        }
        $.ajax({
            url:'/app/print/getLogisticCompanyCooperate',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            if(!response){
                return;
            }
            let{rows} = response;
            this.setState({logisticsCooperate:rows});

        }).fail((response)=>{
            Dialog.alert({
                content:'获取合作物流失败,点击确认重试',
                closable: true,
                title: '提示',
                onOk: () => {
                    this.onGetLogisticsCooperate();
                },
            });
            console.log('获取合作物流失败:',response);
        })
    }

    //获取常用物流
    onGetLogisticsOften(){
        let data = {
            params:JSON.stringify({name:''}),
            //page:JSON.stringify(page),
            //sorter:JSON.stringify({}),
        }
        $.ajax({
            url:'/app/print/selectLogisticCompany',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            if(!response){
                return;
            }
            this.setState({logisticsOften:response});

        }).fail((response)=>{
            console.log('获取常用物流失败'+response)
        })
    }

    //查询订单
    onGetOrders(query){
        //console.log(query);

        if(query.field){
            this.setState({query:query});
        }
        else {
            let {query:q} = this.state;
            query = q;
        }
        this.setState({query:query,loading:true});

        let{page,sorter,open} = this.state;

        let data = {
            params:JSON.stringify(query),
            page:JSON.stringify(page),
            sorter:JSON.stringify(sorter),
        }
        $.ajax({
            url:'/app/print/order/get',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{

            this.setState({loading:false});
            if(!response){
                return;
            }
            let {total,rows} = response;
            let keys = [];
            for (let r of rows){
                let {id} = r;
                keys.push(id);
            }
            if(open.open){
                open.opened_keys = keys;
            }
            let data = {
                orders:{
                    total:total,
                    rows:rows
                },
                row_keys:keys,
                open:open
            };
            this.setState(data);
        }).fail((response)=>{
            console.log('请求失败'+response)
        })
    }
    //设置每页大小
    onSetPageSize(size){
        let state = this.state;
        state.page.limit = size;
        this.setState(state);
    }
    //排序
    onSort(dataIndex, order, sort){
        let state = this.state;
        let dataSource = this.state.orders.rows;
        switch (dataIndex){
            case 'sum_payment':
                dataSource = this.state.orders.rows.sort(function(a, b){
                    let result = a[dataIndex] - b[dataIndex];
                    return  (order == 'asc') ? (result > 0 ? 1 : -1) : (result > 0 ? -1 : 1);
                });
                break;
            case 'gmt_create':
                dataSource = this.state.orders.rows.sort(function(a, b){
                    let date1 =  Date.parse(new Date(a[dataIndex]));
                    let date2 = Date.parse(new Date(b[dataIndex]));
                    let result = date1 -date2;
                    return  (order == 'asc') ? (result > 0 ? 1 : -1) : (result > 0 ? -1 : 1);
                });
                break;
        }

        state.orders.rows = dataSource;
        this.setState(state);
    }
    //初始化页码
    onInitPage(){
        let state = this.state;
        state.page.page = 1;
        state.page.start=0;
        this.setState(state);
    }
    //展开合上
    onOpenAllToggle(){
        let state = this.state;
        let {open,row_keys} = state;
        open = open.open?{open:false, text:'展开全部', icon:'arrow-down',opened_keys:[]}:{open:true, text:'合上全部', icon:'arrow-up',opened_keys:row_keys};
        state.open = open;
        this.setState(state);
    }
    //每行展开合上
    onRowExpendedChange(expendedRowKeys){
        let state = this.state;
        let {open} = state;
        open.opened_keys = expendedRowKeys;
        state.open = open;
        this.setState(state);
    }
    //选择记录
    onChangeSelectedRows(selectedRowKeys,records){
        this.setState({selectedKeys:selectedRowKeys,selectedRecords:records});
    }

}
export {OrderStore};