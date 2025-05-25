
import React from 'react';
import { Tabs } from 'antd';
import Code from '@theme/CodeBlock';

const ImportTabs = ({ name }) => {
  const types = ['npm', 'pnpm', 'yarn']
  return (
    <Tabs
      defaultActiveKey={types[0]}
      items={types.map(it => ({
        key: it,
        label: it,
        children: (<Code text={`${it} install ${name}`} language={'shell'} />),
      }))}
    />
  );
};

export default ImportTabs;
