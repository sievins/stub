import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ReactToPrint from 'react-to-print'
import MaterialButton from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import SettingsIcon from '@material-ui/icons/Settings'
import Settings from './settings'
import { useScreenSize, useStyles } from '../../hooks'

const stylesDelegate = (theme) => ({
  actions: ({ isSmallScreen }) => ({
    position: isSmallScreen ? null : 'absolute',
    right: isSmallScreen ? null : theme.spacing(10),
    justifyContent: isSmallScreen ? 'flex-start' : null,
    marginLeft: isSmallScreen ? theme.spacing(0.5) : null,
  }),
  settings: ({ isSmallScreen }) => ({
    marginTop: isSmallScreen ? null : theme.spacing(2.75),
    marginRight: theme.spacing(1),
  }),
})

const buildButton = (isPassage, isSmallScreen) => {
  // Cannot use hook to makeStyles as ReactToPrint renders the Button in a callback and you are not allowed to use hooks in callbacks
  const style = {
    marginTop: isSmallScreen ? null : '22px',
  }

  return (
    <MaterialButton
      variant="contained"
      color="primary"
      style={style}
      disabled={!isPassage}
    >
      Print
    </MaterialButton>
  )
}

const Actions = ({ passageRef, isPassage, handleSettingsChange }) => {
  const [open, setOpen] = useState(false)

  const classes = useStyles(stylesDelegate)

  const isSmallScreen = useScreenSize()
  const button = buildButton(isPassage, isSmallScreen)

  return (
    <div className={classes.actions}>
      <IconButton
        onClick={() => setOpen(true)}
        color="primary"
        className={classes.settings}
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
