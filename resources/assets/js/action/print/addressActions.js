/**
 * Created by Administrator on 2017/3/20.
 */
import Reflux from 'reflux';
let SenderAddressActions = Reflux.createActions({
    //获取地址列表
    getAddressList: {},
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
    //新建发货地址
    addAddress:{},
    //关闭对话框
    closeDialog:{},

    editerInit:{},
    //获取省份信息
    getProvinces:{},
    //获取城市信息
    getCities:{},
    //获取area
    getAreas:{},
    //获取邮编
    getPost:{},

    setProvince:{},
    setCity:{},
    setArea:{},
    setStreet:{},
    setPost:{},
    setPhone:{},
    setMobile:{},
    setDefault:{},
    setName:{},
    save:{}


});
export {SenderAddressActions}