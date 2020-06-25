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
      const parsedUrl = parse(req.url, true)
      const rootStaticFiles = [
        '/manifest.json',
        '/service-worker.js',
      //   '/sitemap.xml',
      //   '/favicon.ico',
      //   '/robots.txt',
      //   '/browserconfig.xml',
      //   '/site.webmanifest',
      ]
      if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
        const path = join(__dirname, 'static', parsedUrl.pathname)
        app.serveStatic(req, res, path)
      } else {
        handle(req, res, parsedUrl)
      }
    })
      .listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
      })
  })

// app.prepare()
//   .then(() => {
//     createServer((req, res) => {
//         /* Parse request url to get its pathname */
//         const parsedUrl = parse(req.url, true)
//         const { pathname } = parsedUrl

//         /* Handle get request If a service worker requested, serve it as a static file */
//         if (pathname === '/service-worker.js') {
//           const filePath = join(__dirname, '.next', pathname)
//           app.serveStatic(req, res, filePath)
//           /* Otherwise, let Next take care of it */
//         } else {
//           handle(req, res, parsedUrl)
//         }
//       })
//     .listen(port, (err) => {
//       if (err) throw err
//       console.log(`Listening on PORT http://localhost:${port}`)
//     })
// })

