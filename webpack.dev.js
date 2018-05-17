 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 const webpack =  require('webpack');
 const path = require('path');
 const config = require('./config');
 const HOST = process.env.HOST;
 const PORT = process.env.PORT && Number(process.env.PORT);
 module.exports = merge(common, {
  //  mode:'development',
  devtool: config.dev.devtool,
  devServer: {
    contentBase: './dist',
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
 });