'use strict'

const path = require('path')
module.exports = {
  dev:{
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    //dev server settings
    host: '192.168.2.209',
    port: 8088,
    //maps
    // devtool: 'inline-source-map',
    //cheap-module-eval-source-map is faster for development
    devtool: 'cheap-module-eval-source-map',
  },
  build:{
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
  }
}