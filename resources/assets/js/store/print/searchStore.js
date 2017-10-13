/**
 * Created by Administrator on 2017/3/12.
 */
import Reflux from 'reflux';
import { SearchBarActions,SearchTabActions } from '../../action/print/searchActions';
class SearchBarStore extends Reflux.Store
{
    constructor()
    {
        super();
        this.listenables = [SearchBarActions];
        this.state = {
          
            query:{
                field:'orderId',
                data:'',
                start:'',//查询日期开始
                end:''//查询日期结束
            },
        }
    }

    //设置查询条件
    onSetQuery(field='tradeStatus',data=''){
        let state = this.state;
        state.query.field = field;
        state.query.data = data;
        //console.log(this.state.query);
        this.setState(state);
    }
    //设置开始时间
    onSetQueryRangeDate(start,end){
        let state = this.state;
        state.query = Object.assign({},state.query,{start,end});
        //state.query.page = {page:1, start:0, limit:20};
        this.setState(state);
    }
    //查询提交
    onClickSearch(page,sorter){
        let state = this.state;
        state.loading=true;
        this.setState(state);

        let{query} = this.state;
        let data = {
            params:JSON.stringify(query),
            page:JSON.stringify(page),
            sorter:JSON.stringify(sorter),
        }
        $.ajax({
            url:'/app/trade/order/get',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            state.loading=false;
            this.setState(state);
            if(response){
                state.orders.total = response.total;
                state.orders.rows = response.rows;
                this.setState(state);
            }else {
                //this.setState({login_state:'AFTER',pwd:false});
            }

        }).fail((response)=>{
            console.log('请求失败'+response)
        })
    }

}


const keyTabs={
    ALL: { tab: '近三月', key: 'ALL', field:'tradeStatus',  content: '' ,closeable:false},
    WAIT_BUYER_PAY: { tab: '待付款', key: 'WAIT_BUYER_PAY', field:'tradeStatus', content: '',closeable:false },
    WAIT_SELLER_SEND: { tab: '待发货', key: 'WAIT_SELLER_SEND', field:'tradeStatus', content: '' ,closeable:false},
    WAIT_BUYER_RECEIVE:{ tab: '待收货', key: 'WAIT_BUYER_RECEIVE', field:'tradeStatus', content: '' ,closeable:false},
    REFUND:{ tab: '退换货', key: 'REFUND', field:'tradeStatus', content: '',closeable:false},
    SUCCESS:{ tab: '成功', key: 'SUCCESS', field:'tradeStatus', content: '' ,closeable:false},
    CANCEL:{ tab: '关闭', key: 'CANCEL', field:'tradeStatus', content: '' ,closeable:false},
    OTHER:{ tab: '其他', key: 'OTHER', field:'tradeStatus', content: '' ,closeable:true},
    SELLER_RATED:{ tab: '我已评价', key: 'SELLER_RATED', field:'rateStatus', content: '' ,closeable:true},
    SELLER_NOT_RATE:{ tab: '我未评价', key: 'SELLER_NOT_RATE', field:'rateStatus', content: '' ,closeable:true},
    BUYER_RATED:{ tab: '买家已评', key: 'BUYER_RATED', field:'rateStatus', content: '' ,closeable:true},
    BUYER_NOT_RATE:{ tab: '买家未评', key: 'BUYER_NOT_RATE', field:'rateStatus', content: '' ,closeable:true},
    MARK_GRAY:{ tab: '未标记', key: 'MARK_GRAY', field:'remark', content: '' ,closeable:true},
    MARK_ORANGE:{ tab: '橙色', key: 'MARK_ORANGE', field:'remark', content: '' ,closeable:true},
    MARK_BLUE:{ tab: '蓝色', key: 'MARK_BLUE', field:'remark', content: '' ,closeable:true},
    MARK_GREEN:{ tab: '绿色', key: 'MARK_GREEN', field:'remark', content: '' ,closeable:true},
    MARK_YELLOW:{ tab: '黄色', key: 'MARK_YELLOW', field:'remark', content: '' ,closeable:true},
    PRODUCT_WAIT_PRINT:{ tab: '货单待打', key: 'PRODUCT_WAIT_PRINT', field:'printStatus', content: '' ,closeable:true},
    PRODUCT_HAS_PRINTED:{ tab: '货单已打', key: 'PRODUCT_HAS_PRINTED', field:'printStatus', content: '' ,closeable:true},
    LOGISTIC_WAIT_PRINT:{ tab: '运单待打', key: 'LOGISTIC_WAIT_PRINT', field:'printStatus', content: '' ,closeable:true},
    LOGISTIC_HAS_PRINTED:{ tab: '运单已打', key: 'LOGISTIC_HAS_PRINTED', field:'printStatus', content: '' ,closeable:true},
    ELECTRIC_WAIT_PRINT:{ tab: '面单待打', key: 'ELECTRIC_WAIT_PRINT', field:'printStatus', content: '' ,closeable:true},
    ELECTRIC_HAS_PRINTED:{ tab: '面单已打', key: 'ELECTRIC_HAS_PRINTED', field:'printStatus', content: '' ,closeable:true},
    AUTO_PRINT:{ tab: '自动打印', key: 'AUTO_PRINT', field:'printStatus', content: '' ,closeable:true},

};

const keys = ['ALL','WAIT_BUYER_PAY','WAIT_SELLER_SEND','WAIT_BUYER_RECEIVE','SUCCESS','CANCEL','OTHER'];
const tabs = [
    { tab: '近三月', key: 'ALL',  content: '' ,closeable:false},
    { tab: '待付款', key: 'WAIT_BUYER_PAY', content: '',closeable:false },
    { tab: '待发货', key: 'WAIT_SELLER_SEND', content: '' ,closeable:false},
    { tab: '待收货', key: 'WAIT_BUYER_RECEIVE', content: '' ,closeable:false},
    //{ tab: '退换货', key: 'REFUND', content: '',closeable:false},
    { tab: '成功', key: 'SUCCESS', content: '' ,closeable:false},
    { tab: '关闭', key: 'CANCEL', content: '' ,closeable:false},
    { tab: '其他', key: 'OTHER', content: '' ,closeable:false},
];
const illegalFields=['orderId','productName','buyerNick','message','rangeDate'];
class SearchTabStore extends Reflux.Store
{
    constructor()
    {
        super();
        this.listenables = [SearchTabActions];
        this.state = {
            query:{
                field:'orderId',
                data:'',
                start:'',//查询日期开始
                end:''//查询日期结束
            },
            tabs:{
                keys:keys,
                panels:tabs,
                active_key:tabs[0].key
            },
        }
    }
    //点击tab时候
    onClickTab(targetKey){
        let state = this.state;
        let field = keyTabs[targetKey].field;
        let data = keyTabs[targetKey].key;
        state.tabs.active_key = targetKey;
        state.query.field = field;
        state.query.data = data;
        //state.query.page = { page:1, start:0,  limit:20 };
        this.setState(state);
    }

    //关闭tab
    onCloseTab(targetKey){
        let activeKey = this.state.tabs.active_key;
        let lastIndex;
        let state = this.state;
        let keys = this.state.tabs.keys;
        this.state.tabs.panels.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.tabs.panels.filter(pane => pane.key !== targetKey);

        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        state.tabs.panels = panes;
        state.tabs.active_key = activeKey;
        state.tabs.keys = keys.filter(key=>key!==targetKey);
        this.setState(state);
    }
    //点击查询按钮时候
    onSetActiveTab(field,data,start='',end=''){
        let state = this.state;
        let keys = this.state.tabs.keys;
        state.query.field = field;
        state.query.data = data;
        if(start){
            state.query.start = start;
        }
        if(end){
            state.query.end = end;
        }
        //key 为all 直接激活all Tab 说明是 状态ALL，不设置tab的field
        let key = data?data:'ALL';
        if(key=='ALL'){
            state.tabs.active_key = 'ALL';
            this.setState(state);
            return;
        }

        //field 是否合法，不合法 激活all tab
        let legal= true;
        for(let i of illegalFields){
            if(i==field){
                legal=false;
                break;
            }
        }
        // orderId 等字段
        if(!legal){
            state.tabs.active_key = 'ALL';
            this.setState(state);
            return
        }

        //是否已经添加判断
        let has = false;
        for(let k of keys){
            if(k==key){
                has=true;
                break;
            }
        }
        if(has){
            state.tabs.active_key = key;
            this.setState(state);
        }else {
            let tab = keyTabs[key];
            this.addTab(tab);
        }

    }
    //添加tab
    addTab(tab) {
        let state = this.state;
        let key = tab.key;
        state.tabs.keys.push(key);
        state.tabs.panels.push(  tab);
        state.tabs.active_key = key;
        this.setState(state);
    }
    //根据查询类型获取查询条件

}

export {SearchBarStore,SearchTabStore};