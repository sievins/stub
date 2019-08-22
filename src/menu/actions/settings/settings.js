import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import Button from '@material-ui/core/Button'

const init = {
  verseNumbers: false,
  extraLargeMargins: false,
  reference: false,
}

function Settings({ open, handleClose }) {
  const [initialSettings, setInitialSettings] = useState(init)
  const [settings, setSettings] = useState(init)
  const [confirmed, setConfirmed] = useState(false)

  const handleEnter = () => {
    setInitialSettings(settings)
  }

  const handleExited = () => {
    !confirmed && setSettings(initialSettings)
  }

  const handleChange = name => event => {
    setSettings({ ...settings, [name]: event.target.checked })
  }

  const handleCancel = () => {
    setConfirmed(false)
    handleClose(initialSettings)
  }

  const handleConfirm = () => {
    setConfirmed(true)
    handleClose(settings)
  }

  return (
    <Dialog open={open} onEnter={handleEnter} onExited={handleExited} aria-labelledby="settings">
      <DialogContent>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={settings.verseNumbers}
                onChange={handleChange('verseNumbers')}
                value="verseNumbers"
                color="primary"
              />
            }
            label="Verse numbers"
          />
          <FormControlLabel
            control={
              <Switch
                checked={settings.extraLargeMargins}
                onChange={handleChange('extraLargeMargins')}
                value="extraLargeMargins"
                color="primary"
              />
            }
            label="Extra large margins"
          />
          <FormControlLabel
            control={
              <Switch
                checked={settings.reference}
                onChange={handleChange('reference')}
                value="reference"
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
}

export default Settings
