/**
 * Created by Administrator on 2017/3/12.
 */
import Reflux from 'reflux';
import Dialog from 'qnui/lib/dialog';
import { SenderAddressActions } from '../../action/print/addressActions';


class SenderAddressListStore extends Reflux.Store
{
    constructor()
    {
        super();
        this.listenables = [SenderAddressActions];
        this.state = {
            loading:false,
            page:{
                page:1,
                limit:20,
                start:0
            },
            addresses:{
                total:0,
                rows:[]
            },
            selectedKeys:[],//选中id
            selectedRecords:[],//选中记录

            dialog:{
                title:'新建发货地址',
                visible: false,
                align: 'cc cc',
                style: {
                    width: '570px',
                   // height:'500px'
                }
            }
        };
    }

    //新建地址
    onAddAddress(){
        let state = this.state;
        let {dialog} = state;
        dialog.visible = true;
        this.setState(state);
    }
    
    //关闭新建
    onCloseDialog(){

        let state = this.state;
        let {dialog} = state;
        dialog.visible = false;
        this.setState(state);
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
            //page:JSON.stringify(page),
            //sorter:JSON.stringify({}),
        }
        $.ajax({
            url:'/app/print/deleteSenderAddress',
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
            SenderAddressActions.getAddressList();
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
    //设为默认
    onSetDefault(record){
        let{id} = record;
        let data = {
            params:JSON.stringify({id:id}),
            //page:JSON.stringify(page),
            //sorter:JSON.stringify({}),
        }
        $.ajax({
            url:'/app/print/setDefaultSenderAddress',
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
            SenderAddressActions.getAddressList();
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
    //登录提交
    onGetAddressList(){
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
            url:'/app/print/getSenderAddress',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{

            state.loading=false;
            this.setState(state);
            if(response){
                let{total,rows} = response;
                state.addresses.total = total;
                state.addresses.rows = rows;
                this.setState(state);
            }else {
                //this.setState({login_state:'AFTER',pwd:false});
            }

        }).fail((response)=>{
            console.log('请求失败'+response)
        })

    }

}


class SenderAddressEditerStore extends Reflux.Store{
    constructor() {
        super();
        this.listenables = [SenderAddressActions];
        this.state = {

            provinces:[{province_id:'',province:''}],
            cities:[{city_id:'',city:''}],
            areas:[{area_id:'',area:''}],
            defaults:[
                {value: 'Y', label: '是' },
                {value: 'N', label: '否' }
            ],
            name:'',
            province:'',
            city:'',
            area:'',
            street:'',
            post:'',
            mobile:'',
            phone:'',
            is_default:'Y'
        }
    }

    onEditerInit(){
        let state = this.state;
        state.name = '';
        state.province = '';
        state.city = '';
        state.area = '';
        state.street = '';
        state.post = '';
        state.mobile = '';
        state.phone = '';
        state.is_default = 'Y';
        this.setState(state);
    }
    onSave(){
        let {name:sender_name,province,city,area,street,post,mobile,phone,is_default}= this.state;
        let sender = {sender_name,province,city,area,street,post,mobile,phone,is_default};

        let data = {
            params:JSON.stringify({sender:sender}),
            //page:JSON.stringify(page),
            //sorter:JSON.stringify({}),
        }
        $.ajax({
            url:'/app/print/addSenderAddress',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            Dialog.alert({
                content:'新建成功',
                closable: false,
                title: '提示',
                onOk: () => {
                    SenderAddressActions.closeDialog();
                    SenderAddressActions.getAddressList();
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
    onSetArea(area){
        let state = this.state;
        state.area = area;
        this.setState(state);
    }

    onSetCity(city){
        let state = this.state;
        state.city = city;
        this.setState(state);
    }

    onSetProvince(province){
        let state = this.state;
        state.province = province;
        this.setState(state);
    }
    onSetDefault(isDefault){
        let state = this.state;
        state.is_default = isDefault;
        this.setState(state);
    }
    onSetPhone(phone){
        let state = this.state;
        state.phone = phone;
        this.setState(state);
    }
    onSetMobile(mobile){
        let state = this.state;
        state.mobile = mobile;
        this.setState(state);
    }
    onSetStreet(street){
        let state = this.state;
        state.street = street;
        this.setState(state);
    }
    onSetPost(post){
        let state = this.state;
        state.post = post;
        this.setState(state);
    }
    onSetName(name){
        let state = this.state;
        state.name = name;
        this.setState(state);
    }

    //获取area
    onGetAreas(cityId){
        let data = {
            params:JSON.stringify({city_id:cityId}),
            //page:JSON.stringify(page),
            //sorter:JSON.stringify({}),
        }
        $.ajax({
            url:'/app/print/getAreas',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            let state = this.state;
            state.areas = response;
            this.setState(state);

        }).fail((response)=>{
            Dialog.alert({
                content:'获取区县信息失败',
                closable: false,
                title: '提示',
                onOk: () => {
                    //Dialog.alert({content:'alert content'});
                }
            })
        })
    }
    //获取城市信息
    onGetCities(provinceId){
        let data = {
            params:JSON.stringify({province_id:provinceId}),
            //page:JSON.stringify(page),
            //sorter:JSON.stringify({}),
        }
        $.ajax({
            url:'/app/print/getCities',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            let state = this.state;
            state.cities = response;
            this.setState(state);

        }).fail((response)=>{
            Dialog.alert({
                content:'获取城市信息失败',
                closable: false,
                title: '提示',
                onOk: () => {
                    //Dialog.alert({content:'alert content'});
                }
            })
        })
    }
    //获取省份信息
    onGetProvinces(){
        let data = {
            params:JSON.stringify({}),
            //page:JSON.stringify(page),
            //sorter:JSON.stringify({}),
        }
        $.ajax({
            url:'/app/print/getProvinces',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            let state = this.state;
            state.provinces = response;
            this.setState(state);

        }).fail((response)=>{
            Dialog.alert({
                content:'获取省份信息失败',
                closable: false,
                title: '提示',
                onOk: () => {
                    //Dialog.alert({content:'alert content'});
                }
            })
        })
    }



}
export {SenderAddressListStore,SenderAddressEditerStore};