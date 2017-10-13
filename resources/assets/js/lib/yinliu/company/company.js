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
//import Dialog from 'qnui/lib/dialog';
import Form, {Item as FormItem } from 'qnui/lib/form';
import Input from 'qnui/lib/input';
//import Radio, { Group as RadioGroup } from 'qnui/lib/radio';
import Field from 'qnui/lib/field';
//import Select from 'qnui/lib/select';
import { CompanyActions } from '../../../action/yinliu/yinliuActions';
import {CompanyStore} from '../../../store/yinliu/companyStore';


class Company extends Reflux.Component{
    constructor(props) {
        super(props);
        this.stores = [CompanyStore];
        this.field = new Field(this,{
            onChange:(name, value)=>{
                switch (name){
                    case 'domain':this.getDomain(value);break;
                }
            },
        });

    }

    componentDidMount(){
        this.getCompany();
    }

    //域名是否推广
    getDomain(value){

        let data = {
            'params':JSON.stringify({domain:value})
        };
        $.ajax({
            url:'/app/yinliu/company/domain/get',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            let {domain} = this.state;
            domain.exists = false;
            if(response){
                domain.exists = true;
                this.field.setError('domain','域名已经被注册');
            }
            this.setState({domain:domain})


        }).fail((response)=>{
            Dialog.alert({
                content:'域名获取失败',
                closable: true,
                title: '提示',
                onOk: () => {
                    //Dialog.alert({content:'alert content'});
                }
            })
            console.log('请求失败'+response)
        })
    }
    getCompany(){
       // CompanyActions.getCompanyInfo();

        $.ajax({
            url:'/app/yinliu/company/get',
            data:'',
            type:'POST',
            dataType:'json'
        }).done((response)=>{

            if(!response){
                return;
            }
            for(let r in response){
                if(!response[r]){
                    response[r]='';
                }
            }
            this.field.setValues(response);
            let {domain} = this.state;
            domain.disabled = true;
            this.setState({company:response,domain:domain})

        }).fail((response)=>{
            Dialog.alert({
                content:'请求失败',
                closable: true,
                title: '提示',
                onOk: () => {
                    //Dialog.alert({content:'alert content'});
                }
            })
            console.log('请求失败'+response)
        })
    }
    //保存推广
    save(){
        let domainExists = this.field.getState('domain');
        if(domainExists=='error'){
            return;
        }
        // let {company} = this.state;
        // if(company.id){
        //    // this.field.setValues(company);
        // }
        this.field.validate((errors, values) => {
            if (errors) {
                return;
            }
            console.log(values);
            CompanyActions.save(values);
        });
    }

    render(){
        const {init} = this.field;
        let {company,domain} = this.state;
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
                <Notice title="温馨提示" type="warning" iconType="lights">
                    1.我们将为您免费建立企业网站并在百度，360等大搜索引擎推广，请您准确详细填写下面的内容;2.网站域名一旦确定不能修改，请您尽量设置容易记忆的域名
                </Notice>
                <div style={{width:650,marginTop:20}}>
                <Form field={this.field}>
                    <FormItem
                        label="网站域名："
                        {...formItemLayout}
                        hasFeedback
                    >
                        <Input
                            placeholder="英文或拼音（设置后不能更改）"
                            addonBefore="http://"
                            addonAfter=".imemeda.net"
                            //value={company.domain}
                            maxLength={50}
                            hasLimitHint
                            disabled = {domain.disabled}
                            {...init('domain', {
                               // initValue:'company.domain',
                                rules: [
                                    {required: true,  message: '英文或者拼音域名'},
                                ],
                            })}
                        />

                    </FormItem>
                    <FormItem
                        label="公司名称："
                        {...formItemLayout}
                        hasFeedback
                    >
                        <Input maxLength={30} hasLimitHint placeholder="公司名称"
                              // value={company.company_name}
                               {...init('company_name', {
                                   rules: [
                                       {required: true,  message: '公司名称不能为空'},
                                   ],
                               })} />
                    </FormItem>

                    <FormItem
                        label="主营业务："
                        {...formItemLayout}>
                        <Input multiple maxLength={50} hasLimitHint placeholder="业务一 , 业务二 , 业务三(多个业务用逗号 “ ，” 隔开)"
                             //  value={company.business}
                               {...init('business', {
                                   rules: [
                                       {required: true,  message: '主营业务不能为空'},
                                   ]
                               })}/>
                    </FormItem>
                    <FormItem
                        label="公司简介："
                        {...formItemLayout}>
                        <Input multiple maxLength={100} hasLimitHint placeholder="某某公司是杭州主要经营业务一,业务二的公司"
                             //  value={company.introduction}
                               {...init('introduction', {
                                   rules: [
                                       {required: true,  message: '公司简介不能为空'},
                                   ]
                               })}/>
                    </FormItem>
                    <FormItem
                        label="详细介绍："
                        {...formItemLayout}>
                        <Input multiple maxLength={500} hasLimitHint placeholder="公司详细介绍"
                             //  value={company.detail}
                               {...init('detail', {
                                   rules: [
                                       {required: true,  message: '公司详细介绍不能为空'},
                                   ]
                               })}/>
                    </FormItem>
                    <FormItem
                        label="公司地址："
                        {...formItemLayout}
                        hasFeedback
                    >
                        <Input maxLength={100} hasLimitHint placeholder="公司地址"
                            //   value={company.address}
                               {...init('address', {
                                   rules: [
                                       {required: true,message: '公司地址不能为空'},
                                   ],
                               })} />
                    </FormItem>


                    <FormItem
                        label="固定电话："
                        {...formItemLayout}
                        hasFeedback
                    >
                        <Input maxLength={11} hasLimitHint placeholder="固定电话为11位"
                            //   value={company.phone}
                               {...init('phone', {
                                   rules: [
                                       {required: false, min:11, message: '固定电话为11位'},
                                   ],
                               })} />
                    </FormItem>
                    <FormItem
                        label="联系手机："
                        {...formItemLayout}
                        hasFeedback
                    >
                        <Input maxLength={11} hasLimitHint placeholder="联系手机号为11位"
                           //    value={company.mobile}
                               {...init('mobile', {
                                   rules: [
                                       {required: false, min:11, message: '联系手机号为11位'},
                                   ],
                               })} />
                    </FormItem>
                    <FormItem
                        label="阿里店铺："
                        {...formItemLayout}
                        hasFeedback
                    >
                        <Input maxLength={100} hasLimitHint placeholder="阿里店铺网址"
                            //   value={company.shop_url}
                               {...init('shop_url', {
                                   rules: [
                                       {required: true,message: '阿里店铺网址不能为空'},
                                   ],
                               })} />
                    </FormItem>
                    <FormItem wrapperCol={{ offset: 6 }}>
                        <Button type="primary" onClick={this.save.bind(this)}>免费建站推广</Button>
                    </FormItem>

                </Form>
            </div>
            </div>
        );
    }
}

export {Company};