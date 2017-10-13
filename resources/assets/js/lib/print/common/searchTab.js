/**
 * Created by Administrator on 2017/3/10.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'qnui/lib/button';
import { RangePicker } from 'qnui/lib/date-picker';
import Tab from 'qnui/lib/tab';
import Reflux from 'reflux';
import { SearchTabActions } from '../../../action/print/searchActions';
import {SearchTabStore} from '../../../store/print/searchStore';
import {OrderActions} from '../../../action/print/orderActions';
const TabPane = Tab.TabPane;

const contentStyle={ borderRight:'0px',borderLeft:'0px',borderBottom:'0px',padding:'0px',minHeight:'0px'};
const extraContent = <Button type="primary" >定制</Button>;


const propTypes = {
    page:PropTypes.object,
    sorter:PropTypes.object
}


const defaultProps ={
    page:{
        page:1,
        start:0,
        limit:20,
    },
    sorter:{
        key:'gmt_create',
        order:'desc'
    }
};
class SearchTab extends Reflux.Component{

    constructor(props) {
        super(props);
        this.stores=[SearchTabStore];

    };
    //点击tab 查询
    clickTab(targetKey){
        let {query} = this.state;
        SearchTabActions.clickTab(targetKey);
        OrderActions.initPage();
        OrderActions.getOrders(query);
    }

    //关闭tab
    closeTab(targetKey){
        SearchTabActions.closeTab(targetKey);
    }

    render(){
        let {tabs} = this.state;
        return(
            <div className="component-container">
                <Tab
                    activeKey={tabs.active_key}
                    closeable
                    onClose={this.closeTab.bind(this)}
                    type="wrapped"
                    //tabBarExtraContent={extraContent}
                    contentStyle={contentStyle}>

                    {
                        tabs.panels.map(pane =>
                            <TabPane
                            onClick={this.clickTab.bind(this)}
                            closeable={pane.closeable}
                            tab={pane.tab}
                            key={pane.key}>
                            {pane.content}
                        </TabPane>)
                    }
                </Tab>
            </div>
        );
    }
}


SearchTab.propTypes = propTypes;
SearchTab.defaultProps = defaultProps;
export {SearchTab} ;