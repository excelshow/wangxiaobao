/**
 * Created by Administrator on 2017/4/4.
 */
import React from 'react';
import Reflux from 'reflux';
class Plugin extends Reflux.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <h4 className="margin-t-10">插件下载安装</h4>
                <div>1.打印功能需要打印控件支持：<a href="/app/help/download/clodop">点击下载安装</a></div>
                
            </div>
        )
    }
}

export {Plugin};