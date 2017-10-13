/**
 * Created by Administrator on 2017/3/7.
 */
import React from 'react';
import PropTypes from 'prop-types';
//import ReactDOM from 'react-dom';
import Reflux from 'reflux';
import Table from 'qnui/lib/table';
import Button from 'qnui/lib/button';
import Icon from 'qnui/lib/icon';
import Pagination from 'qnui/lib/pagination';
import { Row, Col } from 'qnui/lib/grid';
import Select, {Option, OptionGroup} from 'qnui/lib/select';
import Field from 'qnui/lib/field';
import Dialog from 'qnui/lib/dialog';
import Form from 'qnui/lib/form';
const FormItem = Form.Item;
import Input from 'qnui/lib/input';
import Notice from 'qnui/lib/notice';
//import Feedback from 'qnui/lib/feedback';
//const Toast = Feedback.toast;
import Checkbox from 'qnui/lib/checkbox';
import Radio, { Group as RadioGroup } from 'qnui/lib/radio';
const { Group: CheckboxGroup } = Checkbox;
import Switch from 'qnui/lib/switch'

import {SearchBar} from '../common/searchBar';
import {SearchTab} from '../common/searchTab';
import {SearchBarStore,SearchTabStore} from '../../../store/print/searchStore';
import { OrderActions } from '../../../action/print/orderActions';
import { OrderStore } from '../../../store/print/orderStore';
import {PrintService} from '../common/printService';

const propTypes = {
    query:PropTypes.object,
    total:PropTypes.number,
    dataSource:PropTypes.array
};
//外部属性 从父组件获取数据接口
const orderListDefaultProps ={
    query:{
        field:'orderId',
        data:'',
        start:'',//查询日期开始
        end:''//查询日期结束
    },
    total:0,
    dataSource:[]
};

class Order extends Reflux.Component{

    constructor(props) {
        super(props);
        this.stores = [SearchBarStore,SearchTabStore,OrderStore];
        this.state = {
            query:{
                field:'orderId',
                data:'',
                start:'',//查询日期开始
                end:''//查询日期结束
            },
            page:{
                page:1,
                start:0,
                limit:20
            },
            sorter:{
                key:'gmt_create',
                order:'desc'
            },
            orders:{
                total:0,
                rows:[]
            },
        }
    }
    componentDidMount(){
       // let query = this.state.query.field;
        //console.log('mount:'+query);
        this.initSessionStore();
    }

    componentDidUpdate(){
        //let query = this.state.query.field;
        //console.log('update:'+query);
    }

    initSessionStore(){
        sessionStorage.setItem('PRINTER_USED','0');
        sessionStorage.setItem('RETURN_LOCK','FREE');
        sessionStorage.setItem('AUTO_PRINT_LOCK','FREE');

    }
    render(){
        const {query,page,sorter,orders} = this.state;
        return(
            <div>
                <SearchBar
                    page={page}
                    sorter={sorter}>
                </SearchBar>
                <SearchTab
                    page={page}
                    sorter={sorter}>
                </SearchTab>
                <OrderList
                    query = {query}
                    dataSource={orders.rows}
                    total={orders.total}>
                </OrderList>
            </div>
        );
    }
}

class OrderList extends Reflux.Component {

    constructor(props) {
        super(props);
        this.stores=[OrderStore];
        this.field = new Field(this);
        this.state = {};
    }


    componentDidMount(){
        this.getOrders();
        this.getLogisticDefaultAndTpl();
        this.getLogisticsCooperate();
        this.getSenderAddress();
        this.getPrintSetting();
        this.getDefaultProductTpl();
        this.getAutoPrintSetting();
    }

    //一键打印发货
    oneKeyPrint(){
        OrderActions.oneKeyPrint();
    }

    //打开批量发货
    sendAll(){
        OrderActions.sendAll();
    }


    //获取自动打印设置
    getAutoPrintSetting(){
        OrderActions.getAutoPrintSetting();
    }

    //开关自动打印
    toggleAutoPrint(checked){
        OrderActions.toggleAutoPrint(checked);

        let originalNum = localStorage.getItem('originalLogisticNum');
        originalNum = originalNum?originalNum:'';
        this.field.setValue('autoPrintOriginalNum',originalNum);
    }

    //设置自动打印初始单号
    setOriginalLogisticNum(){
        let original = this.field.getValue('autoPrintOriginalNum');
        OrderActions.setAutoLogisticNum(original);
    }

    //打开自动发货对话框
    openAutoEditor(){
        OrderActions.openAutoEditor();
    }

    //关闭自动发货对话框
    closeAutoEditor(){
        OrderActions.closeAutoEditor();
    }


    //确认设置初始单号
    setOriginalLogisticNum(){

        let original = this.field.getValue('originalNum');
        if(!original){
            Dialog.alert({
                content:'初始单号不能为空',
                closable: true,
                title: '提示',
                onOk: () => {
                },
            });
            return;
        }
        OrderActions.setOriginalLogisticNum(original);
    }

    //关闭顺延对话框
    closeLogisticNumsCreater(){
        OrderActions.closeLogisticNumsCreater();
    }


    //顺延单号按钮
    createLogisticNums(){

        OrderActions.createLogisticNums();
    }

    //立即发货
    send(order){
        OrderActions.send(order);
    }

    //关闭发货
    closeSendEditor(){
        OrderActions.closeSendEditor();
    }
    //发货提交
    sendSubmit(){
        OrderActions.sendSubmit();
    }


    //批量打印面单
    printElectricPages(){
        let LODOP = PrintService.getService();
        if(!LODOP){
            return;
        }

        let {selectedRecords} = this.state;
        if(!selectedRecords.length){
            Dialog.alert({
                content:'请选择要打印面单的订单',
                closable: true,
                title: '提示',
                onOk: () => {
                },
            });
            return;
        }
        selectedRecords.forEach((order)=>{
            OrderActions.printElectricPage(order,'print');
        })

    }

    //批量打印货单
    printProductPages(){
        let LODOP = PrintService.getService();
        if(!LODOP){
            return;
        }
        let {selectedRecords} = this.state;
        if(!selectedRecords.length){
            Dialog.alert({
                content:'请选择要打印货单的订单',
                closable: true,
                title: '提示',
                onOk: () => {
                },
            });
            return;
        }
        selectedRecords.forEach((order)=>{
            OrderActions.printProductPage(order,'print');
        })

    }

    //批量打印运单
    printLogisticPages(){
        let LODOP = PrintService.getService();
        if(!LODOP){
            return;
        }
        let {selectedRecords} = this.state;
        if(!selectedRecords.length){
            Dialog.alert({
                content:'请选择要打印运单的订单',
                closable: true,
                title: '提示',
                onOk: () => {
                },
            });
            return;
        }
        selectedRecords.forEach((order)=>{
            OrderActions.printLogisticPage(order,'print');
        })

    }

    //打印货单
    printProductPage(order,printType){
        let LODOP = PrintService.getService();
        if(!LODOP){
            return;
        }
        OrderActions.printProductPage(order,printType);
    }

    //打印运单
    printLogisticPage(order,printType){
        let LODOP = PrintService.getService();
        if(!LODOP){
            return;
        }
        OrderActions.printLogisticPage(order,printType);
    }

    //打印面单
    printElectricPage(order,printType){
        let LODOP = PrintService.getService();
        if(!LODOP){
            return;
        }
        OrderActions.printElectricPage(order,printType);
    }


    //获取默认货单模版
    getDefaultProductTpl(){
        OrderActions.getDefaultProductTpl();
    }
    //获取发货地址
    getSenderAddress(){
        OrderActions.getSenderAddress();
    }

    //获取打印设置
    getPrintSetting(){
        OrderActions.getPrintSetting();
    }

    //获取默认物流和模版
    getLogisticDefaultAndTpl(){
        OrderActions.getLogisticDefaultAndTpl();
    }

    //获取合作物流
    getLogisticsCooperate(){
        OrderActions.getLogisticsCooperate();
    }

    //获取常用物流
    getLogisticsOften(){
        OrderActions.getLogisticsOften();
    }

    //选择物流
    selectLogisticCompany(index,record,logistic){
        //console.log(record);
        OrderActions.selectLogisticCompany(index,record,logistic);
    }

    //获取订单
    getOrders(){
        let {query} = this.props;
        OrderActions.getOrders(query);
    }

    //设置每页大小
    setPageSize(size){
        let {query} = this.props;
        OrderActions.setPageSize(size);
        OrderActions.getOrders(query);
    }

    changePage(page){
        let {query} = this.props;
        let state = this.state;
        state.page.page = page;
        this.setState(state);
        //console.log(page);
        OrderActions.getOrders(query);
    }

    //排序
    sort(dataIndex, order, sort){
        OrderActions.sort(dataIndex, order, sort);
    }
    //展开合上
    openAllToggle(){
        OrderActions.openAllToggle();
    }

    //选择记录
    changeSelectedRows(selectedRowKeys,records){
        OrderActions.changeSelectedRows(selectedRowKeys,records);
    }

    onRowExpandedChange(expandedRowKeys){
        OrderActions.rowExpendedChange(expandedRowKeys);
    }
    render(){
        const {init } = this.field;
        let {open,loading,page,logisticDefault,logisticsCooperate,sendEditor,logisticNumCreater,autoEditor,autoPrint,oneKeyPrint} = this.state;
        //console.log(page);
        let {query,total,dataSource} = this.props;


        let rowSelection = {
            onChange:  this.changeSelectedRows.bind(this),
        }

        return(
            <div >
                <div className="component-container">
                    <Row type="no-padding" className="">
                        <Col>
                            <div>
                                <Button className="hidden" type="primary">标记备注</Button>
                                <Button className="hidden" type="primary" >批量评价</Button>
                                <Button type="primary" onClick={this.printProductPages.bind(this)}>打印货单</Button>&nbsp;&nbsp;
                                <Button type="primary" onClick={this.printLogisticPages.bind(this)}>打印运单</Button>&nbsp;&nbsp;
                                <Button type="primary" onClick={this.printElectricPages.bind(this)}>打印面单</Button>&nbsp;&nbsp;
                                <Button type="primary" onClick={this.createLogisticNums.bind(this)}>顺延单号</Button>&nbsp;&nbsp;
                                <Button type="primary" onClick={this.sendAll.bind(this)}>批量发货</Button>&nbsp;&nbsp;
                                <Button type="primary" disabled={oneKeyPrint.disabled} onClick={this.oneKeyPrint.bind(this)}>一键打印发货</Button>&nbsp;&nbsp;
                            </div>
                        </Col>
                        <Col fixedSpan="23">
                            <div >
                                <Pagination
                                    className="pull-right"
                                    pageSize = {page.limit}
                                    total={ total }
                                    current={page.page}
                                    onChange={this.changePage.bind(this)}
                                    type="simple" /> &nbsp;&nbsp;
                                <Button type="primary" className="pull-right margin-r-10" onClick={this.openAllToggle.bind(this)}>
                                    <Icon type={open.icon} />{open.text}
                                </Button>
                                <span>自动打印发货</span>
                                <Switch className="pull-right margin-r-10"
                                        checkedChildren="开"
                                        checked = {autoPrint}
                                        unCheckedChildren="关"
                                        onChange={this.toggleAutoPrint.bind(this)}
                                         />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="component-container">
                    <Table
                        dataSource={ dataSource }
                        primaryKey="id"
                        //fixedHeader={true}
                        isZebra = {true}
                        isLoading = {loading}
                        hasExpandedRowCtrl = {true}
                        rowSelection={rowSelection}
                        onSort = {this.sort.bind(this)}
                        expandedRowRender = {(record)=> {
                            let {products} = record;
                            let items =[];
                            for (let product of products){
                                //console.log(product);
                                let item = <li key={ product.id } ><img src={product.img_url} className="img-product"/><span>{product.product_name}</span></li>;
                                item = <Row key={ product.id } className="row-product row-product-top">
                                    <Col span="8">
                                        <Row type="across">
                                            <Col span="3">
                                                <img src={product.img_url} className="img-product"/>
                                            </Col>
                                            <Col span="21">
                                                <ul>
                                                    <li><span>{product.product_name}</span></li>
                                                    <li><span>产品货号：{product.product_cargo_number}</span></li>
                                                    <li><span>单品货号：{product.cargo_number}</span></li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span="4">
                                        <span>{ product.spec_items}</span>
                                    </Col>
                                    <Col span="12">
                                        <span>{ product.price/100 } x { product.quantity }  {product.product_unit}</span>
                                    </Col>
                                </Row>;
                                items.push(item);
                            }

                            let tpl = <div>
                                <Row className="row-product">
                                    <Col span="8" >
                                        <strong>商品信息</strong>

                                    </Col>
                                    <Col span="4" >
                                        <strong>属性</strong>

                                    </Col>
                                    <Col span="12">
                                        <strong >单价x数量</strong>
                                    </Col>

                                </Row>

                                {items}
                            </div>;
                            return tpl;
                        }}
                        expandedRowKeys = {open.opened_keys}
                        onExpandedChange = {this.onRowExpandedChange.bind(this)}
                    >
                        <Table.Column title="单号" dataIndex="order_id" className="col-order-id"/>
                        <Table.Column title="买家" dataIndex="buyer_nick"  className="col-buyer-nick"
                                      cell = {(value, index, record)=>{

                                          return value;
                                      }}
                        />

                        <Table.Column title="货品" dataIndex="product_name"/>
                        <Table.Column title="金额" dataIndex="sum_payment" sortable className="col-payment"
                                      cell = {(value, index, record)=>{

                                          return value;
                                      }}
                        />
                        <Table.Column title="交易时间" dataIndex="gmt_create" sortable className="col-create-time"  cell = {(value, index, record)=>{
                            //console.log(record);
                            return value;
                        }}/>
                        <Table.Column title="交易状态" dataIndex="status" className="col-trade-status" cell={(value, index, record)=>{

                            switch (value){
                                case 'WAIT_BUYER_PAY':value = '待付款'; break;
                                case 'WAIT_SELLER_SEND':value = '待发货';break;
                                case 'WAIT_BUYER_RECEIVE': value = '待收货';break;
                                case 'SUCCESS': value = '交易成功';break;
                                case 'CANCEL': value = '交易关闭';break;
                                case 'WAIT_SELLER_ACT': value = '分阶段等待卖家操作';break;
                                case 'WAIT_BUYER_CONFIRM_ACTION': value = '分阶段等待买家确认卖家操作';break;
                                case 'WAIT_SELLER_PUSH': value = '分阶段等待卖家推进';break;
                                case 'WAIT_LOGISTICS_TAKE_IN': value = '等待物流公司揽件COD';break;
                                case 'WAIT_BUYER_SIGN': value= '等待买家签收COD';break;
                                case 'SIGN_IN_SUCCESS': value = '买家已签收COD';break;
                                case 'SIGN_IN_FAILED': value = '签收失败COD';break;
                            }
                            return value;
                        }}/>
                        <Table.Column title="收件人" className="col-receiver" dataIndex="receiver_address"
                                      cell = {(value, index, record)=>{
                                          let {receiver_name,receiver_mobile,receiver_address} = record;
                                          let tpl =
                                              <ul>
                                                  <li><Icon type="account" size="xs"/>：{receiver_name}</li>
                                                  <li><Icon type="phone" size="xs"/>：{receiver_mobile}</li>
                                                  <li><Icon type="survey" size="xs"/>：{receiver_address}</li>
                                              </ul>
                                          return tpl;
                                      }}
                        />
                        <Table.Column title="留言备注" dataIndex="buyer_message"
                                      cell = {(value, index, record)=>{
                                          let {seller_remark_icon,seller_remark,buyer_message} = record;
                                          switch (seller_remark_icon){
                                              case 0:seller_remark_icon = <i className="icon-square mark-gray">颜&nbsp;</i>;break;
                                              case 1:seller_remark_icon = <i className="icon-square mark-orange">颜&nbsp;</i>;break;
                                              case 2:seller_remark_icon = <i className="icon-square mark-blue">颜&nbsp;</i>;break;
                                              case 3:seller_remark_icon = <i className="icon-square mark-green">颜&nbsp;</i>;break;
                                              case 4:seller_remark_icon = <i className="icon-square mark-yellow">颜&nbsp;</i>;break;
                                          }
                                          let tpl = <ul>
                                              <li>标记：{seller_remark_icon}</li>
                                              <li>备注：{seller_remark}</li>
                                              <li>留言：{buyer_message}</li>
                                          </ul>
                                          return tpl;
                                      }}
                        />
                        <Table.Column title="发货物流" dataIndex="logistic" width={140}
                                      cell = {(value, index, record)=>{

                                          let {logistic_num:logisticNum} = record;
                                          let {company_name:companyName,company_no:companyNo} = logisticDefault;
                                          let logisticsDefault = [];
                                          let logistic;
                                          if(companyName){
                                              logistic = companyName;
                                              logisticsDefault.push(logisticDefault);
                                          }
                                          let tpl =
                                              <div>
                                                  <Select
                                                      placeholder="选择物流"
                                                      //showSearch
                                                      defaultValue={logistic}
                                                  >
                                                      <OptionGroup label="默认物流">
                                                          {
                                                              logisticsDefault.map(data=> <Option onClick= {this.selectLogisticCompany.bind(this,index,record,data)} key={data.company_id} value={data.company_id}>{data.company_name}</Option>)
                                                          }
                                                      </OptionGroup>
                                                      <OptionGroup label="合作物流">
                                                          {
                                                              logisticsCooperate.map(data=> <Option onClick= {this.selectLogisticCompany.bind(this,index,record,data)} key={data.company_id} value={data.company_id}>{data.company_name}</Option>)
                                                          }
                                                      </OptionGroup>
                                                  </Select>

                                                  <div className="div-logistic-num">{logisticNum}</div>
                                              </div>
                                          return tpl;
                                      }}
                        />
                        <Table.Column title="打印状态" dataIndex="logistic_list_print_status" width={120}
                                      cell = {(value, index, record)=>{
                                          let{status:tradeStatus,product_list_print_status:proStatus,logistic_list_print_status:logStatus,electric_list_print_status:eleStatus} = record;
                                          let hasPrint = <span className="has-print">已打<Icon type="success"  size="xs" /></span>;
                                          let waitPrint = <span className="wait-print">待打<Icon type="lights" size="xs" /></span>;
                                          let queue = <span className="in-print-queue">队列<Icon type="print"  size="xs" /></span>;
                                          let loading  =  <span className="loading-tpl">获取<Icon type="loading"  size="xs" /></span>;
                                          let success  =  <span className="loading-tpl">已获<Icon type="smile"  size="xs" /></span>;
                                          let failed = <span className="loading-tpl-failed">失败<Icon type="cry"  size="xs" /></span>;
                                          let waitSend = <span className="wait-print">待发<Icon type="skip" size="xs" /></span>;
                                          let hasSend = <span className="has-print">已发<Icon type="success"  size="xs" /></span>;
                                          let noNeed = <span className="">不发<Icon type="filter"  size="xs" /></span>;
                                          let proStatusRender =  waitPrint;
                                          let logStatusRender = waitPrint;
                                          let eleStatusRender = waitPrint;
                                          let sendStatusRender = waitPrint;

                                          switch (proStatus){
                                              case 'WAIT_PRINT':proStatusRender = waitPrint;break;
                                              case 'PRINTED':proStatusRender = hasPrint;break;
                                              case 'QUEUE':proStatusRender = queue;break;
                                          }
                                          switch (logStatus){
                                              case 'WAIT_PRINT':logStatusRender = waitPrint;break;
                                              case 'PRINTED':logStatusRender = hasPrint;break;
                                              case 'QUEUE':logStatusRender = queue;break;
                                          }
                                          switch (eleStatus){
                                              case 'WAIT_PRINT':eleStatusRender = waitPrint;break;
                                              case 'PRINTED':eleStatusRender = hasPrint;break;
                                              case 'QUEUE':eleStatusRender = queue;break;
                                              case 'LOADING':eleStatusRender = loading;break;
                                              case 'SUCCESS':eleStatusRender = success;break;
                                              case 'FAILED':eleStatusRender = failed;break;
                                          }


                                          let send = (tradeStatus=='WAIT_SELLER_SEND')?'':'';


                                          switch (tradeStatus){
                                              case 'WAIT_SELLER_SEND':sendStatusRender = waitSend;break;
                                              case 'WAIT_BUYER_RECEIVE':sendStatusRender = hasSend;break;
                                              default:
                                                  sendStatusRender = noNeed;
                                          }
                                          let tpl = <ul>
                                              <li>货单：{proStatusRender}</li>
                                              <li>运单：{logStatusRender}</li>
                                              <li>面单：{eleStatusRender}</li>
                                              <li className={send}>发货：{sendStatusRender}</li>
                                          </ul>
                                          return tpl;
                                      }}
                        />
                        <Table.Column title="操作" dataIndex="logistic_list_print_status" width={150}
                                      cell = {(value, index, record)=>{
                                          let {data} = query;
                                          let send = (data=='WAIT_SELLER_SEND')?'':'';
                                          let tpl = <ul>
                                              <li>货单：<a href="javascript:void(0)" onClick={this.printProductPage.bind(this,record,'print')} style={{marginRight:10}}>打印</a><a href="javascript:void(0)" onClick={this.printProductPage.bind(this,record,'preview')}>预览</a></li>
                                              <li>运单：<a href="javascript:void(0)" onClick={this.printLogisticPage.bind(this,record,'print')} style={{marginRight:10}}>打印</a><a href="javascript:void(0)" onClick={this.printLogisticPage.bind(this,record,'preview')}>预览</a></li>
                                              <li>面单：<a href="javascript:void(0)" onClick={this.printElectricPage.bind(this,record,'print')} style={{marginRight:10}}>打印</a><a href="javascript:void(0)" onClick={this.printElectricPage.bind(this,record,'preview')}>预览</a></li>
                                              <li className={send}>发货：<a  onClick={this.send.bind(this,record)} href="javascript:void(0)">发货</a></li>
                                          </ul>
                                          return tpl;
                                      }}
                        />
                    </Table>
                </div>
                <div className="component-container">
                    <Pagination
                        pageSizeSelector="dropdown"
                        pageSize = {page.limit}

                        pageSizeList = {[5,10,20,50,100]}
                        total={total}
                        current= { page.page }
                        onChange={this.changePage.bind(this)}
                        pageSizePosition="start"
                        onPageSizeChange={this.setPageSize.bind(this)} />
                </div>
                <div className="hidden" id="div-product-tpl-render">

                </div>
                <div>
                    <Dialog visible = {sendEditor.visible}
                            onOk = {this.sendSubmit.bind(this)}
                            onCancel = {this.closeSendEditor.bind(this)}
                            onClose = {this.closeSendEditor.bind(this)}
                            title = {sendEditor.title}
                            style = {sendEditor.style}
                            align = {sendEditor.align}
                    >
                        <SendEditor></SendEditor>
                    </Dialog>
                </div>
                <div>
                    <Dialog visible = {logisticNumCreater.visible}
                            onOk = {this.setOriginalLogisticNum.bind(this)}
                            onCancel = {this.closeLogisticNumsCreater.bind(this)}
                            onClose = {this.closeLogisticNumsCreater.bind(this)}
                            title = {logisticNumCreater.title}
                            style = {logisticNumCreater.style}
                            align = {logisticNumCreater.align}
                    >
                        <div>
                            <Notice className="margin-b-10" title="顺延单号将截取初始单号的后六位作为计算初始值,累加计算，产出新单号" type="warning" iconType="lights"/>
                            <Form field={this.field} >
                                <FormItem
                                    label="初始单号"
                                    labelCol ={{span: 5}}
                                    wrapperCol = {{span: 12}}
                                >
                                    <Input className="input-send-goods-logistic-num" hasLimitHint placeholder="初始单号"
                                            defaultValue = {logisticNumCreater.originalNum}
                                            {...init('originalNum', {
                                                rules: [
                                                    {required: false, message: '初始单号不能为空'},
                                                ],
                                            })} />
                                </FormItem>
                            </Form>
                        </div>

                    </Dialog>
                </div>


            </div>
        );
    }
}
OrderList.propTypes = propTypes;
OrderList.defaultProps = orderListDefaultProps;


//自动发货设置
class AutoPrint extends  Reflux.Component{
    constructor(props) {
        super(props);
    }
    render(){
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
                <Form field={this.field} >
                    <FormItem
                        label="发货物流方式："
                        {...formItemLayout}
                    >

                        <RadioGroup
                            //value={this.state.value}
                            //onChange={this.onChange}
                        >
                            <Radio value="1">线下物流(需要单号)</Radio>
                            <Radio value="2">虚拟发货(不需单号)</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem
                        label="一键打印发货："
                        {...formItemLayout}>
                        <CheckboxGroup
                            //value={[]}
                            //onChange={}
                        >
                            <Checkbox id="apple" value="apple">打印货单</Checkbox>
                            <Checkbox id="watermelon" value="watermelon">打印运单</Checkbox>
                            <Checkbox id="orange" value="orange">打印面单</Checkbox>
                            <Checkbox id="orange" value="orange">自动发货</Checkbox>
                        </CheckboxGroup>
                    </FormItem>
                    <FormItem
                        label="自动打印订单："
                        {...formItemLayout}>
                        <RadioGroup
                            //value={this.state.value}
                            //onChange={this.onChange}
                        >
                            <Radio  value="apple">今天订单</Radio>
                            <Radio  value="watermelon">两天内订单</Radio>
                            <Radio  value="orange">三天内订单</Radio>
                        </RadioGroup>
                    </FormItem>


                    <FormItem
                        label="开启自动打印："
                        {...formItemLayout}>
                        <Switch checkedChildren="开"
                            //onChange={onChange}
                                unCheckedChildren="关" />

                    </FormItem>
                </Form>
            </div>
        );
    }

}


//产品发货器
class SendEditor extends  Reflux.Component{
    constructor(props) {
        super(props);
        this.stores=[OrderStore];
        this.storeKeys = ['logisticDefault','logisticsCooperate','sendGoodsOrder','sendGoodsKeys','logisticWay'];
        this.field = new Field(this,{
            onChange:(name, value)=>{
                //console.log(name,value);
                //设置物流单号
                switch (name){
                    case 'logisticNum':this.setLogisticNum(value);break;
                }
            },
        });
        this.state = {
            }
    }

    //设置物流单号
    setLogisticNum(logisticNum){
        OrderActions.setLogisticNum(logisticNum);
    }

    //选择发货方式
    selectLogisticWay(way){
        OrderActions.selectSendWay(way);
    }

    //选择发货物流
    selectLogisticCompany(company){

        OrderActions.selectSendLogistic(company);
    }
    //选择发货商品记录
    changeSelectedRows(selectedRowKeys,records){
        OrderActions.selectSendProducts(selectedRowKeys);
    }


    //顺延单号
    createLogisticNum(){
        //let orders = [order];
        let originalNum = this.field.getValue('logisticNum');
        originalNum = originalNum?originalNum:localStorage.getItem('originalLogisticNum');
        if(!originalNum){
            //如果没有就打开对话框
            Dialog.alert({
                content:'请填写初始单号后再试',
                closable: true,
                title: '提示',
                onOk: () => {

                }
            });
            return;
        }
        //截取后四位
        let base = originalNum.substr(0,originalNum.length-6);
        //console.log(startNum,base);
        let start = originalNum.substr(originalNum.length-6);
        start = parseInt(start);
        start = start+1;

        let next = start;
        let last = base + (next+1);
        next = base + next;
       // console.log('next',next,'last',last);
        this.field.setValue('logisticNum',next);
        localStorage.setItem('originalLogisticNum',last);
        OrderActions.setLogisticNum(next);
    }

    render(){
        const {init} = this.field;
        let {sendGoodsOrder,sendGoodsKeys,logisticDefault,logisticsCooperate} = this.state;
        let logisticsDefault = [logisticDefault];

        let {order_id:orderId,gmt_create:createTime,gmt_payment:payTime,logistic_num:logisticNum,logistic,
            buyer_message:buyerMessage,seller_remark:sellerRemark,products,
            receiver_name:receiverName,receiver_mobile:receiverMobile,receiver_phone:receiverPhone,receiver_address:receiverAddress,receiver_post:receiverPost
        } = sendGoodsOrder;
        logisticNum = logisticNum?logisticNum:'';
        //发货物流
        logistic = logistic?logistic:(logisticDefault?logisticDefault:{});

        return(
            <div>
                <Row type="no-padding" className="margin-b-10">
                    <Col>
                        订单编号：{orderId}
                    </Col>
                    <Col>
                        下单时间：{createTime}
                    </Col>
                    <Col>
                        付款时间：{payTime}
                    </Col>

                </Row>

                <Table dataSource={products}
                       primaryKey="entry_id"
                       rowSelection={{
                           onChange: this.changeSelectedRows.bind(this),
                           selectedRowKeys:sendGoodsKeys
                       }}
                    >
                    <Table.Column title="主图" dataIndex="img_url"
                                  cell={(value, index, record)=>{
                                      let tpl = <img src={record.img_url} className="img-product"/>;
                                      return tpl;
                                  }}
                    />
                    <Table.Column title="标题" dataIndex="product_name" width={200}/>
                    <Table.Column title="属性" dataIndex="spec_items" width={200}/>
                    <Table.Column title="单价" dataIndex="price"
                                  cell={(value, index, record)=>{
                                      return value/100;
                                  }}

                    />
                    <Table.Column title="数量" dataIndex="quantity"/>
                    <Table.Column title="单位" dataIndex="product_unit"/>
                </Table>

                <ul>
                    <li className="margin-t-10">
                        买家留言：{buyerMessage}
                    </li>
                    <li className="margin-t-10">
                        卖家备注：{sellerRemark}
                    </li>
                    <li className="margin-t-10">
                        收件信息：{receiverName},{receiverMobile},{receiverPhone},{receiverAddress},{receiverPost}
                    </li>
                </ul>

                <hr style={{marginTop:10,marginBottom:10}}/>
                <Form field={this.field}>
                    <FormItem className="margin-b-10"
                        label="物流方式："
                    >
                        <Select placeholder="请选择物流方式" style={{ width: 200 }}
                                {...init('logisticWay')} defaultValue='线下物流(需要单号)'
                        >
                            <li value="1" onClick={this.selectLogisticWay.bind(this,1)}>线下物流(需要单号)</li>
                            <li value="2" onClick={this.selectLogisticWay.bind(this,2)}>虚拟发货(不需单号)</li>
                        </Select>
                    </FormItem>
                    <FormItem className="margin-b-10"
                        label="物流公司："
                    >
                        <Select placeholder="请选择物流公司" style={{ width: 200 }}
                                {...init('companyName')} defaultValue={logistic.company_name}
                        >
                            <OptionGroup label="默认物流">
                                {
                                    logisticsDefault.map(data=> <Option onClick= {this.selectLogisticCompany.bind(this,data)} key={data.company_id} value={data.company_id}>{data.company_name}</Option>)
                                }
                            </OptionGroup>
                            <OptionGroup label="合作物流">
                                {
                                    logisticsCooperate.map(data=> <Option onClick= {this.selectLogisticCompany.bind(this,data)} key={data.company_id} value={data.company_id}>{data.company_name}</Option>)
                                }
                            </OptionGroup>
                        </Select>
                    </FormItem>
                    <FormItem className="margin-b-10"
                        label="物流单号："
                    >
                        <Input placeholder="请输入物流单号"
                               defaultValue={logisticNum} className="input-send-goods-logistic-num"  style={{ width: 200 }}
                               {...init('logisticNum')}
                        />
                        <Button type="primary" style={{marginLeft:10}} onClick={this.createLogisticNum.bind(this)}> 顺延单号</Button>
                    </FormItem>

                </Form>

            </div>
        );
    }
}

export {Order};

