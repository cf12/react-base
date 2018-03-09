const webpack = require('webpack')
const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'build/')
const APP_DIR = path.resolve(__dirname, 'src/')

// const ExtractTextPlugin = require('extract-text-webpack-plugin')

// const extractSass = new ExtractTextPlugin({
//   filename: '[name].css'
// })

const HtmlWebPackPlugin = require('html-webpack-plugin')

const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: { minimize: true }
      },
      {
        test: /\.scss$/,
        use: ['css-loader', 'sass-loader']
        // use: extractSass.extract({
        //   fallback: 'style-loader',
        //   use: ['css-loader', 'sass-loader']
        // })
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: APP_DIR + '/index.html',
      filename: './index.html'
    })
    // extractSass
  ]
}

module.exports = config