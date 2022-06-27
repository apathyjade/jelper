export default {
  // $schema: 'http://json.schemastore.org/tsconfig',
  compilerOptions: {
    lib: ['es5', 'es6', 'dom'],
    allowSyntheticDefaultImports: true,
    esModuleInterop: true,
    noUnusedLocals: true,
    noUnusedParameters: true,
    pretty: true,
    sourceMap: true,
    strict: true,
    target: 'es6',
    outDir: './lib',
  },
  include: ['src/**/*.ts', 'src/**/*.d.ts'],
  exclude: ['node_modules', 'lib']
}