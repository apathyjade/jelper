import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
export default ({ name }) => {
  const types = ['npm', 'pnpm', 'yarn']

  return (
    <Tabs>
      {
        (types.map((type) => (
          <TabItem value={type} label={type} key={type}>
            <CodeBlock language="bash">
              {type} install {name}
            </CodeBlock>
          </TabItem>
        )))
      }
    </Tabs>
  );
}
