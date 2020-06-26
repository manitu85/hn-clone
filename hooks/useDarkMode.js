import { useEffect, useState } from 'react'

const useDarkMode = () => {

  const [theme, setTheme] = useState('light')
  const [mountedComponent, setMountedComponent] = useState(false)

  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const isLight = theme === 'light'
  const themeToggler = () => isLight ? setMode('dark') : setMode('light')
  
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    localTheme && setTheme(localTheme)
    setMountedComponent(true)
  }, [])

  return [theme, themeToggler, mountedComponent]
}

export default useDarkMode