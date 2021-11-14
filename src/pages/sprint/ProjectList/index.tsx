/*
 * @Description: 项目列表
 * @Author: jieTan
 * @Date: 2021-11-13 07:50:59
 * @LastEditTime: 2021-11-13 14:35:53
 * @LastEditors: jieTan
 * @LastModify: 
 */


import { ClockCircleOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { PageContainer } from "@ant-design/pro-layout";
import ProList from '@ant-design/pro-list';
import { Button, Divider, Progress, Space, Tag } from "antd";
import { useState, ReactText } from "react";

// 模拟的数据 => 后期从api获取
import { SpProjListInterface as PL, mockData } from './mock'


const SprintProjectList: React.FC = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<ReactText[]>([]);
    const rowSelection = {
        selectedRowKeys,
        onChange: (keys: ReactText[]) => setSelectedRowKeys(keys),
    };

    return (
        <PageContainer>
            <ProList<{ title: string }>
                toolBarRender={() => {
                    return [
                        <Button key="3" type="primary">
                            新建
                        </Button>,
                    ];
                }}
                search={{}}
                pagination={{ pageSize: 10 }}
                metas={{
                    title: {
                        dataIndex: 'title',
                        title: '项目名称',
                    },
                    subTitle: {
                        search: false,
                        dataIndex: "source",
                        render: (text, row: PL) => {
                            const color = text === "人工" ? "purple" : "cyan"
                            return <Space>
                                <Tag color={color}>{text}</Tag>
                                <Tag color={color}><ClockCircleOutlined /> {row.createAt?.substr(0, 10)}</Tag>
                            </Space>
                        }
                    },
                    avatar: { search: false, dataIndex: "avatar" },
                    status: {
                        // 自己扩展的字段，主要用于筛选，不在列表中显示
                        dataIndex: 'status',
                        title: '状态',
                        valueType: 'checkbox',
                        valueEnum: {
                            all: { text: '全部', status: 'Default' },
                            open: {
                                text: '未解决',
                                status: 'Error',
                            },
                            closed: {
                                text: '已解决',
                                status: 'Success',
                            },
                            processing: {
                                text: '解决中',
                                status: 'Processing',
                            },
                        },
                    },
                    content: {
                        search: false,

                        render: (_, row: PL) => <Space size={64} style={{ minWidth: '960px' }}>
                            <Space>
                                {row.startAt}
                                <Divider type="vertical" />
                                {row.testAt}
                                <Divider type="vertical" />
                                {row.finishAt}
                                <Divider type="vertical" />
                                {row.stageAt}
                                <Divider type="vertical" />
                                {row.onlineAt}
                            </Space>
                            <div
                                style={{
                                    minWidth: 200,
                                    flex: 1,
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                }}
                            >
                                <div
                                    style={{
                                        width: '200px',
                                    }}
                                >
                                    <Progress percent={row.progress} />
                                </div>
                            </div>
                        </Space>
                    },
                    actions: {
                        render: (text, row) => [
                            <a href="#" rel="noopener noreferrer" key="link" children={<EditOutlined />} />,
                            <a href="#" rel="noopener noreferrer" key="view" children={<DeleteOutlined />} />,
                        ],
                    },
                }}
                rowKey="title"
                headerTitle="支持选中的列表"
                rowSelection={rowSelection}
                dataSource={mockData}
            />
        </PageContainer>
    );
}

export default SprintProjectList;