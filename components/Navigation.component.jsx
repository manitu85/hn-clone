import React, { useContext } from 'react'
import Link from 'next/link'
import StyledLink from '@/hoc/StyledLink.styles'
import { Nav } from "@/components/Navigation.styles";
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
              <div className="ml-6 flex items-center">
                <StyledLink href="/">Hacker News</StyledLink>
                <StyledLink href="/about">About</StyledLink>
                <StyledLink href="/register">Register</StyledLink>
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


export default Navigation

// useContext for theme to pass state, avoid props drilling