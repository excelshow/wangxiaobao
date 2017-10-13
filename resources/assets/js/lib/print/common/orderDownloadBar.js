/**
 * Created by Administrator on 2017/3/10.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Reflux from 'reflux';
import Form from 'qnui/lib/form';
import Badge from 'qnui/lib/badge'
import Select from 'qnui/lib/select';
import Button from 'qnui/lib/button';
import Field from 'qnui/lib/field';
//import Balloon from 'qnui/lib/balloon';
import Dialog from 'qnui/lib/dialog';
import Progress from 'qnui/lib/progress';

import { OrderDownloadActions } from '../../../action/print/orderDownloadActions';
import {OrderDownloadStore} from '../../../store/print/orderDownloadStore';

import {OrderActions} from '../../../action/print/orderActions';
const FormItem = Form.Item;

const propTypes = {

}
const downloadBarDefaultProps = {

}
class OrderDownloadBar extends Reflux.Component{
    constructor(props) {
        super(props);
        this.field = new Field(this,{
            onChange:(name, value)=>{
                if(name=='period'){
                    //console.log(value);
                    this.selectPeriod(value);
                }
            },

        });
        this.stores=[OrderDownloadStore];

    }

    componentDidMount(){
        OrderDownloadActions.getWaitDownloadInfo();
        setInterval(function () {
            OrderDownloadActions.getWaitDownloadInfo();
        },300000)

    }

    selectPeriod(period){
        OrderDownloadActions.selectPeriod(period);
    }

    download(){
        OrderDownloadActions.download();
    }

    conform(){

        OrderActions.getOrders({});
        OrderDownloadActions.closeDialog();
    }

    closeDialog(){
        OrderDownloadActions.closeDialog();
    }

    cancel(){
        OrderDownloadActions.cancel();
    }
    render(){
        const { init, getValue } = this.field;
        let {wait_total,download_time,dialog_visible,percent,order_total,download_total,error} = this.state;
        return(
            <div>
                <Form direction="hoz" className="form-search-bar" field={this.field}>
                    <div className="search-bar-item">
                    <FormItem  >
                        <Select className="search-bar-condition"
                            {...init('period', {initValue: '近三天'})}
                        >
                            <Option  value="1">今天</Option >
                            <Option  value="3">近三天</Option >
                            <Option  value="7">近七天</Option >
                            <Option  value="10">近十天</Option >
                            <Option  value="15">近半月</Option >
                            <Option  value="30">近一月</Option >
                            <Option  value="60">近二月</Option >
                            <Option  value="90">近三月</Option >
                        </Select>
                    </FormItem>
                        </div>
                    <Badge count={wait_total} >
                        <Button type="primary" onClick={this.download.bind(this)}>同步订单</Button>
                    </Badge>
                    <span>&nbsp; &nbsp;同步时间：{download_time}</span>

                    <Dialog  visible = {dialog_visible}
                            onOk = {this.conform.bind(this)}
                            onCancel = {this.cancel.bind(this)}
                            onClose = {this.closeDialog.bind(this)}
                            title = "订单同步"

                            style={{
                                width: '500px',
                                //height:'300px'
                            }}
                    >
                        <Progress  percent={percent} suffix={`${percent}%`} />
                        <ul>
                            <li>同步总数：{order_total}</li>
                            <li>已同步数：{download_total}</li>
                        </ul>

                        <div className={error.visible}>
                            {error.msg}
                        </div>
                    </Dialog>

                </Form>
            </div>
        );
    }
}
OrderDownloadBar.propTypes = propTypes;
OrderDownloadBar.defaultProps = downloadBarDefaultProps;


export {OrderDownloadBar};