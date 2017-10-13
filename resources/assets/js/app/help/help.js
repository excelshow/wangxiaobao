/**
 * Created by Administrator on 2017/3/10.
 */
import React from 'react'
import ReactDOM from 'react-dom'

import {NavBar} from '../../lib/common/navBar';
import {Help} from '../../lib/help/helpYinliu';

ReactDOM.render(<NavBar selectedChanelKey={0} selectedItemKey={1} hasBrand={true} />,document.getElementById('nav'));
ReactDOM.render(<Help />,document.getElementById('app'));
