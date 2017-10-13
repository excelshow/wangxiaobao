/**
 * Created by Administrator on 2017/3/12.
 */
import Reflux from 'reflux';
import { LoginActions } from '../../action/login/loginActions';

class LoginStore extends Reflux.Store
{
    constructor()
    {
        super();
        this.listenables = [LoginActions];
        this.state = {
            apps:[],
            app:{},
            login_state:'BEFORE',//before doing after
            pwd:false
        };
    }

    onSelectApp(app){
        this.setState({app:app});
    }

    onGetApps(){
        $.ajax({
            url:'/app/login/apps/get',
            data:'',
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            if(!response){
                return;
            }
            this.setState({apps:response});

        }).fail((response)=>{
            console.log('请求失败'+response)
        })
    }
    //登录提交
    onSubmit(user){
        let {app} = this.state;
        let data = {
            'page':'',
            'params':JSON.stringify({user:user,app:app})
        };
        $.ajax({
            url:'/app/login/submit',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            if(response){
                this.setState({login_state:'AFTER',pwd:true});
            }else {
                this.setState({login_state:'AFTER',pwd:false});
            }

        }).fail((response)=>{
            console.log('请求失败'+response)
        })

    }

}
export {LoginStore};