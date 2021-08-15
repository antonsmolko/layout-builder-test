require('dotenv').config()

module.exports = function () {
    return {
        devServer: {
            port: 9000,
            overlay: true,
            disableHostCheck: true,
            publicPath: process.env.PUBLIC_PATH,
            contentBase: process.env.CONTEXT_PATH,
            writeToDisk: true,
            transportMode: 'ws',
            watchContentBase: true
        }
    }
}
