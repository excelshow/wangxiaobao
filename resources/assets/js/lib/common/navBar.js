/**
 * Created by Administrator on 2017/3/6.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Navigation,{Item, Group} from 'qnui/lib/navigation';
import Icon from 'qnui/lib/icon';
import Menu from 'qnui/lib/menu';
import Breadcrumb from 'qnui/lib/breadcrumb';
import { App } from './app';
const propTypes = {
    hasBrand:PropTypes.any,
    selectedChanelKey:PropTypes.any,
    selectedItemKey:PropTypes.any,
}


let defaultProps ={
    hasBrand:true,
    selectedChanelKey:'0',
    selectedItemKey:'0',
};
let {name,chanels} = App;

class NavBar extends React.Component {
    onMenuItemClick(item){
        let {url,target} = item;
        if(target=='blank'){
            window.open(url,'_blank');
        }else {
            window.location.href=url;
        }

    }

    render() {
        let {selectedChanelKey,selectedItemKey,hasBrand} = this.props;
        let brandItems = [
            {key:'home',text:name,url:App.home},
        ];
        if(chanels[selectedChanelKey]){
            chanels[selectedChanelKey].active=true;
            let chanel = chanels[selectedChanelKey];
            brandItems.push({key:'chanel',text:chanel.text,url:chanel.url});
        }
        if(chanels[selectedChanelKey].items[selectedItemKey]){
            chanels[selectedChanelKey].items[selectedItemKey].selected = true;
            let item =  chanels[selectedChanelKey].items[selectedItemKey];
            brandItems.push({key:'item',text:item.text,url:item.url});
        }

        let brandStyle = hasBrand?{display:'block'}:{display:'none'};
        return (
            <div>
                <Navigation
                    type="filling"
                    activeDirection="bottom"
                >
                    <li className="navigation-logo-zone">
                        <Icon type="all" />
                        <span>{name}</span>
                    </li>
                    {
                        chanels.map((chanel)=>{
                            let tpl = '';
                            if(chanel.items.length>0){
                                tpl = <Item
                                    key={chanel.key}
                                    text={chanel.text}
                                    icon={ chanel.icon}
                                    selected = {chanel.active}
                                    className = {chanel.visible}
                                >
                                    <Menu>
                                        {chanel.items.map(

                                            item=> <Menu.Item   className = {item.visible} key={item.key} selected={item.selected} onClick={this.onMenuItemClick.bind(this,item)}>{item.text}</Menu.Item>
                                        )}

                                    </Menu>
                                </Item>
                                return tpl;
                            }

                           tpl = <Item
                                key={chanel.key}
                                text={chanel.text}
                                icon={ chanel.icon}
                                selected = {chanel.active}
                                link = {chanel.url}
                                target = {chanel.target}
                                className = {chanel.visible}
                            ></Item>;

                            return tpl;
                        })
                    }

                </Navigation>

                <Breadcrumb className="brandbar" style={brandStyle}>
                    {
                        brandItems.map((data)=>  {
                            let tpl = <Breadcrumb.Item key={data.key} link={data.url}>{data.text}</Breadcrumb.Item>;
                            return tpl;
                        })
                    }
                </Breadcrumb>
            </div>
        );
    }
}
NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;
export {NavBar};
