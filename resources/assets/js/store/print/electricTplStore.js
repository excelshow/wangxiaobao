/**
 * Created by Administrator on 2017/3/12.
 */
import Reflux from 'reflux';
import Dialog from 'qnui/lib/dialog';
import { ElectricTplActions } from '../../action/print/electricTplActions';


class AccountListStore extends Reflux.Store
{
    constructor()
    {
        super();
        this.listenables = [ElectricTplActions];
        this.state = {
            loading:false,
            page:{
                page:1,
                limit:20,
                start:0
            },
            accounts:{
                total:0,
                rows:[]
            },
            selectedKeys:[],//选中id
            selectedRecords:[],//选中记录

            dialog:{
                title:'添加面单账号',
                visible: false,
                align: 'cc cc',
                style: {
                    width: '570px',
                    //height:'500px'
                }
            }
        };
    }

    //添加账号
    onAdd(){
        let state = this.state;
        let {dialog} = state;
        dialog.visible = true;
        this.setState({dialog:dialog});
    }
    
    //关闭添加
    onCloseDialog(){

        let state = this.state;
        let {dialog} = state;
        dialog.visible = false;
        this.setState({dialog:dialog});
    }
    //选择记录
    onChangeSelectedRows(selectedRowKeys,records){

        this.setState({selectedKeys:selectedRowKeys,selectedRecords:records});
    }
    //删除
    onDelete(ids){
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
            url:'/app/print/deleteElectricAccounts',
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
            ElectricTplActions.getAccountList();
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
    //编辑
    onEdit(record){

    }

    //设置每页大小
    onSetPageSize(size){

        let {page} = this.state;
        page.page = 1;
        page.limit = size;
        this.setState({page:page});
    }
    //分页
    onChangePage(page){
        let state = this.state;
        state.page.page = page;
        this.setState(state);
    }
    //获取账号列表
    onGetAccountList(){
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
            url:'/app/print/getElectricAccountsList',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{

            state.loading=false;
            this.setState(state);
            if(response){
                let{total,rows} = response;
                state.accounts.total = total;
                state.accounts.rows = rows;
                this.setState(state);
            }else {
                //this.setState({login_state:'AFTER',pwd:false});
            }

        }).fail((response)=>{
            console.log('请求失败'+response)
        })

    }

}


class AccountEditorStore extends Reflux.Store{
    constructor() {
        super();
        this.listenables = [ElectricTplActions];
        this.state = {
            companies:[],
            company:{},
            customerName:'',
            customerPwd:'',
            monthCode:'',
            sendSite:'',
        }
    }

    onEditerInit(){
        let state = this.state;
        state.company = {};
        state.customerName = '';
        state.customerPwd = '';
        state.monthCode = '';
        state.sendSite = '';
        this.setState(state);
    }


    //保存
    onSave(account){
        let {company}= this.state;

        account = Object.assign(account,company);
        let data = {
            params:JSON.stringify({account:account}),
        }
        $.ajax({
            url:'/app/print/setElectricAccount',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            Dialog.alert({
                content:'添加成功',
                closable: false,
                title: '提示',
                onOk: () => {
                    ElectricTplActions.closeDialog();
                    ElectricTplActions.getAccountList();
                }
            })

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

    //选择面单公司
    onSelectCompany(company){
        this.setState({company:company});
    }
    //获取面单公司信息
    onGetCompanies(){
        let data = {
            params:JSON.stringify({}),

        }
        $.ajax({
            url:'/app/print/getElectricCompanies',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{

            let companies = response;
            this.setState({companies:companies});

        }).fail((response)=>{
            Dialog.alert({
                content:'获取面单公司信息失败,点击确认重试',
                closable: true,
                title: '提示',
                onOk: () => {
                   this.onGetCompanies();
                }
            })
        })
    }



}
export {AccountListStore,AccountEditorStore};