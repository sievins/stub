import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { api } from '../services'

const { getPassage } = api

const useStyles = makeStyles(theme => ({
  search: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  button: {
    marginTop: theme.spacing(3),
  },
}))

function Search({ handleSearch }) {
  const [query, setQuery] = useState('')
  const [isFetching, setIsFetching] = useState(false)
  const classes = useStyles()

  const fetch = async () => {
    if (query) {
      const errorMessage = `Failed to find "${query}"`

      setIsFetching(true)
      try {
        const passage = await getPassage(query)
        handleSearch(passage || errorMessage)
      } catch {
        handleSearch(errorMessage)
      }
      setIsFetching(false)
    }
  }

  return (
    <div className={classes.search}>
      <TextField
        onChange={(event) => setQuery(event.target.value)}
        onKeyPress={(event) => event.key === 'Enter' && fetch()}
        disabled={isFetching}
        id="standard-search"
        label="Enter passage"
        type="search"
        className={classes.textField}
        margin="normal"
      />
      <Button
        onClick={fetch}
        disabled={isFetching || !query}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Search
      </Button>
    </div>
  )
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
}

export default Search
