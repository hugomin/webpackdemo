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
        filename: '[name]-[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: "eval-source-map",
    devServer:{
        contentBase: path.join(__dirname, "dist"),//提供内容的目录
        compress:true,//启用压缩
        port:8085,//服务器端口
        hot:true,//模块热替换特性
        //lazy:true,//只有在请求是才编译
        proxy: {
            "/opsRegionHealth": {
                target: "http://10.254.188.54:8080"
              }
          },
        //process  查看进度 只能显示在控制台
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
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
};