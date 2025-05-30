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
    target: 'es5',
    outDir: './lib',
    jsx: 'react',
    declaration: true,
    declarationDir: './types'
  },
  // include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.d.ts'],
  // exclude: ['node_modules', 'lib']
}
