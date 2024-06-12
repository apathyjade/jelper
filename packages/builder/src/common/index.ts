/*
 * @Author: jade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2022-06-17 13:00:48
 * @Last Modified by:   jade
 * @Last Modified Time: 2022-06-17 13:00:48
 */
import path from 'path';
import { cwd } from 'process';
import { fileURLToPath } from 'url';
export const rootPath = path.resolve( path.dirname(fileURLToPath(import.meta.url)), '../..');
export const basePath = cwd();
export const nodeModules = path.resolve(rootPath, './node_modules');
export const getModulePath = (moduleName: string) => {
  return `${nodeModules}/${moduleName}`;
}
export const resolveByRootPath = (s: string) => path.resolve(rootPath, s);
export const resolveByBasePath = (s: string) => path.resolve(basePath, s);

export const getJelperCfg = (() => {
  let jelperCfg: any;
  return async () => {
    if (jelperCfg) {
      return jelperCfg;
    }
    const cfgPath = path.relative(resolveByRootPath('./lib/common'), path.resolve('./jelper.config.mjs'));
    try {
      jelperCfg = (await import(cfgPath.replace(/\\/g, '/'))).default;
    } catch (e) {
      jelperCfg = {};
    }
    return jelperCfg;
  }
})();
