/**
 * Created by Administrator on 2017/4/4.
 */
import React from 'react';
import Reflux from 'reflux';
import Step, { Item as StepItem } from 'qnui/lib/step';
import Icon from 'qnui/lib/icon';



//第一步 下载安装插件【必须】
const step1 = <div>
    <ul>
        <li>
            1.下载插件：<a href="/app/help/download/clodop">点击下载</a>
        </li>
        <li>
            2.安装
            <div>
                <img style={{height:300}} src="/assets/images/help/01.png"/>
            </div>

        </li>
        <li>
            3.安装完成
            <div>
                <img style={{height:300}} src="/assets/images/help/02.png"/>
            </div>
        </li>
    </ul>
</div>;
//第二步 设置打印机 【必须】
const step2 = <div>
    <ul>
        <li>
            1.设置对应的打印机，保存设置
            <div>
                <img style={{height:300}} src="/assets/images/help/03.png"/>
            </div>
        </li>
    </ul>
</div>;
//第三步 设置发货地址 【必须】
const step3 = <div>
    <ul>
        <li>
            1.设置发货地址
            <div>
                <img style={{height:300}} src="/assets/images/help/08.png"/>
            </div>
        </li>
    </ul>
</div>;



//第四步 设置默认合作物流 【必须】
const step4 = <div>
    <ul>
        <li>
            1.添加物流
            <div>
                <img style={{height:300}} src="/assets/images/help/04.png"/>
            </div>
        </li>
        <li>
            2.选择物流公司
            <div>
                <img style={{height:300}} src="/assets/images/help/05.png"/>
            </div>
        </li>
        <li>
            3.选择对应物流公司的默认物流模版，确认新建(完成此步即可打印运单)
            <div>
                <img style={{height:300}} src="/assets/images/help/06.png"/>
            </div>
        </li>
    </ul>
</div>;

//第五步 面单设置 【必须】
const step5 = <div>
    <ul>
        <li>
            1.面单设置:设置面单帐号，帐号需向当地合作快递网点申请(完成此步即可打印面单)
            <div>
                <img style={{height:300}} src="/assets/images/help/07.png"/>
            </div>
        </li>
    </ul>
</div>;

//第六步 货单设置 【必须】
const step6 = <div>
    <ul>
        <li>
            1.面单设置:设置面单帐号，帐号需向当地合作快递网点申请(完成此步即可打印面单)
            <div>
                <img style={{height:300}} src="/assets/images/help/09.png"/>
            </div>
        </li>
    </ul>
</div>;
//第七步 同步订单 【必须】
const step7 = <div>
    <ul>
        <li>
            1.同步订单：选择同步订单的时间，同步完成，打单发货
            <div>
                <img style={{height:300}} src="/assets/images/help/10.png"/>
            </div>
        </li>
    </ul>
</div>;


class Help extends Reflux.Component{
    constructor(props) {
        super(props);
        super(props);

        this.state = {
            currentStep: 0
        };
    }

    next() {
        const s = this.state.currentStep + 1;

        this.setState({
            currentStep: s > 6 ? 6 : s
        });
    }
    prev() {
        const s = this.state.currentStep - 1;

        this.setState({
            currentStep: s < 0 ? 0 : s
        });
    }
    onClick(currentStep) {
        //console.log(currentStep);
        this.setState({
            currentStep: currentStep
        });
    }

    render(){
        const {currentStep} = this.state;
        return(
            <div>
                <div style={{textAlign:'center'}}>
                    <h3 >帮助文档</h3>
                </div>
                <hr className="margin-b-10"/>
                <Step current={currentStep} direction="vertical">
                    <StepItem title="第一步【基础设置】 ： 下载安装打印插件" onClick={this.onClick.bind(this)} content={step1} />
                    <StepItem title="第二步【基础设置】 ： 设置打印机" onClick={this.onClick.bind(this)} content={step2}  />
                    <StepItem title="第三步【基础设置】 ： 设置发货地址" onClick={this.onClick.bind(this)} content={step3} />
                    <StepItem title="第四步【运单必须】 ： 设置默认合作物流(完成此步即可打印普通快递单)" onClick={this.onClick.bind(this)} content={step4} />
                    <StepItem title="第五步【面单必须】 ： 设置面单" onClick={this.onClick.bind(this)}  content={step5} />
                    <StepItem title="第六步【货单必须】 ： 设置默认货单模版" onClick={this.onClick.bind(this)} content={step6}/>
                    <StepItem title="第七步【基础设置】 ： 同步订单,打单发货" onClick={this.onClick.bind(this)} icon="smile" content={step7}/>
                </Step>
            </div>
        )
    }
}

export {Help};