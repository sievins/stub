import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles'
import { theme, Toggle } from './theme'
import Title from './title'
import Passage from './passage'
import Menu, { actions } from './menu'

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
  const [theme, setTheme] = useState(themes.dark)
  const [passage, setPassage] = useState({ withVerseNumbers: '', withoutVerseNumbers: '', query: '' })
  const [passageRef, setPassageRef] = useState(null)
  const [settings, setSettings] = useState(init)

  const classes = useStyles(theme)()

  const toggleTheme = () => {
    setTheme(
      theme === themes.dark ?
        themes.light :
        themes.dark
    )
  }

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeProvider theme={createMaterialTheme(theme.type)}>
        <div className={classes.app}>
          <Toggle handleChange={toggleTheme} checked={theme === themes.dark}/>
          <Title />
          <Menu
            handleSearch={setPassage}
            passageRef={passageRef}
            isPassage={Boolean(passage)}
            handleSettingsChange={setSettings}
          />
          <Passage passage={passage} handlePassageRef={setPassageRef} settings={settings} />
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
