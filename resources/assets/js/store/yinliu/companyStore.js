/**
 * Created by Administrator on 2017/3/12.
 */
import Reflux from 'reflux';
import Dialog from 'qnui/lib/dialog';
import { CompanyActions } from '../../action/yinliu/yinliuActions';

class CompanyStore extends Reflux.Store
{
    constructor()
    {
        super();
        this.listenables = [CompanyActions];
        this.state = {
            company:{
                domain:'',
                company_name:'',
                business:'',
                introduction:'',
                detail:'',
                address:'',
                mobile:'',
                phone:'',
                shop_url:''
            },
            domain:{
                disabled:false,
                exists:false
            }
        };
    }

    //域名是否推广
    onGetDomain(domain){
        let data = {
            'params':JSON.stringify({domain:domain})
        };
        $.ajax({
            url:'/app/yinliu/company/domain/get',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            let {domain} = this.state;
            domain.exists = false;
            if(response){
                domain.exists = true;
            }
            this.setState({domain:domain})

        }).fail((response)=>{
            Dialog.alert({
                content:'域名获取失败',
                closable: true,
                title: '提示',
                onOk: () => {
                    //Dialog.alert({content:'alert content'});
                }
            })
            console.log('请求失败'+response)
        })
    }

    //获取企业推广信息
    onGetCompanyInfo(){

        $.ajax({
            url:'/app/yinliu/company/get',
            data:'',
            type:'POST',
            dataType:'json'
        }).done((response)=>{

            if(!response){
                return;
            }
            for(let r in response){
                if(!response[r]){
                    response[r]='';
                }
            }
            let {domain} = this.state;
            domain.disabled = false;
            this.setState({company:response,domain:domain})

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

    //建站推广
    onSave(company){

        let {domain} = company;
        domain = domain+'.imemeda.net';
        company.site_address = domain;
        let data = {
            'params':JSON.stringify({company:company})
        };
        $.ajax({
            url:'/app/yinliu/company/set',
            data:data,
            type:'POST',
            dataType:'json'
        }).done((response)=>{
            let msg = '恭喜您，企业网站建站成功，我们将为您大力推广该企业网站，地址：http://'+response.site_address;
            if(!response){
                msg = '操作失败';
            }

            Dialog.alert({
                content:msg,
                closable: true,
                title: '提示',
                onOk: () => {
                    //Dialog.alert({content:'alert content'});
                }
            })

            let {domain} = this.state;
            domain.disabled = true;
            this.setState({domain:domain});
            //CompanyActions.getCompanyInfo();

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

}

export {CompanyStore};