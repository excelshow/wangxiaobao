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
            1.企业建站推广：按照提示准确填写相关内容，然后点击【免费建站推广】
        </li>
        <li>
            2.访问企业网站
            <div>
                可通过 http://xxx.imemeda.net 访问;(xxx 为自己设置的域名)
            </div>

        </li>
    </ul>
</div>;
//第二步 设置打印机 【必须】
const step2 = <div>
    <ul>
        <li>
            1.业务推广
            <div>
                新建公司业务，并准确填写相关内容，该内容将在企业网站展示
            </div>
        </li>
    </ul>
</div>;
//第三步 设置发货地址 【必须】
const step3 = <div>
    <ul>
        <li>
            1.产品推广
            <div>
                添加业务后，选择相应的业务，并在该业务下添加推广产品，该产品将展示在企业网站
            </div>
        </li>
    </ul>
</div>;



//第四步 设置默认合作物流 【必须】
const step4 = <div>
    <ul>
        <li>
            1.百站分享
            <div>
                此功能可以独立使用，将任意产品推广到各大社交网站
            </div>
        </li>

    </ul>
</div>;

//第五步 面单设置 【必须】
const step5 = <div>
    <ul>
        <li>


        </li>
    </ul>
</div>;

//第六步 货单设置 【必须】
const step6 = <div>
    <ul>
        <li>

        </li>
    </ul>
</div>;
//第七步 同步订单 【必须】
const step7 = <div>
    <ul>
        <li>

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
            currentStep: s > 3 ? 3 : s
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
                    <StepItem title="第一步【基础设置】 ： 企业免费建站推广" onClick={this.onClick.bind(this)} content={step1} />
                    <StepItem title="第二步【基础设置】 ： 网站添加业务并推广" onClick={this.onClick.bind(this)} content={step2}  />
                    <StepItem title="第三步【基础设置】 ： 业务下推广产品" onClick={this.onClick.bind(this)} content={step3} />
                    <StepItem title="第四步【运单必须】 ： 百站分享" onClick={this.onClick.bind(this)} content={step4} />
                </Step>
            </div>
        )
    }
}

export {Help};