import React from 'react'
import Head from 'next/head'
import { elementType, object} from 'prop-types'
import useDarkMode from '@/hooks/useDarkMode'
import ThemeContext from '@/hooks/ThemeContext'
import NextNProgress from '@/components/Nprogress.component'

import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import GlobalStyle from '@/components/GlobalStyle.styles'
import { lightTheme, darkTheme } from 'theme'
import '@/styles/customButton.css'
import '@/styles/index.css'


const App = props => {

  const [theme, themeToggler, mountedComponent] = useDarkMode()

  const isDark = theme === 'dark'

  const themeMode = theme === 'light' ? lightTheme : darkTheme
  
  if (!mountedComponent) return <div />

  const { Component, pageProps } = props

  return (
    <React.Fragment>
      <Head>
        <meta charSet='utf-8' />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="hacker-next" />
        <meta name="apple-mobile-web-app-title" content="hacker-next" />
        <meta name="theme-color" content="#ff6600" />
        <meta name="msapplication-navbutton-color" content="#ff6600;" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <link rel="icon" type="png" sizes="512x512" href="/icons/icon-512x512.png" />
        <link rel="apple-touch-icon" type="png" sizes="512x512" href="/icons/icon-512x512.png" />
        <link rel="icon" type="png" sizes="192x192" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" type="png" sizes="192x192" href="/icons/icon-192x192.png" />
        <link rel="icon" type="png" sizes="144x144" href="/icons/icon-144x144.png" />
        <link rel="apple-touch-icon" type="png" sizes="144x144" href="/icons/icon-144x144.png" />
        <link href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap' rel='stylesheet' />
      </Head>

      <StyledThemeProvider theme={themeMode} >
        <GlobalStyle />
        {themeMode && <NextNProgress 
          color={isDark ? '#edf2f7' : '#ff6600' }
          options={{ trickleSpeed: 50 }}
          showAfterMs={300}
          spinner
        />}
        <ThemeContext.Provider value={{theme, themeToggler}}> 
          <Component {...pageProps}  />  
        </ThemeContext.Provider>
      </StyledThemeProvider>

    </React.Fragment>
  )
}

export default App

App.propTypes = {
  Component: elementType.isRequired,
  pageProps: object.isRequired,
}

// pass state to navigation via context, avoid props drillings