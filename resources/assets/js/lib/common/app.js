/**
 * Created by Administrator on 2017/3/10.
 */
//定义app 的memu 和路由
const App={
    name:'精准省钱推广',
    home:'/app/home',
    chanels:[
        {
            key:'0',
            //icon:'atm',
            text:'客服帮助',
            url:'http://amos.alicdn.com/msg.aw?v=2&uid=杭州亦迅科技有限公司&site=cnalichn&s=10&charset=UTF-8',
            visible:'navigation-item-right',
            active:false,
            items:[
                {key:'00',icon:'',text:'在线客服',url:'http://amos.alicdn.com/msg.aw?v=2&uid=杭州亦迅科技有限公司&site=cnalichn&s=10&charset=UTF-8',visible:'',selected:false,target:'blank'},
                {key:'01',icon:'',text:'帮助文档',url:'/app/help/docs',visible:'',selected:false,target:'blank'}
            ]
        },
        {
            key:'1',
            icon:'',
            text:'首页',
            url:'/app/home',
            visible:'hidden',
            active:false,
            items:[

            ]
        },

        {
            key:'2',
            icon:'',
            text:'打单发货',
            url:'/app/print',
            visible:'hidden',
            active:true,
            items:[

            ]
        },
        {
            key:'3',
            icon:'',
            text:'打印设置',
            url:'/app/print/setting',
            visible:'hidden',
            active:false,
            items:[

            ]
        },
        {
            key:'4',
            icon:'',
            text:'企业推广',
            url:'/app/yinliu/company',
            visible:'',
            active:false,
            items:[

            ]
        },
        {
            key:'5',
            icon:'',
            text:'业务推广',
            url:'/app/yinliu/business',
            visible:'',
            active:false,
            items:[

            ]
        },
        {
            key:'6',
            icon:'',
            text:'产品推广',
            url:'/app/yinliu/product',
            visible:'',
            active:false,
            items:[

            ]
        },
        {
            key:'7',
            icon:'',
            text:'百站分享',
            url:'/app/yinliu/share',
            visible:'',
            active:false,
            items:[

            ]
        },
        {
            key:'-1',
            icon:'',
            text:'服务市场',
            url:'https://mfuwu.1688.com/offer/top/search.htm',
            target:'blank',
            visible:'navigation-item-right ',
            active:false,
            items:[
            ]
        },
    ]
}
export {App};