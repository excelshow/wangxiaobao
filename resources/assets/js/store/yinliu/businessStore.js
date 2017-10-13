/**
 * Created by Administrator on 2017/3/12.
 */
import Reflux from 'reflux';
import Dialog from 'qnui/lib/dialog';
import { BusinessActions } from '../../action/yinliu/yinliuActions';

class BusinessStore extends Reflux.Store
{
    constructor() {
        super();
        this.listenables = [BusinessActions];
        this.state = {
            businesses: [],
            selectedKeys:[],//选中id
            selectedRecords:[],//选中记录
            editor:{
                title:'添加业务',
                visible: false,
                align: 'cc cc',
                style: {
                    width: '700px',
                }
            },
            editBusiness:{}
        }
    }

    //添加
    onAdd(){
        let {editor} = this.state;
        editor.visible = true;
        editor.title = '添加业务';
        let editBusiness = {};
        this.setState({editor:editor,editBusiness:editBusiness});
    }

    //编辑
    onEdit(record){
        let {editor} = this.state;
        editor.visible = true;
        editor.title = '编辑业务';
        this.setState({editor:editor,editBusiness:record});
    }

    //保存编辑
    onSave(){

    }

    //取消编辑
    onCancel(){
        let {editor} = this.state;
        editor.visible = false;
        this.setState({editor:editor});
    }

    //获取业务
    onGet()
    {
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
            url:'/app/yinliu/business/delete',
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
            BusinessActions.get();

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

    //删除业务
    onDelete(record){
        let {id} = record;
        let data = {
            'params':JSON.stringify({ids:[id]})
        };
        $.ajax({
            url:'/app/yinliu/business/delete',
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
            BusinessActions.get();

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

}

class EditorStore extends Reflux.Store{
    constructor() {
        super();
        this.listenables = [BusinessActions];
        this.state = {
            business: {
                id:'',
                business:'',
                keywords:'',
                introduction:'',
                detail:''
            },

        }
    }

    //属性到state
    onPropsToState(props){
        let {business} = props;
        this.setState({business:business});
    }

    //输入
    onInput(filed,value){
        let {business} = this.state;
        business[filed]=value;
        this.setState({business:business});
    }

    //保存编辑
    onSave(){
        let {business} = this.state;
        let url='/app/yinliu/business/add';
       // url='/business/add'
        if(business.id){
            url='/app/yinliu/business/edit';
        }

        let data = {
            'params':JSON.stringify({business:business})
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

            BusinessActions.get();
            BusinessActions.cancel();

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
export {BusinessStore,EditorStore};