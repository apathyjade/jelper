
import React, { useState } from 'react';
import { Card, Divider, Flex, Button, message } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  CopyOutlined,
  ScissorOutlined,
  UpOutlined,
} from '@ant-design/icons';

import CodeBlock from '@theme/CodeBlock';

import $css from './index.module.scss';

const OpenIcon = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path xmlns="http://www.w3.org/2000/svg" d="M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798zM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79l-167.28-150.62z" fillRule="evenodd" />
  </svg>
);
const CodeIcon = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path xmlns="http://www.w3.org/2000/svg" d="M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798zM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79l-167.28-150.62zm529.545-377.146c24.911 9.066 37.755 36.61 28.688 61.522L436.03 861.068c-9.067 24.911-36.611 37.755-61.522 28.688-24.911-9.066-37.755-36.61-28.688-61.522l242.15-665.302c9.067-24.911 36.611-37.755 61.522-28.688z" fillRule="evenodd" />
  </svg>
);

const Code =  (props) => {
  const { title, desc, text, children } = props;
  const [extend, setExtend] = useState(false)
  return (
    <Card className={$css.card}>
      {children}
      <Divider orientation="left" size="small" plain><ScissorOutlined /> {title}</Divider>
      {desc}
      <Divider size="small" dashed />
      <Flex justify="center">
        <CopyToClipboard text={text} onCopy={() => message.success('复制成功')}>
          <Button type="text" size="small">
            <CopyOutlined />
          </Button>
        </CopyToClipboard>
        <Button type="text" size="small" onClick={() => setExtend(!extend)} >
          {extend ? <OpenIcon /> : <CodeIcon />}
        </Button>
      </Flex>

      {
        extend ? (<>
          <Divider size="small" dashed />
          <CodeBlock text={text} />
          <Divider size="small" dashed />
          <Flex justify="center">
            <Button type="text" size="small" onClick={() => setExtend(!extend)} >
              收起 <UpOutlined />
            </Button>
          </Flex>
        </>) : undefined
      }
    </Card>
  );
};

export default Code;
