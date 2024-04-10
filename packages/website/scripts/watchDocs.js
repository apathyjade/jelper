
const chokidar = require('chokidar');
const path = require('path');
const fs = require('fs-extra');
const copyDocs = require('./copyDocs');

const packagesPath = path.resolve(__dirname, '../../../packages');

const files = fs.readdirSync(packagesPath);
files.forEach(file => {
  const currPath = `${packagesPath}/${file}/docs`;
  if (fs.pathExistsSync(currPath) && file !== 'website') {
    chokidar.watch(currPath).on('all', (...arg) => {
      copyDocs(file);
    });
  }
})
