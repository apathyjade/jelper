export default {
  $schema: 'http://json.schemastore.org/tsconfig',
  compilerOptions: {
    types: ['node'],
    allowSyntheticDefaultImports: true,
    esModuleInterop: true,
    lib: ['es6'],
    module: 'commonjs',
    moduleResolution: 'node',
    noUnusedLocals: true,
    noUnusedParameters: true,
    pretty: true,
    sourceMap: true,
    strict: true,
    target: 'es2017',
    outDir: './lib'
  },
  include: ['src/**/*.ts'],
  exclude: ['node_modules', 'lib']
}