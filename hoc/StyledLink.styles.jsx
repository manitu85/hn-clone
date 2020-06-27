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
  font-size: .45em;
  color: ${({theme}) => theme.linkColor };
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #efefef;
  }

  &:focus {
    color: ${({theme}) => theme.linkColor };
    outline: none;
    border: 0;
  }

  &::after {
      content: "";
      position: relative;
      top: 1.35rem;
      display: block;
      height: .2rem;
      background-color: #efefef;
      width: 0;
      transition: all 500ms ease;
  }

  &:hover::after {
      width: 100%;
  }
`

// Usage -  resolve problem with dynamic routing
// import StyledLink from '.@/hoc/StyledLink'

//  <StyledLink href="/post/[pid]" forwardedAs="/post/abc">
//    Page
//  </StyledLink>