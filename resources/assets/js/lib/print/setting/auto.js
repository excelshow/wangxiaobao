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
import Checkbox from 'qnui/lib/checkbox';
import Radio, { Group as RadioGroup } from 'qnui/lib/radio';
const { Group: CheckboxGroup } = Checkbox;
import Switch from 'qnui/lib/switch'
import Range from 'qnui/lib/range';

import {PrintService} from '../common/printService';


class Auto extends Reflux.Component{
    constructor(props) {
        super(props);
        this.field = new Field(this);
        this.state = {
            logistic_type:'1',
            auto_items:['1','2','4'],
            order_period:'1',
            auto_range:[0,24],
        }
    }

    componentDidMount(){
        this.getAutoPrintSetting();
    }

    //选择发货物流
    selectLogisticType(data){
        this.setState({logistic_type:data});
    }

    //check 打印内容
    checkAutoItems(data){
        this.setState({auto_items:data});
    }

    //选择订单日期
    checkOrderPeriod(data){
        this.setState({order_period:data});
    }

    //设置日期
    setAutoRange(data){
        this.setState({auto_range:data});
    }


    //获取自动打印设置
    getAutoPrintSetting(){
        let field = this.field;
        $.ajax({
            url:'/app/print/getAutoPrintSetting',
            data:'',
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            if(!response){
                return;
            }

            let data = {
                logistic_type:'1',
                auto_items:[],
                order_period:'1',
                auto_range:[]
            };
            data.logistic_type = response.logistic_type;
            if( response.print_product_list=="Y"){
                data.auto_items.push('1');
            }
            if( response.print_logistic_list=="Y"){
                data.auto_items.push('2');
            }
            if( response.print_electric_list=="Y"){
                data.auto_items.push('3');
            }
            if( response.auto_send=="Y"){
                data.auto_items.push('4');
            }

            data.order_period = response.order_period;
            data.auto_range[0] = parseInt(response.start_time);
            data.auto_range[1] = parseInt(response.end_time);

            this.setState(data);

        }).fail((response)=>{
            Dialog.alert({
                content:'获取自动打印设置失败',
                closable: true,
                title: '提示',
                onOk: () => {
                    
                }
            })
        })

    }

    //保存
    save(){
        let {logistic_type:logisticType,auto_items:autoItems,order_period:orderPeriod,auto_range:autoRange} = this.state;

        let data = {logistic_type:logisticType,print_product_list:'N',print_logistic_list:'N',print_electric_list:'N',auto_send:'N',order_period:orderPeriod,start_time:autoRange[0],end_time:autoRange[1]};
        for(let  a of autoItems){
            switch (a){
                case '1':data.print_product_list = 'Y';break;
                case '2':data.print_logistic_list = 'Y';break;
                case '3':data.print_electric_list = 'Y';break;
                case '4':data.auto_send = 'Y';break;
            }
        }

        let params = {
            params:JSON.stringify({auto:data}),
        }

        $.ajax({
            url:'/app/print/setAutoPrint',
            data:params,
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            if(!response){
                return;
            }
            Dialog.alert({
                content:'设置成功',
                closable: true,
                title: '提示',
                onOk: () => {

                }
            })
        }).fail((response)=>{
            Dialog.alert({
                content:'操作失败',
                closable: true,
                title: '提示',
                onOk: () => {

                }
            })
        })

    }

    render(){
        const {init, getError, getState } = this.field;
        const formItemLayout = {
            labelCol: {
                span: 6
            },
            wrapperCol: {
                span: 14
            }
        };
        let {logistic_type,auto_items,order_period,auto_range} = this.state;
        return(
            <div>
                <Notice title="温馨提示" className="margin-t-10" type="warning" iconType="lights">
                    1:选择发货方式为线下物流时候，在开启自动打印时候需要设置一个初始单号，系统根据初始单号生成后续单号
                </Notice>
                <div style={{width:600,marginTop:20}}>
                    <Form field={this.field} >
                        <FormItem
                                  label="发货物流方式："
                                  {...formItemLayout}
                        >

                            <RadioGroup
                                value={logistic_type}
                                {...init('logisticType', {
                                    props: {
                                        onChange: this.selectLogisticType.bind(this),
                                    },
                                })}
                            >
                                <Radio value="1">线下物流(需要单号)</Radio>
                                <Radio value="2">虚拟发货(不需单号)</Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem
                            label="一键打印发货："
                            {...formItemLayout}>
                            <CheckboxGroup
                                value={auto_items}
                                {...init('autoItems', {
                                   props: {
                                       onChange: this.checkAutoItems.bind(this),

                                   },

                                })}
                            >
                                <Checkbox  value="1">打印货单</Checkbox>
                                <Checkbox  value="2">打印运单</Checkbox>
                                <Checkbox  value="3">打印面单</Checkbox>
                                <Checkbox  value="4">自动发货</Checkbox>
                            </CheckboxGroup>
                        </FormItem>
                        <FormItem
                            label="自动打印订单："
                            {...formItemLayout}>
                            <RadioGroup
                                value={order_period}

                                {...init('orderPeriod', {
                                    props: {
                                        onChange: this.checkOrderPeriod.bind(this),
                                    },
                                })}
                            >
                                <Radio  value="1">今天待发</Radio>
                                <Radio  value="2">两天待发</Radio>
                                <Radio  value="3">三天待发</Radio>
                                <Radio  value="4">全部待发</Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem
                            label="自动打印时间："
                            {...formItemLayout}
                            //className="hidden"

                        >
                            <Range slider={'double'}
                                   min = {0}
                                   max = {24}
                                   step={1}

                                   marks={
                                       {
                                           0:'00:00',6:'06:00',12:'12:00',18:'18:00',24:'24:00',
                                       }
                                   }
                                   style={{marginTop:10}}
                                   hasTip={true}

                                   value = {auto_range}
                                   {...init('autoRange', {
                                       props: {
                                           onChange: this.setAutoRange.bind(this),
                                       },
                                   })}
                            />

                        </FormItem>

                        <FormItem wrapperCol={{ offset: 6 }}>
                            <Button type="primary" onClick={this.save.bind(this)}>保存</Button>
                        </FormItem>

                    </Form>
                </div>
                
            </div>
        )
    }
}

export {Auto};