const html = require('choo/html')

module.exports = function (state, emit) {
  return html`
    <div>
      <section class="section">
        <div class="container">
          <div class="content">
            <h1 class="title">About</h1>

            <p>
              I’m Jonathan Dupré, a software developer based in Montreal, Canada.
            </p>

            <p>
              I work at a startup called Campsite, where I focus on web application development. 
              In 2016 and 2017 I helped prototype and build a growing platform for instantly
              purchasing advertising space across the biggest indoor networks in Canada.
            </p>

            <p>
              In the evenings, I work on <a href="https://www.vibedrive.co">Vibedrive</a>, 
              a tool that helps digital DJs organize and backup their music collection in the cloud. 
            </p>

          </div>
        </div>   
      </section>
    </div>
  `
}