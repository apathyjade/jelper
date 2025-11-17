export default {
  webpackCfg: {
    externals: {
      react: 'React'
    }
  },
  jestCfg: {
    transformIgnorePatterns: ['node_modules/(?!lodash-es)'],
  }
};