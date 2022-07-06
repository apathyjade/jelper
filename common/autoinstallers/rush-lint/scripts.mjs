/*
 * @Author: jade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2022-07-06 17:11:58
 * @Last Modified by:   jade
 * @Last Modified Time: 2022-07-06 17:11:58
 */
import { Command } from 'commander/esm.mjs';
import { execa } from 'execa';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const gitPath = path.resolve(__dirname, '../../../.git');
const configPath = path.resolve(__dirname, './commitlint.config.js');
const commitlintBinPath = path.resolve(__dirname, './node_modules/.bin/commitlint');

const program = new Command();

program
  .option('-n, --npm <type>', '脚本类型')


program.parse();
const options = program.opts();

console.log(options.npm);

(async () => {
  try {
    await execa(
      'bash',
      [commitlintBinPath, '--config', configPath, '--cwd', path.dirname(gitPath), '--edit'],
      {
        stdio: 'inherit'
      }
    );
  } catch (e) {
    process.exit(1);
  }
})();