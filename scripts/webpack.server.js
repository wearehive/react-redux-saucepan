const path = require('path');
const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies
const nodeExternals = require('webpack-node-externals'); // eslint-disable-line import/no-extraneous-dependencies

const srcPath = path.resolve(__dirname, '../');
const buildPath = path.resolve(__dirname, '../build');

module.exports = {
  target: 'node',
  cache: false,
  context: srcPath,
  devtool: 'source-map',
  entry: {
    index: [
      // 'babel-polyfill',
      // entry point of the app
      './src/server/index',
    ],
  },
  output: {
    path: buildPath,
    filename: '[name].js',
  },
  module: {
    rules: [
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
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
    noParse: /\.min\.js/,
  },
  externals: nodeExternals(),
  resolve: {
    modules: [path.resolve('./src')],
    extensions: ['.json', '.js'],
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__: false,
      __SERVER__: true,
      __PRODUCTION__: true,
      __DEV__: false,
    }),
    new webpack.DefinePlugin({
      // Needed for reducing React's size
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
};
