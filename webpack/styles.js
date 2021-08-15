const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev  = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'

module.exports = function () {
    return {
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash].css',
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.(scss|css)$/,
                    use: [
                        isProd ? MiniCssExtractPlugin.loader : 'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: isDev,
                                url: true,
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: isDev
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: isDev
                            }
                        }
                    ]
                }
            ]
        }
    }
}
