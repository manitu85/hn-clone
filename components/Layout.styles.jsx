import styled from 'styled-components'

// Experimental feature: tailwind classes with styled component
export const TailwindContainer = styled.div.attrs(props => ({
  className: 'max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 container'
}))`
   margin-top: 80px;
  /* // ...rest of rules */
`

export const Footer = styled.footer`
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  background-color: ${({ theme}) => theme.footer };
  color: #fefefe;
  font-size: .8rem;
  font-weight: bold;
  transition: all .6s ease-in;
`

