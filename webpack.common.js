const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//使js自动注入 html主文件
const CleanWebpackPlugin = require('clean-webpack-plugin');
//清理dist文件夹
module.exports = {
    entry: {
        app: "./src/script/index.js",
        // login: './src/script/login.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),//清空dist文件夹
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
};