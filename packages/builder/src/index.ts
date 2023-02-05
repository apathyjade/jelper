/*
 * @Author: jade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2022-06-21 12:20:40
 * @Last Modified by:   jade
 * @Last Modified Time: 2022-06-21 12:20:40
 */

import { Command } from 'commander';
import { serve, build, init } from './commands/index.js';

const program = new Command();

program
  .name('@jelper/builder')
  .description('CLI to build JavaScript helper package')
  .version('0.0.9');

program.command('build')
  .description('构建仓库')
  .action(() => {
    process.env['NODE_ENV'] = 'production'
    build()
  });
program.command('init')
  .description('创建新仓库，初始化仓库模版内容')
  .action(init);

program.command('serve')
  .description('启动服务')
  .action(() => {
    process.env['NODE_ENV'] = 'development'
    serve()
  });

program.parse();