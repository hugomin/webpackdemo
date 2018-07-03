const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");//将js和css分开
//清理dist文件夹
module.exports = merge(common, {
    mode: 'none',
    devtool: 'source-map',
    module:{
        rules: [
            {
              test: /\.css$/,
              use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
              })
            }
          ]
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new ExtractTextPlugin("index.css"),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});