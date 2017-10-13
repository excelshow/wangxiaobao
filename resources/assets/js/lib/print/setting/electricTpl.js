/**
 * Created by Administrator on 2017/4/4.
 */
import React from 'react';
import Reflux from 'reflux';
import Table from 'qnui/lib/table';
import Button from 'qnui/lib/button';
//import Icon from 'qnui/lib/icon';
import Pagination from 'qnui/lib/pagination';
import { Row, Col } from 'qnui/lib/grid';
import Dialog from 'qnui/lib/dialog';
import Form, {Item as FormItem } from 'qnui/lib/form';
import Input from 'qnui/lib/input';
import Radio, { Group as RadioGroup } from 'qnui/lib/radio';
import Field from 'qnui/lib/field';
import Select from 'qnui/lib/select';
import { AccountListStore,AccountEditorStore } from '../../../store/print/electricTplStore';
import { ElectricTplActions } from '../../../action/print/electricTplActions';
class ElectricAccountList extends Reflux.Component{
    constructor(props) {
        super(props);
        this.stores = [AccountListStore];
        this.state = {

        }
    }

    componentDidMount(){
        this.getAddressList();
    }

    //新建地址
    add(){
        ElectricTplActions.add();
    }

    //批量删除
    deleteAll(){
        let {selectedKeys} = this.state;
        ElectricTplActions.delete(selectedKeys);
    }

    //删除地址
    delete(record){
        let {id} = record;
        let ids = [id];
        ElectricTplActions.delete(ids);
    }
    //编辑
    edit(record){
        ElectricTplActions.edit(record);
    }

    //分页
    changePage(page){

        ElectricTplActions.changePage(page);
        ElectricTplActions.getAccountList();
    }
    //设置每页大小
    setPageSize(size){
        ElectricTplActions.setPageSize(size);
        ElectricTplActions.getAccountList();
    }

    //选择记录
    changeSelectedRows(selectedRowKeys,records){
        ElectricTplActions.changeSelectedRows(selectedRowKeys,records);
    }

    save(){
        this.refs.accountEditor.save();
    }
    //关闭对话框
    closeDialog(){
        ElectricTplActions.closeDialog();
    }
    //获取列表
    getAddressList(){
        ElectricTplActions.getAccountList();
    }
    render(){
        let {accounts,page,dialog} = this.state;
        let {total,rows} = accounts;
        let rowSelection = {
            onChange:  this.changeSelectedRows.bind(this),
            getProps: (record) =>{
                return {
                    disabled: record.tpl_type == 'sys'
                }
            },
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
                                <Button type="primary" onClick={this.add.bind(this)}>添加账号</Button>&nbsp;&nbsp;
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
                    <Table.Column title="快递公司" dataIndex="company_name"/>
                    <Table.Column title="简称" dataIndex="company_no" />
                    <Table.Column title="面单账号" dataIndex="customer_name"/>
                    <Table.Column title="面单密码" dataIndex="customer_pwd"/>
                    <Table.Column title="月结编码" dataIndex="month_code"/>
                    <Table.Column title="发件网点" dataIndex="send_site"/>
                    <Table.Column title="创建时间" dataIndex="created_at"/>
                    <Table.Column   title="操作" width={200}
                                    cell = {(value, index, record)=>{
                                        let tpl =
                                            <ul>
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
                    //footer = {footer}
                        onOk = {this.save.bind(this)}
                        onCancel = {this.closeDialog.bind(this)}
                        onClose = {this.closeDialog.bind(this)}
                        title = {dialog.title}
                        style = {dialog.style}
                        align = {dialog.align}
                >
                    <ElectricAccountEditor ref="accountEditor"></ElectricAccountEditor>
                </Dialog>
            </div>

        )
    }
}


class ElectricAccountEditor extends Reflux.Component {
    constructor(props) {
        super(props);
        this.stores = [AccountEditorStore];
        this.field = new Field(this);
    }

    componentDidMount() {
        this.getCompanies();
    }


    //获取面单公司
    getCompanies(){
        ElectricTplActions.getCompanies();
    }

    //选择省份
    selectCompany(company){
        //console.log(company);
        ElectricTplActions.selectCompany(company);
    }

    save(){
        //e.preventDefault();
        let field = this.field;
        let customerName = field.getValue('customerName');
        let customerPwd = field.getValue('customerPwd');
        let monthCode = field.getValue('monthCode');
        let sendSite = field.getValue('sendSite');
        customerName = customerName?customerName:'';
        customerPwd = customerPwd?customerPwd:'';
        monthCode = monthCode?monthCode:'';
        sendSite = sendSite?sendSite:'';

        let account = {customer_name:customerName,customer_pwd:customerPwd,month_code:monthCode,send_site:sendSite};
        this.field.validate((errors, values) => {
            if (errors) {
                return;
            }
            ElectricTplActions.save(account);
        });

    }

    render(){
        const {init} = this.field;
        let {companies} = this.state;
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
                        label="物流公司："
                        {...formItemLayout}
                        hasFeedback
                    >

                        <Select placeholder="物流公司"
                                style={{ width: '100%' }}
                                {...init('companyName', {
                                    rules: [
                                        {required: true, message: '请选择物流公司'}
                                    ],
                                })}
                        >
                            {companies.map(data=> <Option onClick={this.selectCompany.bind(this,data)} key={data.company_id} value={data.company_id}>{data.company_name}({data.company_no})</Option>)}

                        </Select>
                    </FormItem>
                    <FormItem
                        label="面单账号："
                        {...formItemLayout}
                        //hasFeedback
                    >
                        <Input hasLimitHint placeholder="跟物流公司申请面单账号"
                               {...init('customerName', {
                                   rules: [
                                       {required: false,  message: '面单账号不能为空'},
                                   ],
                               })} />
                    </FormItem>
                    <FormItem
                        label="面单密码："
                        {...formItemLayout}
                        //hasFeedback
                    >
                        <Input  hasLimitHint placeholder="面单密码"
                               {...init('customerPwd', {
                                   rules: [
                                       {required: false, message: '面单密码'},
                                   ],
                               })} />
                    </FormItem>
                    <FormItem
                        label="月结编码："
                        {...formItemLayout}
                        //hasFeedback
                    >
                        <Input hasLimitHint placeholder="月结编码"
                               {...init('monthCode', {
                                   rules: [
                                       {required: false, message: '月结编码'},
                                   ],
                               })} />
                    </FormItem>
                    <FormItem
                        label="发件网点："
                        {...formItemLayout}
                        //hasFeedback
                    >
                        <Input hasLimitHint placeholder="快递发件网点"
                               {...init('sendSite', {
                                   rules: [
                                       {required: false, message: '快递发件网点'},
                                   ],
                               })} />
                    </FormItem>
                </Form>
            </div>
        );
    }
}
export {ElectricAccountList};