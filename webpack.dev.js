const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
//清理dist文件夹
module.exports = merge(common,{
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.join(__dirname, "dist"),//提供内容的目录
        compress: true,//启用压缩
        port: 8085,//服务器端口
        hot: true,//模块热替换特性
        //lazy:true,//只有在请求是才编译
        proxy: {
            "/opsRegionHealth": {
                target: "http://10.254.188.54:8080",
            }
        },
        clientLogLevel: "warning",
        //process  查看进度 只能显示在控制台
    },
    plugins: [
        new webpack.NamedModulesPlugin(),//// HMR shows correct file names in console on update.
        new webpack.HotModuleReplacementPlugin(),//热模块更新  浏览器自动刷新
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
});