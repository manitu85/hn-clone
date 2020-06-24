import Head from 'next/head'
import styled from 'styled-components'
import Navigation from '@/components/Navigation.component'


const Layout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
      </Head>
      <Navigation />
      <TailwindContainer>
        { children }
      </TailwindContainer>
      <Footer><p>Copyright&copy; Hacker News Next.js {new Date().getFullYear()}</p></Footer>
    </>
  )
}

export default Layout

// Experimental feature: tailwind classes with styled component
const TailwindContainer = styled.div.attrs({
  className: 'max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 container'
})`
  /* // rest of rules */
`

const Footer = styled.footer`
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  background-color: #ff6600;
  color: #fefefe;
  font-size: .8rem;
  font-weight: bold;
`