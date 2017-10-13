/**
 * Created by Administrator on 2017/4/4.
 */
import React from 'react';
import Reflux from 'reflux';

import PropTypes from 'prop-types';

import Button from 'qnui/lib/button';
import Notice from 'qnui/lib/notice';
import { Row, Col } from 'qnui/lib/grid';
import Table from 'qnui/lib/table';
import Pagination from 'qnui/lib/pagination';
import Dialog from 'qnui/lib/dialog';
import Form, {Item as FormItem } from 'qnui/lib/form';
import Field from 'qnui/lib/field';
import Input from 'qnui/lib/input';
import Select, {Option, OptionGroup} from 'qnui/lib/select';
import Progress from 'qnui/lib/progress';
import { ShareActions } from '../../../action/yinliu/yinliuActions';
import {ProductStore} from '../../../store/yinliu/shareStore';


class Share extends Reflux.Component{
    constructor(props) {
        super(props);
        this.stores = [ProductStore];
        this.field = new Field(this,{
            onChange:(name, value)=>{
                switch (name){
                    case 'item_id':this.input(name,value);break;
                }
            },
        });
    }

    componentDidMount(){
        this.getProducts();
        this.getSites();
    }

    getSites(){
        ShareActions.getSites();
    }
    //下载商品
    download(){
        ShareActions.download();
    }

    closeDownloader(){
        ShareActions.closeDownloader();
    }

    input(field,value){
        ShareActions.input(field,value);
    }

    //获取
    getProducts(){
        ShareActions.getProducts();
    }
    //选择记录
    selectRows(selectedRowKeys,records){
        ShareActions.selectRows(selectedRowKeys,records);
    }
    //翻页
    changePage(page){
        ShareActions.changePage(page);
    }
    //设置页面大小
    setPageSize(size){
        ShareActions.setPageSize(size);
    }
    //查询
    search(){
        ShareActions.search();
        ShareActions.getProducts();
    }

    //分享
    share(site){
        ShareActions.share(site);
    }
    openSharer(record){
        ShareActions.openSharer(record);
    }
    closeSharer(){
        ShareActions.closeSharer();
    }

    render(){
        const {init} = this.field;
        let {downloader,products,page,sites,sharer} = this.state;
        let {process} = downloader;
        let total = products.total;
        let rowSelection = {
            onChange:  this.selectRows.bind(this),
        }
        return(
            <div>
                <Notice title="温馨提示" type="warning" iconType="lights">
                    1.将产品分享到其他各大网站，有助于百度，360等各大搜索引擎搜索收录；2.尽可能多的产品分享，有助于引入精准流量
                </Notice>
                <div>
                    <div className="component-container">
                        <Row type="no-padding" className="">
                            <Col>
                                <div>
                                    <Form field={this.field}  direction="hoz" >
                                        <FormItem className="margin-b-0">
                                            <Input  hasLimitHint style={{width:200}} placeholder="商品ID"
                                                    {...init('item_id',{initValue:''})}
                                            />
                                        </FormItem>
                                        <FormItem className="margin-b-0">
                                            <Button type="primary" onClick={this.search.bind(this)}>查询</Button>&nbsp;&nbsp;
                                            <Button type="primary" onClick={this.download.bind(this)}>下载商品</Button>&nbsp;&nbsp;
                                        </FormItem>
                                    </Form>

                                </div>
                            </Col>
                            <Col fixedSpan="16">
                                <div >
                                    <Pagination
                                        className="pull-right"
                                        pageSize = {page.limit}
                                        total={ total}
                                        current={page.page}
                                        onChange={this.changePage.bind(this)}
                                        type="simple" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Table dataSource={products.rows}
                           rowSelection={rowSelection}
                           primaryKey="id"
                    >
                        <Table.Column title="商品编号" dataIndex="item_id" />
                        <Table.Column title="主图" dataIndex="img_url"
                                      cell = {(value, index, record)=>{
                                          let tpl = <img src={record.img_url} className="img-product"/>
                                          return tpl;
                                      }}
                        />
                        <Table.Column title="标题" dataIndex="title" />

                        <Table.Column title="下载时间" dataIndex="created_at"/>
                        <Table.Column   title="操作" width={200}
                                        cell = {(value, index, record)=>{
                                            let tpl =
                                               <ul>

                                                   <li><a href="javascript:void(0)" onClick={this.openSharer.bind(this,record)} >分享</a></li>
                                               </ul>;
                                            return tpl;
                                        }}
                        />
                    </Table>
                    <div className="component-container">
                        <Pagination

                            pageSizeSelector="dropdown"
                            pageSize = {page.limit}
                            pageSizeList = {[10,20,50,100]}
                            total={total}
                            current= { page.page }
                            onChange={this.changePage.bind(this)}
                            pageSizePosition="start"
                            onPageSizeChange={this.setPageSize.bind(this)}
                        />
                    </div>
                </div>
                <Dialog  visible = {downloader.visible}
                         onOk = {this.closeDownloader.bind(this)}
                         onCancel = {this.closeDownloader.bind(this)}
                         onClose = {this.closeDownloader.bind(this)}
                         title = {downloader.title}

                         style={downloader.style}
                >
                    <Progress  percent={process.percent} suffix={`${process.percent}%`} />
                    <ul>
                        <li>同步总数：{process.total}</li>
                        <li>已同步数：{process.download}</li>
                    </ul>

                </Dialog>

                <Dialog  visible = {sharer.visible}
                         //onOk = {this.closeSharer.bind(this)}
                         //onCancel = {this.closeSharer.bind(this)}
                         onClose = {this.closeSharer.bind(this)}
                         title = {sharer.title}
                         style={sharer.style}
                         footer = {false}
                >
                    <Row type="wrap" className="jiathis_style_32x32" justify="start">
                        {
                            sites.map((data)=>{
                                let {web_id} = data;
                                let icon = 'jtico jtico_'+web_id;
                                let col = <Col span="4" key={data.id} className="margin-b-15"><div onClick={this.share.bind(this,data)}><span className={icon}></span>{data.name}</div></Col>
                                return col;
                            })
                        }
                    </Row>
                </Dialog>
            </div>
        );
    }
}



export {Share};