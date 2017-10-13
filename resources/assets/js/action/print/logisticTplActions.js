/**
 * Created by Administrator on 2017/3/12.
 */
import Reflux from 'reflux';
let LogisticTplActions = Reflux.createActions({
    
    //获取运单模版列表
    getLogisticTpls:{},
    //分页
    changePage:{},
    //设置每页大小
    setPageSize:{},
    //点击编辑
    clickEdit:{},
    //关闭编辑对话框
    closeEdit:{},
    //选择模版记录
    changeSelectedRows:{},
    //删除记录
    deleteTpls:{},
    //设为默认
    setDefaultTpl:{},
    //列表打印预览
    listPrintTpl:{},

    //获取快递
    searchLogisticCompanies:{},
    //下拉菜单选择快递
    selectLogisticCompany:{},
    //初始化模版纸张字体等
    initTplPage:{},
    //初始化打印项
    initTplChekedItemKeys:{},
    //更新模版名字
    updateTplName:{},
    //更新纸张宽度
    updatePageWidth:{},
    //更新纸张高度
    updatePageHeight:{},
    //更新上下偏移
    updatePaddingTop:{},
    //更新左右偏移
    updatePaddingLeft:{},
    //更新字体大小
    updateFontSize:{},
    //更新字体样式
    updateFontFamily:{},
    //更新字体粗细
    updateFontWeight:{},
    //关闭打印项
    closePrintItem:{},
    //选择打印项
    checkPrintItem:{},
    //打开更换快递背景对话框
    updateTplImg:{},
    //关闭更新对话框
    closeImgDialog:{},
    //更换背景提交
    updateTplImgSubmit:{},
    //获取货单打印机
    getPrinters:{},
    //打印预览
    print:{},
    //保存
    save:{}

});

export {LogisticTplActions}
