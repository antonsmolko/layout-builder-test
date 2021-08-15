const fs = require('fs')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
require('dotenv').config()

module.exports = function () {
    return {
        plugins: [
            ...fs
                .readdirSync(path.resolve(__dirname, `.${process.env.CONTEXT_PATH}/html`))
                .filter(fileName => fileName.endsWith('.html'))
                .map(page => new HtmlWebpackPlugin({
                    filename: `${path.parse(page).name}.html`,
                    template: `./html/${page}`,
                    minify: false,
                    hash: true,
                    cache: false,
                    inject: 'body',
                    templateParameters: (compilation, assets, assetTags, options) => (
                        {
                            compilation,
                            webpackConfig: compilation.options,
                            htmlWebpackPlugin: {
                                tags: assetTags,
                                files: assets,
                                options
                            }
                        }
                    )
                }))
        ]
    }
}
