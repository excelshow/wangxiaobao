/**
 * Created by Administrator on 2017/3/20.
 */
import Reflux from 'reflux';
let CompanyActions = Reflux.createActions({
    //获取地址列表
    getCompanyInfo: {},
    //保存
    save:{},
    //域名是否推广
    getDomain:{}

});


let BusinessActions = Reflux.createActions({
    //获取业务列表
    get: {},
    //删除
    delete: {},
    //批量删除
    deleteAll: {},
    //选择记录
    selectRows: {},
    //添加
    add: {},
    //输入
    input:{},
    //编辑
    edit:{},
    //保存编辑
    save: {},
    //取消编辑
    cancel:{},
    //editor prop to state
    propsToState:{},

});


let ProductActions = Reflux.createActions({
    //获取推广产品列表
    get: {},
    //删除
    delete: {},
    //批量删除
    deleteAll: {},
    //选择记录
    selectRows: {},
    //分页
    changePage:{},
    //选择页面大小
    setPageSize:{},
    //获取所有业务
    getBusinesses:{},
    //选择查询业务
    selectBusiness:{},
    //添加
    add: {},
    //获取所有产品
    baseProductsGet:{},
    //输入
    input:{},
    //查询产品
    search:{},
    //保存编辑
    save: {},
    //取消编辑
    cancel:{},
    //下载商品
    download:{},
    //close downloader
    closeDownloader:{}
});


let BaseProductActions = Reflux.createActions({
    //获取推广产品列表
    get: {},
    //选择记录
    selectRows: {},
    //分页
    changePage:{},
    //选择页面大小
    setPageSize:{},
    //输入
    input:{},
    //查询产品
    search:{},
    //保存编辑
    save: {},
    //取消编辑
    cancel:{},
    //获取所有业务
    getBusinesses:{},
    //选择业务
    selectBusiness:{}
});


let ShareActions = Reflux.createActions({
    //获取推广产品列表
    getProducts: {},

    //选择记录
    selectRows: {},
    //分页
    changePage:{},
    //选择页面大小
    setPageSize:{},

    //输入
    input:{},
    //查询产品
    search:{},
    //下载商品
    download:{},
    //close downloader
    closeDownloader:{},
    //获取所有分享网站
    getSites:{},
    //分享面板
    openSharer:{},
    //关闭面板
    closeSharer:{},
    //分享
    share:{}
});

export {CompanyActions,BusinessActions,ProductActions,BaseProductActions,ShareActions}