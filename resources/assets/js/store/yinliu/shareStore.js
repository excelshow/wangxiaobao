/**
 * Created by Administrator on 2017/3/12.
 */
import Reflux from 'reflux';
import Dialog from 'qnui/lib/dialog';
import {ShareActions} from '../../action/yinliu/yinliuActions';

class ProductStore extends Reflux.Store
{
    constructor() {
        super();
        this.listenables = [ShareActions];
        this.state = {
            query:{
                field:'item_id',
                data:''
            },
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

            sites:[],//分享网站

            sharer:{
                title:'百站分享',
                visible: false,
                align: 'cc cc',
                style: {
                    width: '570px'
                },
                product:{}
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

    onShare(site){
        //console.log(site);
        let {sharer} = this.state;
        let {product} = sharer;
        let {web_id} = site;
        let {item_id,title,img_url:imgUrl} = product;
        let url = 'https://detail.1688.com/offer/'+item_id+'.html';
        let shareUrl = 'http://www.jiathis.com/send/?webid='+web_id+'&url='+url+'&title='+title+'&summary='+'&pic='+imgUrl+'&uid=';
        window.open(shareUrl,'_blank');
    }
    onOpenSharer(product){
        let {sharer} = this.state;
        sharer.product = product;
        sharer.visible = true;
        this.setState({sharer:sharer});
    }

    onCloseSharer(){
        let {sharer} = this.state;
        sharer.product = {};
        sharer.visible = false;
        this.setState({sharer:sharer});
    }
    //下载商品
    onDownload(){
        let {downloader} = this.state;
        let {process,error}  = downloader;
        downloader.visible = true;
        this.setState({downloader:downloader});

        let pid = setInterval(() =>{
            $.ajax({
                url:'/app/yinliu/share/product/download/process/get',
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
            url:'/app/yinliu/share/product/download',
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
    //输入
    onInput(filed,value){
        let {query} = this.state;
        query.data=value;
        this.setState({query:query});
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
        ShareActions.getProducts();
    }

    //设置页面小
    onSetPageSize(size){
        let { page } = this.state;
        page.page = 1;
        page.limit = size;
        this.setState({page:page});
        ShareActions.getProducts();
    }



    //获取推广产品
    onGetProducts()
    {
        let {page,query} = this.state;
        let data = {
            page:JSON.stringify(page),
            params:JSON.stringify({item_id:query.data})
        };
        $.ajax({
            url: '/app/yinliu/share/product/get',
            data: data,
            type: 'POST',
            dataType: 'json'
        }).done((response) => {

            if (!response) {
                return;
            }
            this.setState({products: response});

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


    //选择记录
    onSelectRows(selectedRowKeys,records){
        this.setState({selectedKeys:selectedRowKeys,selectedRecords:records});
    }
    //获取所有分享网站
    onGetSites(){
        $.ajax({
            url: '/app/yinliu/share/site/get',
            data: '',
            type: 'POST',
            dataType: 'json'
        }).done((response) => {

            if (!response) {
                return;
            }
            this.setState({sites: response});

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

export {ProductStore};