var debug = false; // process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');


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
  // resolve: {
  //     alias: {
  //         jquery: './node_modules/jquery/dist/jquery.min.js'
  //     }
  // },
  resolveLoader: {
    fallback: __dirname + "/node_modules"
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
      {
        test: /\.(ico|jpe?g|png|gif)$/,
        exclude: /(node_modules|projects)/,
        loader: "file-loader"
      },
      // {
      //   test: /\.scss$/,
      //   exclude: [ /projects/ ],
      //   loader: ExtractTextPlugin.extract("style", "css-loader?sourceMap!sass-loader?sourceMap&outputStyle=expanded")
      // },
      {
        test: /\.css$/,
        exclude: [ /projects/ ],
        loader: ExtractTextPlugin.extract("style", "css-loader?sourceMap")
      },
      // fonts and svg
      { test: /\.woff(\?\d+)?(#[a-zA-Z0-9]+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?\d+)?(#[a-zA-Z0-9]+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?\d+)?(#[a-zA-Z0-9]+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?\d+)?(#[a-zA-Z0-9]+)?$/, loader: "url-loader?limit=10000&mimetype=application/vnd.ms-fontobject" },
      { test: /\.svg(\?\d+)?(#[a-zA-Z0-9]+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
      // {
      //   test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      //   loader: 'url-loader?limit=100000'
      // }
      // {
      //     test: /\.s?css$/,
      //     exclude: /projects/,
      //    loader: "style-loader!css-loader"
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
  plugins: debug ? [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.DefinePlugin({
      $dirname: '__dirname',
    }),
    new ExtractTextPlugin(
      'css/style.css',
      {
        allChunks: true
      }
    )
  ] : [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.DefinePlugin({
      $dirname: '__dirname',
    }),
    new ExtractTextPlugin(
      'css/style.css',
      {
        allChunks: true
      }
    ),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new CopyWebpackPlugin([
      {from: './data', to: './data'},
      {from: './font', to: './font'}
    ]),
    new webpack.optimize.UglifyJsPlugin({
        //mangle: false,
        //sourcemap: true
        compress: {
            warnings: false
        }
    })
  ]
};
