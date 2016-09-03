const htmlStandards = require('spike-html-standards')
const cssStandards = require('spike-css-standards')
const latest = require('babel-preset-latest')
const sass = require('sass-loader')
const extract_plug = require('extract-text-webpack-plugin')

module.exports = {
  module: {
    loaders: [{
      test: /\.scss$/,
      loaders: ['postcss-loader', 'sass-loader']
    }]
  },
  devtool: 'source-map',
  ignore: ['**/layout.html', '**/_*', '**/.*', 'bower_components/'],
  reshape: (ctx) => {
    return htmlStandards({
      parser: false,
      webpack: ctx,
      locals: {
        foo: 'bar'
      }
    })
  },
  postcss: (ctx) => {
    return cssStandards({
      parser: false,
      webpack: ctx
    })
  },
  babel: {
    presets: [latest]
  }
}
