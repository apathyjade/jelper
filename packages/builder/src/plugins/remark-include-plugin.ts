
import fs from 'fs-extra';
import path from 'path';
// import crypto from 'crypto';
import { visit } from 'unist-util-visit';
import { parse } from '@babel/parser';
import type {Transformer} from 'unified';
import type { Root } from 'mdast';
import { cloneDeep } from 'lodash-es';

const repleaceContent = (str: string, filePath: string): string => {
  return str.replace(/\$include\(['"](.+?)['"]\)/ig, (_: string, $1: string) => {
    const includeFilePath = path.resolve(path.dirname(filePath), $1);
    const content = fs.readFileSync(includeFilePath, 'utf8');
    return `${JSON.stringify(content)} + ''`;
  });
};

export default function remarkIncludePlugin(): Transformer<Root> {

  return async(root: any, file: any) => {
    const newTree = cloneDeep(root);
    // visit(newTree, 'text', (node) => {
    //   if (node.value.startsWith('#include ')) {
    //     const filePath = path.resolve(path.dirname(file.path), node.value.replace('#include ', '').trim());
    //     try {
    //       const content = fs.readFileSync(filePath, 'utf8');
    //       const lines = content.split('\n');
    //       node.type = 'head';
    //       node.value = undefined;
    //       node.children = lines.map(line => ({
    //         type: 'text',
    //         value: line
    //       }));
    //       console.log(node)
    //     } catch (err) {
    //       file.fail(`Failed to include file: ${filePath}`, node);
    //     }
    //   }
    // });

    (visit as any)(newTree, ['mdxJsxFlowElement', 'mdxJsxTextElement'], (node: any) => {
      if (!node.attributes?.length) return;
      node.attributes = node.attributes.map((attr: any) => {
        if (
          attr.type === 'mdxJsxAttribute'
          && attr.value?.type === 'mdxJsxAttributeValueExpression'
          && attr.value.value?.includes('$include')
        ) {
          const newExpression = repleaceContent(attr.value.value, file.path)
          // 重新解析生成新的 ESTree
          const newEstree = parse(newExpression, {
            sourceType: 'module',
            plugins: ['jsx']
          });

          console.log('----------------------')
          console.log(attr.value.data, newEstree)
          console.log('------------end----------')
          const value = {
            ...attr.value,
            value: newExpression,
            data: {
              ...(attr.value.data || {}),
                estree: newEstree,
                // __preserved: true,
                // __checksum: crypto.createHash('md5').update(attr.value.value).digest('hex')
              }
          }
          return { ...attr, value };
        }
        return attr;
      });
    });
    return newTree;
  };
};
