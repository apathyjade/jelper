
import ora from 'ora';
import { $ } from 'execa';
import { getModulePath } from '../common/index.js';

const tsc = getModulePath('.bin/tsc');

export default async () => {

  const esSpinner = ora('ES Module Creating...').start();
  await $`${tsc} -p ./ --target es6 --module es6 --outDir ./es`;
  esSpinner.succeed('ES Module Create Success');

  const cmjSpinner = ora('CommonJS Module Creating...').start();
  await $`${tsc} -p ./ --target es5 --module commonjs --outDir ./lib`;
  cmjSpinner.succeed('CommonJS Module Create Success');

}
