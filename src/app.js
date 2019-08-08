import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import Title from './title'
import Passage from './passage'
import Menu from './menu'
import './app.css'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
})

function App() {
  const [passage, setPassage] = useState('')
  const [passageRef, setPassageRef] = useState(null)

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Title />
        <Menu handleSearch={setPassage} passageRef={passageRef} isPassage={Boolean(passage)} />
        <Passage passage={passage} handlePassageRef={setPassageRef} />
      </ThemeProvider>
    </div>
  )
}

export default App
