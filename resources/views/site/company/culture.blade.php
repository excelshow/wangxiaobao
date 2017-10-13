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
            @include('site.tpl.company.nav')
            <!-- 当前位置提示条 -->
            <div id="pdv_16238" class="pdv_class" title="" style="width:940px;height:54px;top:15px;left:260px; z-index:4">
                <div id="spdv_16238" class="pdv_content" style="overflow:hidden;width:100%;height:100%">
                    <div class="pdv_border" style="border: 0px; height: 54px;">
                        <div id="nav">
                            您现在的位置：<a href="/site/company/company">公司介绍</a> > 公司文化
                        </div>
                    </div>
                </div>
            </div>

            <!-- 网页内容详情 -->

            <div id="pdv_16239" class="pdv_class" title="" style="width: 940px; height: 542px; top: 80px; left: 260px; z-index: 6;">
                <div id="spdv_16239" class="pdv_content" style="overflow:visible;width:100%;">
                    <div class="pdv_border" style="margin:0;padding:0;height:100%;border:0px  solid">

                        <div id="pagecontent" class="page_content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自信、自律，自立、自强客户：为客户提供高质量和最大价值的专业化产品和服务，以真诚和实力赢得客户的理解、尊重和支持。员工：信任员工的努力和奉献，承认员工的成就并提供相应回报，为员工创造良好的工作环境和发展前景。<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 市场：为客户降低采购成本和风险，为客户投资提供切实保障。 发展：追求永续发展的目标，并把它建立在客户满意的基础上。企业精神：自信、自律，自立、自强客户：为客户提供高质量和最大价值的专业化产品和服务，以真诚和实力赢得客户的理解、尊重和支持。员工：信任员工的努力和奉献，承认员工的成就并提供相应回报，为员工创造良好的工作环境和发展前景。市场：为客户降低采购成本和风险，为客户投资提供切实保障。 发展：追求永续发展的目标，并把它建立在客户满意的基础上。</div>
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
