const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
const wbplugin = require ('workbox-webpack-plugin')
// TODO: Add CSS loaders and babel to webpack.
const cssPlugin = require("mini-css-extract-plugin");
const { webpack } = require('webpack');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new webpackPlugin ({
        template: "./index.html",
        title: "Webpack Plugin"
      }),
      new cssPlugin(),
      new InjectManifest({
        swSrc: "./src-sw.js",
        swDest: "src-sw.js",
      }),
      new WebpackPwaManifest({
        fingureprints: false,
        inject: true,
        name: "My Text Pad",
        sho
      
      }),
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
