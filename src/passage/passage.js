import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { parse } from './parser'
import { useScreenSize, useStyles } from '../hooks'
import './passage.css'

const stylesDelegate = (theme) => ({
  passage: ({ isSmallScreen }) => ({
    margin: isSmallScreen ? theme.spacing(2) : theme.spacing(10),
    marginTop: theme.spacing(4),
  }),
})

const createClassName = ({ withMargin, withSmall }) => {
  let className = 'page'
  withMargin && (className = className + ' margin')
  withSmall && (className = className + ' small')
  return className
}

function Passage({ passage, handlePassageRef, settings }) {
  const classes = useStyles(stylesDelegate)
  const isSmallScreen = useScreenSize()
  const passageRef = useRef()

  useEffect(() => {
    handlePassageRef(passageRef.current)
  }, [passageRef, handlePassageRef])

  const className = createClassName({ withMargin: settings.withBigMargins, withSmall: isSmallScreen })

  const header = settings.withReference
    ? (
      <Typography variant="h4" gutterBottom className="header">
        {passage.query}
      </Typography>
    )
    : null

  return (
    <div className={classes.passage}>
      <div ref={passageRef} className={className}>
        {header}
        {parse(passage, settings)}
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
