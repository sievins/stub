import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ReactToPrint from 'react-to-print'
import MaterialButton from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import SettingsIcon from '@material-ui/icons/Settings'
import Settings from './settings'

// Cannot use theme because ReactToPrint renders the Button in a callback and you are not allowed to use hooks in callbacks
const classes = {
  actions: {
    position: 'absolute',
    right: '80px',
  },
  settings: {
    marginTop: '22px',
    marginRight: '8px',
  },
  print: {
    marginTop: '22px',
  },
}

const buildButton = (isPassage) => (
  <MaterialButton
    variant="contained"
    color="primary"
    style={classes.print}
    disabled={!isPassage}
  >
    Print
  </MaterialButton>
)

const Actions = ({ passageRef, isPassage, handleSettingsChange }) => {
  const [open, setOpen] = useState(false)
  const button = buildButton(isPassage)

  return (
    <div style={classes.actions}>
      <IconButton
        onClick={() => setOpen(true)}
        color="primary"
        style={classes.settings}
        aria-label="open settings dialog"
      >
        <SettingsIcon />
      </IconButton>
      <Settings
        handleClose={() => setOpen(false)}
        handleChange={(settings) => handleSettingsChange(settings)}
        open={open}
      />
      <ReactToPrint
        trigger={() => button}
        content={() => passageRef}
      />
    </div>
  )
}

Actions.propTypes = {
  passageRef: PropTypes.object,
  isPassage: PropTypes.bool.isRequired,
  handleSettingsChange: PropTypes.func.isRequired,
}

export default Actions
