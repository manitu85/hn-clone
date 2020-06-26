import React from 'react'
import { NextSeo } from 'next-seo'

export default () => (
  <>
    <NextSeo
      title="Using More of Config"
      description="This example uses more of the available config options."
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Open Graph Title',
        description: 'Open Graph Description',
        images: [
          {
            url: 'https://www.example.ie/og-image-01.jpg',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
          },
          {
            url: 'https://www.example.ie/og-image-02.jpg',
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
          },
          { url: 'https://www.example.ie/og-image-03.jpg' },
          { url: 'https://www.example.ie/og-image-04.jpg' },
        ],
        site_name: 'SiteName',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />
    <p>SEO Added to Page</p>
  </>
)

// Usage example
// [https://github.com/vercel/next.js/tree/canary/examples/with-next-seo]
// next-seo.config.js you can also configure 

// import { DefaultSeo } from 'next-seo'

// import SEO from '../next-seo.config'

// export default function MyApp({ Component, pageProps }) {
//   return (
//     /* Here we call NextSeo and pass our default configuration to it  */
//     <>
//       <DefaultSeo {...SEO} />
//       <Component {...pageProps} />
//     </>
//   )
// }