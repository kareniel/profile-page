const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const sass = require('node-sass')
const IN = path.join(__dirname, '../src/style.sass')
const OUT = path.join(__dirname, '../public/style.css')

module.exports = buildCSS

if (require.main !== module) {
  buildCSS()
}

function buildCSS () {
  const opts = { file: IN }
  const result = sass.renderSync(opts)

  mkdirp.sync(path.join(__dirname, '../public'))
  fs.writeFileSync(OUT, result.css)
}


