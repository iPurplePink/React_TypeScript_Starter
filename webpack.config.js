const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@src': path.join(__dirname, '../src'),
      '@components': path.join(__dirname, '../src/components'),
      '@css': path.join(__dirname, '../src/css'),
      '@modules': path.join(__dirname, '../src/modules'),
    },
  },
};
