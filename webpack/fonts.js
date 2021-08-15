const path = require('path')
require('dotenv').config()

module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.(woff|woff2|eot|ttf)$/,
                    include: path.resolve(__dirname, `.${process.env.CONTEXT_PATH}/fonts`),
                    type: 'asset/resource'
                }
            ]
        }
    }
}
