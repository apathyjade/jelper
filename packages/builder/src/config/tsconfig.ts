export default {
  // $schema: 'http://json.schemastore.org/tsconfig',
  compilerOptions: {
    lib: ['es5', 'es6', 'dom'],
    allowJs: true,
    allowSyntheticDefaultImports: true,
    exactOptionalPropertyTypes: false,
    esModuleInterop: true,
    noUnusedLocals: true,
    noUnusedParameters: true,
    pretty: true,
    sourceMap: true,
    strict: true,
		skipLibCheck: true,
    target: 'es2015',
    outDir: './lib',
		jsx: "react-jsx",
    declaration: true,
    declarationDir: './types'
  },
  // include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.d.ts'],
  // exclude: ['node_modules', 'lib']
}
