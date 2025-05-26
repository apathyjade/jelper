
import fs from 'fs-extra';
import nodePath from 'path';
import { declare } from '@babel/helper-plugin-utils';

export default (declare as any)((api: any) => {
  api.assertVersion(7);

  return {
    name: 'include-text-syntax',
    visitor: {
      CallExpression(path: any, state: any) {
        if (path.node.callee.name !== '$include') return;
        const args = path.node.arguments;
        if (args.length !== 1 || args[0].type !== 'StringLiteral') {
          throw path.buildCodeFrameError('include() requires exactly one string literal argument');
        }

        const filePath = nodePath.resolve(
          nodePath.dirname(state.file.opts.filename),
          args[0].value
        );

        const replaceContent = async () => {
          try {
            const content = fs.readFileSync(filePath, 'utf8');
            path.replaceWith(api.types.stringLiteral(content));
          } catch (err) {
            throw path.buildCodeFrameError(`Failed to include ${filePath}: ${(err as Error).message}`);
          }
        };
        replaceContent();
      }
    }
  };
});
