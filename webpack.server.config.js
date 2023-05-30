const path = require('path');
const baseConfig = require('./webpack.base.config');
const merge = require('webpack-merge').merge
const nodeExternals = require('webpack-node-externals')

const config = {
  target: 'node',
  entry: './server/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  externals: [nodeExternals()],
}

module.exports = merge(baseConfig, config);
