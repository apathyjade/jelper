// run-tests-api.js
import { runCLI } from 'jest';
import requireHelper from '../utils/require-helper.js';
import { getJelperCfg } from '../common/index.js';
// import { babelrc } from '../config/index.js';

const getJestConfig = async () => {

  const jelperCfg: any = await getJelperCfg();

  const jestConfig = {
    // preset: 'ts-jest',
    preset: await requireHelper.resolve("ts-jest"),
    transform: {
      // "\.[jt]sx?$": [await requireHelper.resolve("babel-jest"), {extends: await babelrc()}],
    },
    clearMocks: true,
    collectCoverage: true,
    injectGlobals: true,
    testEnvironment: "jsdom",
    moduleFileExtensions: ['ts', 'js', 'json', 'tsx'],
    testMatch: ['**/__tests__/**/*.test.(js|ts|tsx)'], // 匹配测试文件
    // testRegex: '^.+\\__tests__\\..test\.(js|ts|tsx)$',
    // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    verbose: true,
    ...(jelperCfg.jestCfg || {})
  };
  return jestConfig;
}
// 定义 Jest 配置


export default async (opts: any = {}) => {
  const jestConfig = await getJestConfig();
  // 运行 Jest
  runCLI({ ...jestConfig, ...opts } as any, [process.cwd()])
    .then((result) => {
      if (result.results.success) {
        console.log('所有测试通过！');
      } else {
        console.error('测试失败！');
      }
    })
    .catch((error) => {
      console.error('运行 Jest 时出错:', error);
    });
};
