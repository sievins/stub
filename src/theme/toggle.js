import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Switch from '@material-ui/core/Switch'
import Typography from '@material-ui/core/Typography'
import { useStyles } from '../hooks'
import { ThemeContext } from './theme'

const stylesDelegate = (theme) => ({
  toggle: ({ isSmallScreen }) => ({
    position: 'absolute',
    display: 'inline-flex',
    left: theme.spacing(isSmallScreen ? 0.5 : 10),
    top: theme.spacing(isSmallScreen ? 0.5 : 2),
  }),
  text: {
    margin: 'auto',
  },
})

function Toggle({ checked, handleChange }) {
  const theme = useContext(ThemeContext)
  const classes = useStyles(stylesDelegate)

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
          theme.type === 'dark'
            ? 'Dark theme'
            : 'Light theme'
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
