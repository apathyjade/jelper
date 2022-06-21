/*
 * @Author: jade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2022-06-21 13:55:34
 * @Last Modified by:   jade
 * @Last Modified Time: 2022-06-21 13:55:34
 */

import inquirer, { Question } from 'inquirer';
// import chalk from 'chalk';
// import ora from 'ora';

const questions: Question[] = [
  {
    type: 'input',
    name: 'packageName',
    message: '请输入包名',
  }, {
    type: 'confirm',
    name: 'packageName',
    message: '请输入包名',
  }
]

export default () => {
  inquirer
  .prompt(questions)
  .then((answers: any) => {
    console.log(answers)
  })
  .catch((error: any) => {
    console.log(error)
  });
}
