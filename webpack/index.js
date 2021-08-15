const scripts       = require('./script')
const styles        = require('./styles')
const images        = require('./images')
const fonts         = require('./fonts')
const html           = require('./html')

module.exports = [
  scripts(),
  styles(),
  images(),
  fonts(),
  html()
]
