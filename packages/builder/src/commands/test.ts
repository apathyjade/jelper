// run-tests-api.js
import { runCLI } from 'jest';
import requireHelper from '../utils/require-helper.js';
import { getJelperCfg } from '../common/index.js';
import { babelrc } from '../config/index.js';

const getJestConfig = async () => {

  const jelperCfg: any = await getJelperCfg();

  const jestConfig = {
    preset: await requireHelper.resolve("ts-jest"),
    transform: {
      '^.+\\.[jt]sx?$': [await requireHelper.resolve("babel-jest"), await babelrc()],
      '^.+js$': await requireHelper.resolve("ts-jest"),
    },
    clearMocks: true,
    collectCoverage: true,
    injectGlobals: true,
    testEnvironment: "jsdom",
    moduleFileExtensions: ['ts', 'js', 'json', 'tsx', 'jsx', 'node'],
    testMatch: ['**/__tests__/**/*.test.(js|ts|tsx)'], // 匹配测试文件
    transformIgnorePatterns: ['/node_modules/(?!.pnpm|lodash-es)'],
    verbose: true, // 显示每个测试用例的详细通过/失败信息（默认只显示摘要）
    // colors: true, // 强制启用/禁用彩色输出
    // env: 'node', // 指定测试环境
    // silent: false, // 不输入日志
    // noStackTrace: true, // 失败时不显示堆栈跟踪（简化输出）
    // debug: true, // 输出 Jest 内部配置和环境信息（用于排查配置问题)
    // showConfig: true, // 打印最终生效的 Jest 配置（含合并后的默认值）
    // cache: false,
    // clearCache: true,
    ...(jelperCfg.jestCfg || {})
  };
  return jestConfig;
}
// 定义 Jest 配置
export default async (opts: any = {}) => {
  const jestConfig = {
    ...await getJestConfig(),
    ...opts,
  };
  // 运行 Jest
  runCLI(jestConfig, [process.cwd()])
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
