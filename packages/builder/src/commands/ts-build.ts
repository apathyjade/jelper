
import ora from 'ora';
import chalk from 'chalk';
import { $ } from 'execa';
import { getModulePath } from '../common/index.js';
import type { BuildOpts } from '../types.js';

const tsc = getModulePath('.bin/tsc');


const runGenerator = async (type: string, fn: Function, opts: BuildOpts) => {
  if (opts.debug !== true) {
    return await fn();
  }
  const esSpinner = ora(`${type} Creating...`).start();
  try {
    await fn();
    esSpinner.succeed(`${type} Create Success`);
  } catch(e) {
    esSpinner.fail(chalk.red(`${type} Create Fail`));
    if (opts.debug) {
      throw e;
    } else {
      process.exit(1);
    }
  }
}



export default async (opts: BuildOpts) => {
  await runGenerator('ES Module', async () => {
    await $`${tsc} -p ./ --target es6 --module es6 --moduleResolution bundler --outDir ./es`;
  }, opts);

  await runGenerator('CommonJS Module', async () => {
    await $`${tsc} -p ./ --target es5 --module commonjs --moduleResolution node --outDir ./lib`;
  }, opts);
}
