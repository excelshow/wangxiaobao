/**
 * Created by Administrator on 2017/4/27.
 */
import React from 'react';
import Dialog from 'qnui/lib/dialog';

let CreatedOKLodop7766 = null;
function needCLodop() {
    try {
        let ua = navigator.userAgent;
        if (ua.match(/Windows\sPhone/i) != null) return true;
        if (ua.match(/iPhone|iPod/i) != null) return true;
        if (ua.match(/Android/i) != null) return true;
        if (ua.match(/Edge\D?\d+/i) != null) return true;

        let verTrident = ua.match(/Trident\D?\d+/i);
        let verIE = ua.match(/MSIE\D?\d+/i);
        let verOPR = ua.match(/OPR\D?\d+/i);
        let verFF = ua.match(/Firefox\D?\d+/i);
        let x64 = ua.match(/x64/i);
        if ((verTrident == null) && (verIE == null) && (x64 !== null))
            return true; else if (verFF !== null) {
            verFF = verFF[0].match(/\d+/);
            if ((verFF[0] >= 42) || (x64 !== null)) return true;
        } else if (verOPR !== null) {
            verOPR = verOPR[0].match(/\d+/);
            if (verOPR[0] >= 32) return true;
        } else if ((verTrident == null) && (verIE == null)) {
            let verChrome = ua.match(/Chrome\D?\d+/i);
            if (verChrome !== null) {
                verChrome = verChrome[0].match(/\d+/);
                if (verChrome[0] >= 42) return true;
            }
        }
        return false;
    } catch (err) {
        return true;
    }
}
//====获取LODOP对象的主过程：====
function getLodop(oOBJECT, oEMBED) {
    let strHtmInstall = <span>打印控件未安装!点击这里<a href='/app/help/download/lodop32'>执行安装</a>,安装后请刷新页面或重新进入。</span>;
    let strHtmUpdate = <span>打印控件需要升级!点击这里<a href='/app/help/download/lodop32'>执行升级</a>,升级后请重新进入。</span>;
    let strHtm64_Install = <span>打印控件未安装!点击这里<a href='/app/help/download/lodop64'>执行安装</a>,安装后请刷新页面或重新进入。</span>;
    let strHtm64_Update = <span >打印控件需要升级!点击这里<a href='/app/help/download/lodop64'>执行升级</a>,升级后请重新进入。</span>;
    let strHtmFireFox = <span >（注意：如曾安装过Lodop旧版附件npActiveXPLugin,请在【工具】->【附加组件】->【扩展】中先卸它）</span>;
    let strHtmChrome = <span >(如果此前正常，仅因浏览器升级或重安装而出问题，需重新执行以上安装）</span>;
    let strCLodopInstall = <span >云打印服务未安装启动!点击这里<a href='/app/help/download/clodop' >执行安装</a>,安装后请刷新页面。</span>;
    let strCLodopUpdate = <span >云打印服务需升级!点击这里<a href='/app/help/download/clodop'>执行升级</a>,升级后请刷新页面。</span>;
    let LODOP;
    try {
        let isIE = (navigator.userAgent.indexOf('MSIE') >= 0) || (navigator.userAgent.indexOf('Trident') >= 0);
        if (needCLodop()) {
            try {
                LODOP = getCLodop();
            } catch (err) {
            }
            // if (!LODOP && document.readyState !== "complete") {
            //     Dialog.alert({
            //         content: 'C-Lodop没准备好，请稍后再试！',
            //         closable: true,
            //         title: '提示',
            //         onOk: () => {
            //
            //         }
            //     })
            //     return;
            // }

            if (!LODOP) {
                // if (isIE) {
                //     document.write(strCLodopInstall);
                // }else{
                //     document.documentElement.innerHTML = strCLodopInstall + document.documentElement.innerHTML;
                // }
                Dialog.alert({
                    content: strCLodopInstall,
                    closable: true,
                    title: '提示',
                    onOk: () => {

                    }
                })
                return;
            } else {
                if (CLODOP.CVERSION < "2.1.1.2") {
                    // if (isIE){
                    //     //document.write(strCLodopUpdate)
                    // }else{
                    //     //document.documentElement.innerHTML = strCLodopUpdate + document.documentElement.innerHTML;
                    // }
                    Dialog.alert({
                        content: strCLodopUpdate,
                        closable: true,
                        title: '提示',
                        onOk: () => {

                        }
                    })
                }

                if (oEMBED && oEMBED.parentNode) oEMBED.parentNode.removeChild(oEMBED);
                if (oOBJECT && oOBJECT.parentNode) oOBJECT.parentNode.removeChild(oOBJECT);
            }
        } else {
            let is64IE = isIE && (navigator.userAgent.indexOf('x64') >= 0);
            //=====如果页面有Lodop就直接使用，没有则新建:==========
            if (oOBJECT != undefined || oEMBED != undefined) {
                if (isIE) LODOP = oOBJECT; else  LODOP = oEMBED;
            } else if (CreatedOKLodop7766 == null) {
                LODOP = document.createElement("object");
                LODOP.setAttribute("width", 0);
                LODOP.setAttribute("height", 0);
                LODOP.setAttribute("style", "position:absolute;left:0px;top:-100px;width:0px;height:0px;");
                if (isIE) LODOP.setAttribute("classid", "clsid:2105C259-1E0C-4534-8141-A753534CB4CA");
                else LODOP.setAttribute("type", "application/x-print-lodop");
                document.documentElement.appendChild(LODOP);
                CreatedOKLodop7766 = LODOP;
            } else LODOP = CreatedOKLodop7766;
            //=====Lodop插件未安装时提示下载地址:==========
            if ((LODOP == null) || (typeof(LODOP.VERSION) == "undefined")) {
                let msg = '';
                if (navigator.userAgent.indexOf('Chrome') >= 0){
                    //document.documentElement.innerHTML = strHtmChrome + document.documentElement.innerHTML;
                    msg = strHtmChrome;
                }

                else if (navigator.userAgent.indexOf('Firefox') >= 0){
                    //document.documentElement.innerHTML = strHtmFireFox + document.documentElement.innerHTML;
                    msg = strHtmFireFox;
                }

                else if (is64IE) {
                    //document.write(strHtm64_Install);
                    msg = strHtm64_Install;
                }
                else if (isIE) {
                    //document.write(strHtmInstall);
                    msg = strHtmInstall;
                }
                else {
                    //document.documentElement.innerHTML = strHtmInstall + document.documentElement.innerHTML;
                    msg = strHtmInstall;
                }
                Dialog.alert({
                    content: msg,
                    closable: true,
                    title: '提示',
                    onOk: () => {

                    }
                })
                return LODOP;
            }

        }

        if (LODOP.VERSION < "6.2.1.8") {
            let msg = '';
            if (needCLodop()){
               // document.documentElement.innerHTML = strCLodopUpdate + document.documentElement.innerHTML;
                msg = strCLodopUpdate;
            }
            else if (is64IE) {
               // document.write(strHtm64_Update);
                msg = strHtm64_Update;
            }
            else if (isIE) {
                //document.write(strHtmUpdate);
                msg = strHtmUpdate;
            }
            else {
               // document.documentElement.innerHTML = strHtmUpdate + document.documentElement.innerHTML;
                msg = strHtmUpdate;
            }
            Dialog.alert({
                content: msg,
                closable: true,
                title: '提示',
                onOk: () => {

                }
            })
            return LODOP;
        }
        //===如下空白位置适合调用统一功能(如注册语句、语言选择等):===

        //===========================================================
        return LODOP;
    } catch (err) {
        Dialog.alert({
            content: 'getLodop出错:'+ err,
            closable: true,
            title: '提示',
            onOk: () => {

            }
        })
    }
}

function checkService() {
    if (needCLodop()) {
        let head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
        let oscript = document.createElement("script");
        oscript.src = "http://localhost:8000/CLodopfuncs.js?priority=1";
        head.insertBefore(oscript, head.firstChild);

        //引用双端口(8000和18000）避免其中某个被占用：
        oscript = document.createElement("script");
        oscript.src = "http://localhost:18000/CLodopfuncs.js?priority=0";
        head.insertBefore(oscript, head.firstChild);
    }
}

const PrintService = {

    //获取对外插件
    getService: function () {
        checkService();
        let service = getLodop();
        return service;
    }
}


export {PrintService}
