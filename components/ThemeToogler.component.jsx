import React from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
  background: ${({ theme }) => theme.footer};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  /* color: ${({ theme }) => theme.text}; */
  color: #efefef;
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.4rem; 
  float: right;
`

const Toggle = ({theme,  toggleTheme }) => <Button onClick={toggleTheme} >Switch Theme</Button>


Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle
