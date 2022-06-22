/*
 * @Author: jade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2022-06-21 12:20:40
 * @Last Modified by:   jade
 * @Last Modified Time: 2022-06-21 12:20:40
 */

import { Command } from 'commander';
import init from './init.js';
const program = new Command();

program
  .name('@jelper/builder')
  .description('CLI to build JavaScript helper package')
  .version('0.8.0');

program.command('build')
  .description('Split a string into substrings and display as an array')
  // .argument('<string>', 'string to split')
  // .option('-f, --first', 'display just the first substring')
  // .option('-s, --separator <char>', 'separator character', ',')
  .action((str, options) => {
    console.log('str:', str)
    console.log('options:', options)
    console.log(program.opts())
  });
program.command('init')
  .description('创建新仓库，初始化仓库模版内容')
  .action(init);
  
program.parse();