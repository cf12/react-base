const merge = require('webpack-merge')
const base = require('./webpack.base.js')

const config = {
  devServer: {
    inline: true,
    contentBase: './build',
    port: 8100
  }
}

module.exports = merge(base, config)