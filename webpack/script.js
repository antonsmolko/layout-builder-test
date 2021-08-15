const path = require('path')
require('dotenv').config()

module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: path.resolve(__dirname, `.${process.env.CONTEXT_PATH}/js`),
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        }
    }
}
