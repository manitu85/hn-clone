const { createServer } = require('http')
const { parse } = require('url')
const { join } = require('path')
const next = require('next')

const port = process.env.PORT || 3000
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    createServer((req, res) => {
        /* Parse request url to get its pathname */
        const parsedUrl = parse(req.url, true)
        const { pathname } = parsedUrl

        /* Handle get request If a service worker requested, serve it as a static file */
        if (pathname === '/service-worker.js' || pathname === '/manifest.json') {
          const filePath = join(__dirname, '.next', pathname)
          app.serveStatic(req, res, filePath)
          /* Otherwise, let Next take care of it */
        } else {
          handle(req, res, parsedUrl)
        }
      })
    .listen(port, (err) => {
      if (err) throw err
      console.log(`Listening on PORT ${port}`)
    })
})
