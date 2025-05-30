
import React from 'react';
import { Table } from 'antd';

const columns = [
  { title: '参数', width: 160, dataIndex: 'param' },
  { title: '说明', width: 240, dataIndex: 'desc' },
  { title: '类型', width: 400, dataIndex: 'type' },
  { title: '默认值', width: 160, dataIndex: 'defValue' },
  { title: '版本', width: 120, dataIndex: 'version' },
];

const ApiTable = (props) => {
  return (
    <Table
      rowKey="param"
      columns={columns}
      bordered
      size="small"
      pagination={false}
      {...props}
    />
  );
};

export default ApiTable;
