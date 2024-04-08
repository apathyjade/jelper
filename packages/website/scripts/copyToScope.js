

const fs = require('fs-extra');
const path = require('path');

const docsPath = path.resolve(__dirname, '../docs');
const outPath = path.resolve(__dirname, '../../../docs');


try {
  if (fs.pathExistsSync(docsPath)) {
    fs.copySync(docsPath, outPath);
  }
} catch (error) {
  console.error(`${file} 文档文件拷贝失败`, error);
}
