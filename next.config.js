// const withOffline = require('next-offline')

// module.exports = withOffline({
//   workboxOpts: {
//     swDest: process.env.NEXT_EXPORT
//       ? 'service-worker.js'
//       : 'static/service-worker.js',
//     runtimeCaching: [
//       {
//         urlPattern: /^https?.*/,
//         handler: 'NetworkFirst',
//         options: {
//           cacheName: 'offlineCache',
//           expiration: {
//             maxEntries: 200,
//           },
//         },
//       },
//     ],
//   },
//   experimental: {
//     async rewrites() {
//       return [
//         {
//           source: '/service-worker.js',
//           destination: '/_next/static/service-worker.js',
//         },
//       ]
//     },
//   },
// })


const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

module.exports = {
  webpack: config => {
    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        minify: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [
          {
            handler: "networkFirst",
            urlPattern: /^https?.*/
          }
        ]
      })
    );

    return config;
  }
};



