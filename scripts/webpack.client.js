const path = require('path');
/*  eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
/*  eslint-enable import/no-extraneous-dependencies */
const { JS_PATH } = require('../config');

const srcPath = path.resolve(__dirname, '../src');
const buildPath = path.resolve(__dirname, '../build');

module.exports = {
  context: srcPath,
  target: 'web',
  entry: {
    app: ['./client/index.js'],
  },
  output: {
    path: buildPath,
    filename: 'app.js',
    publicPath: JS_PATH,
  },
  resolve: {
    extensions: ['.json', '.js'],
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
        test: /\.(png|jpg|gif|svg|ico)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __PRODUCTION__: true,
      __DEV__: false,
    }),
    // Any dev code which is 'develop' will be considered as dead code and will be eliminated
    new webpack.DefinePlugin({
      // <-- key to reducing React's size
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new ExtractTextPlugin({ filename: 'app.css', allChunks: true }),
    // I think this tells react that you are in production
    // new UglifyJSPlugin({
    //   sourceMap: true,
    //   compress: {
    //     drop_console: true,
    //     warnings: false,
    //   },
    // }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      // tells loaders we are in minimise mode so they do their job according to that
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new ManifestPlugin(),
  ],
};
