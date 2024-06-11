
import { $ } from 'execa';
import { resolveByBasePath } from '../common/index.js';

export default () => {
  $`tsc -p ./ --module es6 --outDir ${resolveByBasePath('es')}`;
  $`tsc -p ./ --module commonjs --outDir ${resolveByBasePath('lib')}`;
}
