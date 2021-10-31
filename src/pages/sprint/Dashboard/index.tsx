/*
 * @Description: dashboard页面组件
 * @Author: jieTan
 * @Date: 2021-10-31 08:58:31
 * @LastEditTime: 2021-10-31 10:28:44
 * @LastEditors: jieTan
 * @LastModify:
 */

import { PageContainer } from "@ant-design/pro-layout";
import ProList from '@ant-design/pro-list';
import { Button, Progress } from "antd";
import { useState, ReactText } from "react";

const dataSource = [
    {
        title: '语雀的天空',
        avatar:
            'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    },
    {
        title: 'Ant Design',
        avatar:
            'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    },
    {
        title: '蚂蚁金服体验科技',
        avatar:
            'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    },
    {
        title: 'TechUI',
        avatar:
            'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    },
];

const SprintDashboard: React.FC = () => {
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
                        dataIndex: 'project',
                        title: '项目名称',
                    },
                    description: {
                        search: false,
                        render: () => {
                            return 'Ant Design, a design language for background applications, is refined by Ant UED Team';
                        },
                    },
                    avatar: { search: false },
                    extra: {
                        search: false,
                        render: () => (
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
                                    <div>发布中</div>
                                    <Progress percent={80} />
                                </div>
                            </div>
                        ),
                    },
                    status: {
                        // 自己扩展的字段，主要用于筛选，不在列表中显示
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
                }}
                rowKey="title"
                headerTitle="支持选中的列表"
                rowSelection={rowSelection}
                dataSource={dataSource}
            />
        </PageContainer>
    );
}

export default SprintDashboard;