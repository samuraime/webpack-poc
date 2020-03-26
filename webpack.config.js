const path = require('path');
const BeforeRunPlugin = require('./plugins/BeforeRunPlugin');
const POCPlugin = require('./plugins/POCPlugin');
const AsyncPlugin = require('./plugins/AsyncPlugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.bundle.js',
  },
  plugins: [
    new BeforeRunPlugin(),
    new POCPlugin(),
    new AsyncPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.csv$/,
        use: [
          {
            loader: path.resolve(__dirname, 'loaders/csv-loader.js'),
          },
        ],
      },
    ],
  },
};
