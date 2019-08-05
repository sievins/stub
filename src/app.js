import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
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
        <Search handleSearch={setPassage} />
        {passage}
      </ThemeProvider>
    </div>
  )
}

export default App
