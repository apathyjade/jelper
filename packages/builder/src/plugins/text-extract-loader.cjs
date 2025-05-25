

const qs = require('querystring');
const fs = require('fs-extra');

module.exports = function (source) {
    const exportTextName = new URLSearchParams(this.resourceQuery).get('exportTextName');
    if (!exportTextName) {
        return source;
    }
    const callback = this.async();
    fs.readFile(this.resourcePath).then((result) => {
        callback(null, `${source}\nexport const ${exportTextName} = ${JSON.stringify(result.toString())};`);
    })
};
