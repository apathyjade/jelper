

const fs = require('fs-extra');
const path = require('path');

const docsPath = path.resolve(__dirname, '../build');
const outPath = path.resolve(__dirname, '../../docs');


try {
  fs.removeSync(outPath)
  if (fs.pathExistsSync(docsPath)) {
    fs.copySync(docsPath, outPath);
  }
} catch (error) {
  console.error(`${file} 文档文件拷贝失败`, error);
}
