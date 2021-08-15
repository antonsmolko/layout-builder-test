module.exports = {
    plugins: [
        ['postcss-preset-env', { browsers: ['> 0.5%', 'not dead'] }],
        ['autoprefixer', { overrideBrowserslist: ['> 0.5%', 'not dead'], grid: true }],
        require('cssnano')({
            preset: 'default',
        })
    ]
}
