const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin")

module.exports = {
  webpack: config => {
    config.plugins.push(
      new SWPrecacheWebpackPlugin({
          minify: true,
          filename: 'service-worker.js',
          staticFileGlobsIgnorePatterns: [/\.next\//],
          runtimeCaching: [
            {
              handler: "networkFirst",
              urlPattern: /^https?.*/
            }
          ]
        }
      )
    )  
    return config; 
  }
}



