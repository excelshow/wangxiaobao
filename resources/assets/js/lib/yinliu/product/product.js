/**
 * Created by Administrator on 2017/4/4.
 */
import React from 'react';
import Reflux from 'reflux';

import PropTypes from 'prop-types';

import Button from 'qnui/lib/button';
//import Icon from 'qnui/lib/icon';
import Notice from 'qnui/lib/notice';
import { Row, Col } from 'qnui/lib/grid';
import Table from 'qnui/lib/table';
import Pagination from 'qnui/lib/pagination';
import Dialog from 'qnui/lib/dialog';
import Form, {Item as FormItem } from 'qnui/lib/form';
import Input from 'qnui/lib/input';
//import Radio, { Group as RadioGroup } from 'qnui/lib/radio';
import Field from 'qnui/lib/field';
import Select, {Option, OptionGroup} from 'qnui/lib/select';
import Progress from 'qnui/lib/progress';
import { ProductActions,BaseProductActions } from '../../../action/yinliu/yinliuActions';
import {ProductStore,EditorStore} from '../../../store/yinliu/productStore';



class Product extends Reflux.Component{
    constructor(props) {
        super(props);
        this.stores = [ProductStore];
        this.field = new Field(this,{
            onChange:(name, value)=>{
            },
        });

    }

    componentDidMount(){
        this.get();
        this.getBusinesses();

    }

    //下载商品
    download(){
        ProductActions.download();
    }

    closeDownloader(){
        ProductActions.closeDownloader();
    }

    //全部删除
    deleteAll(){
        let {selectedKeys} = this.state;
        if(selectedKeys.length=='0'){
            Dialog.alert({
                content:'请选择要删除的记录',
                closable: true,
                title: '提示',
                onOk: () => {
                }
            })
            return;
        }
        ProductActions.deleteAll();
    }

    //保存
    save(){
        this.refs['editor'].save();
    }
    //取消编辑
    cancel(){
        ProductActions.cancel();
    }
    //添加
    add(){
        ProductActions.add();
    }

    //删除
    delete(record){
        ProductActions.delete(record);
    }
    //获取
    get(){
        ProductActions.get();
    }
    //选择记录
    selectRows(selectedRowKeys,records){
        ProductActions.selectRows(selectedRowKeys,records);
    }
    //翻页
    changePage(page){
        ProductActions.changePage(page);
    }
    //设置页面大小
    setPageSize(size){
        ProductActions.setPageSize(size);
    }
    //查询
    search(){
        ProductActions.search();
        ProductActions.get();
    }

    //获取所有业务
    getBusinesses(){
        ProductActions.getBusinesses();
    }
    selectBusiness(business){
        ProductActions.selectBusiness(business);
    }

    render(){
        const {init} = this.field;
        let {editor,downloader,products,page,businesses} = this.state;
        let {process} = downloader;
        let total = products.total;
        let rowSelection = {
            onChange:  this.selectRows.bind(this),
        }
        return(
            <div>
                <Notice title="温馨提示" type="warning" iconType="lights">
                    1.我们将在为您建立的企业网站展示推广您的产品，并推广到百度，360等各大搜索引擎；2.我们将对产品在其他合作各大合作网站，进行广告投放，请您准确设置推广内容
                </Notice>
                <div>
                    <div className="component-container">
                        <Row type="no-padding" className="">
                            <Col>
                                <div>
                                    <Form field={this.field}  direction="hoz" >
                                        <FormItem className="margin-b-0"
                                                  label="选择业务："
                                        >
                                            <Select
                                                placeholder="请选择所属业务"
                                                style={{ width: 150 }}
                                                {...init('business', {
                                                    rules: [
                                                        {required: false, message: '请选择所属业务'}
                                                    ],
                                                    // props: {onChange: this.selectProductPrinter.bind(this)},
                                                })}
                                            >
                                                {businesses.map(data=> <Option key={data.id} value={data.id} onClick={this.selectBusiness.bind(this,data)}>{data.business}</Option>)}

                                            </Select>
                                        </FormItem>
                                        <FormItem className="margin-b-0">
                                            <Button type="primary" onClick={this.search.bind(this)}>查询</Button>&nbsp;&nbsp;
                                            <Button type="primary" onClick={this.add.bind(this)}>推广</Button>&nbsp;&nbsp;
                                            <Button type="primary" onClick={this.deleteAll.bind(this)} >删除</Button>&nbsp;&nbsp;
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
                        <Table.Column title="所属业务" dataIndex="business"
                                      cell = {(value, index, record)=>{
                                          let tpl = <div>
                                              {record.business}(ID:{record.business_id})
                                          </div>;

                                          return tpl;
                                      }}
                        />
                        <Table.Column title="推广时间" dataIndex="created_at"/>
                        <Table.Column   title="操作" width={200}
                                        cell = {(value, index, record)=>{
                                            let tpl =
                                                <ul>
                                                    <li><a href="javascript:void(0)" onClick={this.delete.bind(this,record)} >删除</a></li>
                                                </ul>
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
                <Dialog visible = {editor.visible}
                    //footer = {footer}
                        onOk = {this.save.bind(this)}
                        onCancel = {this.cancel.bind(this)}
                        onClose = {this.cancel.bind(this)}
                        title = {editor.title}
                        style = {editor.style}
                        align = {editor.align}
                >
                    <Editor ref="editor"/>
                </Dialog>
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
            </div>
        );
    }
}



//编辑器
class Editor extends Reflux.Component{
    constructor(props) {
        super(props);
        this.stores = [EditorStore];
        this.field = new Field(this,{
            onChange:(name, value)=>{
                switch (name){
                    case 'item_id':this.input(name,value);break;
                    case 'business':break;
                }

            },
        });

    }


    componentDidMount(){
        this.get();
        this.getBusinesses();
    }
    //选择记录
    selectRows(selectedRowKeys,records){
        BaseProductActions.selectRows(selectedRowKeys,records);
    }
    //输入
    input(field,value){
        BaseProductActions.input(field,value);
    }
    //保存
    save(){
        BaseProductActions.save();
    }

    //查询
    search(){
        BaseProductActions.search();
        BaseProductActions.get();
    }
    //获取全部商品
    get(){
        BaseProductActions.get();
    }
    getBusinesses(){
        BaseProductActions.getBusinesses();
    }
    //翻页
    changePage(page){
        BaseProductActions.changePage(page);
    }

    //选择页码
    setPageSize(size){
        BaseProductActions.setPageSize(size);
    }

    //选择业务
    selectBusiness(business){
        BaseProductActions.selectBusiness(business);
    }

    render(){
        const {init} = this.field;
        let {products,page,businesses,business} = this.state;
        let total = products.total;
        let rowSelection = {
            onChange:  this.selectRows.bind(this),
        }
        return(
            <div>
                <div>
                    <div className="component-container">
                        <Row type="no-padding" className="">
                            <Col>
                                <div>
                                    <Form field={this.field}  direction="hoz" >
                                        <FormItem className="margin-b-0"
                                            label="选择业务："
                                            >
                                            <Select
                                                placeholder="请选择所属业务"
                                                style={{ width: 150 }}
                                                {...init('business', {
                                                    rules: [
                                                        {required: false, message: '请选择所属业务'}
                                                    ],
                                                   // props: {onChange: this.selectProductPrinter.bind(this)},
                                                })}
                                            >
                                                {businesses.map(data=> <Option key={data.id} value={data.id} onClick={this.selectBusiness.bind(this,data)}>{data.business}</Option>)}

                                            </Select>
                                        </FormItem>
                                        <FormItem className="margin-b-0">
                                            <Input  hasLimitHint style={{width:150}} placeholder="商品ID"
                                                    {...init('item_id',{initValue:''})}
                                            />
                                        </FormItem>
                                        <FormItem className="margin-b-0">
                                            <Button type="primary" onClick={this.search.bind(this)}>查询</Button>&nbsp;&nbsp;
                                        </FormItem>
                                    </Form>

                                </div>
                            </Col>
                            <Col fixedSpan="13">
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
                        <Table.Column title="是否推广" dataIndex="has_promoted"
                                      cell = {(value, index, record)=>{
                                          let text = value?'已推广':'未推广';
                                          return text;
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
            </div>
        );
    }

}

export {Product};