/**
 * Created by Administrator on 2017/3/12.
 */
import Reflux from 'reflux';
import Dialog from 'qnui/lib/dialog';
import { ProductActions } from '../../action/print/productActions';


class ProductListStore extends Reflux.Store
{
    constructor()
    {
        super();
        this.listenables = [ProductActions];
        this.state = {
            loading:false,
            page:{
                page:1,
                limit:20,
                start:0
            },
            products:{
                total:0,
                rows:[]
            },
            selectedKeys:[],//选中id
            selectedRecords:[],//选中记录


            editDialog:{
                title:'设置简称',
                visible: false,
                align: 'cc cc',
                style: {
                    width: '570px'
                },
                record:{}
            },

            downloadDialog:{
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
        };
    }


    //点击编辑
    onEdit(record){
        let {editDialog} = this.state;
        editDialog.visible = true;
        editDialog.record = record;
        this.setState({editDialog:editDialog});
    }

    //点击关闭
    onCloseEdit(){
        let {editDialog} = this.state;
        editDialog.visible = false;
        this.setState({editDialog:editDialog});
    }

    //点击提交修改i啊
    onEditSubmit(record){
        let {products,editDialog} = this.state;
        let data = {
            params:JSON.stringify({item_id:record.item_id,title:record.title,title_short:record.title_short}),
        }
        $.ajax({
            url:'/app/print/setProductShort',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{

            editDialog.visible = false;
            Dialog.alert({
                content:'操作成功',
                closable: true,
                title: '提示',
                onOk: () => {
                    this.setState({editDialog:editDialog});
                    //Dialog.alert({content:'alert content'});
                }
            });

            products.rows.map((data)=>{
                if(data.id==record.id){
                    data.title_short = record.title_short;
                }
                return data;
            })
        }).fail((response)=>{
            Dialog.alert({
                content:'操作失败',
                closable: true,
                title: '提示',
                onOk: () => {
                    this.setState({editDialog:editDialog});
                    //Dialog.alert({content:'alert content'});
                }
            })
        })
    }



    //关闭下载
    onCloseDownload(){

        let {downloadDialog} = this.state;;
        downloadDialog.visible = false;
        this.setState({downloadDialog:downloadDialog});
    }
    //选择记录
    onChangeSelectedRows(selectedRowKeys,records){
        this.setState({selectedKeys:selectedRowKeys,selectedRecords:records});
    }
    //删除
    onDeleteAll(ids){
        //let{id} = record;
        if(ids.length==0){
            Dialog.alert({
                content:'请选择要删除的数据',
                closable: true,
                title: '提示',
                onOk: () => {
                    //Dialog.alert({content:'alert content'});
                }
            })
            return;
        }
        let data = {
            params:JSON.stringify({ids:ids}),
        }
        $.ajax({
            url:'/app/print/deleteProducts',
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
            this.onGetProductsList('');
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

    //下载商品
    onDownload(){
        let {downloadDialog} = this.state;
        let {process,error}  = downloadDialog;
        downloadDialog.visible = true;
        this.setState({downloadDialog:downloadDialog});

        let pid = setInterval(() =>{
            $.ajax({
                url:'/app/print/getProductsDownloadProcess',
                data:'',
                type:'POST',
                dataType:'json'
            }).done((response)=>{
                if(response){
                    let {total,download} = response;
                    process.total = total;
                    process.download = download;
                    process.percent = Math.floor(download*100/total);
                    downloadDialog.process = process;
                    this.setState({downloadDialog:downloadDialog});
                    if(total==download&&total!=0){
                        clearInterval(pid);
                        downloadDialog.visible = false;
                        this.setState({downloadDialog:downloadDialog});
                    }
                }else {
                    clearInterval(pid);
                }
            }).fail((response)=>{
                clearInterval(pid);
            })
        },1000);

        $.ajax({
            url:'/app/print/downloadProducts',
            data:'',
            type:'POST',
            dataType:'json'
        }).done((response)=>{

            if(response){
                this.onGetProductsList('');
            }else {
                //this.setState({login_state:'AFTER',pwd:false});
            }

        }).fail((response)=>{
            Dialog.alert({
                content:'下载商品异常终止，请联系客服',
                closable:true ,
                title: '提示',
                onOk: () => {
                    this.onGetProductsList('');
                }
            })
        })
    }

    //查询商品
    onSearchProducts(){

        let {page} = this.state;
        page.page = 1;
        this.setState({page:page});
    }
    //获取商品
    onGetProductsList(title){
        let state = this.state;
        let {page} = state;
        state.loading=true;
        this.setState(state);

        let data = {
            params:JSON.stringify({title:title}),
            page:JSON.stringify(page),
        }
        $.ajax({
            url:'/app/print/getProductsList',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{

            state.loading=false;
            this.setState(state);
            if(response){
                let{total,rows} = response;
                let {products} = state;
                products.total = total;
                products.rows = rows;
                this.setState({products:products});
            }else {
                //this.setState({login_state:'AFTER',pwd:false});
            }

        }).fail((response)=>{
            Dialog.alert({
                content:'获取商品失败,点击确定重试',
                closable:true ,
                title: '提示',
                onOk: () => {
                    this.onGetProductsList(title);
                }
            })
        })

    }

}

export {ProductListStore};