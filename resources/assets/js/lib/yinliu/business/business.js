/**
 * Created by Administrator on 2017/4/4.
 */
import React from 'react';
import Reflux from 'reflux';

import PropTypes from 'prop-types';

import Button from 'qnui/lib/button';
//import Icon from 'qnui/lib/icon';
import Notice from 'qnui/lib/notice';
import { Row, Col } from 'qnui/lib/grid';
import Table from 'qnui/lib/table';
//import Icon from 'qnui/lib/icon';

import Dialog from 'qnui/lib/dialog';
import Form, {Item as FormItem } from 'qnui/lib/form';
import Input from 'qnui/lib/input';
//import Radio, { Group as RadioGroup } from 'qnui/lib/radio';
import Field from 'qnui/lib/field';
//import Select from 'qnui/lib/select';
import { BusinessActions } from '../../../action/yinliu/yinliuActions';
import {BusinessStore,EditorStore} from '../../../store/yinliu/businessStore';

const propTypes = {
    //编辑业务
    business:PropTypes.object,
}


class Business extends Reflux.Component{
    constructor(props) {
        super(props);
        this.stores = [BusinessStore];
        this.field = new Field(this,{
            onChange:(name, value)=>{
                switch (name){

                }
            },
        });

    }

    componentDidMount(){
        this.get();
    }

    //全部删除
    deleteAll(){
        let {selectedKeys} = this.state;
        if(selectedKeys.length=='0'){
            Dialog.alert({
                content:'请选择要删除的记录',
                closable: true,
                title: '提示',
                onOk: () => {
                }
            })
            return;
        }
        BusinessActions.deleteAll();
    }

    //保存
    save(){
        this.refs['editor'].save();
    }
    //取消编辑
    cancel(){
        BusinessActions.cancel();
    }
    //添加
    add(){
        BusinessActions.add();
    }

    //编辑
    edit(record){
        BusinessActions.edit(record);
    }
    //删除
    delete(record){
        BusinessActions.delete(record);
    }
    //获取
    get(){
        BusinessActions.get();
    }
    //选择记录
    selectRows(selectedRowKeys,records){
        BusinessActions.selectRows(selectedRowKeys,records);
    }


    render(){
        let {editor,businesses,editBusiness} = this.state;
        let rowSelection = {
            onChange:  this.selectRows.bind(this),
        }
        return(
            <div>
                <Notice title="温馨提示" type="warning" iconType="lights">
                    1.我们将在为您建立的企业网站介绍您的主营业务，并推广到百度，360等各大搜索引擎，请您准确详细填写下面的内容
                </Notice>
                <div>
                    <div className="component-container">
                        <Row type="no-padding" className="">
                            <Col>
                                <div>
                                    <Button type="primary" onClick={this.add.bind(this)}>新建</Button>&nbsp;&nbsp;
                                    <Button type="primary" onClick={this.deleteAll.bind(this)} >删除</Button>&nbsp;&nbsp;
                                </div>
                            </Col>
                            <Col fixedSpan="16">

                            </Col>
                        </Row>
                    </div>
                    <Table dataSource={businesses}
                           rowSelection={rowSelection}
                           primaryKey="id"
                    >
                        <Table.Column title="业务名称" dataIndex="business"/>
                        <Table.Column title="推广用词（业务相关）" dataIndex="keywords" />
                        <Table.Column title="业务简介" dataIndex="introduction"/>
                        <Table.Column title="详细介绍" dataIndex="detail"/>
                        <Table.Column title="推广产品数量" dataIndex="product_total"/>
                        <Table.Column   title="操作" width={200}
                                        cell = {(value, index, record)=>{
                                            let tpl =
                                                <ul>
                                                    <li><a href="javascript:void(0)" onClick={this.edit.bind(this,record)} >编辑</a></li>
                                                    <li><a href="javascript:void(0)" onClick={this.delete.bind(this,record)} >删除</a></li>
                                                </ul>
                                            return tpl;
                                        }}
                        />
                    </Table>

                </div>
                <Dialog visible = {editor.visible}
                    //footer = {footer}
                        onOk = {this.save.bind(this)}
                        onCancel = {this.cancel.bind(this)}
                        onClose = {this.cancel.bind(this)}
                        title = {editor.title}
                        style = {editor.style}
                        align = {editor.align}
                >
                    <Editor ref="editor" business={editBusiness}/>
                </Dialog>
            </div>
        );
    }
}



const editorDefaultProps ={
    business:{
        id:'',business:'',keywords:'',introduction:'',detail:''
    },
};

//编辑器
class Editor extends Reflux.Component{
    constructor(props) {
        super(props);
        this.stores = [EditorStore];
        this.field = new Field(this,{
            onChange:(name, value)=>{
                this.input(name,value);
            },
        });

    }


    componentDidMount(){
        let props = this.props;
        let {business} = this.props;
        if(!business.id){
            return;
        }
        this.field.setValues(business);
        BusinessActions.propsToState(props);
    }
    //将属性保存到state
    componentWillReceiveProps(nextProps){

    }

    //输入
    input(field,value){
        BusinessActions.input(field,value);
    }
    //保存
    save(){

        this.field.validate((errors, values) => {
            if (errors) {
                return;
            }
            BusinessActions.save();
        });
    }
    render(){

        const {init} = this.field;
        let {business} = this.state;
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
                <Form field={this.field}>

                    <FormItem
                        label="业务名称："
                        {...formItemLayout}
                        hasFeedback
                    >
                        <Input maxLength={50} hasLimitHint placeholder="业务名称"
                               value={business.business}
                               {...init('business', {
                                   rules: [
                                       {required: true,  message: '业务名称不能为空'},
                                   ],
                               })} />
                    </FormItem>

                    <FormItem
                        label="推广用词："
                        {...formItemLayout}>
                        <Input multiple maxLength={50} hasLimitHint placeholder="业务推广词一,业务推广词二(多个推广词用逗号“ ，”隔开)"
                               value={business.keywords}
                               {...init('keywords', {
                                   rules: [
                                       {required: true,  message: '业务推广词不能为空'},
                                   ]
                               })}/>
                    </FormItem>
                    <FormItem
                        label="业务简介："
                        {...formItemLayout}>
                        <Input multiple maxLength={100} hasLimitHint placeholder="某业务是某公司经进行xx生产,xx批发,xx零售的业务"
                               value={business.introduction}
                               {...init('introduction', {
                                   rules: [
                                       {required: true,  message: '业务简介不能为空'},
                                   ]
                               })}/>
                    </FormItem>
                    <FormItem
                        label="详细介绍："
                        {...formItemLayout}>
                        <Input multiple maxLength={500} hasLimitHint placeholder="业务详细介绍"
                               value={business.detail}
                               {...init('detail', {
                                   rules: [
                                       {required: false,  message: '业务详细介绍不能为空'},
                                   ]
                               })}/>
                    </FormItem>

                </Form>
            </div>
        );
    }

}
Editor.propTypes = propTypes;
Editor.defaultProps = editorDefaultProps;

export {Business};