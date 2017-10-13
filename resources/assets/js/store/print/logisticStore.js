/**
 * Created by Administrator on 2017/3/12.
 */
import Reflux from 'reflux';
import Dialog from 'qnui/lib/dialog';
import { LogisticCompanyCooperateActions } from '../../action/print/logisticActions';

class LogisticCompanyCooperateListStore extends Reflux.Store
{
    constructor()
    {
        super();
        this.listenables = [LogisticCompanyCooperateActions];
        this.state = {
            loading:false,
            page:{
                page:1,
                limit:20,
                start:0
            },
            companies:{
                total:0,
                rows:[]
            },
            selectedKeys:[],//选中id
            selectedRecords:[],//选中记录

            dialog:{
                title:'新建发货物流',
                visible: false,
                align: 'cc cc',
                style: {
                    width: '570px',
                    height:'500px'
                }
            },
            //编辑
            editType:'update',
            editCompany:{}
        };
    }

    //新建物流
    onAddCompany(){
        let state = this.state;
        let {dialog} = state;
        dialog.visible = true;
        dialog.title='新建发货物流';
        this.setState({dialog:dialog,editType:'add',editCompany:{}});
    }

    //编辑物流
    onEditCompany(company){
        let state = this.state;
        let {dialog} = state;
        dialog.visible = true;
        dialog.title='编辑发货物流';
        this.setState({dialog:dialog,editType:'update',editCompany:company});
    }



    //关闭新建
    onCloseDialog(){

        let state = this.state;
        let {dialog} = state;
        dialog.visible = false;
        dialog.title='新建发货物流';
        this.setState({dialog:dialog,editType:'update',editCompany:{}});
    }
    //选择记录
    onChangeSelectedRows(selectedRowKeys,records){
        let state = this.state;
        state.selectedKeys = selectedRowKeys;
        state.selectedRecords = records;
        this.setState(state);
    }
    //删除
    onDelete(ids){
        //let{id} = record;
        if(ids.length==0){
            Dialog.alert({
                content:'请选择要删除的数据',
                closable: false,
                title: '提示',
                onOk: () => {
                    //Dialog.alert({content:'alert content'});
                }
            })
            return;
        }

        let data = {
            params:JSON.stringify({ids:ids}),
            //page:JSON.stringify(page),
            //sorter:JSON.stringify({}),
        }
        $.ajax({
            url:'/app/print/cancelCooperateLogisticCompany',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{

            Dialog.alert({
                content:'操作成功',
                closable: false,
                title: '提示',
                onOk: () => {
                    //Dialog.alert({content:'alert content'});
                }
            })
            LogisticCompanyCooperateActions.getCompaniesList();
        }).fail((response)=>{
            Dialog.alert({
                content:'操作失败',
                closable: false,
                title: '提示',
                onOk: () => {
                    //Dialog.alert({content:'alert content'});
                }
            })
        })
    }
    //设为默认
    onSetDefault(record){
        let{id} = record;
        let data = {
            params:JSON.stringify({id:id}),
            //page:JSON.stringify(page),
            //sorter:JSON.stringify({}),
        }
        $.ajax({
            url:'/app/print/setDefaultCooperateLogisticCompany',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{

            Dialog.alert({
                content:'操作成功',
                closable: false,
                title: '提示',
                onOk: () => {
                    //Dialog.alert({content:'alert content'});
                }
            })
            LogisticCompanyCooperateActions.getCompaniesList();
        }).fail((response)=>{
            Dialog.alert({
                content:'操作失败',
                closable: false,
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
    //获取合作物流列表
    onGetCompaniesList(){
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
            url:'/app/print/getLogisticCompanyCooperate',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{

            state.loading=false;
            this.setState(state);
            if(response){
                let{total,rows} = response;
                state.companies.total = total;
                state.companies.rows = rows;
                this.setState(state);
            }else {
                //this.setState({login_state:'AFTER',pwd:false});
            }

        }).fail((response)=>{
            Dialog.alert({
                content:'获取发货物流失败',
                closable: false,
                title: '提示',
                onOk: () => {
                    //Dialog.alert({content:'alert content'});
                }
            })
        })

    }

}


class LogisticCompanyEditerStore extends Reflux.Store{
    constructor() {
        super();
        this.listenables = [LogisticCompanyCooperateActions];
        this.state = {
            currentStep:0,
            nextDisabled:true,
            companies:[],
            selectedCompany:{},
            isDefault:'Y',
            selectedTpl:{},
            companyTpls:[
            ]
        }
    }


    //确认添加合作
    onAddCompanySubmit(){
        let {selectedCompany,selectedTpl,companyTpls,isDefault}= this.state;

        if(companyTpls.length==0){
            Dialog.alert({
                content:'系统暂无该物流的模版，你可以【添加该物流的模版】后再试',
                closable: false,
                title: '提示',
                onOk: () => {

                }
            });
            return;
        }
        if(!selectedTpl.id){
            Dialog.alert({
                content:'请选择一个模版作为默认模版',
                closable: false,
                title: '提示',
                onOk: () => {
                }
            });

            return;
        }

        selectedCompany.is_default = isDefault;
        let data = {
            params:JSON.stringify({company:selectedCompany,tpl:selectedTpl}),
            //page:JSON.stringify(page),
            //sorter:JSON.stringify({}),
        }
        $.ajax({
            url:'/app/print/setLogisticCompanyCooperate',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            if(!response){
                return;
            }
            this.setState({currentStep:2});
            Dialog.alert({
                content:'设置成功',
                closable: false,
                title: '提示',
                onOk: () => {
                    this.setState({currentStep:0});
                    LogisticCompanyCooperateActions.closeDialog();
                    LogisticCompanyCooperateActions.getCompaniesList();
                }
            })

        }).fail((response)=>{
            Dialog.alert({
                content:'操作失败',
                closable: false,
                title: '提示',
                onOk: () => {
                    //this.setState({currentStep:0});
                    //Dialog.alert({content:'alert content'});
                }
            })
        })
    }

    //设置是否默认物流
    onCheckCompanyDefault(isDefault){
        this.setState({isDefault:isDefault});
    }
    //下一步管理模版
    onNextStep(){
        let {currentStep} = this.state;
        //currentStep++;
        this.setState({currentStep:1});
        this.getLogisticTpls();
    }

    //上一步
    onLastStep(){
        let {currentStep} = this.state;
        //currentStep--;
        this.setState({currentStep:0});
    }
    //选中模版
    onSelectTpl(tpl) {
        this.setState({selectedTpl: tpl});
    }

    //根据物流公司id 获取所有物流模版
    getLogisticTpls(){
        let {selectedCompany} = this.state;
        let data = {
            params:JSON.stringify({company_id:selectedCompany.company_id}),
            //page:JSON.stringify(page),
            //sorter:JSON.stringify({}),
        }
        $.ajax({
            url:'/app/print/getLogisticTplsByCompanyId',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            if(!response){
                return;
            }
            let selectedTpl = {};
            let tpls = response;
            tpls.forEach((data)=>{
                if(data.is_default=='Y'){
                    selectedTpl = data;
                }
            });
            this.setState({selectedTpl:selectedTpl,companyTpls:tpls});

        }).fail((response)=>{
            Dialog.alert({
                content:'获取物流公司模版失败',
                closable: false,
                title: '提示',
                onOk: () => {
                    //Dialog.alert({content:'alert content'});
                }
            })
        })
    }
    //选择物流公司
    onSelectCompany(company,selected){
        let state = this.state;
        let {companies,selectedCompany}  = state;
        companies.map((data)=>{
            let selected = data.company_id==company.company_id?true:false;
            data.selected = selected;
            return data;
        });
        if(selected){
            selectedCompany = company;
        }else {
            selectedCompany = {};
        }

        this.setState({nextDisabled:false,companies:companies,selectedCompany:selectedCompany});
    }

    //查询物流公司
    onSearchLogisticCompany(name){
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
            if(!response){
                return;
            }
            let state = this.state;
            let {selectedCompany} = state;
            let companies = response;
            companies.map((data)=>{
                let selected = data.company_id==selectedCompany.company_id?true:false;
                data.selected = selected;
                return data;
            });
            this.setState({companies:companies});

        }).fail((response)=>{
            Dialog.alert({
                content:'查询物流公司失败',
                closable: false,
                title: '提示',
                onOk: () => {
                    //Dialog.alert({content:'alert content'});
                }
            })
        })
    }

}
export {LogisticCompanyCooperateListStore,LogisticCompanyEditerStore};