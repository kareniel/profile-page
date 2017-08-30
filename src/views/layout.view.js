const html = require('choo/html')
const navbar = require('./navbar.view.js')

module.exports = view => function (state, emit) {
  return html`
    <body>
      ${navbar(state, emit)}
      ${view(state, emit)}
    </body>
  `
}
