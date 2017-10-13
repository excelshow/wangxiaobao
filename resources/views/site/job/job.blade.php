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
            @include('site.tpl.job.nav')
            <!-- 当前位置提示条 -->
            <div id="pdv_16238" class="pdv_class" title="" style="width:940px;height:54px;top:15px;left:260px; z-index:4">
                <div id="spdv_16238" class="pdv_content" style="overflow:hidden;width:100%;height:100%">
                    <div class="pdv_border" style="border: 0px; height: 54px;">
                        <div id="nav">
                            您现在的位置：<a href="/site/job">人才招聘</a> > 人才招聘
                        </div>
                    </div>
                </div>
            </div>

            <!-- 网页内容详情 -->

            <div id="pdv_16239" class="pdv_class" title="" style="width: 940px; height: 542px; top: 80px; left: 260px; z-index: 6;">
                <div id="spdv_16239" class="pdv_content" style="overflow:visible;width:100%;">
                    <div class="pdv_border" style="margin:0;padding:0;height:100%;border:0px  solid">
                        <div id="pagecontent" class="page_content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            具体请联系公司
                            <br><br>&nbsp;&nbsp;&nbsp;&nbsp;
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
