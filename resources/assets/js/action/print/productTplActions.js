/**
 * Created by Administrator on 2017/3/12.
 */
import Reflux from 'reflux';
let ProductTplActions = Reflux.createActions({
    //获取货单模版列表
    getProductTpls:{},
    //分页
    changePage:{},
    //设置每页大小
    setPageSize:{},
    //点击编辑
    editTpl:{},
    //关闭编辑对话框
    closeEdit:{},
    //选择模版记录
    changeSelectedRows:{},
    //删除记录
    deleteTpls:{},
    //设为默认
    setDefaultTpl:{},


    //初始化模版纸张字体等
    initTplPage:{},
    //初始化打印项
    initTplItems:{},
    //复选 item 时候，同步更新editor 的items

    checkEditorTplItems:{},
    //map prop to state
    mapPropsToState:{},
    //更新模版名字
    updateTplName:{},
    //更新纸张
    updatePage:{},
    //更新上线边距
    updatePaddingTop:{},
    //更新左右边距
    updatePaddingLeft:{},
    //更新字体大小
    updateFontSize:{},
    //更新字体样式
    updateFontFamily:{},
    //更新字体粗细
    updateFontWeight:{},
    //更新排序方式
    updateSorter:{},
    //选择打印项
    checkPrintItem:{},

    //获取货单打印机
    getProductTplPrinter:{},

    //打印
    print:{},
    //保存
    save:{}

});

export {ProductTplActions}
