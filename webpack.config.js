var debug = true; // process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');;

module.exports = {
  // context: path.join(__dirname, "src"),
  entry: [
    // vendor: [
    //     "jquery"
    // ],
    'whatwg-fetch', // AJAX fetch polyfill - https://github.com/github/fetch
    "./src/js/index.js"
  ],
  output: {
    // path: path.join(__dirname, "dist/js/"),
    path: path.resolve('./dist'),
    filename: "js/client.min.js"
  },
  devtool: debug ? "inline-sourcemap" : null,
  resolve: {
      alias: {
          jquery: './node_modules/jquery/dist/jquery.min.js'
      }
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
      // fonts and svg
      // { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      // { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      // { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      // { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      // { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
      // images
      {
        test: /\.(ico|jpe?g|png|gif)$/,
        loader: "file"
      },
      {
        test: /\.scss$/,
        // exclude: [/node_modules/], // sassLoader will include node_modules explicitly
        exclude: /projects/,
        loader: ExtractTextPlugin.extract("style", "css?sourceMap!postcss!sass?sourceMap&outputStyle=expanded")
      }
      // {
      //     test: /\.s?css$/,
      //     exclude: /projects/,
      // 	  loader: "style-loader!css-loader"
      // }
      // {
      //   test: /\.css$/,
      //   exclude: /(node_modules|bower_components|projects)/,
      //   loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
      // }
      // {
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract({
      //     fallbackLoader: "style-loader",
      //     loader: "css-loader"
      //   })
      // }
    ]
  },
  resolve: {
    modulesDirectories: [
      'node_modules',
      'components'
    ]
  },
  // using enzyme with webpack
  // see https://github.com/airbnb/enzyme/blob/master/docs/guides/webpack.md
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  plugins: debug ? [] : [
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new CopyWebpackPlugin([
      {from: './data', to: './data'},
      {from: './font', to: './font'}
    ]),
	new webpack.optimize.UglifyJsPlugin({
	    compress: {
	        warnings: false
	    }
	})
    //new webpack.optimize.UglifyJsPlugin({
      //mangle: false,
      //sourcemap: true
    //})
  ]
};
