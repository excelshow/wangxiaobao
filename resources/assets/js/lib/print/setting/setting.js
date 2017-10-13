/**
 * Created by Administrator on 2017/3/7.
 */
import React from 'react';
import Reflux from 'reflux';
import Tab from 'qnui/lib/tab';
import {ProductTplList} from './productTpl';
import {Product} from './product';
import {SenderAddressList} from './address';
import { Auto } from './auto';

import {Printer} from './printer';
import {LogisticCompanyCooperateList} from './logistic';
import {LogisticTplList} from './logisticTpl';
import {ElectricAccountList} from './electricTpl'
const TabPane = Tab.TabPane;
const panels = [
    //{ tab: '打印发货', key: '-1', content:<Auto></Auto>,  visible:''},
    { tab: '打印机设置', key: '0', content:<Printer></Printer>,  visible:''},
    { tab: '合作物流', key: '1', content:<LogisticCompanyCooperateList></LogisticCompanyCooperateList>,  visible:''},
    { tab: '发货地址', key: '2', content:<SenderAddressList></SenderAddressList>,  visible:''},
    { tab: '货单模版', key: '3', content:<ProductTplList></ProductTplList>,  visible:''},
    { tab: '运单模版', key: '4', content:<LogisticTplList></LogisticTplList>,  visible:''},
    { tab: '面单设置', key: '5', content:<ElectricAccountList></ElectricAccountList>,  visible:''},
    { tab: '商品简称', key: '6', content:<Product></Product>,  visible:''},
    { tab: '打印发货', key: '7', content:<Auto></Auto>,  visible:''},
];


const contentStyle={ borderRight:'0px',borderLeft:'0px',borderBottom:'0px',padding:'0px',minHeight:'0px'};
class PrintSetting extends Reflux.Component{

    constructor(props) {
        super(props);
        //this.stores = [];
        this.state = {

        }
    }
    componentDidMount(){

    }

    componentDidUpdate(){

    }
    render(){

        return(
            <div>
                <div>
                    <Tab contentStyle={contentStyle}
                        type="wrapped">
                        {
                            panels.map(panel => <TabPane
                                className={panel.visible}
                                tab={panel.tab}
                                key={panel.key}>
                                {panel.content}</TabPane>)
                        }
                    </Tab>

                </div>
            </div>
        );
    }
}

export {PrintSetting};

