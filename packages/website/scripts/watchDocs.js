
const chokidar = require('chokidar');
const path = require('path');
const fs = require('fs-extra');
const copyDocs = require('./index');

const packagesPath = path.resolve(__dirname, '../../../packages');
// One-liner for current directory



const files = fs.readdirSync(packagesPath);

files.forEach(file => {
  const currPath = `${packagesPath}/${file}/docs`;
  if (fs.pathExistsSync(currPath) && file !== 'website') {
    chokidar.watch(currPath).on('all', () => {
      chokidar.unwatch(currPath)
      copyDocs(file);
    });
  }
})
