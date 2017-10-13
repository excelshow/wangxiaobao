/**
 * Created by Administrator on 2017/3/12.
 */
import Reflux from 'reflux';
import Dialog from 'qnui/lib/dialog';
import { ProductActions,BaseProductActions } from '../../action/yinliu/yinliuActions';

class ProductStore extends Reflux.Store
{
    constructor() {
        super();
        this.listenables = [ProductActions];
        this.state = {
            businesses:[
                {id:'',business:'全部'}
            ],
            business:{id:''},

            products: {
                total:0,
                rows:[]
            },
            page:{
                page:1,
                limit:20,
                start:0
            },
            selectedKeys:[],//选中id
            selectedRecords:[],//选中记录
            editor:{
                title:'添加推广产品',
                visible: false,
                align: 'cc cc',
                style: {
                    width: '800px',
                }
            },


            downloader:{
                title:'下载商品',
                visible: false,
                align: 'cc cc',
                style: {
                    width: '570px'
                },
                process:{
                    total:100,
                    download:0,
                    percent:0,
                },
                error:{

                }
            }

        }
    }

    //下载商品
    onDownload(){
        let {downloader} = this.state;
        let {process,error}  = downloader;
        downloader.visible = true;
        this.setState({downloader:downloader});

        let pid = setInterval(() =>{
            $.ajax({
                url:'/app/yinliu/product/download/process/get',
                data:'',
                type:'POST',
                dataType:'json'
            }).done((response)=>{
                if(response){
                    let {total,download} = response;
                    process.total = total;
                    process.download = download;
                    process.percent = Math.floor(download*100/total);
                    downloader.process = process;
                    this.setState({downloader:downloader});
                    if(total==download&&total!=0){
                        clearInterval(pid);
                        downloader.visible = false;
                        this.setState({downloader:downloader});
                    }
                }else {
                    clearInterval(pid);
                }
            }).fail((response)=>{
                clearInterval(pid);
            })
        },1000);

        $.ajax({
            url:'/app/yinliu/product/download',
            data:'',
            type:'POST',
            dataType:'json'
        }).done((response)=>{

            if(response){

            }else {
                //this.setState({login_state:'AFTER',pwd:false});
            }

        }).fail((response)=>{
            Dialog.alert({
                content:'下载商品异常终止，请联系客服',
                closable:true ,
                title: '提示',
                onOk: () => {

                }
            })
        })
    }

    onCloseDownloader(){

        let {downloader} = this.state;;
        downloader.visible = false;
        this.setState({downloader:downloader});
    }


    onSearch(){
        let { page } = this.state;
        page.page = 1;
        this.setState({page:page});
    }

    //分页
    onChangePage(pageNum){
        let { page } = this.state;
        page.page = pageNum;
        this.setState({page:page});
        ProductActions.get();
    }

    //设置页面小
    onSetPageSize(size){
        let { page } = this.state;
        page.page = 1;
        page.limit = size;
        this.setState({page:page});
        ProductActions.get();
    }

    //添加
    onAdd(){
        let {editor} = this.state;
        editor.visible = true;
        this.setState({editor:editor});
    }


    //取消编辑
    onCancel(){
        let {editor} = this.state;
        editor.visible = false;
        this.setState({editor:editor});
    }

    //获取推广产品
    onGet()
    {
        let {page,business} = this.state;
        let data = {
            page:JSON.stringify(page),
            params:JSON.stringify({business_id:business.id})
        };
        $.ajax({
            url: '/app/yinliu/product/get',
            data: data,
            type: 'POST',
            dataType: 'json'
        }).done((response) => {

            if (!response) {
                return;
            }
            this.setState({products: response})

        }).fail((response) => {
            Dialog.alert({
                content: '请求失败',
                closable: true,
                title: '提示',
                onOk: () => {
                    //Dialog.alert({content:'alert content'});
                }
            })
            console.log('请求失败' + response)
        })
    }


    //批量删除
    onDeleteAll(){
        let {selectedKeys} = this.state;
        let data = {
            'params':JSON.stringify({ids:selectedKeys})
        };
        $.ajax({
            url:'/app/yinliu/product/delete',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{

            Dialog.alert({
                content:'操作成功',
                closable: true,
                title: '提示',
                onOk: () => {
                }
            })
            ProductActions.get();

        }).fail((response)=>{
            Dialog.alert({
                content:'请求失败',
                closable: true,
                title: '提示',
                onOk: () => {
                    //Dialog.alert({content:'alert content'});
                }
            })
            console.log('请求失败'+response)
        })
    }

    //删除商品
    onDelete(record){
        let {id} = record;
        let data = {
            'params':JSON.stringify({ids:[id]})
        };
        $.ajax({
            url:'/app/yinliu/product/delete',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{

            Dialog.alert({
                content:'操作成功',
                closable: true,
                title: '提示',
                onOk: () => {
                }
            })
            ProductActions.get();

        }).fail((response)=>{
            Dialog.alert({
                content:'请求失败',
                closable: true,
                title: '提示',
                onOk: () => {
                    //Dialog.alert({content:'alert content'});
                }
            })
            console.log('请求失败'+response)
        })

    }

    //选择记录
    onSelectRows(selectedRowKeys,records){
        this.setState({selectedKeys:selectedRowKeys,selectedRecords:records});
    }

    //选择业务
    onSelectBusiness(business){
        this.setState({business:business});
    }
    //获取所有业务
    onGetBusinesses(){
        let {businesses} = this.state;
        $.ajax({
            url: '/app/yinliu/business/get',
            data: '',
            type: 'POST',
            dataType: 'json'
        }).done((response) => {

            if (!response) {
                return;
            }
            businesses = businesses.concat(response);
            this.setState({businesses: businesses});

        }).fail((response) => {
            Dialog.alert({
                content: '获取业务失败',
                closable: true,
                title: '提示',
                onOk: () => {
                    //Dialog.alert({content:'alert content'});
                }
            })
            console.log('请求失败' + response)
        })
    }

}

class EditorStore extends Reflux.Store{
    constructor() {
        super();
        this.listenables = [BaseProductActions];
        this.state = {
            query:{
                field:'item_id',
                data:'',
            },
            businesses:[],
            business:{},

            products: {
                total:0,
                rows:[]
            },
            page:{
                page:1,
                limit:20,
                start:0
            },
            selectedKeys:[],//选中id
            selectedRecords:[],//选中记录

        }
    }
    //分页
    onChangePage(pageNum){
        let { page } = this.state;
        page.page = pageNum;
        this.setState({page:page});
        BaseProductActions.get();
    }

    //设置页面小
    onSetPageSize(size){
        let { page } = this.state;
        page.page = 1;
        page.limit = size;
        this.setState({page:page});
        BaseProductActions.get();
    }

    //输入
    onInput(filed,value){
        let {query} = this.state;
        query.data=value;
        this.setState({query:query});
    }

    //选择记录
    onSelectRows(selectedRowKeys,records){
        this.setState({selectedKeys:selectedRowKeys,selectedRecords:records});
    }

    onSearch(){
        let { page } = this.state;
        page.page = 1;
        this.setState({page:page});
    }

    //保存推广
    onSave(){

        let {business,selectedRecords} = this.state;
        if(!business.id){
            Dialog.alert({
                content: '请选择所属业务',
                closable: true,
                title: '提示',
                onOk: () => {
                }
            })
            return;
        }
        if(selectedRecords.length==0){
            Dialog.alert({
                content: '请选择要推广的商品',
                closable: true,
                title: '提示',
                onOk: () => {
                }
            })
            return;
        }
        let url='/app/yinliu/product/add';

        let data = {
            'params':JSON.stringify({business:business,products:selectedRecords})
        };
        $.ajax({
            url: url,
            data: data,
            type: 'POST',
            dataType: 'json'
        }).done((response) => {

            Dialog.alert({
                content: '操作成功',
                closable: true,
                title: '提示',
                onOk: () => {
                }
            })

            ProductActions.get();

        }).fail((response) => {
            Dialog.alert({
                content: '请求失败',
                closable: true,
                title: '提示',
                onOk: () => {
                    //Dialog.alert({content:'alert content'});
                }
            })
            console.log('请求失败' + response)
        })
    }
    //选择业务
    onSelectBusiness(business){
        this.setState({business:business});
    }
    //获取所有业务
    onGetBusinesses(){
        $.ajax({
            url: '/app/yinliu/business/get',
            data: '',
            type: 'POST',
            dataType: 'json'
        }).done((response) => {

            if (!response) {
                return;
            }
            this.setState({businesses: response})

        }).fail((response) => {
            Dialog.alert({
                content: '获取业务失败',
                closable: true,
                title: '提示',
                onOk: () => {
                    //Dialog.alert({content:'alert content'});
                }
            })
            console.log('请求失败' + response)
        })
    }

    //获取所有商品
    onGet()
    {
        let {page,query} = this.state;

        let data = {
            page:JSON.stringify(page),
            params:JSON.stringify({item_id:query.data})
        };
        $.ajax({
            url: '/app/yinliu/baseProduct/get',
            data: data,
            type: 'POST',
            dataType: 'json'
        }).done((response) => {

            if (!response) {
                return;
            }
            this.setState({products: response})

        }).fail((response) => {
            Dialog.alert({
                content: '请求失败',
                closable: true,
                title: '提示',
                onOk: () => {
                    //Dialog.alert({content:'alert content'});
                }
            })
            console.log('请求失败' + response)
        })
    }
}
export {ProductStore,EditorStore};