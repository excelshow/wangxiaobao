<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



//客户网站 插件
Route::group(['prefix' => '/','middleware' => ['web']], function () {

    //客户网站首页
    Route::get('/', 'Yinliu\SiteController@index');

});

//客户网站 插件
Route::group(['prefix' => '/site','middleware' => ['web']], function () {

    //获取业务
    Route::post('/business/get', 'Yinliu\SiteController@siteBusinessGet');
    //获取业务下推广产品
    Route::post('/product/get', 'Yinliu\SiteController@siteProductGet');
    //获取公司简介
    Route::post('/company/get', 'Yinliu\SiteController@siteCompanyGet');

    //公司简介页面
    Route::get('/company', 'Yinliu\SiteController@siteCompanyPageGet');
    Route::get('/company/{page}', 'Yinliu\SiteController@siteCompanyPageGet');
    //业务介绍
    Route::get('/business', 'Yinliu\SiteController@siteBusinessPageGet');
    Route::get('/business/{businessId}', 'Yinliu\SiteController@siteBusinessPageGet');
    //客户服务
    Route::get('/service', 'Yinliu\SiteController@siteServicePageGet');
    Route::get('/service/{page}', 'Yinliu\SiteController@siteServicePageGet');

    //人才招聘
    Route::get('/job', 'Yinliu\SiteController@siteJobPageGet');
    Route::get('/job/{page}', 'Yinliu\SiteController@siteJobPageGet');

    //产品系列
    Route::get('/product', 'Yinliu\SiteController@siteProductPageGet');
    Route::get('/product/{businessId}', 'Yinliu\SiteController@siteProductPageGet');
});




//引流 插件
Route::group(['prefix' => 'app/yinliu','middleware' => ['web']], function () {
    //企业推广
    Route::get('/company', 'Yinliu\CompanyController@index');
    //获取企业推广
    Route::post('/company/get', 'Yinliu\CompanyController@appYinliuCompanyGet');
    //设置企业推广
    Route::post('/company/set', 'Yinliu\CompanyController@appYinliuCompanySet');
    //域名是否推广
    Route::post('/company/domain/get', 'Yinliu\CompanyController@appYinliuCompanyDomainGet');

    //业务推广页面
    Route::get('/business', 'Yinliu\BusinessController@index');
    //获取推广业务
    Route::post('/business/get', 'Yinliu\BusinessController@appYinliuBusinessGet');
    //删除推广业务
    Route::post('/business/delete', 'Yinliu\BusinessController@appYinliuBusinessDelete');
    //新建推广业务
    Route::post('/business/add', 'Yinliu\BusinessController@appYinliuBusinessAdd');
    //编辑推广业务
    Route::post('/business/edit', 'Yinliu\BusinessController@appYinliuBusinessEdit');

    //产品推广页面
    Route::get('/product', 'Yinliu\ProductController@index');
    //获取推广产品
    Route::post('/product/get', 'Yinliu\ProductController@appYinliuProductGet');
    //删除推广产品
    Route::post('/product/delete', 'Yinliu\ProductController@appYinliuProductDelete');
    //获取全部商品
    Route::post('/baseProduct/get', 'Yinliu\ProductController@appYinliuBaseProductGet');
    //添加推广商品
    Route::post('/product/add', 'Yinliu\ProductController@appYinliuProductAdd');
    //下载商品
    Route::post('/product/download', 'Yinliu\ProductController@appYinliuProductDownload');
    //获取商品下载进度
    Route::post('/product/download/process/get', 'Yinliu\ProductController@appYinliuProductDownloadProcessGet');


    //百站分享页面
    Route::get('/share', 'Yinliu\ShareController@index');
    //获取全部商品
    Route::post('/share/product/get', 'Yinliu\ShareController@appYinliuBaseProductGet');
    //下载商品
    Route::post('/share/product/download', 'Yinliu\ShareController@appYinliuProductDownload');
    //获取商品下载进度
    Route::post('/share/product/download/process/get', 'Yinliu\ShareController@appYinliuProductDownloadProcessGet');
    //获取所有分享网站
    Route::post('/share/site/get', 'Yinliu\ShareController@appYinliuShareSiteGet');

});


//打印插件
Route::group(['prefix' => 'app/print','middleware' => ['web']], function () {
    //打单发货页面
    Route::get('/', 'Printa\PrintController@index');
    Route::get('/print', 'Printa\PrintController@index');

    //打印设置页面
    Route::get('/setting', 'Printa\SettingController@index');

    //获取自动打印设置
    Route::post('/getAutoPrintSetting', 'Printa\AutoController@getAutoPrint');
    //保存自动打印设置
    Route::post('/setAutoPrint', 'Printa\AutoController@setAutoPrint');


    //获取货单模版列表
    Route::post('/getProductTpls', 'Printa\ProductTplController@getProductTpls');
    //新建货单模版
    Route::post('/addProductTpl', 'Printa\ProductTplController@addProductTpl');
    //修改货单模版
    Route::post('/updateProductTpl', 'Printa\ProductTplController@updateProductTpl');
    //删除模版
    Route::post('/deleteProductTpls', 'Printa\ProductTplController@deleteProductTpls');
    //设为默认
    Route::post('/setDefaultProductTpl', 'Printa\ProductTplController@setDefaultProductTpl');


    //获取所有发货地址
    Route::post('/getSenderAddress', 'Printa\SenderController@getSenderAddress');
    //设为默认地址
    Route::post('/setDefaultSenderAddress', 'Printa\SenderController@setDefaultSenderAddress');
    //删除地址
    Route::post('/deleteSenderAddress', 'Printa\SenderController@deleteSenderAddress');
    //获取所有省份
    Route::post('/getProvinces', 'Printa\SenderController@getProvinces');
    //根据省份id 获取市
    Route::post('/getCities', 'Printa\SenderController@getCities');
    //根据城市id 获取区
    Route::post('/getAreas', 'Printa\SenderController@getAreas');
    //区id 邮编
    Route::post('/getPost', 'Printa\SenderController@getPost');
    //新建地址
    Route::post('/addSenderAddress', 'Printa\SenderController@addSenderAddress');
    //修改地址
    Route::post('/updateSenderAddress', 'Printa\SenderController@updateSenderAddress');


    //获取面单账户列表
    Route::post('/getElectricAccountsList', 'Printa\ElectricTplController@getAccountsList');
    //获取支持面单的公司
    Route::post('/getElectricCompanies', 'Printa\ElectricTplController@getElectricCompanies');
    //新建面单账号
    Route::post('/setElectricAccount', 'Printa\ElectricTplController@setElectricAccount');
    //删除面单账户
    Route::post('/deleteElectricAccounts', 'Printa\ElectricTplController@deleteElectricAccounts');
    //根据物流公司id 获取面单账号
    Route::post('/getElectricAccount', 'Printa\ElectricTplController@getElectricAccount');



    //获取打印机设置
    Route::post('/getPrinterSetting', 'Printa\PrinterController@getPrinterSetting');
    //保存打印机设置
    Route::post('/savePrinterSetting', 'Printa\PrinterController@savePrinterSetting');


    //获取合作物流
    Route::post('/getLogisticCompanyCooperate', 'Printa\LogisticController@getLogisticCompanyCooperate');
    //设为默认物流公司
    Route::post('/setDefaultCooperateLogisticCompany', 'Printa\LogisticController@setDefaultCooperateLogisticCompany');
    //取消合作
    Route::post('/cancelCooperateLogisticCompany', 'Printa\LogisticController@cancelCooperateLogisticCompany');
    //查询物流公司
    Route::post('/selectLogisticCompany', 'Printa\LogisticController@selectLogisticCompany');
    //添加合作物流
    Route::post('/setLogisticCompanyCooperate', 'Printa\LogisticController@setLogisticCompanyCooperate');
    //根据物流公司id 获取物流模版列表供关联
    Route::post('/getLogisticTplsByCompanyId', 'Printa\LogisticController@getLogisticTplsByCompanyId');
    //获取常用物流公司
    Route::post('/getLogisticCompanyOften', 'Printa\SettingController@getLogisticCompanyOften');



    //获取快递模版列表
    Route::post('/getLogisticTpls', 'Printa\LogisticTplController@getLogisticTpls');
    //设为默认
    Route::post('/setDefaultLogisticTpl', 'Printa\LogisticTplController@setDefaultLogisticTpl');
    //新建物流模版
    Route::post('/addLogisticTpl', 'Printa\LogisticTplController@addLogisticTpl');
    //修改物流模版
    Route::post('/updateLogisticTpl', 'Printa\LogisticTplController@updateLogisticTpl');
    //删除物流模版
    Route::post('/deleteLogisticTpls', 'Printa\LogisticTplController@deleteLogisticTpls');


    //获取默认物流和模版
    Route::post('/getLogisticDefaultAndTpl', 'Printa\PrintController@getLogisticDefaultAndTpl');
    //获取物流模版 by tplId
    Route::post('/getLogisticTpl', 'Printa\PrintController@getLogisticTpl');
    //获取默认发货地址
    Route::post('/getDefaultSenderAddress', 'Printa\PrintController@getDefaultSenderAddress');
    //获取打印设置
    Route::post('/getPrintSetting', 'Printa\PrintController@getPrintSetting');
    //获取默认货单模版
    Route::post('/getDefaultProductTpl', 'Printa\PrintController@getDefaultProductTpl');



    //获取面单账号
    Route::post('/getElectricAccount', 'Printa\PrintController@getElectricAccount');
    //获取面单
    Route::post('/getElectricTpl', 'Printa\PrintController@getElectricTpl');


    //设置运单打印状态
    Route::post('/setLogisticListPrintStatus', 'Printa\PrintController@setLogisticListPrintStatus');
    //设置面单打印状态
    Route::post('/setElectricListPrintStatus', 'Printa\PrintController@setElectricListPrintStatus');
    //设置货单打印状态
    Route::post('/setProductListPrintStatus', 'Printa\PrintController@setProductListPrintStatus');
    //发货
    Route::post('/sendGoods', 'Printa\PrintController@sendGoods');
    //批量发货
    Route::post('/sendAll', 'Printa\PrintController@sendAll');


    //获取商品列表
    Route::post('/getProductsList', 'Printa\ProductController@getProductsList');
    //下载商品
    Route::post('/downloadProducts', 'Printa\ProductController@download');
    //获取下载商品进度
    Route::post('/getProductsDownloadProcess', 'Printa\ProductController@getDownloadProcess');
    //删除商品
    Route::post('/deleteProducts', 'Printa\ProductController@deleteProducts');
    //设置商品简称
    Route::post('/setProductShort', 'Printa\ProductController@setProductShort');


    //下载订单
    Route::post('/order/download', 'Printa\OrderController@download');
    //下载进度
    Route::post('/order/download/getProcess', 'Printa\OrderController@getDownloadProcess');
    //获取最新订单和最后下载时间
    Route::post('/order/download/getWaitDownloadInfo', 'Printa\OrderController@getWaitDownloadInfo');
    //查询订单
    Route::post('/order/get', 'Printa\OrderController@getOrders');
    //快速查询订单
    Route::post('/order/getOrdersInStatus', 'Printa\OrderController@getOrders');

});


//交易管理
Route::group(['prefix' => 'app/trade','middleware' => ['web']], function () {
    //订单管理
    Route::get('/', 'Trade\OrderController@index');
    Route::get('/order', 'Trade\OrderController@index');
    //下载订单
    Route::post('/order/download', 'Trade\OrderController@download');
    //下载进度
    Route::post('/order/download/getProcess', 'Trade\OrderController@getDownloadProcess');
    //获取最新订单和最后下载时间
    Route::post('/order/download/getWaitDownloadInfo', 'Trade\OrderController@getWaitDownloadInfo');
    //查询订单
    Route::post('/order/get', 'Trade\OrderController@getOrders');
    //快速查询订单
    Route::post('/order/getOrdersInStatus', 'Trade\OrderController@getOrders');
    //查询订单总数
    Route::post('/order/getTotalByStatus', 'Trade\OrderController@getOrdersTotalByStatus');
    //修改订单价格
    Route::post('/order/updateOrderPrice', 'Trade\OrderController@updateOrderPrice');
    //订单评价
    Route::post('/order/ordersRate', 'Trade\OrderController@ordersRate');
    //标记备注
    Route::post('/order/setOrdersRemark', 'Trade\OrderController@setOrdersRemark');
});


//home 插件
Route::group(['prefix' => 'app/home','middleware' => ['web']], function () {
    //授权
    Route::get('/', 'Home\HomeController@index');

});

//使用帮助
Route::group(['prefix' => 'app/help','middleware' => ['web']], function () {
    //使用帮助
    Route::get('/docs', 'Help\HelpController@index');
    Route::get('/download/{file}', 'Help\HelpController@get');

});

//登录授权插件
Route::group(['prefix' => 'app','middleware' => ['web']], function () {
    //授权
    Route::get('/oauth/{device}/{appKey}', 'Login\LoginController@oauth');

    //登录页面
    Route::get('/login', 'Login\LoginController@loginView');
    Route::post('/login/apps/get', 'Login\LoginController@appsGet');
    //登录提交
    Route::post('/login/submit', 'Login\LoginController@login');

    //退出
    Route::get('/logout', 'Login\LoginController@logout');
});



//测试
Route::group(['prefix' => 'app/test','middleware' => ['web']], function () {

    Route::get('/1', 'TestController@test1');
    Route::get('/2', 'TestController@test2');
    Route::get('/3', 'TestController@test3');
    Route::get('/4', 'TestController@test4');
    Route::get('/5', 'TestController@test5');
    Route::get('/6', 'TestController@test6');
    Route::get('/7', 'TestController@test7');
    Route::get('/8', 'TestController@test8');
    Route::get('/9', 'TestController@test9');
    Route::get('/10', 'TestController@test10');

    Route::get('/11', 'TestController@test11');
    Route::get('/12', 'TestController@test12');
    Route::get('/13', 'TestController@test13');
    Route::get('/14', 'TestController@test14');
    Route::get('/15', 'TestController@test15');
    Route::get('/16', 'TestController@test16');
    Route::get('/17', 'TestController@test17');
    Route::get('/18', 'TestController@test18');
    Route::get('/19', 'TestController@test19');
    Route::get('/20', 'TestController@test20');

    Route::get('/21', 'TestController@test21');
    Route::get('/22', 'TestController@test22');
    Route::get('/23', 'TestController@test23');
    Route::get('/24', 'TestController@test24');
    Route::get('/25', 'TestController@test25');

    Route::get('/26', 'TestController@test26');
    Route::get('/27', 'TestController@test27');
    Route::get('/28', 'TestController@test28');
    Route::get('/29', 'TestController@test29');
    Route::get('/30', 'TestController@test30');

    Route::get('/31', 'TestController@test31');
    Route::get('/32', 'TestController@test32');
    Route::get('/33', 'TestController@test33');
    Route::get('/34', 'TestController@test34');
    Route::get('/35', 'TestController@test35');

    Route::get('/36', 'TestController@test36');
    Route::get('/37', 'TestController@test37');
    Route::get('/38', 'TestController@test38');
    Route::get('/39', 'TestController@test39');
    Route::get('/40', 'TestController@test40');

    Route::get('/41', 'TestController@test41');
    Route::get('/42', 'TestController@test32');
    Route::get('/43', 'TestController@test43');
    Route::get('/44', 'TestController@test44');
    Route::get('/45', 'TestController@test45');

});