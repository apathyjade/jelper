
const fs = require('fs-extra');
const path = require('path');

const packagesPath = path.resolve(__dirname, '../../packages');
const outputPath = path.resolve(__dirname, '../docs');
const files = fs.readdirSync(packagesPath);

function syncFolders(source, target) {
  const files = fs.readdirSync(source);
  files.forEach(file => {
    const srcPath = path.join(source, file);
    const tarPath = path.join(target, file);
    const stats = fs.statSync(srcPath);
    if (stats.isFile()) {
      fs.writeFileSync(tarPath, fs.readFileSync(srcPath));
    } else if (stats.isDirectory()) {
      if (!fs.existsSync(tarPath)) {
        fs.mkdirSync(tarPath);
      }
      syncFolders(srcPath, tarPath);
    }
  });
}


const copyModelDocs = (file) => {
  try {
    const currPath = `${packagesPath}/${file}/docs`;
    if (fs.pathExistsSync(currPath) && file !== 'website') {
      const targetDir = `${outputPath}/${file}/`;
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir);
      }
      syncFolders(currPath, targetDir);
    }
  } catch (error) {
    console.error(`${file} 文档文件拷贝失败`, error);
  }
}

const main = () => {
  fs.existsSync(outputPath) ? fs.emptyDirSync(outputPath) : fs.mkdirSync(outputPath);
  files.forEach(copyModelDocs);
}
main();

module.exports = main;
