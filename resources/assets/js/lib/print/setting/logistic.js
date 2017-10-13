/**
 * Created by Administrator on 2017/4/4.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Reflux from 'reflux';
import Table from 'qnui/lib/table';
import Button from 'qnui/lib/button';
//import Icon from 'qnui/lib/icon';
import Pagination from 'qnui/lib/pagination';
import { Row, Col } from 'qnui/lib/grid';
import Dialog from 'qnui/lib/dialog';
import Form, {Item as FormItem } from 'qnui/lib/form';
import Input from 'qnui/lib/input';
import Field from 'qnui/lib/field';
import Tag from 'qnui/lib/tag';
import Balloon from 'qnui/lib/balloon';
const Tooltip = Balloon.Tooltip;
import Radio, { Group as RadioGroup } from 'qnui/lib/radio';
import Step, { Item as StepItem } from 'qnui/lib/step';
import Checkbox from 'qnui/lib/checkbox';

import { LogisticCompanyCooperateActions } from '../../../action/print/logisticActions';
import { LogisticCompanyCooperateListStore,LogisticCompanyEditerStore } from '../../../store/print/logisticStore';

const propTypes = {
    editType:PropTypes.string,
    editCompany:PropTypes.object,
}
const editerDefaultProps ={
    editType:'update',
    editCompany:{},
};

class LogisticCompanyCooperateList extends Reflux.Component{
    constructor(props) {
        super(props);
        this.stores = [LogisticCompanyCooperateListStore];
        this.state = {

        }
    }

    componentDidMount(){
       this.getCompaniesList();
    }
    
    //新建物流
    addCompany(){
        LogisticCompanyCooperateActions.addCompany();
    }

    //编辑company
    editCompany(company){
        LogisticCompanyCooperateActions.editCompany(company);
    }

    //批量删除
    deleteAll(){
        let {selectedKeys} = this.state;
        LogisticCompanyCooperateActions.delete(selectedKeys);
    }

    //删除物流公司
    delete(record){
        let {id} = record;
        let ids = [id];
        LogisticCompanyCooperateActions.delete(ids);
    }
    //设为默认
    setDefault(record){
        LogisticCompanyCooperateActions.setDefault(record);
    }

    //分页
    changePage(page){

        LogisticCompanyCooperateActions.changePage(page);
        LogisticCompanyCooperateActions.getCompaniesList();
    }
    //设置每页大小
    setPageSize(size){
        LogisticCompanyCooperateActions.setPageSize(size);
        LogisticCompanyCooperateActions.getCompaniesList();
    }

    //选择记录
    changeSelectedRows(selectedRowKeys,records){
        LogisticCompanyCooperateActions.changeSelectedRows(selectedRowKeys,records);
    }

    save(){
        this.refs.companyEditer.save();
    }
    //关闭对话框
    closeDialog(){
        LogisticCompanyCooperateActions.closeDialog();
    }
    //获取列表
    getCompaniesList(){
        LogisticCompanyCooperateActions.getCompaniesList();
    }
    render(){
        let {companies,page,dialog,editType,editCompany} = this.state;
        let {total,rows} = companies;
        let rowSelection = {
            onChange:  this.changeSelectedRows.bind(this),
        }
        let footer =<div>
            <Button>取消</Button>
        </div>;
        return(

            <div>
                <div className="component-container">
                    <Row type="no-padding" className="">
                        <Col>
                            <div>
                                <Button type="primary" onClick={this.addCompany.bind(this)}>添加</Button>&nbsp;&nbsp;
                                <Button type="primary" onClick={this.deleteAll.bind(this)} >删除</Button>&nbsp;&nbsp;
                            </div>
                        </Col>
                        <Col fixedSpan="16">
                            <div >
                                <Pagination
                                    className="pull-right"
                                    pageSize = {page.limit}
                                    total={ total}
                                    current={page.page}
                                    onChange={this.changePage.bind(this)}
                                    type="simple" />
                            </div>
                        </Col>
                    </Row>
                </div>
                <Table dataSource={rows}
                       rowSelection={rowSelection}
                       primaryKey="id"
                >
                    <Table.Column title="公司名字" dataIndex="company_name"/>
                    <Table.Column title="简称" dataIndex="company_no" />


                    <Table.Column title="默认物流模版" dataIndex="tpl_name"
                                  cell = {(value, index, record)=>{
                                    value = value?value:'未设置';
                                    return value;
                            }}
                    />
                    <Table.Column title="模版ID编号" dataIndex="tpl_id"/>
                    <Table.Column title="模版类型" dataIndex="tpl_type"
                                  cell = {(value, index, record)=>{
                                    if(!value){
                                    return value;
                                    }
                                    value = value=='sys'?'系统模版':'用户模版';
                                    return value;
                            }}
                    />
                    <Table.Column title="打印发货支持" dataIndex="ali_id"
                                  cell = {(value, index, record)=>{
                                  let{ali_id:aliId,company_no:cpNo,has_electric_tpl:eleStatus}=record;
                                 
                                  eleStatus = eleStatus=='Y'?'支持':'不支持';
                                  let send = cpNo? '虚拟发货&线下发货':'虚拟发货';
                                  let tpl =
                                        <ul>
                                          <li>面单：{eleStatus}</li>
                                          <li>发货：{send}</li>
                                        </ul>
                                    return tpl;
                            }}
                    />
                    <Table.Column title="默认物流" dataIndex="is_default"
                                  cell = {(value, index, record)=>{
                                  value = value=='Y'?'是':'否';
                                  return value;
                            }}
                    />
                    <Table.Column   title="操作" width={200}
                                    cell = {(value, index, record)=>{
                                    let tpl =
                                    <ul>
                                      <li><a href="javascript:void(0)" onClick={this.setDefault.bind(this,record)} >设为默认物流</a></li>
                                      <li><a href="javascript:void(0)" onClick={this.editCompany.bind(this,record)} >设置默认模版</a></li>
                                      <li><a href="javascript:void(0)" onClick={this.delete.bind(this,record)} >删除</a></li>
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
                        total={total}
                        current= { page.page }
                        onChange={this.changePage.bind(this)}
                        pageSizePosition="start"
                        onPageSizeChange={this.setPageSize.bind(this)}
                    />
                </div>
                <Dialog visible = {dialog.visible}
                        footer = {<span></span>}
                        onOk = {this.save.bind(this)}
                        onCancel = {this.closeDialog.bind(this)}
                        onClose = {this.closeDialog.bind(this)}
                        title = {dialog.title}
                        style = {dialog.style}
                        align = {dialog.align}
                >
                    <LogisticCompanyEditer editType={editType} editCompany={editCompany}></LogisticCompanyEditer>
                </Dialog>
            </div>

        )
    }
}


class LogisticCompanyEditer extends Reflux.Component {
    constructor(props) {
        super(props);
        this.stores = [LogisticCompanyEditerStore];
        this.field = new Field(this,{
            onChange:(name, value)=>{
                switch (name){
                    case 'companyName':
                        //LogisticCompanyCooperateActions.searchLogisticCompany(value);
                        break;
                    case 'isDefault':
                        this.checkCompanyDefault(value);
                        break;

                }
            },
        });
        this.state = {}
    }

    componentDidMount() {
        let{editType,editCompany} = this.props;
        if(editType=='add'){
            this.searchLogisticCompany();
        }

        if(editType=='update'){
            this.selectCompany(editCompany,true);
            this.nextStep();
        }

    }
    
    //设置是否默认
    checkCompanyDefault(isDefault){
        isDefault = isDefault?'Y':'N';
        LogisticCompanyCooperateActions.checkCompanyDefault(isDefault);
    }
    
    //查询物流公司
    searchLogisticCompany(){
        let name = this.field.getValue('companyName');
        LogisticCompanyCooperateActions.searchLogisticCompany(name);
    }

    //选择物流公司合租
    selectCompany(company,selected){
        //console.log(selected,company);
        LogisticCompanyCooperateActions.selectCompany(company,selected);
    }

    //下一步
    nextStep(){
        LogisticCompanyCooperateActions.nextStep();
    }
    //上一步
    lastStep(){
        LogisticCompanyCooperateActions.lastStep();
    }
    //选择模版
    selectTpl(data){
        LogisticCompanyCooperateActions.selectTpl(data);
    }

    //确认添加
    save(){
        LogisticCompanyCooperateActions.addCompanySubmit();
    }
    render(){
        const {init} = this.field;
        let {currentStep,companies,nextDisabled,selectedCompany,selectedTpl,companyTpls,isDefault} = this.state;
        isDefault = isDefault=='Y'?true:false;
        let {editType} = this.props;
        let visible = {display:'block'};
        let hidden = {display:'none'};
        let stepOneStyle = currentStep>0?hidden:visible;
        let stepTwotyle = currentStep>=1?visible:hidden;
        let lastDisabled = editType=='add'?{display:'inline'}:{display:'none'};
        return(
            <div>

                <Step current={currentStep} type="arrow">
                    <StepItem title="1.选择物流公司"  />
                    <StepItem title="2.设置默认物流模版"  />
                    <StepItem title="3.确认"  />
                </Step>
                <div className="margin-t-10" style={stepOneStyle}>

                    <Row type="no-padding">
                        <Col>
                            <Form field={this.field}  direction="hoz" >

                                <FormItem>
                                    <Input  hasLimitHint style={{width:200}} placeholder="快递公司名称"
                                        {...init('companyName',{initValue:''})}
                                    />
                                </FormItem>
                                <FormItem>
                                    <Button type="primary" onClick={this.searchLogisticCompany.bind(this)} >查询</Button>
                                </FormItem>
                                <FormItem label=""  style={{marginTop:9}}>
                                    <Checkbox {...init('isDefault')} defaultChecked={isDefault} >默认物流</Checkbox>
                                </FormItem>
                            </Form>
                        </Col>
                        <Col fixedSpan="6"><Button className="pull-right" type="primary" disabled={nextDisabled} onClick={this.nextStep.bind(this)}>下一步</Button></Col>
                    </Row>
                    <hr />

                    <div>
                        {
                            companies.map((data)=>{
                                let {ali_id:aliId,has_electric_tpl:has} = data;
                                let text = has=='Y'?'支持面单&运单':'仅支持运单';
                               // let send = aliId?'支持线下发货&虚拟发货':'仅支持虚拟发货';
                                let tri = <Tag onSelect = {this.selectCompany.bind(this,data)} selected={data.selected} shape="selectable" className="margin-5">{data.company_name}</Tag>;
                                let tip = <Tooltip key={data.company_id} trigger={ tri} align="t" text={text} />
                                return tip;
                            })

                        }
                    </div>
                </div>
                <div className="margin-t-10" style={stepTwotyle}>

                    <Row type="no-padding" style={{marginBottom:10}}>
                        <Col>
                            <h4 className="margin-t-0">物流公司：&nbsp;&nbsp;{selectedCompany.company_name}({selectedCompany.company_no})</h4>
                        </Col>
                        <Col>
                            <Button className="pull-right" type="primary"  onClick={this.save.bind(this)}>确认</Button>
                            <Button className="pull-right margin-r-5" type="primary" style={lastDisabled}  onClick={this.lastStep.bind(this)}>上一步</Button>
                        </Col>
                    </Row>
                    <Row type="no-padding">
                        <Col>
                            <div className="div-logistic-tpl-img-container">

                                <img className="img-logistic-tpl-preview" src={selectedTpl.background_img} />
                            </div>
                        </Col>
                        <Col fixedSpan="8">
                            <RadioGroup
                                value={selectedTpl.company_id}
                            >
                                    {
                                        companyTpls.map((data)=>{
                                            let tpl =
                                            <div key={data.company_id}>
                                                <Radio onClick={this.selectTpl.bind(this,data)}  value={data.company_id}>{data.tpl_name}</Radio>
                                            </div>
                                            return tpl;
                                        })
                                    }
                            </RadioGroup>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
LogisticCompanyEditer.propTypes = propTypes;
LogisticCompanyEditer.defaultProps = editerDefaultProps;

export {LogisticCompanyCooperateList,LogisticCompanyEditer};