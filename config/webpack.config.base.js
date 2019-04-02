const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require(path)

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/build',
    filename: 'main.js'
  },
  resolve: {
    alias: {
      'Components': path.join(__dirname, '../src/components'),
      'Common': path.join(__dirname, '../src/common'),
      'Container': path.join(__dirname, '../src/container'),
      'Utils': path.join(__dirname, '../src/utils')
    }
  },
  module: {
    // mode: 'production',
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        plugins: ['transform-runtime'],
        presets: ['es2015', 'react', 'stage-2']
      } 
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
      // loader: "style-loader!css-loader",
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html'
    })
  ]
}