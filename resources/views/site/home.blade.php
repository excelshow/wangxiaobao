<!DOCTYPE html>
<html lang="en">
    <head>
        @include('site.frame.src')
        <script type="text/javascript" src="/sites/site01/js/common.js"></script>
    </head>
    <body style="background:transparent">

    <div id="contain" style="width:1200px;background:none;margin:0px auto;padding:0px">


        @include('site.frame.header')
        <!-- 全站通栏轮播广告 -->

        <div id="pdv_17267" class="pdv_class" title="" style="width:1200px;height:550px;top:166px;left:0px; z-index:9">
            <div id="spdv_17267" class="pdv_top" style="overflow:hidden;width:100%;height:100%"><div class="pdv_border" style="border: 0px; height: 550px;">

                    <script type="text/javascript" src="/sites/site01/js/advsgloballb.js"></script>
                    <div id="advsexDiv" style="background: url('/sites/site01/image/1498101612.jpg') center top no-repeat; opacity: 1;">
                        <a href="/site/compnay"><img src="/sites/site01/image/advsgloballb.png"></a>
                    </div>

                    <div class="advsexList" style="background:url('/sites/site01/image/1498101602.jpg') center top no-repeat"><a href="/site/compnay"></a></div>

                    <div class="advsexList" style="background:url('/sites/site01/image/1498101612.jpg') center top no-repeat"><a href="/site/compnay"></a></div>

                </div>
            </div>
        </div>
        <div id="content" style="width: 1200px; height: 2604px; background: none; margin: 0px auto;">

            <div id="div-product-tab-container">
                <!-- 标签切换边框 -->
                <div id="pdv_17269" class="pdv_class" title="" style="width: 1200px; height: 617px; top: 206px; left: 0px; z-index: 32;">
                    <div id="spdv_17269" class="pdv_content" style="overflow:hidden;width:100%;height:100%">

                        <div class="pdv_border" style="background: rgb(255, 255, 255); padding: 0px; margin: 0px; height: 617px;">
                            <div class="gbl201_out">
                                <ul id="gblable_17269" class="gblable">
                                    <li id="GBLLIST_0" class="gbl201">@{{ product_tab_0.business.business }}</li>
                                    <li id="GBLLIST_1" class="gbl201">@{{ product_tab_1.business.business }}</li>
                                    <li id="GBLLIST_2" class="gbl201">@{{ product_tab_2.business.business }}</li>
                                    <li id="GBLLIST_3" class="gbl201">@{{ product_tab_3.business.business }}</li>
                                </ul>
                                <div class="gbl201_more"><a href="http://" style="display:none">更多&gt;&gt;</a></div>
                            </div>
                            <div style="padding:0px">
                                &nbsp;
                            </div>
                        </div>

                    </div>
                </div>
                <!-- 自选产品列表 -->
                <div id="pdv_17270" class="pdv_class" :title="product_tab_0.business.business" style="width: 1186px; height: 555px; top: 261px; left: 14px; z-index: 99;">
                    <div id="spdv_17270" class="pdv_content" style="overflow:hidden;width:100%;height:100%">
                        <div class="pdv_border" style="border: 0px; height: 555px;">

                            <div v-for="data in product_tab_0.products" class="productlist" >
                                <div class="fang" >
                                    <div class="picFit">
                                        <a :href="data.url" target="_blank">
                                            <img :src= "data.img_url " style="width:280px;height:230px" border="0">
                                        </a>
                                    </div>
                                </div>
                                <div class="title">
                                    <a :href="data.url" target="_blank" class="title">@{{ data.title }}</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- 自选产品列表 -->
                <div id="pdv_17271" class="pdv_class" :title="product_tab_1.business.business" style="width: 1186px; height: 555px; top: 261px; left: 14px; z-index: 99;">
                    <div id="spdv_17271" class="pdv_content" style="overflow:hidden;width:100%;height:100%">
                        <div class="pdv_border" style="border: 0px; height: 555px;">

                            <div v-for="data in product_tab_1.products" class="productlist" >
                                <div class="fang" >
                                    <div class="picFit">
                                        <a :href="data.url" target="_blank">
                                            <img :src= "data.img_url " style="width:280px;height:230px" border="0">
                                        </a>
                                    </div>
                                </div>
                                <div class="title">
                                    <a :href="data.url" target="_blank" class="title">@{{ data.title }}</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- 自选产品列表 -->
                <div id="pdv_17272" class="pdv_class" :title="product_tab_2.business.business" style="width: 1186px; height: 555px; top: 261px; left: 14px; z-index: 99;">
                    <div id="spdv_17272" class="pdv_content" style="overflow:hidden;width:100%;height:100%">
                        <div class="pdv_border" style="border: 0px; height: 555px;">

                            <div v-for="data in product_tab_2.products" class="productlist" >
                                <div class="fang" >
                                    <div class="picFit">
                                        <a :href="data.url" target="_blank">
                                            <img :src= "data.img_url " style="width:280px;height:230px" border="0">
                                        </a>
                                    </div>
                                </div>
                                <div class="title">
                                    <a :href="data.url" target="_blank" class="title">@{{ data.title }}</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- 自选产品列表 -->
                <div id="pdv_17273" class="pdv_class" :title="product_tab_3.business.business" style="width: 1186px; height: 555px; top: 261px; left: 14px; z-index: 99;">
                    <div id="spdv_17273" class="pdv_content" style="overflow:hidden;width:100%;height:100%">
                        <div class="pdv_border" style="border: 0px; height: 555px;">

                            <div v-for="data in product_tab_3.products" class="productlist" >
                                <div class="fang" >
                                    <div class="picFit">
                                        <a :href="data.url" target="_blank">
                                            <img :src= "data.img_url " style="width:280px;height:230px" border="0">
                                        </a>
                                    </div>
                                </div>
                                <div class="title">
                                    <a :href="data.url" target="_blank" class="title">@{{ data.title }}</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <script>
                $(function(){$().switchLable('17269','17270,17271,17272,17273','over')});
                var ProductTab = new Vue({
                    el: '#div-product-tab-container',
                    data: {
                        businesses: [],
                        product_tab_0:{
                            business:{business:'产品分类一'},
                            products:[]
                        },
                        product_tab_1:{
                            business:{business:'产品分类二'},
                            products:[]
                        },
                        product_tab_2:{
                            business:{business:'产品分类三'},
                            products:[]
                        },
                        product_tab_3:{
                            business:{business:'产品分类四'},
                            products:[]
                        },

                    },
                    methods: {
                        //根据业务获取推广产品
                        getProducts(business,index){
                            let data = {
                                page:JSON.stringify({page:1,limit:8,start:0}),
                                params:JSON.stringify({business_id: business.id})
                            };
                            $.ajax({
                                url:'/site/product/get',
                                data:data,
                                type:'POST',
                                dataType:'json'
                            }).done((response)=>{
                                if(!response){
                                    return;
                                }
                                var products = response.rows;
                                for(var i=0;i<products.length;i++) {
                                    var itemId = products[i].item_id;
                                    var url = 'https://detail.1688.com/offer/' + itemId + '.html';
                                    products[i].url = url;
                                }

                                var tab = {business:business,products: products};
                                switch (index){
                                    case 0:
                                        this.product_tab_0 = tab;
                                        break;
                                    case 1:
                                        this.product_tab_1 = tab;
                                        break;
                                    case 2:
                                        this.product_tab_2 = tab;
                                        break;
                                    case 3:
                                        this.product_tab_3 = tab;
                                        break;
                                }

                            }).fail((response)=>{
                                console.log('业务获取失败'+response)
                            })
                        },
                        //获取业务
                        getBusinesses:function () {
                            let data = {
                                //'page':'',
                                //'params':JSON.stringify({})
                            };
                            $.ajax({
                                url:'/site/business/get',
                                data:data,
                                type:'POST',
                                dataType:'json'
                            }).done((response)=>{
                                if(!response){
                                    return;
                                }
                                this.businesses = response;
                                for (var i=0;i<response.length; i++){
                                    this.getProducts(response[i],i);
                                }


                            }).fail((response)=>{
                                console.log('业务获取失败'+response)
                            })
                        },
                        init(){
                            this.getBusinesses();
                        }
                    }
                });
                ProductTab.init();
            </script>

            <!-- 全站通栏图片广告 -->

            <!-- 文字广告（静态） 产品推荐-->

            <div id="pdv_17268" class="pdv_class" title="产品推荐" style="width:1200px;height:162px;top:33px;left:0px; z-index:10">
                <div id="spdv_17268" class="pdv_content" style="overflow:hidden;width:100%;height:100%"><div class="pdv_border" style="border: 0px; height: 162px;">
                        <div class="zhf">
                            <h4>产品推荐
                                <p> 专业产品，用心服务</p><i>Product recommendation</i><a href="/site/product" title="更多">更 多 +</a>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 全站通栏图片广告 -->

            <div id="pdv_17275" class="pdv_class" title="广告位" style="width:1200px;height:168px;top:823px;left:0px; z-index:13">
                <div id="spdv_17275" class="pdv_content" style="overflow:hidden;width:100%;height:100%"><div class="pdv_border" style="border: 0px; height: 168px;">

                        <script type="text/javascript" src="/sites/site01/js/advsglobalpic2.js"></script>

                        <div id="advsexDiv2" style="background:url(/sites/site01/image/1498189939_01.png) center top no-repeat"><img src="/sites/site01/image/advsglobalpic2.png"></div>

                    </div>
                </div>
            </div>

            <!-- 文字广告（静态） 关于我们-->

            <div id="pdv_17276" class="pdv_class" title="关于我们" style="width:1200px;height:162px;top:1014px;left:0px; z-index:14">
                <div id="spdv_17276" class="pdv_content" style="overflow:hidden;width:100%;height:100%">
                    <div class="pdv_border" style="border: 0px; height: 162px;">
                        <div class="zhf">
                            <h4>关于我们
                                <p> 用心，放心，细心</p><i>Intentions, rest assured, careful</i><a href="/site/company" title="更多">更 多 +</a>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

            <!-- HTML编辑区 关于我们-->

            <div id="pdv_17277" class="pdv_class" title="关于我们" style="width:638px;height:331px;top:1190px;left:0px; z-index:15">
                <div id="spdv_17277" class="pdv_content" style="overflow:hidden;width:100%;height:100%">
                    <div class="pdv_border" style="border: 0px; height: 331px;">
                        <p style="text-indent:2em;">
                            <span style="font-size:14px;line-height:2;">
                                @{{ company.introduction }}
                            </span>
                        </p>
                        <p style="text-indent:2em;">
                            <span style="font-size:14px;line-height:2;">
                                 @{{ company.detail }}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <script>

                var AboutUs = new Vue({
                    el: '#pdv_17277',
                    data: {
                        company: {introduction:'',detail:''},
                    },
                    methods: {

                        //获取公司简介
                        getCompany:function () {
                            let data = {
                                //'page':'',
                                //'params':JSON.stringify({})
                            };
                            $.ajax({
                                url:'/site/company/get',
                                data:data,
                                type:'POST',
                                dataType:'json'
                            }).done((response)=>{
                                if(!response){
                                    return;
                                }
                                this.company = response;

                            }).fail((response)=>{
                                console.log('业务获取失败'+response)
                            })
                        },
                        init(){
                            this.getCompany();
                        }
                    }
                });
                AboutUs.init();
            </script>

            <!-- 页内图片广告 -->

            <div id="pdv_17278" class="pdv_class" title="广告位" style="width:521px;height:330px;top:1190px;left:679px; z-index:16">
                <div id="spdv_17278" class="pdv_content" style="overflow:hidden;width:100%;height:100%"><div class="pdv_border" style="border: 0px; height: 330px;">

                        <a href="page/html/company.php"><img src="/sites/site01/image/1498191657.jpg" border="0" width="100%"></a>
                    </div>
                </div>
            </div>

            <!-- 文字广告（静态） -->
            <div id="pdv_17279" class="pdv_class" title="产品展示" style="width:1200px;height:156px;top:1598px;left:0px; z-index:17">
                <div id="spdv_17279" class="pdv_content" style="overflow:hidden;width:100%;height:100%">
                    <div class="pdv_border" style="border: 0px; height: 156px;">
                        <div class="zhf">
                            <h4>产品展示
                                <p> 好产品、好品牌、好信誉</p>
                                <i>Good products, good brands, good reputation</i>
                                <a href="/site/product" title="更多">更 多 +</a>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

            <div id="pdv_17280" class="pdv_class" title="产品展示轮播" style="width:1200px;height:229px;top:1766px;left:0px; z-index:18">
                <div id="spdv_17280" class="pdv_content" style="overflow:hidden;width:100%;height:100%"><div class="pdv_border" style="border: 0px; height: 229px;">
                        <div id="B_demo">
                            <div id="B_indemo">
                                <div id="B_demo1">
                                    <ul class="zh-c" >

                                        <li v-for="data in queue_1">
                                            <a :href="data.url" target="_blank" :title="data.title">
                                                <img :src="data.img_url" style="width:221px;height:150px" :alt="data.title">
                                                <div style="width:221px;">@{{data.title}}</div>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                                <div id="B_demo2">
                                    <ul class="zh-c">
                                        <li v-for="data in queue_2">
                                            <a :href="data.url" target="_blank" :title="data.title">
                                                <img :src="data.img_url" style="width:221px;height:150px" :alt="data.title">
                                                <div style="width:221px;">@{{data.title}}</div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="clear"></div>

                    </div>
                </div>

            </div>
            <script>
                //轮播
                var ProductQueue = new Vue({
                    el: '#pdv_17280',
                    data: {
                        products: [],
                        queue_1:[],
                        queue_2:[],
                    },
                    methods: {

                        //获取业务
                        getProducts(businessId){
                            let data = {
                                page:JSON.stringify({page:1,limit:20,start:0}),
                                params:JSON.stringify({business_id: businessId})
                            };
                            $.ajax({
                                url:'/site/product/get',
                                data:data,
                                type:'POST',
                                dataType:'json'
                            }).done((response)=>{
                                if(!response){
                                    return;
                                }
                                var products = response.rows;
                                for(var i=0;i<products.length;i++) {
                                    var itemId = products[i].item_id;
                                    var url = 'https://detail.1688.com/offer/' + itemId + '.html';
                                    products[i].url = url;
                                }

                                var queue1 = products.slice(0,5);
                                var queue2 = products.slice(5,10);
                                this.products = products;
                                this.queue_1 = queue1;
                                this.queue_2 = queue2;

                            }).fail((response)=>{
                                console.log('业务获取失败'+response)
                            })
                        },
                        queue(){
                            var B_speed=10;
                            var B_tab=document.getElementById("B_demo");
                            var B_tab1=document.getElementById("B_demo1");
                            var B_tab2=document.getElementById("B_demo2");
                           // B_tab2.innerHTML=B_tab1.innerHTML;
                            function B_Marquee(){
                                if(B_tab2.offsetWidth-B_tab.scrollLeft<=0){
                                    B_tab.scrollLeft-=B_tab1.offsetWidth;
                                }
                                else{
                                    B_tab.scrollLeft++;
                                }
                            }
                            var B_MyMar=setInterval(B_Marquee,B_speed);
                            B_tab.onmouseover=function() {clearInterval(B_MyMar)};
                            B_tab.onmouseout=function() {B_MyMar=setInterval(B_Marquee,B_speed)};
                        },
                        init(){
                            this.getProducts('');
                            this.queue();
                        }
                    }
                });
                ProductQueue.init();
            </script>
            <!-- 文章列表 -->

            <div id="pdv_17282" class="pdv_class" title="业务介绍" style="width:766px;height:505px;top:2081px;left:0px; z-index:19">
                <div id="spdv_17282" class="pdv_content" style="overflow:hidden;width:100%;height:100%">
                    <div class="pdv_border" style="height: 505px; padding: 0px; margin: 0px;">
                        <div style="border-bottom:2px #EAEAEA solid;height:35px;padding:0;margin:0;">
                            <div style="float:left;width:90px;color:#505050;font:bold 20px/35px 'microsoft yahei',Verdana, Arial;text-align:left;border-bottom:2px #005CA1 solid;">业务介绍</div>
                            <div style="float:right;text-align:right;width:45px;height:35px;"><a href="/site/business" style="display:inline;">
                                    <img src="/sites/site01/image/more.png" style="border:0px;padding-top:15px;"></a></div>
                        </div>
                        <div style="margin:0px;padding:0px">

                            <ul class="newsbox">

                                <li class="even2" v-for="data in businesses">
                                    <div class="wrap">
                                        <div class="date">
                                            <div class="wrap">
                                                <span class="date_y">主营业务</span>

                                                <span class="date_d">@{{ data.id }}</span>
                                            </div>
                                        </div>
                                        <dl>
                                            <dd class="topic">
                                                <a href="/site/business" :title="data.business" target="_self" style="">
                                                    @{{ data.business }}
                                                </a>
                                            </dd>
                                            <dd class="content">
                                                @{{ data.introduction }}
                                            </dd>
                                        </dl>
                                        <div class="more"><a href="/site/business">MORE</a></div>
                                    </div>
                                </li>


                            </ul>

                        </div>
                    </div>
                </div>
            </div>

            <script>
                var Business = new Vue({
                    el: '#pdv_17282',
                    data: {
                        businesses: [],

                    },
                    methods: {
                        //获取业务
                        getBusinesses:function () {
                            let data = {
                                //'page':'',
                                //'params':JSON.stringify({})
                            };
                            $.ajax({
                                url:'/site/business/get',
                                data:data,
                                type:'POST',
                                dataType:'json'
                            }).done((response)=>{
                                if(!response){
                                    return;
                                }
                                var biz = response.slice(0,3);
                                this.businesses = biz;


                            }).fail((response)=>{
                                console.log('业务获取失败'+response)
                            })
                        },
                        init(){
                            this.getBusinesses();
                        }
                    }
                });
                Business.init();
            </script>

            <!-- HTML编辑区 -->

            <div id="pdv_17283" class="pdv_class" title="联系我们" style="width:403px;height:523px;top:2081px;left:797px; z-index:20">
                <div id="spdv_17283" class="pdv_content" style="overflow:hidden;width:100%;height:100%">
                    <div class="pdv_border" style="height: 523px; padding: 0px; margin: 0px;">
                        <div style="border-bottom:2px #EAEAEA solid;height:35px;padding:0;margin:0;">
                            <div style="float:left;width:90px;color:#505050;font:bold 20px/35px 'microsoft yahei',Verdana, Arial;text-align:left;border-bottom:2px #005CA1 solid;">联系我们</div>
                        </div>
                        <div style="margin:0px;padding:0px">
                            <p>
                                <img src="/sites/site01/image/20170623143854_25347.jpg" width="403">
                            </p>
                            <p>
                                <span style="font-size:16px;line-height:2.5;">公司：{{ @$site->company_name }}</span><br>
                                <span style="font-size:16px;line-height:2.5;">主营业务：{{ @$site->business }}</span><br>
                                <span style="font-size:16px;line-height:2.5;"> 阿里店铺：<a href="{{@$site->shop_url }}" target="_blank">{{ @$site->shop_url }}</a></span><br>
                                <span style="font-size:16px;line-height:2.5;">地 址：{{ @$site->address }}</span><br>
                                <span style="font-size:16px;line-height:2.5;"> 电 话：{{ @$site->phone }}</span><br>
                                <span style="font-size:16px;line-height:2.5;"> 手 机：{{ @$site->mobile }}</span><br>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- 底部信息编辑区 -->
        @include('site.frame.footer')
    </div>
    @include('site.frame.ext')
    <div id="advsex" style="height: 553px; top: 166px; background: url('/sites/site01/image/1498101612.jpg') center top no-repeat; display: block; opacity: 1;"></div>
    <div id="advsex2" style="background: url('/sites/site01/image/1498189939_01.png') center top no-repeat; height: 169px; top: 1539px; display: block;"></div>
    <div id="advsex3" style="background: url('/sites/site01/image/1498192034.jpg') center top no-repeat; height: 446px; top: 2302px; display: block;"></div>

    </body>
</html>
