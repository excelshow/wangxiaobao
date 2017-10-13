<!DOCTYPE html>
<html lang="en">
    <head>
        @include('site.frame.src')
        <link rel="stylesheet" href="/sites/site01/css/company.css">
        <script type="text/javascript" src="/sites/site01/js/common.js"></script>
    </head>
    <body style="background:transparent">

    <div id="contain" style="width:1200px;background:none;margin:0px auto;padding:0px">
        @include('site.frame.header')
        <div id="content" style="width: 1200px; height: 622px; background: none; margin: 0px auto;">

            <!-- 网页标题(菜单) -->
            @include('site.tpl.product.nav')
            <!-- 当前位置提示条 -->
            <div id="pdv_16238" class="pdv_class" title="" style="width:940px;height:54px;top:15px;left:260px; z-index:4">
                <div id="spdv_16238" class="pdv_content" style="overflow:hidden;width:100%;height:100%">
                    <div class="pdv_border" style="border: 0px; height: 54px;">
                        <div id="nav">
                            您现在的位置：<a href="/site/product">产品系列</a> > {{@$business->business}} (关键词：{{@$business->keywords}})
                        </div>
                    </div>
                </div>
            </div>

            <!-- 网页内容详情 -->

            <div id="pdv_16951" class="pdv_class" title="{{@$business->business}}" style="width:940px;height:797px;top:87px;left:260px; z-index:4">
                <div id="spdv_16951" class="pdv_content" style="overflow:visible;width:100%;">
                    <div class="pdv_border" style="margin:0;padding:0;height:100%;border:1px rgb(221, 221, 221) solid;">

                        <div style="padding:20px">
                            @foreach (@$products as $product)
                                <div id="productquery">
                                    <div class="fang" style="width:260px;height:180px">
                                        <div class="picFit" style="width:260px;height:180px">
                                            <a href="https://detail.1688.com/offer/{{ @$product->item_id}}.html" target="_blank">
                                                <img src="{{@$product->img_url}}" style="height: 180px;" border="0">
                                            </a>
                                        </div>
                                    </div>
                                    <div style="width: 180px;height: 25px">
                                        <a href="https://detail.1688.com/offer/{{ @$product->item_id}}.html" target="_blank" class="prodtitle">{{@$product->title}}</a>
                                    </div>

                                </div>
                            @endforeach


                            <div id="showpages">
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <!-- HTML编辑区 -->
            @include('site.tpl.common.contact')
        </div>
        @include('site.frame.footer')
    </div>
    @include('site.frame.ext')
    <div id="advsex"></div>
    <div id="advsex2"></div>
    <div id="advsex3" style=" height: 446px; top: 166px; display: block;"></div>

    </body>
</html>
