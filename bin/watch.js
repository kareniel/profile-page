const path = require('path')
const budo = require('budo')
const buildCSS = require('./build-css')

budo('src/index.js:bundle.js', {
  dir: ['src', 'public'],
  port: 1111,
  live: true,
  pushstate: true,
  stream: process.stdout,
  watchGlob: '**/*.{html,css,sass,js}'
}).on('watch', (e, file) => {
  switch(path.extname(file)) {
    case '.sass':
      console.log('.sass file changed.', file)
      buildCSS(err => {
        if (err) throw err
      })
      return
    default:
      return
  }
})