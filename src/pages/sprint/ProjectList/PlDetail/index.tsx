/*
 * @Description: 项目明细行
 * @Author: jieTan
 * @Date: 2021-11-14 02:42:05
 * @LastEditTime: 2021-11-14 12:28:20
 * @LastEditors: jieTan
 * @LastModify: 
 */

import { PageContainer } from "@ant-design/pro-layout"
import ProCard from '@ant-design/pro-card';
import { Button, Tag, Menu, Dropdown, Space, Divider } from "antd"
import { AgGridColumn, AgGridReact } from "ag-grid-react";

// 
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

// 
import { mockBodyData } from './mock'
import { DownOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";

const severityRender = (props: { value: any }) => {
    const colorMap = { 1: "red", 2: "orange", 3: "blue", 4: "green", }
    return <Tag color={colorMap[props.value]}>{props.value + "级"}</Tag>
}

const ztNoRender = (props: { value: any }) => <a href="#">{props.value}</a>

const menu = (
    <Menu onClick={() => { }}>
        <Menu.Item key="1" icon={<UserOutlined />}>
            1st menu item
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
            2nd menu item
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
            3rd menu item
        </Menu.Item>
    </Menu>
);

export default () => {
    /* 数据区 */

    /* 渲染区 */
    return (
        <PageContainer>
            <ProCard direction="column" ghost gutter={[0, 2]}>
                <ProCard bordered>
                    <Space wrap>
                        <Button type="primary" icon={<PlusOutlined />} />
                        <Divider type="vertical" />
                        <Dropdown overlay={menu} trigger={['click']}>
                            <Button>
                                操作 <DownOutlined />
                            </Button>
                        </Dropdown>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <Button>
                                流程 <DownOutlined />
                            </Button>
                        </Dropdown>
                    </Space>
                </ProCard>

                <ProCard bordered>
                    <div className="ag-theme-material" style={{ height: 400 }}>
                        <AgGridReact
                            frameworkComponents={{
                                severity: severityRender,
                                ztNo: ztNoRender,
                            }}
                            rowData={mockBodyData} >
                            <AgGridColumn headerName="阶段" field="stage" flex={96} />
                            <AgGridColumn headerName="测试" field="tester" flex={96} />
                            <AgGridColumn headerName="类型" field="category" flex={96} />
                            <AgGridColumn headerName="编号" field="ztNo" flex={90} cellRenderer="ztNo" />
                            <AgGridColumn headerName="标题" field="title" />
                            <AgGridColumn headerName="严重等级" field="severity" flex={96} cellRenderer="severity" />
                            <AgGridColumn headerName="当前状态" field="ztStatus" />
                            <AgGridColumn headerName="来源" field="source" />
                            <AgGridColumn headerName="截止日期" field="deadline" />
                            <AgGridColumn headerName="反馈人" field="feedback" />

                        </AgGridReact>
                    </div>
                </ProCard>


            </ProCard>

        </PageContainer>
    )
}