/*
 * @Author: jade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2022-06-21 13:55:34
 * @Last Modified by:   jade
 * @Last Modified Time: 2022-06-21 13:55:34
 */

import inquirer, { Question } from 'inquirer';
import gulp from 'gulp';
import template from 'gulp-template';
import fs from 'fs';
import { basePath, resolveByRootPath } from '../common/index.js';

interface Answer {
  packageName: string;
  description: string,
  ready: boolean;
}

const init = (answer: Omit<Answer, 'ready'> ) => {
  gulp.src(resolveByRootPath('./tpl/**'))
    .pipe(template(answer, {}))
    .pipe(gulp.dest(`${basePath}/`));
}

const questions: Question<Answer>[] = [
  {
    type: 'input',
    name: 'packageName',
    message: '请输入包名',
  }, {
    type: 'input',
    name: 'description',
    message: '请输入包描述',
  }, {
    type: 'confirm',
    name: 'ready',
    message: '确认？',
  }
]

export default async() => new Promise((resolve, reject) => {
  if (!fs.readdirSync(basePath)?.length) {
    resolve(null);
    return;
  }
  inquirer.prompt([{
    type: 'confirm',
    name: 'value',
    message: '当前目录存在文件,该操作可能会覆盖存在文件，是否继续？',
  }]).then((answers) => {
    answers.value ? resolve(null) : reject();
  })
}).then(() => {
  inquirer.prompt(questions)
  .then((answers) => {
    if (answers.ready) {
      init(answers)
    }
  });
})
