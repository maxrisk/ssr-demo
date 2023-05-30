const path = require('path');
const baseConfig = require('./webpack.base.config');
const merge = require('webpack-merge').merge

const config = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }
}

module.exports = merge(baseConfig, config);
