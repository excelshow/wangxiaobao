/**
 * Created by Administrator on 2017/3/10.
 */
import React from 'react'
import ReactDOM from 'react-dom'

import {NavBar} from '../../lib/common/navBar';
import {Share} from '../../lib/yinliu/share/share';

ReactDOM.render(<NavBar selectedChanelKey={7} selectedItemKey={1} hasBrand={true} />,document.getElementById('nav'));
ReactDOM.render(<Share />,document.getElementById('app'));
