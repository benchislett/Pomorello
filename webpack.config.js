const path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  watch: false,
  cache: true,

  node: {
      fs: 'empty',
      net: 'empty',
    tls: 'empty'
  }
};
