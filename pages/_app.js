import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import GlobalStyle from '../styles/GlobalStyles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { THEME as theme } from '../styles/theme'


const App = props => {
  const { Component, pageProps } = props
  return (
    <React.Fragment>
      <Head>
        <meta charSet='utf-8' />
        <meta name='robots' content='noindex, nofollow' />
        <meta name='viewport' content='width=device-width' />
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