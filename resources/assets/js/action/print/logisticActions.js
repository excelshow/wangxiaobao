/**
 * Created by Administrator on 2017/3/20.
 */
import Reflux from 'reflux';
let LogisticCompanyCooperateActions = Reflux.createActions({
    //获取地址列表
    getCompaniesList: {},
    //翻页
    changePage:{},
    //设置每页大小
    setPageSize:{},
    //设为默认
    setDefault:{},
    //删除
    delete:{},
    //选择记录
    changeSelectedRows:{},
    //新建发货物流
    addCompany:{},
    //编辑发货物流
    editCompany:{},
    //关闭对话框
    closeDialog:{},


    //查询物流公司
    searchLogisticCompany:{},
    //选择物流公司
    selectCompany:{},
    //设置是否默认
    checkCompanyDefault:{},
    //下一步 关联物流模版
    nextStep:{},
    //上一步
    lastStep:{},
    //选中模版
    selectTpl:{},

    addCompanySubmit:{}


});
export {LogisticCompanyCooperateActions}