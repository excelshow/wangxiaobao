/**
 * Created by Administrator on 2017/3/12.
 */
import Reflux from 'reflux';
let LoginActions = Reflux.createActions({

    getApps:{},
    selectApp:{},
    submit: {children: ['completed', 'failed']}
});

export {LoginActions}
