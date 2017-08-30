const html = require('choo/html')

module.exports = function (state, emit) {
  return html`
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">J</a>
        <a class="navbar-item" href="/about">About</a>
      </div>
    </nav>
  `
}