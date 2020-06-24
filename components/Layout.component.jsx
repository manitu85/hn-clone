import Head from 'next/head'
import Navigation from '@/components/Navigation.component'
import ReactTyped from 'react-typed'
import { TailwindContainer, Footer } from '@/components/Layout.styles'


const Layout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
      </Head>
      <Navigation />
      <TailwindContainer >
        { children }
      </TailwindContainer>
      <Footer><p> Copyright&copy;{new Date().getFullYear()}{' '}
      <ReactTyped
          loop
          typeSpeed={90}
          backSpeed={60}
          strings={
            ["Hacker News Next.js SSR", "by Alex Burke"]}
          smartBackspace
          shuffle={false}
          backDelay={1}
          fadeOut={false}
          fadeOutDelay={100}
          loopCount={0}
          showCursor
          cursorChar="_"
        />
        </p></Footer>
    </>
  )
}

export default Layout



 