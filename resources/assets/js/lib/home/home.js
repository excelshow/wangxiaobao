/**
 * Created by Administrator on 2017/3/10.
 */
import React from 'react';
import Reflux from 'reflux';
class Home extends Reflux.Component{
    constructor(props) {
        super(props);
        super(props);

        this.state = {
            currentStep: 0
        };
    }


    render(){

        return(
            <div>
                首页
            </div>
        )
    }
}

export {Home};