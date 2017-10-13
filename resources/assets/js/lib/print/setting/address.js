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
import Radio, { Group as RadioGroup } from 'qnui/lib/radio';
import Field from 'qnui/lib/field';
import Select from 'qnui/lib/select';
import { SenderAddressListStore,SenderAddressEditerStore } from '../../../store/print/addressStore';
import { SenderAddressActions } from '../../../action/print/addressActions';
class SenderAddressList extends Reflux.Component{
    constructor(props) {
        super(props);
        this.stores = [SenderAddressListStore];
        this.state = {

        }
    }

    componentDidMount(){
       this.getAddressList();
    }
    
    //新建地址
    addAddress(){
        SenderAddressActions.addAddress();
    }

    //批量删除
    deleteAll(){
        let {selectedKeys} = this.state;
        SenderAddressActions.delete(selectedKeys);
    }

    //删除地址
    delete(record){
        let {id} = record;
        let ids = [id];
        SenderAddressActions.delete(ids);
    }
    //设为默认
    setDefault(record){
        SenderAddressActions.setDefault(record);
    }

    //分页
    changePage(page){

        SenderAddressActions.changePage(page);
        SenderAddressActions.getAddressList();
    }
    //设置每页大小
    setPageSize(size){
        SenderAddressActions.setPageSize(size);
        SenderAddressActions.getAddressList();
    }

    //选择记录
    changeSelectedRows(selectedRowKeys,records){
        SenderAddressActions.changeSelectedRows(selectedRowKeys,records);
    }

    save(){
        this.refs.addressEditer.save();
    }
    //关闭对话框
    closeDialog(){
        SenderAddressActions.closeDialog();
    }
    //获取列表
    getAddressList(){
        SenderAddressActions.getAddressList();
    }
    render(){
        let {addresses,page,dialog} = this.state;
        let {total,rows} = addresses;
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
                                <Button type="primary" onClick={this.addAddress.bind(this)}>新建</Button>&nbsp;&nbsp;
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
                    <Table.Column title="联系人" dataIndex="sender_name"/>
                    <Table.Column title="省" dataIndex="province" />
                    <Table.Column title="市" dataIndex="city"/>
                    <Table.Column title="县\区" dataIndex="area"/>
                    <Table.Column title="街道" dataIndex="street"/>
                    <Table.Column title="邮编" dataIndex="post"/>
                    <Table.Column title="手机" dataIndex="mobile"/>
                    <Table.Column title="座机" dataIndex="phone"/>
                    <Table.Column title="是否默认" dataIndex="is_default"
                                  cell = {(value, index, record)=>{
                                  value = value=='Y'?'是':'否';
                                  return value;
                            }}
                    />
                    <Table.Column   title="操作" width={200}
                                    cell = {(value, index, record)=>{
                                    let tpl =
                                    <ul>
                                      <li><a href="javascript:void(0)" onClick={this.setDefault.bind(this,record)} >设为默认</a></li>
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
                    <SenderAddressEditer ref="addressEditer"></SenderAddressEditer>
                </Dialog>
            </div>

        )
    }
}


class SenderAddressEditer extends Reflux.Component {
    constructor(props) {
        super(props);

        this.stores = [SenderAddressEditerStore];
        this.field = new Field(this,{
            onChange:(name, value)=>{
                switch (name){
                    case 'name':this.setName(value);break;
                    case 'province':this.setProvince(value);break;
                    case 'city':this.setCity(value);break;
                    case 'area':this.setArea(value);break;
                    case 'street':this.setStreet(value);break;
                    case 'post':this.setPost(value);break;
                    case 'mobile':this.setMobile(value);break;
                    case 'phone':this.setPhone(value);break;
                    case 'default':this.setDefault(value);break;
                }
            },
        });
    }

    componentDidMount() {
        
        SenderAddressActions.editerInit();
        SenderAddressActions.getProvinces();
    }


    //选择area
    setArea(areaId){
        this.field.setValue('post','');
        let data = {
            params:JSON.stringify({area_id:areaId}),
            //page:JSON.stringify(page),
            //sorter:JSON.stringify({}),
        }
        $.ajax({
            url:'/app/print/getPost',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            let state = this.state;
            state.post = response[0].post;
            this.setState(state);

            this.field.setValue('post', response[0].post);
            SenderAddressActions.setPost(response[0].post);

        }).fail((response)=>{
            Dialog.alert({
                content:'获取邮编信息失败',
                closable: false,
                title: '提示',
                onOk: () => {
                    //Dialog.alert({content:'alert content'});
                }
            })
        })
    }

    //选择城市
    setCity(cityId){
        
        this.field.setValue('area',null);
        this.field.setValue('post','');
        SenderAddressActions.getAreas(cityId);
    }

    //选择省份
    setProvince(provinceId){
        this.field.setValue('city',null);
        this.field.setValue('area',null);
        this.field.setValue('post','');
        SenderAddressActions.getCities(provinceId);

    }
    setDefault(isDefault){
        SenderAddressActions.setDefault(isDefault);
    }
    setPhone(phone){
        SenderAddressActions.setPhone(phone);
    }
    setMobile(mobile){
        SenderAddressActions.setMobile(mobile);
    }
    setStreet(street){
        SenderAddressActions.setStreet(street);
    }
    setPost(post){
        SenderAddressActions.setPost(post);
    }
    setName(name){
        SenderAddressActions.setName(name);
    }

    selectArea(value, data){
        let {label:area} = data;
        SenderAddressActions.setArea(area);
    }

    selectCity(value, data){
        let {label:city} = data;
        SenderAddressActions.setCity(city);
    }


    selectProvince(value, data){
        let {label:province} = data;
        SenderAddressActions.setProvince(province);
    }


    save(){
        //e.preventDefault();
        this.field.validate((errors, values) => {
            if (errors) {
                return;
            }
            SenderAddressActions.save();
        });
    }

    render(){
        const {init} = this.field;
        let {provinces,cities,areas,defaults} = this.state;
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
                        label="姓名："
                        {...formItemLayout}
                        hasFeedback
                        >
                        <Input maxLength={20} hasLimitHint placeholder="联系人姓名"
                            {...init('name', {
                                rules: [
                                    {required: true,  message: '联系人不能为空'},
                                ],
                            })} />
                    </FormItem>
                    <FormItem
                        label="省市："
                        {...formItemLayout}>
                        <Row>
                            <Col>
                                <FormItem

                                    {...formItemLayout}>
                                    <Select placeholder="所在省份"

                                        {...init('province', {
                                            rules: [
                                                {required: true, message: '请选择省份'}
                                            ],
                                            props: {onChange: this.selectProvince.bind(this)}
                                        })}
                                    >
                                        {provinces.map(data=> <Option key={data.province_id} value={data.province_id}>{data.province}</Option>)}

                                    </Select>
                                </FormItem>
                            </Col>
                            <Col>
                                <FormItem

                                    {...formItemLayout}>
                                    <Select placeholder="所在城市"
                                        {...init('city', {
                                            rules: [
                                                {required: true, message: '请选择城市'}
                                            ],
                                            props: {onChange: this.selectCity.bind(this)},

                                        })}
                                    >
                                        {cities.map(data=> <Option key={data.city_id} value={data.city_id}>{data.city}</Option>)}
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col>
                                <FormItem
                                    {...formItemLayout}>
                                    <Select placeholder="所在区\县"
                                        {...init('area', {
                                            rules: [
                                                {required: true, message: '请选择区\县'}
                                            ],
                                            props: {onChange: this.selectArea.bind(this)},
                                        })}
                                    >
                                        {areas.map(data=> <Option key={data.area_id} value={data.area_id}>{data.area}</Option>)}
                                    </Select>
                                </FormItem>
                            </Col>
                        </Row>
                    </FormItem>

                    <FormItem
                        label="街道："
                        {...formItemLayout}>
                        <Input multiple maxLength={100} hasLimitHint placeholder="详细街道信息"
                            {...init('street', {
                                rules: [
                                    {required: true,  message: '收件详细地址不能为空'},
                                ]
                            })}/>
                    </FormItem>
                    <FormItem
                        label="邮编："
                        {...formItemLayout}
                        hasFeedback
                     >
                        <Input maxLength={6} hasLimitHint placeholder="邮编号码"
                            {...init('post', {
                                rules: [
                                    {required: false, min:6, message: '邮编为6位'},
                                ],
                            })} />
                    </FormItem>
                    <FormItem
                        label="手机："
                        {...formItemLayout}
                        hasFeedback
                       >
                        <Input maxLength={11} hasLimitHint placeholder="联系人手机"
                            {...init('mobile', {
                                rules: [
                                    {required: true, min: 11, message: '手机号为11位'},
                                ],
                            })} />
                    </FormItem>
                    <FormItem
                        label="固话："
                        {...formItemLayout}
                        hasFeedback
                       >
                        <Input maxLength={11} hasLimitHint placeholder="05717261000"
                            {...init('phone', {
                                rules: [
                                    {required: false, min: 11, message: '固话为11位'},
                                ],
                            })} />
                    </FormItem>
                    <FormItem
                        label="默认："
                        hasFeedback
                        {...formItemLayout}>
                        <RadioGroup
                            dataSource={defaults} defaultValue={'Y'}
                            {...init('default', {
                                rules: [
                                    {required: false, message: '请选择是否默认'}
                                ]
                            })}
                        >
                        </RadioGroup>
                    </FormItem>
                    </Form>
            </div>
        );
    }
}
export {SenderAddressList,SenderAddressEditer};