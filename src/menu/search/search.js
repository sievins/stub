import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { api } from '../../services'

const { getPassage } = api

const useStyles = makeStyles(theme => ({
  search: {
    display: 'flex',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  button: {
    marginTop: theme.spacing(3.5),
    height: 'fit-content',
  },
}))

function Search({ handleSearch }) {
  const [query, setQuery] = useState('')
  const [isFetching, setIsFetching] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const classes = useStyles()

  const computeErrorMessage = () => `Failed to find "${query}"`

  const fetch = async () => {
    if (query) {
      setIsFetching(true)
      try {
        const passage = await getPassage(query)
        const isError = Boolean(!passage.withVerseNumbers || !passage.withoutVerseNumbers)
        if (isError) {
          setErrorMessage(computeErrorMessage())
        } else {
          setErrorMessage('')
          handleSearch(passage)
        }
      } catch (e) {
        setErrorMessage(computeErrorMessage())
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
        error={Boolean(errorMessage)}
        helperText={errorMessage}
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
