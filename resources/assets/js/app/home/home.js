/**
 * Created by Administrator on 2017/3/10.
 */
import React from 'react'
import ReactDOM from 'react-dom'

import {NavBar} from '../../lib/common/navBar';
import {Home} from '../../lib/home/home';

ReactDOM.render(<NavBar selectedChanelKey={1} selectedItemKey={1} hasBrand={true} />,document.getElementById('nav'));
ReactDOM.render(<Home />,document.getElementById('app'));
