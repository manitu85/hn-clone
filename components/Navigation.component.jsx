import React, { useContext } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Toggle from '@/components/ThemeToogler.component'
import ThemeContext from '@/hooks/ThemeContext'


const Navigation = () => {
  // destructuring value from context
  const { theme, themeToggler }  = useContext(ThemeContext)
  
  return(
    <Nav>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 container">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link href="/">
                <img className="block lg:hidden h-8 w-auto" src="/logo/hn-logo.png" alt="hacker-news logo" />
              </Link>
              <Link href="/">
                <img className="hidden lg:block h-8 w-auto" src="/logo/hn-logo.png" alt="hacker-news logo" />
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex">
                <Link href="/">
                  <a  className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white  transition duration-150 ease-in-out">Hacker News</a>
                </Link>
                <Link href="/about">
                  <a  className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300  transition duration-150 ease-in-out">About</a>
                </Link>
                <Link href="/contact">
                  <a className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300  transition duration-150 ease-in-out">Contact</a>
                </Link>
            </div>
          </div>
        </div>
          <Toggle
            theme={theme}
            toggleTheme={themeToggler}
          />
        </div>
      </div>
    </Nav>

  )
}



// Experimental feature: tailwind classes with styled component
export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.header };
  position: fixed; 
  top: 0;
  right: 0; 
  left: 0;
  transition: all .6s ease-in;
  /* // ...rest of rules */
`

export default Navigation

// useContext for theme to pass state, avoid props drilling