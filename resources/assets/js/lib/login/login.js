/**
 * Created by Administrator on 2017/3/7.
 */
import React from 'react';
import Reflux from 'reflux';
import Form, {Item as FormItem }from 'qnui/lib/form';
import Input from 'qnui/lib/input';
import Button from 'qnui/lib/button';
import Select from 'qnui/lib/select';
import Field from 'qnui/lib/field';

import { LoginActions } from '../../action/login/loginActions';
import {LoginStore} from '../../store/login/loginStore';
class Login extends Reflux.Component{

    constructor(props) {
        super(props);
        this.field = new Field(this);
        this.stores=[LoginStore];
    
    }

    componentDidMount(){
        LoginActions.getApps();
    }

    componentDidUpdate(){
        let login = this.state.login_state;
        let pwd = this.state.pwd;
        switch (login){
            case 'BEFORE':break;
            case 'DOING':break;
            case 'AFTER':
                if(!pwd){
                    this.field.setError('pwd', '密码或者帐号错误');
                    this.setState({login_state:'WILL'});
                }else {
                    window.location.href='/app/home';
                }
                break;
        }
     

    }

    selectApp(app){
        LoginActions.selectApp(app);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.field.validate((errors, values) => {
            if (errors) {
                return;
            }
            LoginActions.submit(values);
        });

    }
    render(){
        let {apps} = this.state;
        const formItemLayout = {
            labelCol: {span: 8},
            wrapperCol: {span: 16},
        }
        const { init } = this.field;

        return(
            <div className="div-login-container">
                <h3>登录</h3>
                <hr />

                <Form labelAlign="inset" field={this.field}>
                    <FormItem
                        label="应用："
                        {...formItemLayout}>
                        <Select
                            placeholder="请选择应用"
                            hasFeedback
                            required={false}
                            {...init('app_name', {
                                rules: [
                                    {required: true, message: '请选择应用'}
                                ],
                            })}
                        >
                            {apps.map(data=> <Option key={data.id} value={data.appkey} onClick={this.selectApp.bind(this,data)}>{data.name}</Option>)}

                        </Select>
                    </FormItem>
                    <FormItem

                        label="帐号："
                        {...formItemLayout}
                        hasFeedback
                        required={false}
                       >
                        <Input  placeholder="用户帐号"
                            {...init('name', {
                                rules: [
                                    {required: true, message: '用户名不能为空'},
                                ],
                            })} />
                    </FormItem>

                    <FormItem
                        label="密码："
                        {...formItemLayout}
                        required={false}
                        hasFeedback>
                        <Input htmlType="password" placeholder="账号密码"
                            {...init('pwd', {
                                rules: [
                                    {required: true, whitespace: true, message: '请填写密码'},
                                ],
                            })}
                        />
                    </FormItem>
                        <Button className="btn-login-submit" type="primary" onClick={this.handleSubmit.bind(this)}>登录</Button>
                </Form>

            </div>
        );
    }
}

export {Login};

