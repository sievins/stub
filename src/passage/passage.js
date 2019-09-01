import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import DOMPurify from 'dompurify'
import './passage.css'

const useStyles = makeStyles(theme => ({
  passage: {
    margin: theme.spacing(10),
    marginTop: theme.spacing(4),
  },
}))

const superScriptVerseNumbers = (text) => text.replace(/\[(\d+)]\s/g, '<sup style="font-size: calc(4px + 1vmin)"  >$1</sup>&nbsp;')
const parse = (text) => DOMPurify.sanitize(superScriptVerseNumbers(text))

function Passage({ passage, handlePassageRef, settings }) {
  const classes = useStyles()
  const passageRef = useRef()

  useEffect(() => {
    handlePassageRef(passageRef.current)
  }, [passageRef, handlePassageRef])

  const className = settings.withBigMargins ? 'page margin' : 'page'

  const header = settings.withReference ?
    <Typography variant="h4" gutterBottom className="header">
      {passage.query}
    </Typography> :
    null

  const text = settings.withVerseNumbers ? passage.withVerseNumbers : passage.withoutVerseNumbers
  const parsedText = <div dangerouslySetInnerHTML={{__html: parse(text)}}></div>

  return (
    <div className={classes.passage}>
      <div ref={passageRef} className={className}>
        {header}
        {parsedText}
      </div>
    </div>
  )
}

Passage.propTypes = {
  passage: PropTypes.shape({
    withVerseNumbers: PropTypes.string.isRequired,
    withoutVerseNumbers: PropTypes.string.isRequired,
    query: PropTypes.string.isRequired,
  }).isRequired,
  handlePassageRef: PropTypes.func.isRequired,
  settings: PropTypes.shape({
    withVerseNumbers: PropTypes.bool.isRequired,
    withBigMargins: PropTypes.bool.isRequired,
    withReference: PropTypes.bool.isRequired,
  }).isRequired,
}

export default Passage
