<div id="top" style="width: 1200px; height: 716px; background: url('/sites/site01/image/top.jpg') 50% 0% repeat-x;">

    <!-- 网站标志 -->

    <div id="pdv_10806" class="pdv_class" title="" style="width:400px;height:58px;top:35px;left:0px; z-index:6">
        <div id="spdv_10806" class="pdv_top" style="overflow:hidden;width:100%;height:100%">
            <div class="pdv_border" style="margin: 0px; padding: 0px; height: 58px; border: 0px solid;">

                <div style="padding:0px;margin-right: 5px">

                    <a href="{{@$site->shop_url}}" target="_blank"> <h1>{{@$site->company_name}}</h1></a>
                </div>
            </div>

        </div>
    </div>

    <!-- 页内图片广告 -->

    <div id="pdv_17266" class="pdv_class" title="广告位" style="width:199px;height:110px;top:0px;left:236px; z-index:8">
        <div id="spdv_17266" class="pdv_top" style="overflow:hidden;width:100%;height:100%"><div class="pdv_border" style="border: 0px; height: 110px; margin-left: 10px;">

                <img src="/sites/site01/image/title01.jpg" border="0" width="100%">

            </div>
        </div>
    </div>


    <!-- 二级下拉菜单16 -->

    <div id="pdv_17047" class="pdv_class" style="width:1200px;height:46px;top:120px;left:0px; z-index:12">
        <div id="spdv_17047" class="pdv_top" style="overflow:hidden;width:100%;height:100%">
            <div class="pdv_border" style="margin: 0px; padding: 0px; height: 46px; border: 0px solid;">

                <div style="padding:0px">
                    <ul id="dropmenu">
                        <li><a href="/">网站首页</a>

                        </li>

                        <li><a href="/site/company/company">公司介绍</a>
                            <ul style="visibility: hidden;">
                                <li><a href="/site/company/company">公司简介</a></li>
                                <li><a href="/site/company/culture">企业文化</a></li>
                                <li><a href="/site/company/ethic">经营理念</a></li>
                                <li><a href="/site/company/sale">营销网络</a></li>
                                <li><a href="/site/company/shop">阿里店铺</a></li>
                            </ul>
                        </li>

                        <li><a href="/site/business">业务介绍</a>
                            <ul style="visibility: hidden;">
                                <li v-for="data in businesses"><a :href="data.url">@{{data.business}}</a></li>
                            </ul>
                        </li>

                        <li><a href="/site/product">产品系列</a>

                        </li>


                        <li><a href="/site/service">客户服务</a>
                            <ul>

                                <li><a href="/site/service/service">服务理念</a></li>

                                <li><a href="/site/service/policy">服务宗旨</a></li>
                            </ul>
                        </li>

                        <li><a href="/site/job">人才招聘</a>

                        </li>

                    </ul>
                    <div class="clear"> </div>

                </div>
            </div>

        </div>
    </div>

    <!-- 全站搜索表单 -->

    <div id="pdv_17567" class="pdv_class" title="全站搜索" style="width:340px;height:37px;top:42px;left:860px; z-index:22">
        <div id="spdv_17567" class="pdv_top" style="overflow:hidden;width:100%;height:100%"><div class="pdv_border" style="border: 0px; height: 37px;">
                <div class="globalsearchformzone">
                    <form id="globalsearchform" method="get" action="search/index.php">
                        <div class="globalsearchform">
                            <input name="key" type="text" id="globalsearchform_key" value="" class="input">
                        </div>
                        <div class="globalsearchform1">
                            <input name="button" type="button" value="搜索" class="stj">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript" src="/sites/site01/js/dropmenu16.js"></script>
<script>
    var BusinessNav = new Vue({
        el: '#top',
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
                    for (var i=0;i<response.length;i++){
                        var url = '/site/business/'+response[i].id;
                        response[i].url = url;
                    }
                    this.businesses = response;

                }).fail((response)=>{
                    console.log('业务获取失败'+response)
                })
            },
            init(){
                this.getBusinesses();
            }
        }
    });
    BusinessNav.init();
</script>
