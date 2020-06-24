// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//     ...(process.env.NODE_ENV === 'production'
//       ? {
//         '@fullhuman/postcss-purgecss': {
//           content: [
//             './components/**/*.jsx',
//             './pages/**/*.js'
//           ],
//           defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
//         }
//       }
//       : {})
//   }
// };

module.exports = {
  plugins: [
    'tailwindcss',
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
  ],
}
