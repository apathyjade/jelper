
const fs = require('fs-extra');
const path = require('path');

const srcPath = path.resolve(__dirname, '../src');
const outputPath = path.resolve(__dirname, '../lib');
try {
  fs.removeSync(outputPath)
  fs.copySync(`${srcPath}/index.scss`, `${outputPath}/index.module.scss`);
  fs.copySync(`${srcPath}`, `${outputPath}`);
} catch (error) {
  console.error(`${file} 文档文件拷贝失败`, error);
}
