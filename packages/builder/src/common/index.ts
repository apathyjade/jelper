/*
 * @Author: jade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2022-06-17 13:00:48
 * @Last Modified by:   jade
 * @Last Modified Time: 2022-06-17 13:00:48
 */
import path from 'path';
import { cwd } from 'process';

export const basePath = cwd();
export const nodeModules = path.resolve(__dirname, '../../node_modules');
export const getModulePath = (moduleName: string) => {
  return `${nodeModules}/${moduleName}`;
}