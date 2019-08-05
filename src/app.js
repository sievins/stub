import React, { useState, useEffect } from 'react'
import { api } from './services'
import './app.css'

const { getPassage } = api

function App() {
  const [passage, setPassage] = useState('')
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      setIsError(false)

      try {
        const response = await getPassage('Colossians 1:15-20')
        setPassage(response.data.passages[0])
      } catch {
        setIsError(true)
      }
    }
    fetch()
  }, [])

  return (
    <div className="app">
      <header className="app-header">
        {isError && <p>Failed to fetch that Bible passage</p>}
        {passage}
      </header>
    </div>
  )
}

export default App
