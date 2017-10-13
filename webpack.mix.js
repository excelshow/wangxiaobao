let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/assets/js/app/login/login.js', 'public/assets/js/app/login');//打包
mix.react('resources/assets/js/app/home/home.js', 'public/assets/js/app/home');//打包
mix.react('resources/assets/js/app/help/help.js', 'public/assets/js/app/help');//打包

mix.react('resources/assets/js/app/print/print.js', 'public/assets/js/app/print');//打包
mix.react('resources/assets/js/app/print/setting.js', 'public/assets/js/app/print');//打包

mix.react('resources/assets/js/app/yinliu/company.js', 'public/assets/js/app/yinliu');//打包
mix.react('resources/assets/js/app/yinliu/business.js', 'public/assets/js/app/yinliu');//打包
mix.react('resources/assets/js/app/yinliu/product.js', 'public/assets/js/app/yinliu');//打包
mix.react('resources/assets/js/app/yinliu/share.js', 'public/assets/js/app/yinliu');//打包
mix.react('resources/assets/js/app/app.js', 'public/assets/js/app');//打包

mix.extract(['react','react-dom','reflux']);//拆分其中的到vendor.js

mix.sass('resources/assets/sass/app.scss', 'assets/css/app.css');
mix.less('resources/assets/less/app.less', 'assets/css/print.css')