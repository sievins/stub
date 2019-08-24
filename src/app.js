import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import Title from './title'
import Passage from './passage'
import Menu, { actions } from './menu'
import './app.css'

const { init } = actions.settings

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
})

function App() {
  const [passage, setPassage] = useState({ withVerseNumbers: '', withoutVerseNumbers: '' })
  const [title, setTitle] = useState('')
  const [passageRef, setPassageRef] = useState(null)
  const [settings, setSettings] = useState(init)

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Title />
        <Menu
          handleSearch={(p, t) => {
            setPassage(p)
            setTitle(t)
          }}
          passageRef={passageRef}
          isPassage={Boolean(passage)}
          handleSettingsChange={setSettings}
        />
        <Passage passage={passage} title={title} handlePassageRef={setPassageRef} settings={settings} />
      </ThemeProvider>
    </div>
  )
}

export default App
