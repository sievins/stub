import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  passage: {
    margin: theme.spacing(10),
    marginTop: theme.spacing(3),
  },
}))

function Passage({ passage }) {
  const classes = useStyles()

  return (
    <div className={classes.passage}>
      {passage}
    </div>
  )
}

Passage.propTypes = {
  passage: PropTypes.string.isRequired,
}

export default Passage
