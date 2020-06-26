import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
)

export default styled(StyledLink)`
  margin: 0 auto;
  padding: .6em;
  text-transform: uppercase;
  font-size: .5em;
  color: ${({theme}) => theme.linkColor };
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: lightgrey;
  }
  
  &:focus {
    color: ${({theme}) => theme.linkColor };
    outline: none;
    border: 0;
  }
`

// Usage
// import StyledLink from '.@/hoc/StyledLink'

//  <StyledLink href="/post/[pid]" forwardedAs="/post/abc">
//    First post
//  </StyledLink>