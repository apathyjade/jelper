
const fs = require('fs-extra');
const path = require('path');

const packagesPath = path.resolve(__dirname, '../../../packages');
const outputPath = path.resolve(__dirname, '../docs');

const files = fs.readdirSync(packagesPath);

files.forEach(file => {
  try {
    const currPath = `${packagesPath}/${file}/docs`;
    if (fs.pathExistsSync(currPath) && file !== 'website') {
      fs.copySync(currPath, `${outputPath}/${file}`);
    }
  } catch (error) {
    console.error(`${file} 文档文件拷贝失败`, error);
  }
});
