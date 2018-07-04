const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//使js自动注入 html主文件
const CleanWebpackPlugin = require('clean-webpack-plugin');
//清理dist文件夹
const ExtractTextPlugin = require("extract-text-webpack-plugin");//将js和css分开
module.exports = {
    entry: {
        main: "./src/script/index.js",
        // login: './src/script/login.js',
        vendor:[
            "lodash",'jquery','axios'
        ]
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',
            //         'css-loader'
            //     ]
            // },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            "presets": ["env"],
                            "plugins": ["syntax-dynamic-import"]
                        }
                    }
                ]
            },
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
        new CleanWebpackPlugin(['dist']),//清空dist文件夹
        new ExtractTextPlugin("index.css"),//分离js和css
        new HtmlWebpackPlugin({
            title:"sss",
            filename: 'index.html',
            template: './src/index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor' // 函数库。
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest' // 指定公共 bundle 的名称。
        })
    ],
};