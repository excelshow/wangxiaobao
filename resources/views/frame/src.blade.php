<meta charset="UTF-8">
<meta name="csrf-token" content="{{ csrf_token() }}" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="">
<title> 自动打印 </title>

<link rel="stylesheet" href="//g.alicdn.com/qn/QNUI-OPEN/0.5.0/qnui.min.css">

<link rel="stylesheet" href="/assets/css/app.css">
<script type="text/javascript" src="http://g.alicdn.com/sj/lib/jquery/dist/jquery.min.js"></script>

<script>
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
</script>
<script src='http://localhost:8000/CLodopfuncs.js'></script>
<script src='http://localhost:18000/CLodopfuncs.js'></script>
<style rel="stylesheet" type="text/css"  id="sty-product-tpl">

    .div-row-container{
        display: -webkit-flex; /* Safari */
        display: flex;
        flex-direction:row;
        flex-wrap:wrap;
    }
    .div-row-container .div-product-tpl-print-item{
        font-family: '微软雅黑';
        font-size: 12px;
    }

    .div-col-container3{
        flex: 0 0 33.3%;
    }
    .div-col-container12{
        flex: 1;
    }
    .hr-dotted{
        margin: 5px 0px;
        border:1px #CCCCCC dotted;
    }
    .tb-product-tpl{
        width: 100%;
        text-align: left;
    }
    .tb-product-tpl thead tr th,.tb-product-tpl tbody tr td{
        text-align: left!important;
        font-family: '微软雅黑';
        font-size: 12px;
    }
    th{
        font-weight: bold;
    }
    td{
        font-weight: normal;
    }
    .div-payment-info{
        text-align: right;
    }
    .div-tpl-title{
        font-size: 20px!important;
        text-align: center;
        margin-bottom: 10px;
    }
    .img-product-tpl{
        height: 20px;
    }
    .hidden{
        display: none;
    }

</style>