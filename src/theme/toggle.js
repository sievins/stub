import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Switch from '@material-ui/core/Switch'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { ThemeContext } from './theme'

const useStyles = makeStyles((theme) => ({
  toggle: {
    position: 'absolute',
    display: 'inline-flex',
    left: theme.spacing(10),
    top: theme.spacing(2),
  },
  text: {
    margin: 'auto',
  },
}))

function Toggle({checked, handleChange}) {
  const theme = useContext(ThemeContext)
  const classes = useStyles()

  return (
    <div className={classes.toggle}>
      <Switch
        checked={checked}
        onChange={handleChange}
        value="theme-toggle"
        inputProps={{ 'aria-label': 'theme checkbox' }}
      />
      <Typography variant="body1" className={classes.text}>
        {
          theme.type === 'dark' ?
            'Dark theme' :
            'Light theme'
        }
      </Typography>
    </div>
  )
}

Toggle.propTypes = {
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Toggle
