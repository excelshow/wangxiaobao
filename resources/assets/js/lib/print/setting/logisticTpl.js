/**
 * Created by Administrator on 2017/4/4.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Reflux from 'reflux';
import Table from 'qnui/lib/table';
import Button from 'qnui/lib/button';
import Icon from 'qnui/lib/icon';
import Pagination from 'qnui/lib/pagination';
import { Row, Col } from 'qnui/lib/grid';
import Dialog from 'qnui/lib/dialog';
import Form, {Item as FormItem } from 'qnui/lib/form';
import Input from 'qnui/lib/input';
import Field from 'qnui/lib/field';
import Select, {Option, OptionGroup} from 'qnui/lib/select';
import NumberPicker from 'qnui/lib/number-picker';
import Tree, { Node as TreeNode } from 'qnui/lib/tree';
import Balloon from 'qnui/lib/balloon';
const Tooltip = Balloon.Tooltip;
import {PrintService} from '../common/printService';

import {LogisticTplListStore, LogisticTplEditerStore,LogisticTplItemStore } from '../../../store/print/logisticTplStore';
import { LogisticTplActions } from '../../../action/print/logisticTplActions';


class LogisticTplList extends Reflux.Component{
    constructor(props) {
        super(props);
        this.stores = [LogisticTplListStore];
        this.field = new Field(this);
        this.state = {
      
        }
    }

    componentDidMount(){
        this.getLogisticTpls();
        LogisticTplActions.getPrinters();
    }

    //获取模版列表
    getLogisticTpls(){
        let name = this.field.getValue('companyName');
        LogisticTplActions.getLogisticTpls(name);
    }


    //新建模版
    onAddTplClick(){
        let type = 'add';
        LogisticTplActions.clickEdit(type,'');
    }


    //点击编辑
    onEditClick(tpl){
        
        let type = 'update';
        LogisticTplActions.clickEdit(type,tpl);
    }
    //关闭对话框
    onCloseEdit(){
        LogisticTplActions.closeEdit();
    }

    //分页
    changePage(page){

        LogisticTplActions.changePage(page);
        LogisticTplActions.getLogisticTpls();
    }
    //设置每页大小
    setPageSize(size){
        LogisticTplActions.setPageSize(size);
        LogisticTplActions.getLogisticTpls();
    }

    //选择记录
    changeSelectedRows(selectedRowKeys,records){
        //console.log(selectedRowKeys);
        LogisticTplActions.changeSelectedRows(selectedRowKeys,records);
    }
    
    //删除记录
    deleteTpls(){
        let {selectedTplKeys:tplIds} = this.state;
        LogisticTplActions.deleteTpls(tplIds);
    }

    //单个删除
    deleteTpl(tplIds){
        LogisticTplActions.deleteTpls(tplIds);
    }

    //设为默认
    setDefaultTpl(tpl){
        LogisticTplActions.setDefaultTpl(tpl);
    }

    //预览打印
    onPrint(tpl,printType){
        let LODOP = PrintService.getService();
        if(!LODOP){
            return;
        }
       LogisticTplActions.print(printType,tpl);
    }


    render(){
        const {init} = this.field;
        let {edit_dialog,page,tpls} = this.state;
        let {editType,editTpl,editTplItems} = this.state;
        //console.log(editType,editTpl,editTplItems);

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
                                <Form field={this.field}  direction="hoz" >
                                    <FormItem className="margin-b-0">
                                        <Input  hasLimitHint style={{width:200}} placeholder="快递名称\模版名称"
                                            {...init('companyName',{initValue:''})}
                                        />
                                    </FormItem>
                                    <FormItem className="margin-b-0">
                                        <Button type="primary" onClick={this.getLogisticTpls.bind(this)}>查询</Button>&nbsp;&nbsp;
                                        <Button type="primary" onClick={this.onAddTplClick.bind(this)}>新建</Button>&nbsp;&nbsp;
                                        <Button type="primary" onClick={this.deleteTpls.bind(this)} >删除</Button>&nbsp;&nbsp;
                                    </FormItem>
                                </Form>

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
                    <Table.Column title="运单背景" dataIndex="background_img"
                                  cell = {(value, index, record)=>{
                                    let tpl = <img src={value}  className="img-logistic-tpl"/>
                                    return tpl;
                            }}
                    />

                    <Table.Column title="关联物流公司" dataIndex="company_name"
                                  cell = {(value, index, record)=>{
                                  let {company_name,company_no} = record;
                                    let tpl =
                                    <ul>
                                      <li>名称：{company_name}</li>
                                      <li>编号：{company_no}</li>
                                    </ul>
                                    return tpl;
                            }}
                    />
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
                    <Table.Column title="打印偏移" dataIndex="page_padding"
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

                    <Table.Column   title="操作" width={200}
                                    cell = {(value, index, record)=>{
                                  let {id,tpl_type:tplType} =record;
                                    let tplIds = [id];
                                    let visible = tplType=='sys'?'hidden':'';

                                    let tpl =
                                    <ul>
                                      <li><a href="javascript:void(0)" onClick={this.onEditClick.bind(this,record)} >编辑</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:void(0)" onClick={this.deleteTpl.bind(this,tplIds)} className={visible}>删除</a></li>
                                      <li><a href="javascript:void(0)" onClick={this.onPrint.bind(this,record,'preview')}>预览</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:void(0)" onClick={this.onPrint.bind(this,record,'print')}>打印</a></li>
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
                <Dialog visible = {edit_dialog.visible}
                       //onOk = {this.onCloseEdit.bind(this)}
                       //onCancel = {this.onCloseEdit.bind(this)}
                       onClose = {this.onCloseEdit.bind(this)}
                        title = {edit_dialog.title}
                        style = {edit_dialog.style}
                        align = {edit_dialog.align}

                        footer={<div><Button onClick={this.onCloseEdit.bind(this)}>取消</Button></div>}
                >
                    <LogisticTplEditer  editType={editType} tpl={editTpl} items={editTplItems} ></LogisticTplEditer>
                </Dialog>
            </div>

        )
    }
}


const propTypes = {
    //编辑类型  add update
    editType:PropTypes.string,
    //运单模版
    tpl:PropTypes.object,
    //打印项
    items:PropTypes.array,

}

const defaultTpl = {id:'',tpl_name:'空白物流模版',tpl_type:'user',
    company_name:null,company_id:'',company_no:'',background_img:'/assets/images/logistic/shunfeng/01.jpg',
    page_width:230,page_height:127, padding_top:0,padding_left:0,
    font_size:15,font_family:'微软雅黑',font_weight:400,is_default:'N'
};
const defaultTplItems = [

    {id:1,tpl_id:'',item_name:'tpl-sender-name',margin_top:30,margin_left:30,width:150,height:30,content:'寄件人姓名',font_size:15,font_family:'微软雅黑',font_weight:400,status:'Y'},
    {id:1,tpl_id:'',item_name:'tpl-sender-mobile',margin_top:40,margin_left:40,width:150,height:30,content:'寄件人手机',font_size:15,font_family:'微软雅黑',font_weight:400,status:'Y'},
    {id:1,tpl_id:'',item_name:'tpl-sender-address',margin_top:30,margin_left:30,width:150,height:30,content:'寄件人地址',font_size:15,font_family:'微软雅黑',font_weight:400,status:'Y'},
    {id:1,tpl_id:'',item_name:'tpl-sender-post',margin_top:30,margin_left:30,width:150,height:30,content:'寄件人邮编',font_size:15,font_family:'微软雅黑',font_weight:400,status:'Y'},
    {id:1,tpl_id:'',item_name:'tpl-receiver-name',margin_top:30,margin_left:30,width:150,height:30,content:'收件人姓名',font_size:15,font_family:'微软雅黑',font_weight:400,status:'Y'},
    {id:1,tpl_id:'',item_name:'tpl-receiver-mobile',margin_top:30,margin_left:30,width:150,height:30,content:'收件人手机',font_size:15,font_family:'微软雅黑',font_weight:400,status:'Y'},
    {id:1,tpl_id:'',item_name:'tpl-receiver-address',margin_top:30,margin_left:30,width:150,height:30,content:'收件人地址',font_size:15,font_family:'微软雅黑',font_weight:400,status:'Y'},
    {id:1,tpl_id:'',item_name:'tpl-receiver-post',margin_top:30,margin_left:30,width:150,height:30,content:'收件人邮编',font_size:15,font_family:'微软雅黑',font_weight:400,status:'Y'},

];


const editerDefaultProps ={
    editType:'update',
    tpl:defaultTpl,
    items:defaultTplItems,
};

class LogisticTplEditer extends Reflux.Component{
    constructor(props) {
        super(props);
        this.stores = [LogisticTplEditerStore,LogisticTplItemStore];
        this.field = new Field(this,{
            onChange:(name, value)=>{
                //console.log(name,value);
                //选择查询条件
                switch (name){
                    case 'tplName':this.updateTplName(value);break;
                    case 'pageWidth':this.updatePageWidth(value);break;
                    case 'pageHeight':this.updatePageHeight(value);break;
                    case 'paddingTop':this.updatePaddingTop(value);break;
                    case 'paddingLeft':this.updatePaddingLeft(value);break;
                    case 'fontSize':this.updateFontSize(value);break;
                    case 'fontFamily':this.updateFontFamily(value);break;
                    case 'fontWeight':this.updateFontWeight(value);break;
                }
            },

        });
        this.state = {

        }
    }

    //将prop tpl 保存到
    componentDidMount(){

        let {editType,tpl} =  this.props;
        tpl = editType=='update'?tpl:defaultTpl;
        LogisticTplActions.initTplPage(tpl);
        LogisticTplActions.searchLogisticCompanies('');
        
    }
    
    //货物物流公司
    searchLogisticCompanies(name){
        LogisticTplActions.searchLogisticCompanies(name);
    }
    //下拉菜单选择物流公司
    selectCompany(data){
        let {company_name:companyName} = data;
        let tplName = companyName+'模版';
        LogisticTplActions.selectLogisticCompany(data);
        this.field.setValue('tplName',tplName);
        LogisticTplActions.updateTplName(tplName);
    }
    //更新模版名字
    updateTplName(name){
        LogisticTplActions.updateTplName(name);
    }

    //更新纸张宽度
    updatePageWidth(width){
        LogisticTplActions.updatePageWidth(width);
    }
    //更新纸张高度
    updatePageHeight(height){
        LogisticTplActions.updatePageHeight(height);
    }

    //更新上下偏移
    updatePaddingTop(paddingTop){
        LogisticTplActions.updatePaddingTop(paddingTop);
    }

    //更新左右边距
    updatePaddingLeft(paddingLeft){
        LogisticTplActions.updatePaddingLeft(paddingLeft);
    }
    //更新字体大小
    updateFontSize(fontSize){
        let selected = $('.resize-item.selected').length;
        if(selected){
            $('.resize-item.selected').css({'font-size':fontSize+'px'});
            return;
        }
        $('.resize-item').css({'font-size':fontSize+'px'});
        LogisticTplActions.updateFontSize(fontSize);
    }
    //更新字体样式
    updateFontFamily(fontFamily){
        let selected = $('.resize-item.selected').length;
        if(selected){
            $('.resize-item.selected').css({'font-family':fontFamily});
            return;
        }
        $('.resize-item').css({'font-family':fontFamily});
        LogisticTplActions.updateFontFamily(fontFamily);
    }
    //更新字体粗细
    updateFontWeight(fontWeight){
        let selected = $('.resize-item.selected').length;
        if(selected){
            $('.resize-item.selected').css({'font-weight':fontWeight});
            return;
        }
        $('.resize-item').css({'font-weight':fontWeight});
        LogisticTplActions.updateFontWeight(fontWeight);
    }

    //更换快递背景
    updateTplImg(){
        LogisticTplActions.updateTplImg();
    }

    //关闭更新背景对话框
    closeImgDialog(){
        LogisticTplActions.closeImgDialog();
    }
    //更新背景图提交
    updateTplImgSubmit(){
        let imgUrl = this.field.getValue('imgUrl');
        LogisticTplActions.updateTplImgSubmit(imgUrl);
        LogisticTplActions.closeImgDialog();
    }


    //保存修改
    save(){
        this.field.validate((errors, values) => {
            if (errors) {
                return;
            }
            this.refs.logisticTplArea.save();
        });
    }
    
    //打印
    print(type='preview'){
        let LODOP = PrintService.getService();
        if(!LODOP){
            return;
        }
        this.refs.logisticTplArea.print(type);
    }


    render(){
        const { init} = this.field;
        let {fontSizes,fontFamilies,fontWeights,companies} = this.state;
        let {updatedTpl,imgDialog} = this.state;//实时更新数据
        let {editType,tpl:initTpl,items} =  this.props;

        initTpl = editType=='update'?initTpl:defaultTpl;
        items = editType=='update'?items:defaultTplItems;
        //编辑器初始化数据
        let {tpl_name,page_width,page_height,padding_top,padding_left,font_size,font_family,font_weight,company_name,background_img} = initTpl;
        let fontWeightRender = font_weight==400?'正常':'粗体';

        return(
            <div>
                <Form  direction="hoz" field={this.field}>
                    <Row>
                        <Col>
                            <FormItem
                                label="模版名称："
                                //hasFeedback
                            >
                                <Input placeholder="模版名称" {...init('tplName',{
                                    initValue: tpl_name,
                                    rules: [
                                        {required: true, message: '模版名字不能为空'},
                                    ],
                                })}/>
                            </FormItem>
                            <FormItem
                                label="所属快递："
                               // hasFeedback
                            >
                                <Select
                                    showSearch={true}
                                    onSearch={this.searchLogisticCompanies.bind(this)}
                                    style={{width:'120px'}}
                                    {...init('companyName',{
                                        initValue: company_name,
                                        rules: [
                                            {required: true, message: '所属快递不能为空'},
                                        ],
                                    })}>
                                    {
                                        companies.map((data)=>{
                                            let opt = <Option onClick={this.selectCompany.bind(this,data)} key= {data.company_id} value={data.company_id}>{data.company_name}({data.company_no})</Option>;
                                            return opt;
                                        })
                                    }
                                </Select>
                            </FormItem>
                            <FormItem
                                label="纸张宽度："
                            >
                                <NumberPicker  type="inline" min={0} max={350}
                                    {...init('pageWidth',{initValue:page_width})}
                                />
                            </FormItem>
                            <FormItem
                                label="纸张高度："
                            >
                                <NumberPicker  type="inline" min={0}  max={300}
                                    {...init('pageHeight',{initValue:page_height})}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormItem label="字体样式：">
                                <Select style={{width:'111px'}} {...init('fontSize',{initValue:font_size})}>
                                    {
                                        fontSizes.map(data=><Option key= {data.value}  value={data.value}>{data.text}</Option>)
                                    }
                                </Select>
                            </FormItem>
                            <FormItem >
                                <Select style={{width:'111px'}} {...init('fontFamily',{initValue:font_family})}>
                                    {
                                        fontFamilies.map(data=><Option key= {data.value}  value={data.value}>{data.text}</Option>)
                                    }
                                </Select>
                            </FormItem>
                            <FormItem >
                                <Select style={{width:'111px'}} {...init('fontWeight',{initValue:fontWeightRender})}>
                                    {
                                        fontWeights.map(data=><Option key= {data.text}  value={data.value}>{data.text}</Option>)
                                    }
                                </Select>
                            </FormItem>
                            <FormItem
                                label="上下偏移："
                            >
                                <NumberPicker  type="inline" min={-100} max={100}
                                    {...init('paddingTop',{initValue:padding_top})}
                                />
                            </FormItem>
                            <FormItem
                                label="左右偏移："
                            >
                                <NumberPicker  type="inline" min={-100} max={100}
                                    {...init('paddingLeft',{initValue:padding_left})}
                                />
                            </FormItem>
                            <Button type="primary" onClick={this.updateTplImg.bind(this)} style={{ marginRight: '5px' }}> 更换背景</Button>
                            <Button type="primary" onClick={this.save.bind(this)} style={{ marginRight: '5px' }}> 保存</Button>
                            <Button type="primary" onClick={this.print.bind(this,'preview')} style={{ marginRight: '5px' }}>预览</Button>
                            <Button type="primary" onClick={this.print.bind(this,'print')} style={{ marginRight: '5px' }}>打印</Button>
                        </Col>
                    </Row>
                </Form>
                <div>
                    <Row type="no-padding">
                        <Col>
                            <LogisticTplArea ref="logisticTplArea" tpl = {updatedTpl}  items={items} editType={editType} ></LogisticTplArea>
                        </Col>
                        <Col  fixedSpan="12">
                            <LogisticTplItem items={items} ></LogisticTplItem>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Dialog visible = {imgDialog.visible}
                            onOk = {this.updateTplImgSubmit.bind(this)}
                            onCancel = {this.closeImgDialog.bind(this)}
                            onClose = {this.closeImgDialog.bind(this)}
                            title = {imgDialog.title}
                            style = {imgDialog.style}
                           
                    >
                       <div>
                           <Form field={this.field} >
                               <FormItem
                                  labelCol={{span:6}}
                                  wrapperCol= {{span: 18}}
                                  label="图片地址："
                               >
                                   <Input placeholder="http://img.imgs.com/01.jpg" {...init('imgUrl',{initValue: background_img})}/>
                               </FormItem>
                           </Form>
                       </div>
                        
                    </Dialog>
                </div>
            </div>
        )
    }
}
LogisticTplEditer.propTypes = propTypes;
LogisticTplEditer.defaultProps = editerDefaultProps;


const PrintAreaDefaultProps = {
    editType:'update',
    tpl:defaultTpl,
    items:defaultTplItems,

};
class LogisticTplArea extends Reflux.Component{
    constructor(props) {
        super(props);
        this.field = new Field(this);
        this.stores = [LogisticTplItemStore];
        this.state = {}
    }

    componentDidMount(){
        this.tplAreaInit();
        this.closeItem();
    }
    componentDidUpdate(){
        let {tpl,printType} = this.props;
        this.print(tpl,printType);
    }


    //纸张初始化
    tplAreaInit() {
        new Resize({
            stage: ".div-logistic-tpl-print-area", //舞台
            item: '.resize-item', //可缩放的类名
        });

        let {items} = this.props;
        $('.div-print-item').each(function () {
            $(this).addClass('hidden');
        });
        for(let item of items){
            let{item_name:name,width:width,height:height,margin_left:marginLeft,margin_top:marginTop,
                font_size:fontSize,font_family:fontFamily,font_weight:fontWeight,content
            } = item;
            let itemStyle = {
                width:width,
                height:height,
                top:marginTop,
                left:marginLeft,
                'font-size':fontSize,
                'font-family':fontFamily,
                'font-weight':fontWeight
            };
            if(name.includes('tpl-self-info')){
                $('.'+name).find('.div-resize-content-container').html(content);
            }

            $('.'+name).removeClass('hidden').css(itemStyle);
        }
    }
    //设置打印项可见
    setVisibleItem(){
        //共用items 的state
        let {checkedItemKeys:itemIds} = this.state;
        $('.div-print-item').each(function () {
            $(this).addClass('hidden');
        });

        for(let itemId of itemIds){
            $('.'+itemId).removeClass('hidden');
        }
    }

    //获取打印项
    getVisibleItems(){
        let {checkedItemKeys:itemIds} = this.state;
        let items = [];
        let rootItems =  ['tpl-order-info','tpl-buyer-info','tpl-seller-info','tpl-sender-info',
            'tpl-receiver-info','tpl-product-info','tpl-info'];
        itemIds.forEach((name)=>{
            if(rootItems.find((n) => n == name)){
                return;
            };
            let item = {
                item_name:'',margin_top:10,margin_left:10,
                width:150,height:30,content:'打印项',
                font_family:'微软雅黑',font_size:15,font_weight:400
            };

            let realStyle = this.refs[name].style;
            let{top,left,width,height,fontFamily,fontSize,fontWeight} = realStyle;
            let initTop = $('.'+name).css('top');
            let initLeft = $('.'+name).css('left');
            let initWidth = $('.'+name).css('width');
            let initHeight = $('.'+name).css('height');
            let initFontSize = $('.'+name).css('font-size');
            let initFontFamily = $('.'+name).css('font-family');
            let initFontWeight = $('.'+name).css('font-weight');
            top = top?top:initTop;
            left = left?left:initLeft;
            width = width?width:initWidth;
            height = height?height:initHeight;
            fontFamily = fontFamily?fontFamily:initFontFamily;
            fontSize = fontSize?fontSize:initFontSize;
            fontWeight=fontWeight?fontWeight:initFontWeight;

            item.item_name = name;
            item.margin_top = top.replace(/px/, '');
            item.margin_left = left.replace(/px/, '');
            item.width = width.replace(/px/, '');
            item.height = height.replace(/px/, '');
            item.content = $('.'+name).find('.div-resize-content-container').html();
            item.font_family = fontFamily;
            item.font_size = fontSize.replace(/px/, '');
            item.font_weight = fontWeight;
            item.status = 'Y';
            items.push(item);
            //console.log(item);
        })
        return items;
    }

    //关闭打印项
    closeItem(){

        $('.resizable-close').on('click', this, function () {
            let name =  $(this).parents('.resize-item').data('id');
            LogisticTplActions.closePrintItem(name);
        });

    }
    //保存
    save(){
        let {editType,tpl} = this.props;
        let items = this.getVisibleItems();
        LogisticTplActions.save(editType,tpl,items);

    }

    print(printType){
        if(printType!='print'&&printType!='preview'){
            return;
        }
        let {tpl} = this.props;
        let items = this.getVisibleItems();
        tpl.items = items;
        LogisticTplActions.print(printType,tpl);

    }

    render(){
        let {tpl} = this.props;
        let{page_width:pageWidth,page_height:pageHeight,padding_left:paddingLeft,padding_top:paddingTop,background_img } = tpl;

        let pageStyle = {width:pageWidth+'mm',height:pageHeight+'mm'};
        let printAreaStyle = {top:paddingTop+'mm',left:paddingLeft+'mm'};

        this.setVisibleItem();
        return(
            <div className="div-logistic-tpl-page-container" id="div-logistic-tpl-container">
                <div className="div-logistic-tpl-page" style={pageStyle}>
                    <img className="img-logistic-tpl-background" src={background_img} alt="暂无运单背景,您可以尝试更换运单背景图" />
                    <div className="div-logistic-tpl-print-area"
                         style={printAreaStyle}>
                     
                        <div  className="resize-item div-print-item tpl-order-id" ref="tpl-order-id"   data-id="tpl-order-id">
                            <div className="div-resize-content-container">
                                订单编号
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>
                        <div  className="resize-item div-print-item tpl-order-create-time"  ref="tpl-order-create-time"   data-id="tpl-order-create-time">
                            <div className="div-resize-content-container">
                                下单时间
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>
                        <div  className="resize-item div-print-item tpl-order-pay-time" ref="tpl-order-pay-time" data-id="tpl-order-pay-time">
                            <div className="div-resize-content-container">
                                付款时间
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>
                        <div  className="resize-item div-print-item tpl-order-send-time"  ref="tpl-order-send-time" data-id="tpl-order-send-time">
                            <div className="div-resize-content-container">
                                发货时间
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>
                        <div  className="resize-item div-print-item tpl-order-product-payment"  ref="tpl-order-product-payment" data-id="tpl-order-product-payment">
                            <div className="div-resize-content-container">
                                商品总额
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>
                        <div  className="resize-item div-print-item tpl-order-discount"  ref="tpl-order-discount" data-id="tpl-order-discount">
                            <div className="div-resize-content-container">
                                优惠金额
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>
                        <div  className="resize-item div-print-item tpl-order-carriage"  ref="tpl-order-carriage" data-id="tpl-order-carriage">
                            <div className="div-resize-content-container">
                                运费金额
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>
                        <div  className="resize-item div-print-item tpl-order-payment"  ref="tpl-order-payment" data-id="tpl-order-payment">
                            <div className="div-resize-content-container">
                                实付金额
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>
                        <div  className="resize-item div-print-item tpl-order-product-short-title"  ref="tpl-order-product-short-title" data-id="tpl-order-product-short-title">
                            <div className="div-resize-content-container">
                                货品信息
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>
                        <div  className="resize-item div-print-item tpl-order-product-total"  ref="tpl-order-product-total" data-id="tpl-order-product-total">
                            <div className="div-resize-content-container">
                                商品总数
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>




                        <div  className="resize-item div-print-item tpl-buyer-nick"   ref="tpl-buyer-nick" data-id="tpl-buyer-nick">
                            <div className="div-resize-content-container">
                                买家旺旺
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>
                        <div  className="resize-item div-print-item tpl-buyer-name"  ref="tpl-buyer-name" data-id="tpl-buyer-name">
                            <div className="div-resize-content-container">
                                买家姓名
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>
                        <div  className="resize-item div-print-item tpl-buyer-mobile"  ref="tpl-buyer-mobile" data-id="tpl-buyer-mobile">
                            <div className="div-resize-content-container">
                                买家手机
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>
                        <div  className="resize-item div-print-item tpl-buyer-message"  ref="tpl-buyer-message" data-id="tpl-buyer-message">
                            <div className="div-resize-content-container">
                                买家留言
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>


                        <div  className="resize-item div-print-item tpl-seller-nick"  ref="tpl-seller-nick" data-id="tpl-seller-nick">
                            <div className="div-resize-content-container">
                                卖家旺旺
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>
                        <div  className="resize-item div-print-item tpl-seller-name"  ref="tpl-seller-name" data-id="tpl-seller-name">
                            <div className="div-resize-content-container">
                                卖家姓名
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>
                        <div  className="resize-item div-print-item tpl-seller-mobile"  ref="tpl-seller-mobile" data-id="tpl-seller-mobile">
                            <div className="div-resize-content-container">
                                卖家手机
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>
                        <div  className="resize-item div-print-item tpl-seller-remark"  ref="tpl-seller-remark" data-id="tpl-seller-remark">
                            <div className="div-resize-content-container">
                                卖家备注
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>




                        <div  className="resize-item div-print-item tpl-sender-name"  ref="tpl-sender-name" data-id="tpl-sender-name">
                            <div className="div-resize-content-container">
                                寄件姓名
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>
                        <div  className="resize-item div-print-item tpl-sender-mobile"  ref="tpl-sender-mobile" data-id="tpl-sender-mobile">
                            <div className="div-resize-content-container" >
                                寄件手机
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>
                        <div  className="resize-item div-print-item tpl-sender-phone"  ref="tpl-sender-phone" data-id="tpl-sender-phone">
                            <div className="div-resize-content-container" >
                                寄件固话
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>
                        <div  className="resize-item div-print-item tpl-sender-post"   ref="tpl-sender-post" data-id="tpl-sender-post">
                            <div className="div-resize-content-container" >
                                寄件邮编
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>
                        <div  className="resize-item div-print-item tpl-sender-province"  ref="tpl-sender-province" data-id="tpl-sender-province">
                            <div className="div-resize-content-container">
                                发货省份
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>
                        <div  className="resize-item div-print-item tpl-sender-address"  ref="tpl-sender-address"  data-id="tpl-sender-address">
                            <div className="div-resize-content-container">
                                发货地址
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>



                        <div  className="resize-item div-print-item tpl-receiver-name"  ref="tpl-receiver-name" data-id="tpl-receiver-name" >
                            <div className="div-resize-content-container" >
                                收件姓名
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>
                        <div  className="resize-item div-print-item tpl-receiver-mobile"  ref="tpl-receiver-mobile" data-id="tpl-receiver-mobile">
                            <div className="div-resize-content-container">
                                收件手机
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>
                        <div  className="resize-item div-print-item tpl-receiver-phone"  ref="tpl-receiver-phone" data-id="tpl-receiver-phone">
                            <div className="div-resize-content-container">
                                收件固话
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>
                        <div  className="resize-item div-print-item tpl-receiver-post"  ref="tpl-receiver-post" data-id="tpl-receiver-post">
                            <div className="div-resize-content-container">
                                收件邮编
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>
                        <div  className="resize-item div-print-item tpl-receiver-province"  ref="tpl-receiver-province" data-id="tpl-receiver-province">
                            <div className="div-resize-content-container">
                                收件省份
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>
                        <div  className="resize-item div-print-item tpl-receiver-address"  ref="tpl-receiver-address"  data-id="tpl-receiver-address">
                            <div className="div-resize-content-container" >
                                收件地址
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>


                        <div  className="resize-item div-print-item tpl-product-title"  ref="tpl-product-title"  data-id="tpl-product-title">
                            <div className="div-resize-content-container" >
                                商品标题
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>
                        <div  className="resize-item div-print-item tpl-product-short-title"   ref="tpl-product-short-title" data-id="tpl-product-short-title">
                            <div className="div-resize-content-container" >
                                商品简称
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>
                        <div  className="resize-item div-print-item tpl-product-short-info"  ref="tpl-product-short-info"  data-id="tpl-product-short-info">
                            <div className="div-resize-content-container" >
                                简称+属性+数量+单位
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>


                        <div  className="resize-item div-print-item tpl-self-info-1"  ref="tpl-self-info-1"  data-id="tpl-self-info-1">
                            <div className="div-resize-content-container" >
                                自定义1
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>
                        <div  className="resize-item div-print-item tpl-self-info-2"  ref="tpl-self-info-2"  data-id="tpl-self-info-2">
                            <div className="div-resize-content-container" >
                                自定义2
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>
                        <div  className="resize-item div-print-item tpl-self-info-3"  ref="tpl-self-info-3"  data-id="tpl-self-info-3">
                            <div className="div-resize-content-container" >
                                自定义3
                            </div>
                            <Icon type="close" size="xs" className="resizable-close" />
                        </div>
                    </div>
                </div>
            </div>);
    }
}
LogisticTplArea.propTypes = propTypes;
LogisticTplArea.defaultProps = PrintAreaDefaultProps;



const PrintItemDefaultProps = {
    items:defaultTplItems,
};

class LogisticTplItem extends Reflux.Component{
    constructor(props) {
        super(props);
        this.field = new Field(this);
        this.stores = [LogisticTplItemStore];
    }

    componentDidMount(){
        this.initCheckedItemKeys();
    }
    initCheckedItemKeys(){
        let {items} = this.props;
        LogisticTplActions.initTplChekedItemKeys(items);
    }
    //复选打印项
    checkPrintItem(checkedKeys){
        //console.log(checkedKeys);
        LogisticTplActions.checkPrintItem(checkedKeys);
    }
    //自定义输入
    setSelfInfo(key,value){
        $('.'+key).find('.div-resize-content-container').html(value);
    }
    render(){

        let {tplInfo,orderInfo,buyerInfo,sellerInfo,senderInfo,receiverInfo,productInfo} = this.state.items;
        let{defaultExpandedKeys,checkedItemKeys}= this.state;
        //console.log(checkedItemKeys);
        return(
            <div className="div-product-tpl-item-container">
                <Tree className="myCls" multiple checkable
                      defaultExpandedKeys={defaultExpandedKeys}
                      checkedKeys = {checkedItemKeys}
                      onCheck = {this.checkPrintItem.bind(this)}

                >
                    <TreeNode label="运单打印项" key="tpl-print-item">

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
                        <TreeNode label="寄件人信息" key="tpl-sender-info">
                            {
                                senderInfo.map(data=><TreeNode label={data.text} key={data.key} />)
                            }
                        </TreeNode>
                        <TreeNode label="收件人信息" key="tpl-receiver-info">
                            {
                                receiverInfo.map(data=><TreeNode label={data.text} key={data.key} />)
                            }
                        </TreeNode>
                        <TreeNode label="商品信息" key="tpl-product-info">
                            {
                                productInfo.map(data=><TreeNode label={data.text} key={data.key} />)
                            }
                        </TreeNode>

                        <TreeNode label="自定义" key="tpl-info" >
                            {
                                tplInfo.map((data)=>{
                                    let tri = <span>{data.text}</span>;
                                    let key = data.key;
                                    let edit =  <Balloon  align="t" trigger={tri} closable={false} triggerType="click">
                                        <Input onChange={this.setSelfInfo.bind(this,key)}
                                               defaultValue=""
                                               size="medium" />
                                    </Balloon>

                                    let tpl = <TreeNode key={data.key}  label= {edit}/>;
                                    return tpl;
                                })
                            }
                        </TreeNode>
                    </TreeNode>
                </Tree>
            </div>);
    }
}
LogisticTplItem.propTypes = propTypes;
LogisticTplItem.defaultProps = PrintItemDefaultProps;
export {LogisticTplList,LogisticTplEditer,LogisticTplArea,LogisticTplItem};