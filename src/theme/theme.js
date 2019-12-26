import { createContext } from 'react'

export const themes = {
  dark: {
    type: 'dark',
    backgroundColor: '#282c34',
    color: 'white',
  },
  light: {
    type: 'light',
    backgroundColor: 'white',
    color: '#282c34',
  },
}

export const ThemeContext = createContext(themes.dark)
