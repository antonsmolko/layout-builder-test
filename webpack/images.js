const path = require('path')
require('dotenv').config()

module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    include: path.resolve(__dirname, `.${process.env.CONTEXT_PATH}/images`),
                    type: 'asset/resource'
                }
            ]
        }
    }
}
