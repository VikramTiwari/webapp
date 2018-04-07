const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const SRC_PATH = __dirname + '/src';
const BUILD_PATH = __dirname + '/public';

// default NODE_ENV to development
const NODE_ENV = process.env['NODE_ENV'] || 'development';

let config = (module.exports = {
  context: SRC_PATH,
  entry: {
    hot: 'react-hot-loader/patch',
    index: './index.js',
    styles: './main.css'
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].bundle.js?[hash]',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css'],
    alias: {
      omni: SRC_PATH,
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: '../public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: BUILD_PATH,
    hot: true
  },
});
