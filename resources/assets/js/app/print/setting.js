/**
 * Created by Administrator on 2017/3/10.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {NavBar} from '../../lib/common/navBar';
import {PrintSetting} from '../../lib/print/setting/setting';

ReactDOM.render(<NavBar selectedChanelKey='3' hasBrand = {true} />,document.getElementById('nav'));
ReactDOM.render(<PrintSetting />,document.getElementById('app'));
