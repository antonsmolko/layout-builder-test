const path                        = require('path')
const { WebpackManifestPlugin }   = require('webpack-manifest-plugin')
const { CleanWebpackPlugin }      = require('clean-webpack-plugin')
const { merge }                   = require('webpack-merge')
const modules                     = require('./webpack')
const devserver                   = require('./webpack/devserver')
                                    require('dotenv').config()

const isDev = process.env.NODE_ENV === 'development'

module.exports = merge([
    {
        context: path.resolve(__dirname, process.env.CONTEXT_PATH),

        target: isDev ? 'web' : 'browserslist',

        entry: {
            app: path.resolve(__dirname, process.env.CONTEXT_PATH, '/js/app.js')
        },

        output: {
            path: path.resolve(__dirname, process.env.ROOT_PATH),
            filename: 'js/[name].[contenthash].js',
            publicPath: process.env.PUBLIC_PATH,
            assetModuleFilename: '[path][name][ext]'
        },

        devtool: isDev && 'eval-cheap-module-source-map',

        plugins: [
            new CleanWebpackPlugin(),
            new WebpackManifestPlugin(
                {
                    publicPath: process.env.PUBLIC_PATH
                }
            )
        ],

        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src/')
            }
        }
    },

    ...modules,

    isDev ? devserver() : {}
])
