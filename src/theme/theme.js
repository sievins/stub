import { createContext } from 'react'

export const themes = {
  dark: {
    type: 'dark',
    backgroundColor: '#282c34',
    color: '#f1f2f4',
  },
  light: {
    type: 'light',
    backgroundColor: '#f1f2f4',
    color: '#282c34',
  },
}

export const ThemeContext = createContext(themes.dark)
