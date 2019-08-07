import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import Title from './title'
import Passage from './passage'
import Search from './search'
import './app.css'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
})

function App() {
  const [passage, setPassage] = useState('')

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Title />
        <Search handleSearch={setPassage} />
        <Passage passage={passage} />
      </ThemeProvider>
    </div>
  )
}

export default App
