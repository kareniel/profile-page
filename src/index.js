const choo = require('choo')
const layout = require('./views/layout.view')
const app = choo()

app.route('/', layout(require('./views/home.view')))
app.route('/about', layout(require('./views/about.view')))

if (typeof window === 'undefined') {
  module.exports = app
} else {
  app.mount('body')
}
