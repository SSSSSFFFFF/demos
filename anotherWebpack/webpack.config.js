// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
let indexCss = new ExtractTextWebpackPlugin('index.css');
let indexCss1 = new ExtractTextWebpackPlugin('index2.css');
const vueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development', // 开发模式
    // 入口文件
    entry: {
        index: path.resolve(__dirname, './index.js'), 
        header: path.resolve(__dirname, './header.js')
    },
    output: {
        filename: '[name].[hash:8].js',      // 打包后的文件名称
        path: path.resolve(__dirname, './dist')  // 打包后的目录
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader'] // 从右向左解析原则
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                exclude: /node_modules/
            }
        ],
    },
    plugins: [
        indexCss, indexCss1,
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html',
            chunks: ['index'] // 与入口文件对应的模块名
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './header.html'),
            filename: 'header.html',
            chunks: ['header'] // 与入口文件对应的模块名
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].css",
        })
    ]
}
