// specify how assets are transformed
// For example, a transformer that returns the basename of a file (such that require('logo.jpg'); returns 'logo')

const path = require('path');

module.exports = {
  process(src, filename, config, options) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
  },
};