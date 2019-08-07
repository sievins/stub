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

function Passage({ passage, handlePassageRef }) {
  const classes = useStyles()
  const passageRef = useRef()

  useEffect(() => {
    handlePassageRef(passageRef.current)
  }, [passageRef, handlePassageRef])

  return (
    <div className={classes.passage}>
      <div ref={passageRef} className="print">
        {passage}
      </div>
    </div>
  )
}

Passage.propTypes = {
  passage: PropTypes.string.isRequired,
  handlePassageRef: PropTypes.func.isRequired,
}

export default Passage
