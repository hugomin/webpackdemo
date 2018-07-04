const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
//清理dist文件夹
module.exports = merge(common, {
    devtool: 'source-map',
    module:{
        rules: [
          ]
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});