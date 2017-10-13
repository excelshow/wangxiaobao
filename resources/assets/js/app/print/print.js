/**
 * Created by Administrator on 2017/3/10.
 */
import React from 'react'
import ReactDOM from 'react-dom'

import {NavBar} from '../../lib/common/navBar';
import {Order} from '../../lib/print/print/order';

ReactDOM.render(<NavBar selectedChanelKey='2' hasBrand={true} />,document.getElementById('nav'));
ReactDOM.render(<Order />,document.getElementById('app'));
