import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet as StyledComponentsSheets } from 'styled-components'

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const styledComponentSheet = new StyledComponentsSheets()   // styled component SSR
    const originalRenderPage = ctx.renderPage

    try {
      // wraps the collectStyles provider around our <App />.
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            styledComponentSheet.collectStyles((<App {...props} />),
            ),
        })

      // extract the initial props that may be present.
      const initialProps = await Document.getInitialProps(ctx)

      // returning the original props together with styled components
      return {
        ...initialProps,
        styles: (
          <React.Fragment key='styles'>
            {initialProps.styles}
            {styledComponentSheet.getStyleElement()}
          </React.Fragment>
        ),
      }
    } catch (err) {
      // handle error
      console.error(err)

    } finally {
      styledComponentSheet.seal()
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          {this.props.styleTags /*rendering the actually stylesheet*/}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}


export default CustomDocument