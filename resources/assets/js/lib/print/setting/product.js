/**
 * Created by Administrator on 2017/4/4.
 */
import React from 'react';
import Reflux from 'reflux';

import Button from 'qnui/lib/button';
import Icon from 'qnui/lib/icon';
import Pagination from 'qnui/lib/pagination';
import { Row, Col } from 'qnui/lib/grid';
import Dialog from 'qnui/lib/dialog';
import Progress from 'qnui/lib/progress';
import Form, {Item as FormItem } from 'qnui/lib/form';
import Input from 'qnui/lib/input';
import Field from 'qnui/lib/field';
import Table from 'qnui/lib/table';
import { ProductListStore } from '../../../store/print/productStore';
import { ProductActions } from '../../../action/print/productActions';

class Product extends Reflux.Component{
    constructor(props) {
        super(props);
        this.stores = [ProductListStore];
        this.field = new Field(this);
        this.state = {

        }
    }

    componentDidMount(){
       this.getProducts();

    }


    //关闭下载
    closeDownload(){
        ProductActions.closeDownload();
    }

    //下载商品
    download(){
        ProductActions.download();
    }


    //查询商品
    searchProducts(){
        let title = this.field.getValue('title');
        ProductActions.searchProducts();
        ProductActions.getProductsList(title);
    }

    //获取商品列表
    getProducts(){
        let title = this.field.getValue('title');
        ProductActions.getProductsList(title);
    }


    //点击编辑
    edit(record){
        let {title_short:short} = record;
        short = short?short:'';
        this.field.setValue('titleShort',short);
        ProductActions.edit(record);
    }

    //关闭对话框
    closeEdit(){
       ProductActions.closeEdit();
    }

    //提交
    editSubmit(){
        let {editDialog} = this.state;
        let {record} = editDialog;
        let short = this.field.getValue('titleShort');
        record.title_short = short;
        ProductActions.editSubmit(record);
    }


    //分页
    changePage(page){

        ProductActions.changePage(page);
        this.getProducts();

    }
    //设置每页大小
    setPageSize(size){
       ProductActions.setPageSize(size);
       this.getProducts();
    }

    //选择记录
    changeSelectedRows(selectedRowKeys,records){
        //console.log(selectedRowKeys);
        ProductActions.changeSelectedRows(selectedRowKeys,records);
    }

    //删除记录
    deleteAll(){
        let {selectedKeys:ids} = this.state;
        ProductActions.deleteAll(ids);
    }

    //单个删除
    deleteOne(record){
        let ids = [record.id];
        ProductActions.deleteAll(ids);
    }


    render(){
        const {init} = this.field;
        let {page,products,downloadDialog,editDialog} = this.state;
        let {process} = downloadDialog;
        let rowSelection = {
            onChange:  this.changeSelectedRows.bind(this),
            getProps: (record) =>{
                return {
                   // disabled: record.tpl_type == 'sys'
                }
            },

        }

        return(
            <div>
                <div className="component-container">
                    <Row type="no-padding" className="">
                        <Col>
                            <div>
                                <Form field={this.field}  direction="hoz" >
                                    <FormItem className="margin-b-0">
                                        <Input  hasLimitHint style={{width:200}} placeholder="商品标题关键词\ID编号"
                                                {...init('title',{initValue:''})}
                                        />
                                    </FormItem>
                                    <FormItem className="margin-b-0">
                                        <Button type="primary" onClick={this.searchProducts.bind(this)}>查询</Button>&nbsp;&nbsp;
                                        <Button type="primary" onClick={this.deleteAll.bind(this)} >删除</Button>&nbsp;&nbsp;
                                        <Button type="primary" onClick={this.download.bind(this)} >同步商品</Button>&nbsp;&nbsp;
                                    </FormItem>
                                </Form>

                            </div>
                        </Col>
                        <Col fixedSpan="16">
                            <div >
                                <Pagination
                                    className="pull-right"
                                    pageSize = {page.limit}
                                    total={ products.total}
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

                    <Table.Column title="商品ID" dataIndex="item_id"/>
                    <Table.Column title="主图" dataIndex="img_url"
                                  cell = {(value, index, record)=>{
                                      let tpl = <img src={record.img_url} className="img-product"/>
                                      return tpl;
                                  }}
                    />
                    <Table.Column title="商品标题" dataIndex="title"/>
                    <Table.Column title="简称" dataIndex="title_short"/>
                    <Table.Column title="单位" dataIndex="product_unit"/>
                    <Table.Column   title="操作" width={200}
                                    cell = {(value, index, record)=>{
                                        let tpl =
                                            <ul>
                                                <li><a href="javascript:void(0)" onClick={this.deleteOne.bind(this,record)} >删除</a></li>
                                                <li><a href="javascript:void(0)" onClick={this.edit.bind(this,record)} >设置简称</a></li>
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
                        total={products.total}
                        current= { page.page }
                        onChange={this.changePage.bind(this)}
                        pageSizePosition="start"
                        onPageSizeChange={this.setPageSize.bind(this)}
                    />
                </div>

                <div>
                    <Dialog  visible = {downloadDialog.visible}
                             onOk = {this.closeDownload.bind(this)}
                             onCancel = {this.closeDownload.bind(this)}
                             onClose = {this.closeDownload.bind(this)}
                             title = {downloadDialog.title}

                             style={downloadDialog.style}
                    >
                        <Progress  percent={process.percent} suffix={`${process.percent}%`} />
                        <ul>
                            <li>同步总数：{process.total}</li>
                            <li>已同步数：{process.download}</li>
                        </ul>


                    </Dialog>
                </div>
                <div>
                    <Dialog  visible = {editDialog.visible}
                             onOk = {this.editSubmit.bind(this)}
                             onCancel = {this.closeEdit.bind(this)}
                             onClose = {this.closeEdit.bind(this)}
                             title = {editDialog.title}

                             style={editDialog.style}
                    >

                        <Form field={this.field} >
                            <FormItem
                                label="商品简称"
                                labelCol ={{span: 5}}
                                wrapperCol = {{span: 12}}
                            >
                                <Input className="input-send-goods-logistic-num" hasLimitHint placeholder="商品简称"
                                       {...init('titleShort', {
                                           rules: [
                                               {required: false, message: '商品简称不能为空'},
                                           ],
                                       })} />
                            </FormItem>
                        </Form>
                    </Dialog>
                </div>
            </div>

        )
    }
}


export {Product};