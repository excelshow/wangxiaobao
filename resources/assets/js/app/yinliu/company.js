/**
 * Created by Administrator on 2017/3/10.
 */
import React from 'react'
import ReactDOM from 'react-dom'

import {NavBar} from '../../lib/common/navBar';
import {Company} from '../../lib/yinliu/company/company';

ReactDOM.render(<NavBar selectedChanelKey={4} selectedItemKey={1} hasBrand={true} />,document.getElementById('nav'));
ReactDOM.render(<Company />,document.getElementById('app'));
