/**
 * Created by Administrator on 2017/3/10.
 */
import React from 'react'
import ReactDOM from 'react-dom'

import {NavBar} from '../../lib/common/navBar';
import {Product} from '../../lib/yinliu/product/product';

ReactDOM.render(<NavBar selectedChanelKey={6} selectedItemKey={1} hasBrand={true} />,document.getElementById('nav'));
ReactDOM.render(<Product />,document.getElementById('app'));
