/**
 * Created by Administrator on 2017/3/10.
 */
import React from 'react'
import ReactDOM from 'react-dom'

import {NavBar} from '../../lib/common/navBar';
import {Business} from '../../lib/yinliu/business/business';

ReactDOM.render(<NavBar selectedChanelKey={5} selectedItemKey={1} hasBrand={true} />,document.getElementById('nav'));
ReactDOM.render(<Business />,document.getElementById('app'));
