import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import './passage.css'

const useStyles = makeStyles(theme => ({
  passage: {
    margin: theme.spacing(10),
    marginTop: theme.spacing(4),
  },
}))

function Passage({ passage, handlePassageRef, settings }) {
  const classes = useStyles()
  const passageRef = useRef()

  useEffect(() => {
    handlePassageRef(passageRef.current)
  }, [passageRef, handlePassageRef])

  const className = settings.withBigMargins ? 'print margin' : 'print'
  const text = settings.withVerseNumbers ? passage.withVerseNumbers : passage.withoutVerseNumbers

  return (
    <div className={classes.passage}>
      <div ref={passageRef} className={className}>
        {text}
      </div>
    </div>
  )
}

Passage.propTypes = {
  passage: PropTypes.shape({
    withVerseNumbers: PropTypes.string.isRequired,
    withoutVerseNumbers: PropTypes.string.isRequired,
  }).isRequired,
  handlePassageRef: PropTypes.func.isRequired,
  settings: PropTypes.shape({
    withVerseNumbers: PropTypes.bool.isRequired,
    withBigMargins: PropTypes.bool.isRequired,
    withReference: PropTypes.bool.isRequired,
  }).isRequired,
}

export default Passage
