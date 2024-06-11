/*
 * @Author: jade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2022-06-21 12:20:40
 * @Last Modified by:   jade
 * @Last Modified Time: 2022-06-21 12:20:40
 */


import { Command } from 'commander';
import fs from 'fs-extra';
import { serve, build, init, tsBuild } from './commands/index.js';

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
  .description('构建仓库')
  .action(() => {
    process.env['NODE_ENV'] = 'production';
    console.log(typeof build);
    // build();
    // $`../node_modules/.bin/tsc -p ./ --outDir ./lib`;
    tsBuild();
  });

program.parse();
