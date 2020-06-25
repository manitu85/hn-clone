import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import Router from 'next/router'
import NProgress from 'nprogress'

import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import GlobalStyle from '@/components/GlobalStyle.styles'
import { theme } from 'theme'
import '@/styles/customButton.css'
import '@/styles/nprogress.css'
import '@/styles/index.css'

//Binding events
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const App = props => {
  const { Component, pageProps } = props
  return (
    <React.Fragment>
      <Head>
        <meta charSet='utf-8' />
        <link rel="manifest" href="/manifest.json" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="hacker-next" />
        <meta name="apple-mobile-web-app-title" content="hacker-next" />
        <meta name="theme-color" content="#ff6600;" />
        <meta name="msapplication-navbutton-color" content="#ff6600;" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <link rel="icon" type="png" sizes="512x512" href="/icons/icon-512x512.png" />
        <link rel="apple-touch-icon" type="png" sizes="512x512" href="/icons/icon-512x512.png" />
        <link rel="icon" type="png" sizes="192x192" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" type="png" sizes="192x192" href="/icons/icon-192x192.png" />
        <link href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap' rel='stylesheet' />
      </Head>

      <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </StyledThemeProvider>

    </React.Fragment>
  )
}

export default App

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}