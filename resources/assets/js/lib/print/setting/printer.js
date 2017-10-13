/**
 * Created by Administrator on 2017/4/4.
 */
import React from 'react';
import Reflux from 'reflux';
import Notice from 'qnui/lib/notice';
import Form, {Item as FormItem } from 'qnui/lib/form';
import Select from 'qnui/lib/select';
import Dialog from 'qnui/lib/dialog';
import Button from 'qnui/lib/button';
import Field from 'qnui/lib/field';
import {PrintService} from '../common/printService';


class Printer extends Reflux.Component{
    constructor(props) {
        super(props);
        this.field = new Field(this);
        this.state = {
            product_tpl_printer_index:'-1',
            product_tpl_printer_name:null,
            logistic_tpl_printer_index:'-1',
            logistic_tpl_printer_name:null,
            electric_tpl_printer_index:'-1',
            electric_tpl_printer_name:null,
            printers:[]
        }
    }

    componentDidMount(){
        this.getPrinterSetting();
        this.getPrinters();
    }

    //选择货单打印机
    selectProductPrinter(value,data){
        let state = this.state;
        state.product_tpl_printer_index = data.value;
        state.product_tpl_printer_name = data.label;
        this.setState(state);
    }



    //选择运单打印机
    selectLogisticPrinter(value,data){
        let state = this.state;
        state.logistic_tpl_printer_index = data.value;
        state.logistic_tpl_printer_name = data.label;
        this.setState(state);
    }

    //选择面单打印机
    selectElectricPrinter(value,data){
        let state = this.state;
        state.electric_tpl_printer_index = data.value;
        state.electric_tpl_printer_name = data.label;
        this.setState(state);
    }

    getPrinterSetting(){

        $.ajax({
            url:'/app/print/getPrinterSetting',
            data:'',
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            if(!response){
                response;
            }
            let printers = Object.assign({},response);
            this.setState(printers);

        }).fail((response)=>{
            Dialog.alert({
                content:'获取打印机设置失败',
                closable: false,
                title: '提示',
                onOk: () => {
                    
                }
            })
        })
    }
    savePrinterSetting(){
        let state = this.state;

        let param = {
            params:JSON.stringify({printers:state}),
            //page:JSON.stringify(page),
            //sorter:JSON.stringify({}),
        }

        $.ajax({
            url:'/app/print/savePrinterSetting',
            data:param,
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            Dialog.alert({
                content:'设置成功',
                closable: false,
                title: '提示',
                onOk: () => {

                }
            })
        }).fail((response)=>{
            Dialog.alert({
                content:'设置失败',
                closable: false,
                title: '提示',
                onOk: () => {

                }
            })
        })
    }
    //获取打印机列表
    getPrinters(){
        let printers = [];
        let LODOP = PrintService.getService();
        if(!LODOP){
            this.setState({printers:printers});
            return;
        }
        let count =  LODOP.GET_PRINTER_COUNT();

        for(let i = 0;i<count;i++){
            let name = LODOP.GET_PRINTER_NAME(i);
            let printer = {index:i,name:name};
            printers[i] = printer;
        }
        this.setState({printers:printers});
    }
    

    handleSubmit(e) {
        e.preventDefault();
        this.field.validate((errors, values) => {
            if (errors) {
                return;
            }
           this.savePrinterSetting();
        });
    }

    render(){
        const {init, getError, getState } = this.field;
        let{printers,
            product_tpl_printer_index:proIndex,product_tpl_printer_name:proName,
            logistic_tpl_printer_index:logIndex,logistic_tpl_printer_name:logName,
            electric_tpl_printer_index:elecIndex,electric_tpl_printer_name:elecName} = this.state;
        const formItemLayout = {
            labelCol: {
                span: 6
            },
            wrapperCol: {
                span: 14
            }
        };
        return(
            <div>
                <Notice title="温馨提示" className="margin-t-10" type="warning" iconType="lights">
                    1.请确保下载安装了打印插件,如果没有请先下载安装：<a href="/app/help/download/clodop">点击下载安装</a>
                </Notice>
                <div style={{width:500,marginTop:20}}>
                    <Form field={this.field} >
                        <FormItem
                            label="货单打印机："
                            {...formItemLayout}>
                            <Select
                                placeholder="请选择打印机"
                                style={{ width: 200 }}
                                value={proName}
                                {...init('product_tpl_printer', {
                                    rules: [
                                        {required: false, message: '请选择打印机'}
                                    ],
                                    props: {onChange: this.selectProductPrinter.bind(this)},
                                })}
                            >
                                {printers.map(data=> <Option key={data.index} value={data.index}>{data.name}</Option>)}

                            </Select>
                        </FormItem>
                        <FormItem
                            label="运单打印机："
                            {...formItemLayout}>
                            <Select placeholder="请选择打印机" style={{ width: 200 }}
                                    value={logName}
                                {...init('logistic_tpl_printer', {
                                    rules: [
                                        {required: false, message: '请选择打印机'}
                                    ],
                                    props: {onChange: this.selectLogisticPrinter.bind(this)},
                                })}
                            >
                                {printers.map(data=> <Option key={data.index} value={data.index}>{data.name}</Option>)}
                            </Select>
                        </FormItem>
                        <FormItem
                            label="面单打印机："
                            {...formItemLayout}>
                            <Select placeholder="请选择打印机" style={{ width: 200 }}
                                    value={elecName}
                                {...init('electric_tpl_printer', {
                                    rules: [
                                        {required: false, message: '请选择打印机'}
                                    ],
                                    props: {onChange: this.selectElectricPrinter.bind(this)},
                                })}
                            >
                                {printers.map(data=> <Option key={data.index} value={data.index}>{data.name}</Option>)}
                            </Select>
                        </FormItem>
                        <FormItem wrapperCol={{ offset: 6 }}>
                            <Button type="primary" onClick={this.handleSubmit.bind(this)}>保存</Button>
                        </FormItem>

                    </Form>
                </div>
                
            </div>
        )
    }
}

export {Printer};