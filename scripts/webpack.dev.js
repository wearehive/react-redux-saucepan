const path = require('path');
const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies

const { JS_PATH } = require('../config');

const buildPath = path.resolve(__dirname, '../build');
const srcPath = path.resolve(__dirname, '../src');

module.exports = {
  context: srcPath,
  target: 'web',
  entry: [
    // activate HMR for React
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    // the entry point of our app
    './client/index.js',
  ],
  output: {
    filename: 'app.js',
    // the output bundle
    path: buildPath,
    publicPath: JS_PATH,
    // necessary for HMR to know where to load the hot update chunks
    pathinfo: true,
  },
  resolve: {
    extensions: ['json', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2,
              sourceMap: true,
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'autoprefixer-loader',
            options: {
              browsers: 'last 2 version',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
              sourceMap: true,
            },
          },
        ],
      },
      // Font Definitions
      {
        test: /\.(ttf|woff|eot|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.ico$|\.svg$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      // eslint checking before processed by babel
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      // babel
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __PRODUCTION__: false,
      __DEV__: true,
    }),
  ],
};
