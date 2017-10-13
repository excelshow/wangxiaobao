/**
 * Created by Administrator on 2017/3/20.
 */
import Reflux from 'reflux';
let ElectricTplActions = Reflux.createActions({
    //获取列表
    getAccountList: {},
    //翻页
    changePage:{},
    //设置每页大小
    setPageSize:{},
    //编辑
    edit:{},
    //删除
    delete:{},
    //选择记录
    changeSelectedRows:{},

    //新建账号
    add:{},
    //关闭对话框
    closeDialog:{},

    editorInit:{},
    //获取面单公司
    getCompanies:{},
    //选择物流公司
    selectCompany:{},
    save:{}

});
export {ElectricTplActions}