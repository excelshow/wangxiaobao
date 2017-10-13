/**
 * Created by Administrator on 2017/3/12.
 */
import Reflux from 'reflux';
import Dialog from 'qnui/lib/dialog';
import { ProductTplActions } from '../../action/print/productTplActions';



class TplListStore extends Reflux.Store
{
    constructor()
    {
        super();
        this.listenables = [ProductTplActions];
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

            editor:{
                title:'编辑货单模版',
                visible: false,
                align: 'cc cc',
                style: {
                    width: '80%',
                   // height:'80%'
                }
            },

            editTpl:{},
            editTplItems:[],

            //货单打印机
            printer:{},
        };
    }
    //获取货单打印机
    onGetProductTplPrinter(){

        $.ajax({
            url:'/app/print/getPrinterSetting',
            data:'',
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            //let{ logistic_tpl_printer_index:logIndex,logistic_tpl_printer_name:logName} = response;
            if(!response){
                return;
            }
            this.setState({printer:response});

        }).fail((response)=> {
            Dialog.alert({
                content: '获取货单打印机设置失败,点击确认重试',
                closable: true,
                title: '提示',
                onOk: () => {
                    this.onGetProductTplPrinter();
                }
            })
        });
    }
    //设为默认
    onSetDefaultTpl(productTpl){
        let{id:tplId,tpl_type:tplType,tpl_name:tplName} = productTpl;
        let data = {
            params:JSON.stringify({tpl_id:tplId,tpl_type:tplType,tpl_name:tplName}),
            //page:JSON.stringify(page),
            //sorter:JSON.stringify({}),
        }

        $.ajax({
            url:'/app/print/setDefaultProductTpl',
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
            ProductTplActions.getProductTpls();
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
            url:'/app/print/deleteProductTpls',
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
            ProductTplActions.getProductTpls();
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


    //选择记录
    onChangeSelectedRows(selectedRowKeys,records){
        let state = this.state;
        state.selectedTplKeys = selectedRowKeys;
        state.selectedTplRecords = records;
        this.setState(state);
    }

    //新建或者编辑模版
    onEditTpl(tpl={}){
        let title = '新建货单模版';
        let items = [];
        if(tpl.created_at){
            title = '编辑货单模版';
        }
        if(tpl.items){
            items = tpl.items;
        }

        items = items.filter((item)=>{
            return item.status=='Y'?true:false;
        });

        let {editor} = this.state;
        editor.visible = true;
        editor.title = title;
        this.setState({editor:editor,editTpl:tpl,editTplItems:items });

    }

    //点击关闭
    onCloseEdit(){
        let {editor} = this.state;
        editor.visible = false;
        this.setState({editor:editor,editTpl:{},editTplItems:[] });
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
    //获取货单模版列表
    onGetProductTpls(){
        let state = this.state;
        let {page} = state;
        state.loading=true;
        this.setState(state);
        let data = {
            params:JSON.stringify({}),
            page:JSON.stringify(page),
            sorter:JSON.stringify({}),
        }
        $.ajax({
            url:'/app/print/getProductTpls',
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
            }

        }).fail((response)=>{
            console.log('请求失败'+response)
        })
    }
}



class EditorStore extends Reflux.Store
{
    constructor()
    {
        super();
        this.listenables = [ProductTplActions];
        this.state = {
            
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
            ],
            fontFamilies:[
                {text:'微软雅黑',value:'微软雅黑'},
                {text:'宋体',value:'宋体'},
                {text:'黑体',value:'黑体'},
                {text:'新宋体',value:'新宋体'}],
            fontWeights: [
                {text:'正常',value:'400'},
                {text:'粗体',value:'700'},],
            sorters:[
                {name:'产品货号升序',key:'cargoAsc',field:'product_cargo_number',order:'asc'},
                {name:'产品货号降序',key:'cargoDesc',field:'product_cargo_number',order:'desc'},
                {name:'单品货号升序',key:'skuAsc',field:'sku_cargo_number',order:'asc'},
                {name:'单品货号降序',key:'skuDesc',field:'sku_cargo_number',order:'desc'},
                {name:'商品标题升序',key:'nameAsc',field:'product_name',order:'asc'},
                {name:'商品标题降序',key:'nameDesc',field:'product_name',order:'desc'},
            ],

            //更新后tpl
            tpl:{id:'',tpl_name:'通用货单模版',tpl_type:'user',
                page_name:'三联二等分',page_width:241,page_height:140,
                sorter_name:'产品货号升序',sorter_key:'product_cargo_number',sorter_order:'asc',
                font_size:12,font_family:'微软雅黑',font_weight:400,
                padding_top:10,padding_left:10
            },
            tplItems:[],
            //货单打印机
            printer:{}
        };
    }

    //获取货单打印机
    onGetProductTplPrinter(){

        $.ajax({
            url:'/app/print/getPrinterSetting',
            data:'',
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            //let{ logistic_tpl_printer_index:logIndex,logistic_tpl_printer_name:logName} = response;
            if(!response){
                return;
            }
            this.setState({printer:response});

        }).fail((response)=> {
            Dialog.alert({
                content: '获取货单打印机设置失败,点击确认重试',
                closable: true,
                title: '提示',
                onOk: () => {
                    this.onGetProductTplPrinter();
                }
            })
        });
    }
    //editor prop 的tpl 保存到state 供使用编辑
    onInitTplPage(tpl){
        this.setState({tpl:tpl});
    }

    //prop 数据保存到tore
    onMapPropsToState(tpl,items){
        this.setState({tpl:tpl,tplItems:items});
    }

    onCheckEditorTplItems(items){
        this.setState({tplItems:items});
    }

    //更新模版名字
    onUpdateTplName(tplName){
        let state = this.state;
        let {tpl} = state;
        tpl.tpl_name = tplName;
        this.setState({tpl:tpl});
    }
    //更新纸张类型
    onUpdatePage(page){
        //console.log(page);
        let state = this.state;
        let {tpl} = state;
        tpl.page_name = page.name;
        tpl.page_width = page.width;
        tpl.page_height = page.height;
        this.setState({tpl:tpl});
    }
    //更新上下边距
    onUpdatePaddingTop(paddingTop){
        let state = this.state;
        let {tpl} = state;
        tpl.padding_top = paddingTop;
        this.setState({tpl:tpl});
    }

    //更新左右边距
    onUpdatePaddingLeft(paddingLeft){
        let state = this.state;
        let {tpl} = state;
        tpl.padding_left = paddingLeft;
        this.setState({tpl:tpl});
    }
    //更新字体大小
    onUpdateFontSize(fontSize){
        let state = this.state;
        let {tpl} = state;
        tpl.font_size = fontSize;
        this.setState({tpl:tpl});
    }
    //更新字体样式
    onUpdateFontFamily(fontFamily){
        let state = this.state;
        let {tpl} = state;
        tpl.font_family= fontFamily;
        this.setState({tpl:tpl});
    }

    //更新字体粗细
    onUpdateFontWeight(fontWeight){
        let state = this.state;
        let {tpl} = state;
        tpl.font_weight= fontWeight;
        this.setState({tpl:tpl});
    }

    //更新排序方式
    onUpdateSorter(sorter){
        let state = this.state;
        let {tpl} = state;
        tpl.sorter_name= sorter.name;
        tpl.sorter_key= sorter.field;
        tpl.sorter_order = sorter.order;
        this.setState({tpl:tpl});
    }
    //保存修改
    onSave(tpl,items){

        let url = (tpl.id)?'/app/print/updateProductTpl':'/app/print/addProductTpl';

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
                    ProductTplActions.getProductTpls();
                    ProductTplActions.closeEdit();
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

class EditorAreaStore extends Reflux.Store
{
    constructor()
    {
        super();
        this.listenables = [ProductTplActions];
        this.state = {}


    }

    //打印预览
    onPrint(orderId='',tpl={},html='',printType='print',printerIndex=-1){

        if(printType!='print'&&printType!='preview'){
            return;
        }

        if(printType=='preview'){
            createPage();
            LODOP.PREVIEW();
            return;
        }
        if(!orderId){
            createPage();
            LODOP.PRINT();
            return;
        }


        //执行询问打印
        let personCounter = sessionStorage.getItem('PRINTER_USED');
        personCounter = personCounter?personCounter:0;
        sessionStorage.setItem('PRINTER_USED',1);
        if(personCounter!=0){
            setTimeout(()=>{
                this.onPrint(orderId,tpl,html,printType,printerIndex);
            },100);
            return;
        }
        //打印
        setTimeout(()=>{
            let lock = sessionStorage.getItem('RETURN_LOCK');
            lock = lock?lock:'FREE';
            //上锁
            sessionStorage.setItem('RETURN_LOCK','BUSY');
            if(lock!='FREE'){
                //如果繁忙就继续询问
                this.onPrint(orderId,tpl,html,printType,printerIndex);
                return;
            }
            //console.log('receiverName',order.receiver_name);
            LODOP.On_Return=(TaskID,Value)=>{
                let tasks = sessionStorage.getItem('productPrintTasks');
                tasks = tasks?JSON.parse(tasks):{};
                let job = Value;
                let task = {order_id:orderId,product_job:job,product_job_status:'1'};
                //job
                tasks[orderId] = task;
                tasks = JSON.stringify(tasks);
                sessionStorage.setItem('productPrintTasks',tasks);
                //开锁
                sessionStorage.setItem('RETURN_LOCK','FREE');
                sessionStorage.setItem('PRINTER_USED',0);
            };
            createPage();
            LODOP.PRINT();
        },50);


        function createPage() {
            let {tpl_name:tplName,page_width:pageWidth,page_height:pageHeight,page_name:pageName} = tpl;
            let style="<style>"+document.getElementById("sty-product-tpl").innerHTML+"</style>";
            let htmlTpl = style+"<body>"+html+"</body>";

            LODOP.PRINT_INIT(tplName);
            LODOP.SET_PRINT_PAGESIZE(1,pageWidth+'mm',pageHeight+'mm',pageName);
            LODOP.SET_PRINT_MODE("POS_BASEON_PAPER",true);
            LODOP.ADD_PRINT_HTM('0mm','0mm','100%','100%',htmlTpl);
            printerIndex = printerIndex==''?-1:printerIndex;
            LODOP.SET_PRINTER_INDEXA(printerIndex);
            LODOP.SET_PRINT_MODE('CATCH_PRINT_STATUS',true);
        }

    }

}
class EditorOptionStore extends Reflux.Store
{
    constructor()
    {
        super();
        this.listenables = [ProductTplActions];
        this.state = {
            defaultExpandedKeys:[
                'tpl-order-info',
                'tpl-buyer-info','tpl-seller-info'
            ],
            checkedItemKeys:[],
            options:{
                tplInfo:[
                    {text:'发货单',key:'tpl-title'},
                    {text:'欢迎下次光临',key:'tpl-tail'},
                    {text:'分割线',key:'tpl-hr'}
                ],
                orderInfo:[
                    {text:'订单编号',key:'tpl-order-id'},
                    {text:'下单时间',key:'tpl-order-create-time'},
                    {text:'付款时间',key:'tpl-order-pay-time'},
                    {text:'金额信息',key:'tpl-order-payment-info'},
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
                    {text:'发货地址',key:'tpl-sender-address'},
                ],
                receiverInfo:[
                    {text:'收件姓名',key:'tpl-receiver-name'},
                    {text:'收件手机',key:'tpl-receiver-mobile'},
                    {text:'收件邮编',key:'tpl-receiver-post'},
                    {text:'收件地址',key:'tpl-receiver-address'},
                ],
                productInfo:[
                    {text:'商品标题',key:'tpl-product-title'},
                    {text:'商品简称',key:'tpl-product-title-short'},
                    {text:'主图',key:'tpl-product-img'},
                    {text:'产品货号',key:'tpl-product-cargo-number'},
                    {text:'单品货号',key:'tpl-product-sku-number'},
                    {text:'属性',key:'tpl-product-props'},
                    {text:'单价',key:'tpl-product-price'},
                    {text:'数量',key:'tpl-product-total'},
                    {text:'单位',key:'tpl-product-unit'},
                ],
            }
        }
    }

    onInitTplItems(items){
        let keys = [];
        items.forEach((item)=>{
            keys.push(item.item_name);
        });
        this.setState({checkedItemKeys:keys});
    }
    //设置打印项
    onCheckPrintItem(checkedKeys){
        this.setState({checkedItemKeys:checkedKeys});
    }


}
export {TplListStore,EditorStore,EditorAreaStore,EditorOptionStore};