var debug = false; // process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ReactToHtmlPlugin = require('react-to-html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');;

module.exports = {
  // context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: [
    'whatwg-fetch', // AJAX fetch polyfill - https://github.com/github/fetch
    "./src/js/index.js"
  ],
  output: {
    // path: path.join(__dirname, "dist/js/"),
    path: path.resolve('./dist'),
    filename: "js/client.min.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|projects)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'], // , 'stage-0'
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      },
      {
        // make all files ending in .json5 use the `json5-loader`
        test: /\.json5$/,
        exclude: /(node_modules|bower_components|projects)/,
        loader: 'json5-loader'
      },
      // { test: /\.css$/,loader: "style-loader!css-loader" }
      // {
      //   test: /\.css$/,
      //   exclude: /(node_modules|bower_components|projects)/,
      //   loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
      // }
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: "css-loader"
        })
      }
    ]
  },
  resolve: {
    modulesDirectories: [
      'node_modules',
      'components'
    ]
  },
  plugins: debug ? [] : [
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new CopyWebpackPlugin([
      {from: './data', to: './data'},
      {from: './font', to: './font'}
    ])
    // new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    // new ReactToHtmlPlugin('index.html', 'index.js', {
    //   static: true,
    //   template: ejs.compile(fs.readFileSync(__dirname + '/src/template.ejs', 'utf-8'))
    // })
  ]
};
