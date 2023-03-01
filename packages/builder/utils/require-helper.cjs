
const path = require('path');
module.exports = {
  resolve(name) {
    return path.dirname(require.resolve(`${name}/package.json`))
  }
}