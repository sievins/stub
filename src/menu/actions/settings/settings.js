import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import Button from '@material-ui/core/Button'

export const init = {
  withVerseNumbers: false,
  withBigMargins: false,
  withReference: false,
}

function Settings({ open, handleClose, handleChange }) {
  const [initialSettings, setInitialSettings] = useState(init)
  const [settings, setSettings] = useState(init)
  const [confirmed, setConfirmed] = useState(false)

  useEffect(() => {
    handleChange(settings)
  }, [settings, handleChange])

  const handleEnter = () => {
    setInitialSettings(settings)
  }

  const handleExited = () => {
    !confirmed && setSettings(initialSettings)
  }

  const handleSwitchChange = name => event => {
    setSettings({ ...settings, [name]: event.target.checked })
  }

  const handleCancel = () => {
    setConfirmed(false)
    handleClose()
  }

  const handleConfirm = () => {
    setConfirmed(true)
    handleClose()
  }

  return (
    <Dialog open={open} onEnter={handleEnter} onExited={handleExited} aria-labelledby="settings">
      <DialogContent>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={settings.withVerseNumbers}
                onChange={handleSwitchChange('withVerseNumbers')}
                value="withVerseNumbers"
                color="primary"
              />
            }
            label="Verse numbers"
          />
          <FormControlLabel
            control={
              <Switch
                checked={settings.withBigMargins}
                onChange={handleSwitchChange('withBigMargins')}
                value="withBigMargins"
                color="primary"
              />
            }
            label="Extra large right margin"
          />
          <FormControlLabel
            control={
              <Switch
                checked={settings.withReference}
                onChange={handleSwitchChange('withReference')}
                value="withReference"
                color="primary"
              />
            }
            label="Passage title"
          />
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} variant="contained" color="secondary">
          Cancel
        </Button>
        <Button onClick={handleConfirm} variant="contained" color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  )
}

Settings.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Settings
