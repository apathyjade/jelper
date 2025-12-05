// run-tests-api.js
import { runCLI } from 'jest';
import requireHelper from '../utils/require-helper.js';
import { getJelperCfg } from '../common/index.js';
const getJestConfig = async () => {

  const jelperCfg: any = await getJelperCfg();

  const jestConfig = {
    preset: `${await requireHelper.resolve("ts-jest")}/presets/default-esm`,
    testEnvironment: 'jsdom',
    extensionsToTreatAsEsm: ['.ts'],
    globals: {
      'ts-jest': {
        useESM: true,
        compilerOptions: {
          sourceMap: true,
          inlineSourceMap: false,
          inlineSources: true,
          module: 'esnext',
          moduleResolution: 'node'
        }
      }
    },
    transform: {
      '^.+\\.[jt]sx?$': [
        await requireHelper.resolve("ts-jest"),
        {
          tsconfig: 'tsconfig.json',
          diagnostics: false, // 减少诊断信息，加速测试
          // 关键：启用 source map 并确保映射正确
          sourceMap: true,
          inlineSourceMap: false,
          compilerOptions: {
            sourceMap: true,
            inlineSourceMap: false,
            inlineSources: true,
            sourceRoot: '/', // 防止路径混淆
          },
        },
      ],
    },
    coverage: true,
    coverageProvider: 'v8',
    coverageReporters: ['html', 'text', 'lcov', 'json'],
    clearMocks: true,
    collectCoverage: true,
    injectGlobals: true,
    moduleFileExtensions: ['ts', 'js', 'json', 'tsx', 'jsx', 'node'],
    transformIgnorePatterns: ['/node_modules/(?!.pnpm|lodash-es)'],
    moduleNameMapper: {
      '^(\\.{1,2}/.*)\\.js$': '$1', // 移除 import 语句中的 .js 扩展名
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    testMatch: ['**/{__tests__, test}/**/*.test.(js|ts|tsx)'],
    collectCoverageFrom: [
      'src/**/*.{ts,tsx}',
      '!src/**/*.d.ts',
      // '!src/**/index.{ts,tsx}',
      '!**/node_modules/**',
    ],
    // 忽略测试文件
    // testPathIgnorePatterns: ['/node_modules/', '/dist/', '/.next/', '/cypress/'],
    verbose: true,
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
