/**
 * Created by Administrator on 2017/3/12.
 */
import Reflux from 'reflux';
let ProductActions = Reflux.createActions({
    
    //获取运单模版列表
    getProductsList:{},
    //查询商品
    searchProducts:{},
    //分页
    changePage:{},
    //设置每页大小
    setPageSize:{},
    //点击编辑
    edit:{},
    //编辑提交
    editSubmit:{},
    //取消编辑
    closeEdit:{},


    //选择模版记录
    changeSelectedRows:{},
    //删除记录
    deleteAll:{},
    //下载商品
    download:{},
    //关闭编辑对话框
    closeDownload:{},


});

export {ProductActions}
