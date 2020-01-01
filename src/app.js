import React, { useEffect, useState } from 'react'
import { equals } from 'ramda'

import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles'
import { theme, Toggle } from './theme'

import { CookieConsent, CookieContext, cookieService } from './cookies'
import Menu, { actions } from './menu'
import Passage from './passage'
import Title from './title'

const { themes, ThemeContext } = theme
const { init } = actions.settings

const useStyles = (theme) => makeStyles({
  app: {
    backgroundColor: theme.backgroundColor,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 'calc(10px + 2vmin)',
    color: theme.color,
  },
})

const createMaterialTheme = (type) => createMuiTheme({
  palette: {
    type,
  },
})

function App() {
  const [cookies] = useState(cookieService.get())
  const [theme, setTheme] = useState(cookies.theme || themes.dark)
  const [passage, setPassage] = useState({ withVerseNumbers: '', withoutVerseNumbers: '', query: '' })
  const [passageRef, setPassageRef] = useState(null)
  const [settings, setSettings] = useState(cookies.settings || init)

  const classes = useStyles(theme)()

  const setCookies = (consented) => {
    consented && cookieService.set({ consented: true })
    cookieService.set({ theme, settings })
  }

  useEffect(setCookies, [theme, settings])

  const toggleTheme = () => {
    setTheme(
      equals(theme, themes.dark)
        ? themes.light
        : themes.dark,
    )
  }

  return (
    <CookieContext.Provider value={cookies}>
      <ThemeContext.Provider value={theme}>
        <ThemeProvider theme={createMaterialTheme(theme.type)}>
          <div className={classes.app}>
            <Toggle handleChange={toggleTheme} checked={equals(theme, themes.dark)}/>
            <Title />
            <Menu
              handleSearch={setPassage}
              passageRef={passageRef}
              isPassage={Boolean(passage)}
              handleSettingsChange={setSettings}
            />
            <Passage passage={passage} handlePassageRef={setPassageRef} settings={settings} />
            <CookieConsent handleConsent={() => setCookies(true)} />
          </div>
        </ThemeProvider>
      </ThemeContext.Provider>
    </CookieContext.Provider>
  )
}

export default App
