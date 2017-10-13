/**
 * Created by Administrator on 2017/3/12.
 */
import Reflux from 'reflux';

//searbar 选择查询条件等
let SearchBarActions = Reflux.createActions({
    //'submit': {children: ['completed', 'failed']},
    //设置查询field data
    setQuery:{},
    setQueryRangeDate:{},
    clickSearch:{},

});

let SearchTabActions = Reflux.createActions({
    //tab
    clickTab:{},
    closeTab:{},
    //中间关联
    setActiveTab:{},

});

export {SearchBarActions,SearchTabActions}
