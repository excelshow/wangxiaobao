/**
 * Created by Administrator on 2017/4/4.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Reflux from 'reflux';
import ReactDOM from 'react-dom';
import Table from 'qnui/lib/table';
import Button from 'qnui/lib/button';
//import Icon from 'qnui/lib/icon';
import Pagination from 'qnui/lib/pagination';
import { Row, Col } from 'qnui/lib/grid';
import Dialog from 'qnui/lib/dialog';

import Form from 'qnui/lib/form';
import Input from 'qnui/lib/input';
import Select from 'qnui/lib/select';
import NumberPicker from 'qnui/lib/number-picker';
import Field from 'qnui/lib/field';
import Tree, { Node as TreeNode } from 'qnui/lib/tree';
const FormItem = Form.Item;
import Balloon from 'qnui/lib/balloon';

import {PrintService} from '../common/printService';
import { TplListStore,EditorStore,EditorAreaStore,EditorOptionStore } from '../../../store/print/productTplStore';
import { ProductTplActions } from '../../../action/print/productTplActions';

const propTypes = {
    //编辑类型 add  edit
    editType:PropTypes.string,
    //模版
    tpl:PropTypes.object,
    //items
    items:PropTypes.array,

    //订单
    order:PropTypes.object,
    //货品
    products:PropTypes.array,
    //打印预览
    printType:PropTypes.string,
    //打印机
    printerIndex:PropTypes.number,

}
const defaultTpl = {id:'',tpl_name:'通用货单模版',tpl_type:'user',
    page_name:'三联二等分',page_width:241,page_height:140,
    sorter_name:'产品货号升序',sorter_key:'product_cargo_number',sorter_order:'asc',
    font_size:12,font_family:'微软雅黑',font_weight:400,
    padding_top:10,padding_left:10
};
const defaultTplItems = [
    {item_name:'tpl-title',status:'Y',content:'发货单'},
    {item_name:'tpl-tail',status:'Y',content:'欢迎下次光临'},
    {item_name:'tpl-hr',status:'Y'},
    {item_name:'tpl-order-id',status:'Y'},
    {item_name:'tpl-order-create-time',status:'Y'},
    {item_name:'tpl-order-payment-info',status:'Y'},
    {item_name:'tpl-buyer-nick',status:'Y'},
    {item_name:'tpl-buyer-message',status:'Y'},
    {item_name:'tpl-receiver-address',status:'Y'},
    {item_name:'tpl-seller-nick',status:'Y'},
    {item_name:'tpl-seller-mobile',status:'Y'},
    {item_name:'tpl-seller-remark',status:'Y'},
    {item_name:'tpl-sender-address',status:'Y'},
    {item_name:'tpl-product-title',status:'Y'},
    {item_name:'tpl-product-img',status:'Y'},
    {item_name:'tpl-product-cargo-number',status:'Y'},
    {item_name:'tpl-product-sku-number',status:'Y'},
    {item_name:'tpl-product-props',status:'Y'},
    {item_name:'tpl-product-price',status:'Y'},
    {item_name:'tpl-product-price',status:'Y'},
    {item_name:'tpl-product-total',status:'Y'},
    {item_name:'tpl-product-unit',status:'Y'},
];

const order = {
    order_id:'12345678',gmt_create:'年-月-日',gmt_payment:'年-月-日',
    sum_product_payment:500000,discount:10000,carriage:10000,sum_payment:500000,
    buyer_nick:'买大大',buyer_name:'买大大',buyer_mobile:'12345678900',
    receiver_name:'收件人',receiver_mobile:'123456132465',receiver_post:'100000',receiver_address:'收件地址',
    buyer_message:'尽快发货',seller_remark:'送小礼物',
    seller_nick:'店小二',seller_name:'店大大',seller_mobile:'12345678999',
    sender_address:'发货地址',sender_post:'100000',
};

const products=[
    {id:'1',product_name:'连衣裙1',title_short:'衣裙1',img_url:'https://img.alicdn.com/tps/TB1eREfLVXXXXaHXFXXXXXXXXXX-480-260.png',product_cargo_number:'C123435',cargo_number:'E123456',price:'10900',quantity:'3',spec_items:'红色;L',product_unit:'件'},
    {id:'2',product_name:'连衣裙2',title_short:'衣裙2',img_url:'https://img.alicdn.com/tps/TB1eREfLVXXXXaHXFXXXXXXXXXX-480-260.png',product_cargo_number:'D123435',cargo_number:'D123456',price:'10800',quantity:'4',spec_items:'红色;L',product_unit:'件'},
    {id:'3',product_name:'连衣裙3',title_short:'衣裙3',img_url:'https://img.alicdn.com/tps/TB1eREfLVXXXXaHXFXXXXXXXXXX-480-260.png',product_cargo_number:'E123435',cargo_number:'C123456',price:'10700',quantity:'5',spec_items:'红色;L',product_unit:'件'}
];
const editorDefaultProps ={
    tpl:defaultTpl,
    items:defaultTplItems,
};

class ProductTplList extends Reflux.Component{
    constructor(props) {
        super(props);
        this.stores = [TplListStore];
        this.state = {
      
        }
    }

    componentDidMount(){
        this.getProductTpls();
        this.getPrinter();
    }

    //获取模版列表
    getProductTpls(){
        ProductTplActions.getProductTpls();
    }
    //获取打印机
    getPrinter(){
        ProductTplActions.getProductTplPrinter();
    }

    //新建模版
    onAddTplClick(){
        ProductTplActions.editTpl();
    }

    //点击编辑
    onEditClick(tpl){
        ProductTplActions.editTpl(tpl);
    }

    //关闭对话框
    onCloseEdit(){
        ProductTplActions.closeEdit();
    }

    //分页
    changePage(page){
        ProductTplActions.changePage(page);
        ProductTplActions.getProductTpls();
    }
    //设置每页大小
    setPageSize(size){
        ProductTplActions.setPageSize(size);
        ProductTplActions.getProductTpls();
    }

    //选择记录
    changeSelectedRows(selectedRowKeys,records){
        //console.log(selectedRowKeys);
        ProductTplActions.changeSelectedRows(selectedRowKeys,records);
    }
    
    //删除记录
    deleteTpls(){
        let {selectedTplKeys:tplIds} = this.state;
        ProductTplActions.deleteTpls(tplIds);
    }

    //单个删除
    deleteTpl(tplIds){
        ProductTplActions.deleteTpls(tplIds);
    }
    //设为默认
    setDefaultTpl(tpl){
        ProductTplActions.setDefaultTpl(tpl);
    }

    //模版列表上预览打印  然后调用erea 打印
    print(tpl,printType){
        let LODOP = PrintService.getService();
        if(!LODOP){
            return;
        }

        let { items} = tpl;
        let {printer} = this.state;
        if(printType=='preview'){
            ReactDOM.render(<EditorArea tpl={tpl} items={ items} printType={printType}></EditorArea>,document.getElementById('div-product-tpl-render'));
            return;
        }
        if(!printer||!printer.product_tpl_printer_index){
            Dialog.alert({
                content: '您尚未设置货单打印机,请设置后再试',
                closable: true,
                title: '提示',
                onOk: () => {

                }
            })
            return;
        }
        let printerIndex = printer.product_tpl_printer_index;

        ReactDOM.render(<EditorArea tpl={tpl} items={ items} printType={printType} printerIndex={printerIndex}></EditorArea >,document.getElementById('div-product-tpl-render'));

    }
    
    render(){
        let {page,tpls,editor,editTpl,editTplItems} = this.state;
        let rowSelection = {
            onChange:  this.changeSelectedRows.bind(this),
            getProps: (record) =>{
                return {
                    disabled: record.tpl_type == 'sys'
                }
            },
        }
        return(
            <div>
                <div className="component-container">
                    <Row type="no-padding" className="">
                        <Col>
                            <div>
                                <Button type="primary" onClick={this.onAddTplClick.bind(this)}>新建</Button>&nbsp;&nbsp;
                                <Button type="primary" onClick={this.deleteTpls.bind(this)} >删除</Button>&nbsp;&nbsp;
                            </div>
                        </Col>
                        <Col fixedSpan="16">
                            <div >
                                <Pagination
                                    className="pull-right"
                                    pageSize = {page.limit}
                                    total={ tpls.total}
                                    current={page.page}
                                    onChange={this.changePage.bind(this)}
                                    type="simple" />
                            </div>
                        </Col>
                    </Row>
                </div>
                <Table dataSource={tpls.rows}
                       rowSelection={rowSelection}
                       >
                    <Table.Column title="模版名称" dataIndex="tpl_name"/>
                    <Table.Column title="模版类型" dataIndex="tpl_type"
                                  cell = {(value, index, record)=>{
                                    value = value=='sys'?'系统模版':'用户模版';
                                    return value;
                            }}
                    />
                    <Table.Column title="纸张名称" dataIndex="page_name"/>
                    <Table.Column title="纸张尺寸" dataIndex="page_size"
                                  cell = {(value, index, record)=>{
                                  let {page_width,page_height} = record;
                                    let tpl =
                                    <ul>
                                      <li>宽：{page_width}mm</li>
                                      <li>高：{page_height}mm</li>

                                    </ul>
                                    return tpl;
                            }}
                    />
                    <Table.Column title="纸张内边距" dataIndex="page_padding"
                                  cell = {(value, index, record)=>{
                                  let {padding_top,padding_left} = record;

                                    let tpl =
                                    <ul>
                                      <li>上下：{padding_top}mm</li>
                                      <li>左右：{padding_left}mm</li>
                                    </ul>
                                    return tpl;
                            }}
                    />
                    <Table.Column title="字体样式" dataIndex="font_style"
                                  cell = {(value, index, record)=>{
                                  let {font_size,font_family,font_weight} = record;

                                    let tpl =
                                    <ul>
                                      <li>大小：{font_size}px</li>
                                      <li>样式：{font_family}</li>
                                      <li>粗细：{font_weight=='400'?'正常':'粗体'}</li>
                                    </ul>
                                    return tpl;
                            }}
                    />
                    <Table.Column title="商品排序" dataIndex="sorter_name"/>
                    <Table.Column title="是否默认" dataIndex="default_product_tpl_id"
                                  cell = {(value, index, record)=>{
                                  value = value?'是':'否';
                                  return value;

                            }}
                    />
                    <Table.Column   title="操作" width={200}
                                    cell = {(value, index, record)=>{

                                    let {id,tpl_type:tplType} =record;
                                    let tplIds = [id];
                                    let visible = tplType=='sys'?'hidden':'';

                                    let tpl =
                                    <ul>
                                      <li><a href="javascript:void(0)" onClick={this.setDefaultTpl.bind(this,record)} >设为默认</a></li>
                                      <li className={visible}><a href="javascript:void(0)" onClick={this.onEditClick.bind(this,record)}>编辑</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:void(0)" onClick={this.deleteTpl.bind(this,tplIds)} >删除</a></li>
                                      <li><a href="javascript:void(0)" onClick={this.print.bind(this,record,'preview')}>预览</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:void(0)" onClick={this.print.bind(this,record,'print')}>打印</a></li>
                                    </ul>
                                    return tpl;
                            }}
                    />
                </Table>
                <div className="component-container">
                    <Pagination
                        pageSizeSelector="dropdown"
                        pageSize = {page.limit}
                        pageSizeList = {[10,20,50,100]}
                        total={tpls.total}
                        current= { page.page }
                        onChange={this.changePage.bind(this)}
                        pageSizePosition="start"
                       onPageSizeChange={this.setPageSize.bind(this)}
                    />
                </div>

                <Dialog visible = {editor.visible}

                      // onOk = {this.onCloseEdit.bind(this)}
                      // onCancel = {this.onCloseEdit.bind(this)}
                       onClose = {this.onCloseEdit.bind(this)}
                        title = {editor.title}
                        style = {editor.style}
                        align = {editor.align}
                        footer={<div><Button onClick={this.onCloseEdit.bind(this)}>取消</Button></div>}
                >
                    <Editor tpl={editTpl} items={editTplItems}></Editor>
                </Dialog>

                <div className="hidden" id="div-product-tpl-render">

                </div>

            </div>

        )
    }
}


class Editor extends Reflux.Component{
    constructor(props) {
        super(props);
        this.stores = [EditorStore,EditorOptionStore];
        this.field = new Field(this,{
            onChange:(name, value)=>{
                //console.log(name,value);
                //选择查询条件
                switch (name){
                    case 'tplName':this.updateTplName(value);break;
                    case 'pageName':this.updatePage(value);break;
                    case 'paddingTop':this.updatePaddingTop(value);break;
                    case 'paddingLeft':this.updatePaddingLeft(value);break;
                    case 'fontSize':this.updateFontSize(value);break;
                    case 'fontFamily':this.updateFontFamily(value);break;
                    case 'fontWeight':this.updateFontWeight(value);break;
                    case 'sorter':this.updateSorter(value);break;

                }
            },

        });
        this.state = {}

    }


    //在组件挂载之后调用一次。这个时候，子组件也都挂载好了，可以在这里使用refs。
    componentDidMount(){
        let {tpl,items} =  this.props;
        if(!tpl.created_at){
            tpl = defaultTpl;
            items = defaultTplItems;
        }
        ProductTplActions.mapPropsToState(tpl,items);

        //获取打印机
        this.getPrinter();
    }


    //获取打印机
    getPrinter(){
        ProductTplActions.getProductTplPrinter();
    }
    //更新模版名字
    updateTplName(name){
        ProductTplActions.updateTplName(name);
    }

    //更新纸张
    updatePage(pageName){
        let pages = {
            A4:{name:'A4',short:'A4',width:210,height:297},
            L31:{name:'三联整张',short:'L31',width:241,height:280},
            L32:{name:'三联二等分',short:'L32',width:241,height:140},
            L33:{name:'三联三等分',short:'L33',width:241,height:93.1}
        };
        let page = pages.A4;
        switch (pageName){
            case 'A4': page = pages.A4;break;
            case 'L31':page = pages.L31;break;
            case 'L32':page = pages.L32;break;
            case 'L33':page = pages.L33;break;
        };
        ProductTplActions.updatePage(page);
    }
    //更新上下边距
    updatePaddingTop(paddingTop){
        ProductTplActions.updatePaddingTop(paddingTop);
    }
    //更新左右边距
    updatePaddingLeft(paddingLeft){
        ProductTplActions.updatePaddingLeft(paddingLeft);
    }
    //更新字体大小
    updateFontSize(fontSize){
        ProductTplActions.updateFontSize(fontSize);
    }
    //更新字体样式
    updateFontFamily(fontFamily){
        ProductTplActions.updateFontFamily(fontFamily);
    }
    //更新字体粗细
    updateFontWeight(fontWeight){

        ProductTplActions.updateFontWeight(fontWeight);
    }
    //更细排序方式
    updateSorter(key){
        let sorters = {
            cargoAsc:{name:'产品货号升序',key:'cargoAsc',field:'product_cargo_number',order:'asc'},
            cargoDesc:{name:'产品货号降序',key:'cargoDesc',field:'product_cargo_number',order:'desc'},
            skuAsc:{name:'单品货号升序',key:'skuAsc',field:'cargo_number',order:'asc'},
            skuDesc:{name:'单品货号降序',key:'skuDesc',field:'cargo_number',order:'desc'},
            nameAsc:{name:'商品标题升序',key:'nameAsc',field:'product_name',order:'asc'},
            nameDesc:{name:'商品标题降序',key:'nameDesc',field:'product_name',order:'desc'},
        };

        let sorter = sorters.cargoAsc;
        switch (key){
            case 'cargoAsc': sorter = sorters.cargoAsc;break;
            case 'cargoDesc':sorter = sorters.cargoDesc;break;
            case 'skuAsc':sorter = sorters.skuAsc;break;
            case 'skuDesc':sorter = sorters.skuDesc;break;
            case 'nameAsc':sorter = sorters.nameAsc;break;
            case 'nameDesc':sorter = sorters.nameDesc;break;
        }
        ProductTplActions.updateSorter(sorter);
    }

    //保存修改
    save(){
        let {tpl,tplItems} = this.state;
        tplItems.map((data)=>{
            let content = '';
            let name = data.item_name;
            switch (name){
                case 'tpl-title':
                    content = $('.tpl-title').html();
                    break;
                case 'tpl-tail':
                    content = $('.tpl-tail').html();
                    break;
            }
            data.content = content;
            return data
        });
        ProductTplActions.save(tpl,tplItems);
    }

    //打印
    print(printType='print'){
        let LODOP = PrintService.getService();
        if(!LODOP){
            return;
        }

        let {tpl,printer} = this.state;
        if(printType=='preview'){
            this.refs.EditorArea.print('',tpl,printType,printerIndex);
            return;
        }
        if(!printer||!printer.product_tpl_printer_index){
            Dialog.alert({
                content: '您尚未设置货单打印机,请设置后再试',
                closable: true,
                title: '提示',
                onOk: () => {

                }
            })
            return;
        }
        let printerIndex = printer.product_tpl_printer_index;

        this.refs.EditorArea.print('',tpl,printType,printerIndex);
        //ProductTplActions.editPrint(tpl,type);
    }

    render(){
        const { init, getValue } = this.field;
        let {tpl:initTpl} = this.props;
        let {pages,fontSizes,fontFamilies,fontWeights,sorters,tpl,tplItems} = this.state;
        // 属性模版没有 created_at 说明是新建，赋值为默认,
        if(!initTpl.created_at){
            initTpl = defaultTpl;
        }

        let {tpl_name,page_name,page_width,page_height,padding_top,padding_left,font_size,font_family,font_weight:fontWeight,sorter_name} = initTpl;
        fontWeight = fontWeight==400?'正常':'粗体';
        return(
            <div>
                <Form  direction="hoz" >
                    <Row>
                        <Col>
                            <FormItem label="模版名称：">
                                <Input placeholder="模版名称" {...init('tplName',{initValue: tpl_name})}/>
                            </FormItem>
                            <FormItem label="纸张类型：">
                                <Select style={{width:'200px'}} {...init('pageName',{initValue: page_name + ' ( '+page_width + ' x ' +page_height+' )' })}>
                                    {
                                        pages.map(data=><Option key= {data.short}  value={data.short}>{data.name+' ( '+data.width+' x '+data.height+' ) '}</Option>)
                                    }
                                </Select>
                            </FormItem>
                            <FormItem
                                label="上下边距："
                            >
                                <NumberPicker  type="inline" min={0} max={50}
                                               {...init('paddingTop',{initValue:padding_top})}
                                />
                            </FormItem>
                            <FormItem
                                label="左右边距："
                            >
                                <NumberPicker  type="inline" min={0} max={50}
                                               {...init('paddingLeft',{initValue:padding_left})}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormItem label="字体样式：">
                                <Select style={{width:'100%'}} {...init('fontSize',{initValue:font_size})}>
                                    {
                                        fontSizes.map(data=><Option key= {data.value}  value={data.value}>{data.text}</Option>)
                                    }
                                </Select>
                            </FormItem>
                            <FormItem >
                                <Select style={{width:'100%'}} {...init('fontFamily',{initValue:font_family})}>
                                    {
                                        fontFamilies.map(data=><Option key= {data.value}  value={data.value}>{data.text}</Option>)
                                    }
                                </Select>
                            </FormItem>
                            <FormItem >
                                <Select style={{width:'100%'}} {...init('fontWeight',{initValue:fontWeight})}>
                                    {
                                        fontWeights.map(data=><Option key= {data.text}  value={data.value}>{data.text}</Option>)
                                    }
                                </Select>
                            </FormItem>
                            <FormItem label="商品排序：">
                                <Select style={{width:'120px'}} {...init('sorter',{initValue:sorter_name})}>
                                    {
                                        sorters.map(data=><Option key= {data.name}  value={data.key}>{data.name}</Option>)
                                    }
                                </Select>
                            </FormItem>
                            <Button type="primary" onClick={this.save.bind(this)} style={{ marginRight: '5px' }}> 保存</Button>
                            <Button type="primary" onClick={this.print.bind(this,'preview')} style={{ marginRight: '5px' }}>预览</Button>
                            <Button type="primary" onClick={this.print.bind(this,'print')} style={{ marginRight: '5px' }}>打印</Button>
                        </Col>
                    </Row>
                </Form>
                <div>
                    <Row type="no-padding">
                        <Col>
                            <EditorArea ref="EditorArea" tpl = {tpl} items={tplItems} ></EditorArea>
                        </Col>
                        <Col  fixedSpan="12">
                            <EditorOption items={tplItems} ></EditorOption>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
Editor.propTypes = propTypes;
Editor.defaultProps = editorDefaultProps;


const EditAreaProps = {
    //模版
    tpl:defaultTpl,
    //打印项
    items:defaultTplItems,
    //订单数据
    order:order,
    //商品数据
    products:products,
    //打印操作
    printType:'',

    //打印机
    printerIndex:-1,
};


class EditorArea extends Reflux.Component{
    constructor(props) {
        super(props);
        this.field = new Field(this);
        this.stores = [EditorAreaStore];
        this.state = {}
    }

    componentDidMount(){
        this.setVisibleItem();
        this.doPrintAction();

    }

    componentDidUpdate(){
        this.setVisibleItem();
        this.doPrintAction();
    }

    //外部调用
    doPrintAction(){
        let {tpl,printType,order,printerIndex} = this.props;
        let {order_id:orderId} = order;
        switch (printType){
            case 'print':
                this.print(orderId,tpl,printType,printerIndex);
                break;
            case 'preview':
                this.print(orderId,tpl,printType,printerIndex);
                break;
            //默认为空动作 什么都不执行
            default:
        }
    }

    //设置打印项可见
    setVisibleItem(){

        //共用items 的state
        let {items} = this.props;

        $('.div-product-tpl-print-item').parent('div').each(function () {
            $(this).addClass('hidden');
        });

        $('.tb-product-tpl').find('th,td').each(function () {
            $(this).addClass('hidden');
        });
        $('.tpl-hr').each(function () {
            $(this).addClass('hidden');
        });

        for(let item of items){
            let itemId =  item.item_name;
            let content = item.content;
            if(itemId.includes('product')||itemId.includes('hr')){
                $('.'+itemId).removeClass('hidden');
            }else {
                $('.'+itemId).parent('div').removeClass('hidden');
            };
            switch (itemId){
                case 'tpl-title':
                    //console.log(this.refs['tpl-title']);
                    // $('.tpl-title').each(function () {
                    //     $(this).html(content);
                    // });
                    this.refs['tpl-title'].innerHTML = content;
                    break;
                case 'tpl-tail':
                    this.refs['tpl-tail'].innerHTML = content;
                    // $('.tpl-tail').each(function () {
                    //     $(this).html(content);
                    // });
                    break;

            }
        }
    }

    sortProducts(){
        let {tpl,products} = this.props;
        let {sorter_key:sorterKey,sorter_order:order} = tpl;
        switch (sorterKey){
            case 'product_cargo_number':
                products = products.sort(function(a, b){
                    let aNum = a.product_cargo_number;
                    let bNum = b.product_cargo_number;
                    let result = aNum - bNum;
                    return  (order == 'asc') ? (result > 0 ? 1 : -1) : (result > 0 ? -1 : 1);
                });
                break;
            case 'cargo_number':
                products = products.sort(function(a, b){
                    let aNum = a.cargo_number;
                    let bNum = b.cargo_number;
                    let result = aNum - bNum;
                    return  (order == 'asc') ? (result > 0 ? 1 : -1) : (result > 0 ? -1 : 1);
                });
                break;
            case 'product_name':
                products = products.sort(function(a, b){
                    let aNum = a.product_name;
                    let bNum = b.product_name;
                    let result = aNum - bNum;
                    return  (order == 'asc') ? (result > 0 ? 1 : -1) : (result > 0 ? -1 : 1);
                });
                break;
        }

        return products;
    }
    //执行打印
    print(orderId,tpl,printType='print',printerIndex=-1){

        let html = ReactDOM.findDOMNode(this).innerHTML;
        ProductTplActions.print(orderId,tpl,html,printType,printerIndex);
    }
    render(){
        let {tpl,order,products} = this.props;
        let{page_width:pageWidth,page_height:pageHeight,padding_left:paddingLeft,padding_top:paddingTop,
            font_size:fontSize,font_family:fontFamily,font_weight:fontWeight
        } = tpl;
        let pageStyle = {width:pageWidth+'mm',height:pageHeight+'mm'};
        let printAreaStyle = {marginLeft:paddingLeft+'mm',marginRight:paddingLeft+'mm',paddingTop:paddingTop+'mm',paddingBottom:paddingTop+'mm'};
        let itemStyle = {
            fontSize:fontSize+'px',
            fontFamily:fontFamily,
            fontWeight:fontWeight
        };
        let theadStyle = {
            fontSize:fontSize+'px',
            fontFamily:fontFamily,
        };
        products = this.sortProducts();
        //this.setVisibleItem();
        return(
            <div className="div-product-tpl-page-container" id="div-product-tpl-container">
                <div className="div-product-tpl-page" style={pageStyle}>
                    <div className="div-product-tpl-print-area"
                         style={printAreaStyle}>
                        <div  className="div-row-container">
                            <div className="div-col-container12">
                                <div className="div-product-tpl-print-item div-tpl-title tpl-title"  ref="tpl-title">
                                    发货单
                                </div>
                            </div>
                        </div>
                        <div className="div-row-container">
                            <div className="div-col-container3">
                                <div className="div-product-tpl-print-item tpl-order-id" style={itemStyle} ref="tpl-order-id">
                                    订单编号：{order.order_id}
                                </div>
                            </div>
                            <div className="div-col-container3">
                                <div className="div-product-tpl-print-item tpl-order-create-time" style={itemStyle} ref="tpl-order-create-time">
                                    下单时间：{order.gmt_create}
                                </div>
                            </div>
                            <div className="div-col-container3 hidden">
                                <div className="div-product-tpl-print-item tpl-order-pay-time" style={itemStyle} ref="tpl-order-pay-time">
                                    付款时间：{order.gmt_payment}
                                </div>
                            </div>
                            <div className="div-col-container3">
                                <div className="div-product-tpl-print-item tpl-buyer-nick" style={itemStyle} ref="tpl-buyer-nick">
                                    买家旺旺：{order.buyer_nick}
                                </div>
                            </div>
                            <div className="div-col-container3 hidden">
                                <div className="div-product-tpl-print-item tpl-buyer-name" style={itemStyle} ref="tpl-buyer-name">
                                    买家姓名：{order.buyer_name}
                                </div>
                            </div>
                            <div className="div-col-container3 hidden">
                                <div className="div-product-tpl-print-item tpl-buyer-mobile" style={itemStyle} ref="tpl-buyer-mobile">
                                    买家手机：{order.buyer_mobile}
                                </div>
                            </div>
                            <div className="div-col-container3 hidden">
                                <div className="div-product-tpl-print-item tpl-receiver-name" style={itemStyle} ref="tpl-receiver-name">
                                    收件姓名：{order.receiver_name}
                                </div>
                            </div>
                            <div className="div-col-container3 hidden">
                                <div className="div-product-tpl-print-item tpl-receiver-mobile" style={itemStyle} ref="tpl-receiver-mobile">
                                    收件手机：{order.receiver_mobile}
                                </div>
                            </div>
                            <div className="div-col-container3 hidden">
                                <div className="div-product-tpl-print-item tpl-receiver-post" style={itemStyle} ref="tpl-receiver-post">
                                    收件邮编：{order.receiver_post}
                                </div>
                            </div>
                        </div>
                        <div  className="div-row-container">
                            <div className="div-col-container12">
                                <div className="div-product-tpl-print-item" style={itemStyle} ref="tpl-receiver-address">
                                    收件地址：{order.receiver_address}
                                </div>
                            </div>
                        </div>
                        <hr className="tpl-hr" ref='tpl-hr'/>
                        <div className="">
                            <table className="tb-product-tpl ">
                                <thead >
                                <tr>

                                    <th className="tpl-product-title" style={theadStyle} >商品标题</th>
                                    <th className="tpl-product-title-short" style={theadStyle} >商品简称</th>
                                    <th className="tpl-product-img" style={theadStyle}>主图</th>
                                    <th className="tpl-product-cargo-number" style={theadStyle}>产品货号</th>
                                    <th className="tpl-product-sku-number" style={theadStyle} >单品货号</th>
                                    <th className="tpl-product-props" style={theadStyle} >属性</th>
                                    <th className="tpl-product-price"  style={theadStyle} >单价</th>
                                    <th className="tpl-product-total" style={theadStyle}>数量</th>
                                    <th className="tpl-product-unit" style={theadStyle}>单位</th>
                                </tr>
                                </thead>
                                <tbody>
                                {

                                    products.map(data=>
                                        <tr key={data.id}>
                                            <td className="tpl-product-title" style={itemStyle}>{data.product_name}</td>
                                            <td className="tpl-product-title-short" style={itemStyle}>{data.title_short}</td>
                                            <td className="tpl-product-img" style={itemStyle}><img className="img-product-tpl"  src={data.img_url}/></td>
                                            <td className="tpl-product-cargo-number" style={itemStyle}>{data.product_cargo_number}</td>
                                            <td className="tpl-product-sku-number" style={itemStyle}>{data.cargo_number}</td>
                                            <td className="tpl-product-props" style={itemStyle}>{data.spec_items}</td>
                                            <td className="tpl-product-price" style={itemStyle}>{data.price/100}</td>
                                            <td className="tpl-product-total" style={itemStyle}>{data.quantity}</td>
                                            <td className="tpl-product-unit" style={itemStyle}>{data.product_unit}</td>
                                        </tr>
                                    )
                                }
                                </tbody>
                            </table>
                        </div>
                        <hr className="tpl-hr"/>
                        <div className="div-row-container">
                            <div className="div-col-container12">
                                <div className="div-payment-info div-product-tpl-print-item tpl-order-payment-info" ref="tpl-order-payment-info" style={itemStyle}>订单总金额：{ order.sum_product_payment/100 }  订单优惠：{ order.discount/100 }   运费：{ order.carriage/100 }   实付总额：{ order.sum_payment/100 } 元</div>
                            </div>
                        </div>
                        <div  className="div-row-container">
                            <div className="div-col-container12">
                                <div className="div-product-tpl-print-item tpl-buyer-message" style={itemStyle} ref="tpl-buyer-message">
                                    买家留言：{order.buyer_message}
                                </div>
                            </div>
                        </div>
                        <div  className="div-row-container">
                            <div className="div-col-container12">
                                <div className="div-product-tpl-print-item tpl-seller-remark"  style={itemStyle} ref="tpl-seller-remark">
                                    卖家备注：{order.seller_remark}
                                </div>
                            </div>
                        </div>
                        <div  className="div-row-container">
                            <div className="div-col-container3">
                                <div className="div-product-tpl-print-item tpl-seller-nick" style={itemStyle} ref="tpl-seller-nick">
                                    卖家旺旺：{order.seller_nick}
                                </div>
                            </div>
                            <div className="div-col-container3 hidden">
                                <div className="div-product-tpl-print-item tpl-seller-name" style={itemStyle} ref="tpl-seller-name">
                                    卖家姓名：{order.seller_name}
                                </div>
                            </div>
                            <div className="div-col-container3">
                                <div className="div-product-tpl-print-item tpl-seller-mobile" style={itemStyle} ref="tpl-seller-mobile">
                                    卖家手机：{order.seller_mobile}
                                </div>
                            </div>
                        </div>
                        <div  className="div-row-container">
                            <div className="div-col-container12">
                                <div className="div-product-tpl-print-item tpl-sender-address" style={itemStyle} ref="tpl-sender-address">
                                    发货地址：{order.sender_address}
                                </div>
                            </div>
                        </div>
                        <div  className="div-row-container">
                            <div className="div-col-container12">
                                <div className="div-product-tpl-print-item tpl-tail" style={itemStyle}  ref="tpl-tail">
                                    欢迎下次光临~
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>);
    }


}

EditorArea.propTypes = propTypes;
EditorArea.defaultProps = EditAreaProps;

const PrintItemDefaultProps = {
    items:[],
};

class EditorOption extends Reflux.Component{
    constructor(props) {
        super(props);
        this.field = new Field(this);
        this.stores = [EditorOptionStore];
    }


    //复选打印项
    checkPrintItem(checkedKeys){

        let {items} = this.props;
        let hasKeys = [];

        items = items.filter((data)=>{
            //let has = checkedKeys.includes(data.item_name);

            let has = checkedKeys.find((x)=>{

                if(x==data.item_name){
                    return true;
                }
            });

            if(!has){
                return false
            }
            hasKeys.push(data.item_name);
            return true;
        });

        for (let key of checkedKeys){

            let has = hasKeys.find((x)=>{

                if(x==key){
                    return true;
                }
            });

            // if(hasKeys.includes(key)){
            //     continue;
            // }
            if(has){
                continue;
            }
            let data = {item_name:key,status:'Y',content:''};
            switch (key){
                case 'tpl-title':data.content = $('.tpl-title').eq(0).html();break;
                case 'tpl-tail':data.content = $('.tpl-tail').eq(0).html();break;
            }
            items.push(data);
        }
       // console.log(items);
        ProductTplActions.checkPrintItem(checkedKeys);
        ProductTplActions.checkEditorTplItems(items);
    }
    //自定义输入
    setSelfInfo(key,value){
        $('.'+key).html(value);
    }

    render(){

        let {tplInfo,orderInfo,buyerInfo,sellerInfo,receiverInfo,productInfo} = this.state.options;
        let{defaultExpandedKeys}= this.state;
        let {items} = this.props;

        let checkedItemKeys = [];
        items.forEach((item)=>{
            checkedItemKeys.push(item.item_name);
        });
        //console.log(checkedItemKeys);
        return(
            <div className="div-product-tpl-item-container">
                <Tree className="myCls" multiple checkable
                      defaultExpandedKeys={defaultExpandedKeys}
                      checkedKeys = {checkedItemKeys}
                    //onSelect={this.onSelect} onCheck={this.onCheck}
                    //onEditFinish={this.onEditFinish}
                      onCheck = {this.checkPrintItem.bind(this)}

                >
                    <TreeNode label="货单打印项" key="tpl-print-item">
                        <TreeNode label="货单信息" key="tpl-info" >

                            {
                                tplInfo.map((data)=>{
                                    let tri = <span>{data.text}</span>;
                                    let key = data.key;
                                    let edit =  <Balloon  align="t" trigger={tri} closable={false} triggerType="click">
                                        <Input onChange={this.setSelfInfo.bind(this,key)}
                                               defaultValue=""
                                               size="medium" />
                                    </Balloon>
                                    if(key=='tpl-hr'){
                                        edit = data.text;
                                    }
                                    let tpl = <TreeNode key={data.key}  label= {edit}/>;
                                    return tpl;
                                })
                            }

                        </TreeNode>
                        <TreeNode label="订单信息" key="tpl-order-info">
                            {
                                orderInfo.map(data=><TreeNode label={data.text} key={data.key} />)
                            }
                        </TreeNode>
                        <TreeNode label="买家信息" key="tpl-buyer-info">
                            {
                                buyerInfo.map(data=><TreeNode label={data.text} key={data.key} />)
                            }
                        </TreeNode>
                        <TreeNode label="卖家信息" key="tpl-seller-info">
                            {
                                sellerInfo.map(data=><TreeNode label={data.text} key={data.key} />)
                            }
                        </TreeNode>
                        <TreeNode label="商品信息" key="tpl-product-info">
                            {
                                productInfo.map(data=><TreeNode label={data.text} key={data.key} />)
                            }
                        </TreeNode>
                        <TreeNode label="收件人信息" key="tpl-receiver-info">
                            {
                                receiverInfo.map(data=><TreeNode label={data.text} key={data.key} />)
                            }
                        </TreeNode>
                    </TreeNode>
                </Tree>
            </div>);
    }
}
EditorOption.propTypes = propTypes;
EditorOption.defaultProps = PrintItemDefaultProps;

export {ProductTplList,Editor,EditorArea};