/*
 * @Author: jade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2022-06-21 12:20:40
 * @Last Modified by:   jade
 * @Last Modified Time: 2022-06-21 12:20:40
 */


import { Command } from 'commander';
import fs from 'fs-extra';

import { serve, init, build, copy, tsBuild } from './commands/index.js';

import type { BuildOpts, CopyOpts } from './types.js';

const pkgJson = fs.readJSONSync('./package.json');
const program = new Command();

program
  .name('@jelper/builder')
  .description('CLI to build JavaScript helper package')
  .version(pkgJson.version);


program.command('init')
  .description('创建新仓库，初始化仓库模版内容')
  .action(init);

program.command('serve')
  .description('启动服务')
  .action(() => {
    process.env['NODE_ENV'] = 'development';
    serve();
  });

program.command('build')
  .option('-d, --debug', 'debug 模式', false)
  .description('构建仓库')
  .action(async (opts: BuildOpts) => {
    process.env['NODE_ENV'] = 'production';
    await tsBuild(opts);
    await build(opts);
  });

program.command('build')
  .option('-i, --input <chart>', '输入')
  .option('-o, --output', '输出')
  .description('复制')
  .action(async (opts: CopyOpts) => {
    copy(opts);
  });

program.parse(process.argv);
