import React from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'
import { RiSunLine, RiMoonClearLine } from 'react-icons/ri'
// import { darkTheme } from 'theme'

const Button = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.toogle};
  cursor: pointer;
  font-size: 1.6rem;
  padding: 0.4rem; 
  float: right;
  transition: all .75s ease-in-out;
  transform: translateY(1px);
`

const Toggle = ({theme,  toggleTheme }) => (
  <Button onClick={toggleTheme} >
    {theme === 'dark' ? <RiSunLine /> : <RiMoonClearLine /> }
  </Button>
)


Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle
