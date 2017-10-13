/**
 * Created by Administrator on 2017/3/12.
 */
import Reflux from 'reflux';
import Dialog from 'qnui/lib/dialog';
import { LogisticTplActions } from '../../action/print/logisticTplActions';




function print(printType,tpl,printerIndex=-1){
    if(printType!='print'&&printType!='preview'){
        return;
    }
    let {items} = tpl;
    let {tpl_name:tplName,page_width:pageWidth,page_height:pageHeight,padding_top:paddingTop,padding_left:paddingLeft,company_name:pageName,background_img:imgUrl} = tpl;
    let img = "<img border='0' src='"+imgUrl+"'/>" ;
    LODOP.PRINT_INITA(paddingTop+'mm',paddingLeft+'mm',pageWidth+'mm',pageHeight+'mm',tplName);
    LODOP.SET_PRINT_PAGESIZE(1,pageWidth+'mm',pageHeight+'mm',pageName);
    LODOP.ADD_PRINT_SETUP_BKIMG(img);
    LODOP.SET_SHOW_MODE('BKIMG_LEFT',0);
    LODOP.SET_SHOW_MODE('BKIMG_TOP',0);
    LODOP.SET_SHOW_MODE('BKIMG_WIDTH',pageWidth+'mm');
    //LODOP.SET_SHOW_MODE("BKIMG_HEIGHT",pageHeight+'mm'); //这句可不加，因宽高比例固定按原图的
    LODOP.SET_SHOW_MODE('BKIMG_IN_PREVIEW',1);
    for(var i=0;i<items.length;i++){
        var item = items[i];
        if(item.status=='N'){
            continue;
        }
        var className = item.item_name;
        var weight = item.font_weight;
        if(weight=='bold'){
            weight=700;
        }
        LODOP.ADD_PRINT_TEXTA(className,item.margin_top,item.margin_left,item.width,item.height,item.content);
        LODOP.SET_PRINT_STYLEA(className,"FontName",item.font_family);
        LODOP.SET_PRINT_STYLEA(className,"FontSize",item.font_size);
        LODOP.SET_PRINT_STYLEA(className,"Bold",weight);
    };

    LODOP.SET_PRINTER_INDEXA(printerIndex);
    if(printType=='preview'){
        LODOP.PREVIEW();

    }else {
        LODOP.PRINT();
    }
}


class LogisticTplListStore extends Reflux.Store
{
    constructor()
    {
        super();
        this.listenables = [LogisticTplActions];
        this.state = {
            loading:false,
            page:{
                page:1,
                limit:20,
                start:0
            },
            tpls:{
                total:0,
                rows:[]
            },
            selectedTplKeys:[],//选中id
            selectedTplRecords:[],//选中记录

            edit_dialog:{
                title:'编辑运单模版',
                visible: false,
                align: 'cc cc',
                style: {
                    width: '80%',
                    //height:'80%'
                }
            },
            //编辑
            editType:'update',
            editTpl:{},
            editTplItems:[],
            //运单打印机
            printer:{},
        };
    }
    //获取运单打印机
    onGetPrinters(){

        $.ajax({
            url:'/app/print/getPrinterSetting',
            data:'',
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            if(!response){
                return;
            }
            this.setState({printer:response});

        }).fail((response)=> {
            Dialog.alert({
                content: '获取运单打印机设置失败,点击确认重试',
                 closable: true,
                title: '提示',
                onOk: () => {
                    this.onGetPrinters();
                }
            })
        });
    }
    //设为默认
    onSetDefaultTpl(tpl){
        tpl.items='';
        let data = {
            params:JSON.stringify({tpl:tpl}),
            //page:JSON.stringify(page),
            //sorter:JSON.stringify({}),
        }

        $.ajax({
            url:'/app/print/setDefaultLogisticTpl',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{

            Dialog.alert({
                content:'操作成功',
                 closable: true,
                title: '提示',
                onOk: () => {
                    //Dialog.alert({content:'alert content'});
                }
            })
            LogisticTplActions.getLogisticTpls();
        }).fail((response)=>{
            Dialog.alert({
                content:'操作失败',
                 closable: true,
                title: '提示',
                onOk: () => {
                    //Dialog.alert({content:'alert content'});
                }
            })
        })
    }

    //删除记录
    onDeleteTpls(tplIds){

        if(!tplIds.length){
            Dialog.alert({
                content:'请选择要删除的记录',
                 closable: true,
                title: '提示',
                onOk: () => {
                    //Dialog.alert({content:'alert content'});
                }
            })
            return;
        }

        let data = {
            params:JSON.stringify({'tpls':tplIds}),
            //page:JSON.stringify(page),
            //sorter:JSON.stringify({}),
        }
        $.ajax({
            url:'/app/print/deleteLogisticTpls',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{

            Dialog.alert({
                content:'删除成功',
                 closable: true,
                title: '提示',
                onOk: () => {
                    //Dialog.alert({content:'alert content'});
                }
            })
            LogisticTplActions.getLogisticTpls();
        }).fail((response)=>{
            Dialog.alert({
                content:'操作失败',
                 closable: true,
                title: '提示',
                onOk: () => {
                    //Dialog.alert({content:'alert content'});
                }
            })
        })
    }

    //打印预览
    onPrint(printType,tpl){
        let {printer} = this.state;
        let {logistic_tpl_printer_index:printerIndex}=printer;
        if(!printerIndex&&printType!='preview'){
            Dialog.confirm({
                content:'检测到您尚未设置运单打印机,用默认打印机打印吗',
                 closable: true,
                title: '提示',
                onOk: () => {
                    print(printType,tpl,-1);
                },
                onCancel:() => {
                }
            })
            return;
        }
        print(printType,tpl,printerIndex);
    }

    //选择记录
    onChangeSelectedRows(selectedRowKeys,records){
        let state = this.state;
        state.selectedTplKeys = selectedRowKeys;
        state.selectedTplRecords = records;
        this.setState(state);
    }

    //点击编辑
    onClickEdit(type,tpl){

        let title = type=='update'?'编辑运单模版':'新建运单模版';
        let state = this.state;
        let {editTpl,edit_dialog,} = state;

        let editItems = [];
        state.editType = type;
        if(type=='update'){
            let {items} = tpl;
            Object.assign(editTpl,tpl);
            items.forEach((item)=>{
                if(item.status=='Y'){
                    editItems.push(item);
                }
            });
        }

        edit_dialog.visible = true;
        edit_dialog.title = title;
        state.edit_dialog = edit_dialog;
        state.editTpl = editTpl;
        state.editTplItems =editItems;
        state.printType = '';
        this.setState(state);
    }

    //点击关闭
    onCloseEdit(){

        let state = this.state;
        let {edit_dialog} = state;
        edit_dialog.visible = false;
        state.editTpl = {};
        state.editTplItems = [];
        this.setState(state);
    }

    //设置每页大小
    onSetPageSize(size){
        let state = this.state;
        state.page.page = 1;
        state.page.limit = size;
        this.setState(state);
    }
    //分页
    onChangePage(page){
        let state = this.state;
        state.page.page = page;
        this.setState(state);
    }

    //获取运单模版列表
    onGetLogisticTpls(tplName=''){
        
        let state = this.state;
        let {page} = state;
        state.loading=true;
        this.setState(state);
        let data = {
            params:JSON.stringify({tpl_name:tplName}),
            page:JSON.stringify(page),
            sorter:JSON.stringify({}),
        }
        $.ajax({
            url:'/app/print/getLogisticTpls',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{

            state.loading=false;
            this.setState(state);
            if(response){
                let{total,rows} = response;
                state.tpls.total = total;
                state.tpls.rows = rows;
                this.setState(state);
            }else {
                //this.setState({login_state:'AFTER',pwd:false});
                Dialog.alert({
                    content:'获取列表失败',
                     closable: true,
                    title: '提示',
                    onOk: () => {
                        //Dialog.alert({content:'alert content'});
                    }
                })
            }

        }).fail((response)=>{
            Dialog.alert({
                content:'获取列表失败',
                 closable: true,
                title: '提示',
                onOk: () => {
                    //Dialog.alert({content:'alert content'});
                }
            })
        })
    }
}



class LogisticTplEditerStore extends Reflux.Store
{
    constructor()
    {
        super();
        this.listenables = [LogisticTplActions];
        this.state = {
            companies:[],
            pages: [
                {name:'A4',short:'A4',width:210,height:297},
                {name:'三联整张',short:'L31',width:241,height:280},
                {name:'三联二等分',short:'L32',width:241,height:140},
                {name:'三联三等分',short:'L33',width:241,height:93.1},

            ],
            fontSizes: [
                {text:'12',value:'12'},
                {text:'13',value:'13'},
                {text:'14',value:'14'},
                {text:'15',value:'15'},
                {text:'16',value:'16'},
                {text:'17',value:'17'},
                {text:'18',value:'18'},
                {text:'19',value:'19'},
                {text:'20',value:'20'},
                {text:'21',value:'21'},
                {text:'22',value:'22'},
                {text:'23',value:'23'},
                {text:'24',value:'24'},
                {text:'25',value:'25'},
                {text:'26',value:'26'},
                {text:'27',value:'27'},
                {text:'28',value:'28'},
                {text:'29',value:'29'},
                {text:'30',value:'30'},
                {text:'35',value:'35'},
                {text:'40',value:'40'},
                {text:'45',value:'45'},
                {text:'50',value:'50'},
            ],
            fontFamilies:[
                {text:'微软雅黑',value:'微软雅黑'},
                {text:'宋体',value:'宋体'},
                {text:'黑体',value:'黑体'},
                {text:'新宋体',value:'新宋体'}],
            fontWeights: [
                {text:'正常',value:'400'},
                {text:'粗体',value:'700'},],
            //更新后tpl
            updatedTpl:{id:'',tpl_name:'空白物流模版',tpl_type:'user',
                company_name:null,company_id:'',company_no:'',background_img:'',
                page_width:230,page_height:127, padding_top:0,padding_left:0,
                font_size:15,font_family:'微软雅黑',font_weight:400,is_default:'N'
            },
            //存放原始模版背景图
            originalTpl:{},
            imgDialog:{
                title:'更换快递背景',
                visible: false,
                align: 'cc cc',
                style: {
                    width: '400px',
                    height:'300px'
                }
            },
        };
    }

    //选择物流公司
    onSelectLogisticCompany(company){
        let state=this.state;
        let {updatedTpl,originalTpl} = state;
        let {company_name:companyName,company_id:companyId,company_no:companyNo,background_img:backgroundImg} = company;

        if(!originalTpl.company_id){
            originalTpl = Object.assign({},updatedTpl);
            state.originalTpl = originalTpl;
        }

        updatedTpl.background_img = backgroundImg;
        if(companyId==originalTpl.company_id){
            //有原始图则用原始图
            if(originalTpl.background_img){
                updatedTpl.background_img = originalTpl.background_img;
            }
        }

        updatedTpl.company_name = companyName;
        updatedTpl.company_id = companyId;
        updatedTpl.company_no = companyNo;
        state.updatedTpl = updatedTpl;
        this.setState(state);
    }
    
    //获取物流公司
    onSearchLogisticCompanies(name){
        let data = {
            params:JSON.stringify({name:name}),
            //page:JSON.stringify(page),
            //sorter:JSON.stringify({}),
        }
        $.ajax({
            url:'/app/print/selectLogisticCompany',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            let state = this.state;
            state.companies = response;
            this.setState(state);

        }).fail((response)=>{

        })
    }

    //editer prop 的tpl 保存到state 供使用编辑
    onInitTplPage(tpl){
        let state = this.state;
        state.updatedTpl = tpl;
        this.setState(state);
    }
    //更新模版名字
    onUpdateTplName(tplName){
        let state = this.state;
        let {updatedTpl} = state;
        updatedTpl.tpl_name = tplName;
        state.updatedTpl = updatedTpl;
        this.setState(state);
    }
    //更新纸张宽度
    onUpdatePageWidth(width){
        //console.log(page);
        let state = this.state;
        let {updatedTpl} = state;
        updatedTpl.page_width = width;
        state.updatedTpl = updatedTpl;
        this.setState(state);
    }

    //更新纸张类型
    onUpdatePageHeight(height){
        //console.log(page);
        let state = this.state;
        let {updatedTpl} = state;
        updatedTpl.page_height = height;
        state.updatedTpl = updatedTpl;
        this.setState(state);
    }

    //更新上下边距
    onUpdatePaddingTop(paddingTop){
        let state = this.state;
        let {updatedTpl} = state;
        updatedTpl.padding_top = paddingTop;
        state.updatedTpl = updatedTpl;
        this.setState(state);
    }

    //更新左右边距
    onUpdatePaddingLeft(paddingLeft){
        let state = this.state;
        let {updatedTpl} = state;
        updatedTpl.padding_left = paddingLeft;
        state.updatedTpl = updatedTpl;
        this.setState(state);
    }
    //更新字体大小
    onUpdateFontSize(fontSize){
        let state = this.state;
        let {updatedTpl} = state;
        updatedTpl.font_size = fontSize;
        state.updatedTpl = updatedTpl;
        this.setState(state);
    }
    //更新字体样式
    onUpdateFontFamily(fontFamily){
        let state = this.state;
        let {updatedTpl} = state;
        updatedTpl.font_family= fontFamily;
        state.updatedTpl = updatedTpl;
        this.setState(state);
    }

    //更新字体粗细
    onUpdateFontWeight(fontWeight){
        let state = this.state;
        let {updatedTpl} = state;
        updatedTpl.font_weight= fontWeight;
        state.updatedTpl = updatedTpl;
        this.setState(state);
    }
    
    //打开更换背景对话框
    onUpdateTplImg(){
        let state = this.state;
        let {imgDialog} = state;
        imgDialog.visible= true;
        state.imgDialog = imgDialog;
        this.setState(state);
    }
    //关闭更换对话框
    onCloseImgDialog(){
        let state = this.state;
        let {imgDialog} = state;
        imgDialog.visible= false;
        state.imgDialog = imgDialog;
        this.setState(state);
    }
    //更换背景提交
    onUpdateTplImgSubmit(imgUrl){
        let state = this.state;
        let {updatedTpl} = state;
        updatedTpl.background_img= imgUrl;
        state.updatedTpl = updatedTpl;
        this.setState(state);
    }

    //保存模版
    onSave(editType,tpl,items){
        let {tpl_type:tplType} = tpl;

        if(tplType=='sys'){
            Dialog.confirm({
                content:'系统模版不能修改,你要新建模版吗?',
                 closable: true,
                title: '提示',
                onOk: () => {
                    //新建模版
                    tpl.tpl_type='user';
                    this.onSave('add',tpl,items);
                },
                onCancel:() => {

                }
            })
            return;
        }
        let url = (editType=='update')?'/app/print/updateLogisticTpl':'/app/print/addLogisticTpl';
        //console.log(tpl);
        let params = {tpl:tpl,items:items};
        let data = {
            params:JSON.stringify(params),
        }
        $.ajax({
            url:url,
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            let msg = '操作成功';
            if(response){
                msg = '操作成功';
            }else {
                msg = '操作失败';
            }
            Dialog.alert({
                content:msg,
                 closable: true,
                title: '提示',
                onOk: () => {
                    LogisticTplActions.getLogisticTpls();
                    LogisticTplActions.closeEdit();
                    //Dialog.alert({content:'alert content'});
                }
            })

        }).fail((response)=>{
            Dialog.alert({
                content:'请求失败',
                 closable: true,
                title: '提示',
                onOk: () => {
                    //Dialog.alert({content:'alert content'});
                }
            })
        })
    }

}



class LogisticTplAreaStore extends Reflux.Store
{
    constructor()
    {
        super();
        this.listenables = [LogisticTplActions];
        this.state = {
            
            }
    }

}



class LogisticTplItemStore extends Reflux.Store
{
    constructor()
    {
        super();
        this.listenables = [LogisticTplActions];
        this.state = {
            defaultExpandedKeys:[
                'tpl-sender-info','tpl-receiver-info',
            ],
            checkedItemKeys:[
                'tpl-sender-name','tpl-sender-mobile','tpl-sender-post','tpl-sender-address',
                'tpl-receiver-name','tpl-receiver-mobile','tpl-receiver-post','tpl-receiver-address',
            ],
            items:{
                tplInfo:[
                    {text:'自定义1',key:'tpl-self-info-1'},
                    {text:'自定义2',key:'tpl-self-info-2'},
                    {text:'自定义3',key:'tpl-self-info-3'}
                ],
                orderInfo:[
                    {text:'订单编号',key:'tpl-order-id'},
                    {text:'下单时间',key:'tpl-order-create-time'},
                    {text:'付款时间',key:'tpl-order-pay-time'},
                    {text:'发货时间',key:'tpl-order-send-time'},
                    {text:'商品总额',key:'tpl-order-product-payment'},
                    {text:'优惠金额',key:'tpl-order-discount'},
                    {text:'运费金额',key:'tpl-order-carriage'},
                    {text:'实付总额',key:'tpl-order-payment'},
                    {text:'货品信息',key:'tpl-order-product-short-title'},
                    {text:'货品总数',key:'tpl-order-product-total'},
                ],
                buyerInfo:[
                    {text:'买家旺旺',key:'tpl-buyer-nick'},
                    {text:'买家姓名',key:'tpl-buyer-name'},
                    {text:'买家手机',key:'tpl-buyer-mobile'},
                    {text:'买家留言',key:'tpl-buyer-message'},
                ],
                sellerInfo:[
                    {text:'卖家旺旺',key:'tpl-seller-nick'},
                    {text:'卖家姓名',key:'tpl-seller-name'},
                    {text:'卖家手机',key:'tpl-seller-mobile'},
                    {text:'卖家备注',key:'tpl-seller-remark'},

                ],
                senderInfo:[
                    {text:'寄件姓名',key:'tpl-sender-name'},
                    {text:'寄件手机',key:'tpl-sender-mobile'},
                    {text:'寄件固话',key:'tpl-sender-phone'},
                    {text:'寄件邮编',key:'tpl-sender-post'},
                    {text:'发货省份',key:'tpl-sender-province'},
                    {text:'发货地址',key:'tpl-sender-address'},
                ],
                receiverInfo:[
                    {text:'收件姓名',key:'tpl-receiver-name'},
                    {text:'收件手机',key:'tpl-receiver-mobile'},
                    {text:'收件固话',key:'tpl-receiver-phone'},
                    {text:'收件邮编',key:'tpl-receiver-post'},
                    {text:'收件省份',key:'tpl-receiver-province'},
                    {text:'收件地址',key:'tpl-receiver-address'},
                ],

                productInfo:[
                    {text:'商品标题',key:'tpl-product-title'},
                    {text:'商品简称',key:'tpl-product-short-title'},
                    {text:'简称+属性+数量+单位',key:'tpl-product-short-info'},
                ],
            }
        }
    }


    //保存
    onInitTplChekedItemKeys(items){
        let state = this.state;
        let keys = items.map((data)=>{
            return data.item_name;
        });
        state.checkedItemKeys = keys;
        this.setState(state);
    }
    //关闭打印项
    onClosePrintItem(key){
        let state = this.state;
        let {checkedItemKeys} = state;
        checkedItemKeys = checkedItemKeys.filter((data)=>{
            return data==key?false:true;
        });
        state.checkedItemKeys = checkedItemKeys;
        this.setState(state);
    }

    //设置打印项
    onCheckPrintItem(checkedKeys){
        let state = this.state;
        state.checkedItemKeys = checkedKeys;
        this.setState(state);
    }
}
export {LogisticTplListStore,LogisticTplEditerStore,LogisticTplAreaStore,LogisticTplItemStore};