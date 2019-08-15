const path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ]
  },

  watch: false,
  cache: true,

  node: {
      fs: 'empty',
      net: 'empty',
    tls: 'empty'
  }
};
