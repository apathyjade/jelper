// run-tests-api.js
import jest from 'jest';

// 定义 Jest 配置
const jestConfig = {
  preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: true,
  injectGlobals: true,
  testEnvironment: "jsdom",
  moduleFileExtensions: ['ts', 'js', 'json', 'tsx'],
  testMatch: ['**/__tests__/**/*.test.(js|ts|tsx)'], // 匹配测试文件
  // testRegex: '^.+\\__tests__\\..test\.(js|ts|tsx)$',
  // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  verbose: true,
};

export default (opts: any = {}) => {
  // 运行 Jest
  jest.runCLI({ ...jestConfig, ...opts } as any, [process.cwd()])
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
