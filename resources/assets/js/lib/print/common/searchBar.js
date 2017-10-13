/**
 * Created by Administrator on 2017/3/10.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Form from 'qnui/lib/form';
import Input from 'qnui/lib/input';
import Select from 'qnui/lib/select';
import Button from 'qnui/lib/button';
import Field from 'qnui/lib/field';
import { RangePicker } from 'qnui/lib/date-picker';
import Reflux from 'reflux';
import { SearchBarActions,SearchTabActions} from '../../../action/print/searchActions';
import {OrderActions} from '../../../action/print/orderActions';
import {SearchBarStore} from '../../../store/print/searchStore';
import {OrderDownloadBar} from './orderDownloadBar';
const FormItem = Form.Item;

const propTypes = {
    page:PropTypes.object,
    sorter:PropTypes.object
}

const defaultProps ={
    page:{
        page:1,
        start:0,
        limit:20,
    },
    sorter:{
        key:'gmt_create',
        order:'desc'
    }
};

class SearchBar extends Reflux.Component{

    constructor(props) {
        super(props);
        this.field = new Field(this,{
            onChange:(name, value)=>{

                //选择查询条件
                if(name=='feild'){
                    this.selectQueryField(value);
                    this.setQuery(value,'');
                }
                else {
                    this.setQuery(name,value);
                }
            },

        });
        this.stores=[SearchBarStore];
    };


    //初始化时候，默认执行查询近三月订单
    componentDidMount(){

    }

    componentDidUpdate(){

    }

    //选择查询条件
    selectQueryField(field){
        $('.search-bar-query-item').addClass('hidden');
        switch(field) {
            case 'orderId':
                //this.field.setValue('name2', 'value set by name1');
                $('#query1').removeClass('hidden');
                break;
            case 'productName':
                $('#query2').removeClass('hidden');
                break;
            case 'buyerNick':
                $('#query3').removeClass('hidden');
                break;
            case 'message':
                $('#query4').removeClass('hidden');
                break;
            case 'tradeStatus':
                $('#query5').removeClass('hidden');
                break;
            case 'rateStatus':
                $('#query6').removeClass('hidden');
                break;
            case 'remark':
                $('#query7').removeClass('hidden');
                break;
            case 'rangeDate':
                $('#query8').removeClass('hidden');
                break;
            case 'printStatus':
                $('#query9').removeClass('hidden');
                break;
            default:
                $('#query1').removeClass('hidden');
        }
    }
    //设置查询query
    setQuery(field,data){
        SearchBarActions.setQuery(field,data);
    }
    //选择查询时间段
    setQueryRangeDate(str,[start,end]){
        SearchBarActions.setQueryRangeDate(start,end);
    }
    //查询按钮
    search(){
        let {query} = this.state;
        let {field,data} = query;
        //console.log(this.state.query);
        SearchTabActions.setActiveTab(field,data);
        OrderActions.getOrders(query);

    }

    render(){
        const { init, getValue } = this.field;
        let {query} = this.state;
        return(
            <div>
                <div className="search-toolbar-container">
                    <div className="search-toolbar-search">
                        <Form direction="hoz" className="form-search-bar" field={this.field} >
                        <div className="search-bar-item">
                            <FormItem  >
                                <Select className="search-bar-condition"
                                    {...init('feild', {initValue: '订单编号'})}
                                >
                                    <Option  value="orderId">订单编号</Option >
                                    <Option  value="productName">货品名称</Option >
                                    <Option  value="buyerNick">买家旺旺</Option >
                                    <Option  value="message">留言备注</Option >
                                    <Option  value="tradeStatus">交易状态</Option >
                                    <Option  value="rateStatus">评论状态</Option >
                                    <Option  value="remark">订单标记</Option >
                                    <Option  value="rangeDate">下单时间</Option >
                                    <Option  value="printStatus">打印状态</Option >
                                </Select>
                            </FormItem>
                        </div>
                        <ul className="search-bar-item">
                            <li id="query1" className="search-bar-query-item">
                                <FormItem >
                                    <Input   {...init('orderId')}
                                        className="search-bar-query" placeholder="订单编号"  />
                                </FormItem>
                            </li>
                            <li  id="query2" className="search-bar-query-item hidden">
                                <FormItem >
                                    <Input
                                        {...init('productName')}
                                        className="search-bar-query" placeholder="货品名称" />
                                </FormItem>
                            </li>
                            <li  id="query3" className="search-bar-query-item hidden">
                                <FormItem >
                                    <Input {...init('buyerNick')}
                                        className="search-bar-query" placeholder="买家旺旺/电话"  />
                                </FormItem>
                            </li>
                            <li  id="query4" className="search-bar-query-item hidden">
                                <FormItem >
                                    <Input {...init('message')}
                                        className="search-bar-query" placeholder="留言备注"  />
                                </FormItem>
                            </li>
                            <li  id="query5" className="search-bar-query-item hidden">
                                <FormItem >
                                    <Select className="search-bar-query"
                                        {...init('tradeStatus', {initValue: '全部'})}
                                    >
                                        <Option  value="ALL">全部</Option >
                                        <Option  value="WAIT_BUYER_PAY">待付款</Option >
                                        <Option  value="WAIT_SELLER_SEND">待发货</Option >
                                        <Option  value="WAIT_BUYER_RECEIVE">待收货</Option >
                                        <Option  value="REFUND">退换货</Option >
                                        <Option  value="SUCCESS">交易成功</Option >
                                        <Option  value="CANCEL">交易关闭</Option >
                                        <Option  value="OTHER">其他状态</Option >
                                    </Select>
                                </FormItem>
                            </li>
                            <li  id="query6" className="search-bar-query-item hidden">
                                <FormItem >
                                    <Select className="search-bar-query"
                                        {...init('rateStatus', {initValue: '全部'})}
                                    >
                                        <Option  value="ALL">全部</Option >
                                        <Option  value="SELLER_NOT_RATE">我未评价</Option >
                                        <Option  value="SELLER_RATED">我已评价</Option >
                                        <Option  value="BUYER_NOT_RATE">买家未评</Option >
                                        <Option  value="BUYER_RATED">买家已评</Option >
                                    </Select>
                                </FormItem>
                            </li>
                            <li  id="query7" className="search-bar-query-item hidden">
                                <FormItem >
                                    <Select className="search-bar-query"
                                        {...init('remark', {initValue: '全部'})}
                                    >
                                        <Option  value="ALL">全部</Option >
                                        <Option  value="MARK_GRAY"><i className="icon-square mark-gray">颜色</i>&nbsp;&nbsp;未标记</Option >
                                        <Option  value="MARK_ORANGE"><i className="icon-square mark-orange">颜色</i>&nbsp;&nbsp;标记</Option >
                                        <Option  value="MARK_BLUE"><i className="icon-square mark-blue">颜色</i>&nbsp;&nbsp;标记</Option >
                                        <Option  value="MARK_GREEN"><i className="icon-square mark-green">颜色</i>&nbsp;&nbsp;标记</Option >
                                        <Option  value="MARK_YELLOW"><i className="icon-square mark-yellow">颜色</i>&nbsp;&nbsp;标记</Option >
                                    </Select>
                                </FormItem>
                            </li>
                            <li  id="query8" className="search-bar-query-item hidden">
                                <FormItem >
                                    <RangePicker
                                        format="YYYY-MM-DD"
                                        {...init('rangeDate')}
                                        // onStartChange={(val, str) => console.log(val, str)}
                                        //onEndChange={(val, str) => console.log(val, str)}
                                        onChange={(val, str) => this.setQueryRangeDate(val, str)}
                                    />
                                </FormItem>
                            </li>
                            <li  id="query9" className="search-bar-query-item hidden">
                                <FormItem >
                                    <Select className="search-bar-query"
                                        {...init('printStatus', {initValue: '全部'})}
                                    >
                                        <Option  value="ALL">全部</Option >
                                        <Option  value="PRODUCT_WAIT_PRINT">货单待打</Option >
                                        <Option  value="PRODUCT_HAS_PRINTED">货单已打</Option >
                                        <Option  value="LOGISTIC_WAIT_PRINT">运单待打</Option >
                                        <Option  value="LOGISTIC_HAS_PRINTED">运单已打</Option >
                                        <Option  value="ELECTRIC_WAIT_PRINT">面单待打</Option >
                                        <Option  value="ELECTRIC_HAS_PRINTED">面单已打</Option >
                                        <Option  value="AUTO_PRINT">自动打印</Option >
                                    </Select>
                                </FormItem>
                            </li>
                        </ul>
                        <Button type="primary" onClick={this.search.bind(this)}>查询订单</Button>
                        </Form>
                    </div>
                    <div className="search-toolbar-download">
                        <OrderDownloadBar ></OrderDownloadBar>
                    </div>
                </div>

            </div>
        );
    }
}


SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;
export {SearchBar} ;