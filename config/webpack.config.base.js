const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require(path)

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/build',
    filename: 'main.js'
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