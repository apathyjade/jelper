
import { $ } from 'execa';
import { resolveByBasePath } from '../common/index.js';

export default () => {
  $`tsc -p ./ --target es6 --module es6 --outDir ${resolveByBasePath('es')}`;
  $`tsc -p ./ --target es5 --module commonjs --outDir ${resolveByBasePath('lib')}`;
}
