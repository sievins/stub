import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Search from './search'
import Actions from './actions'

const useStyles = makeStyles(theme => ({
  menu: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
}))

function Menu({ handleSearch, handleSettingsChange, passageRef, isPassage }) {
  const classes = useStyles()

  return (
    <div className={classes.menu}>
      <Search handleSearch={handleSearch} />
      <Actions passageRef={passageRef} isPassage={isPassage} handleSettingsChange={handleSettingsChange} />
    </div>
  )
}

Menu.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleSettingsChange: PropTypes.func.isRequired,
  passageRef: PropTypes.object,
  isPassage: PropTypes.bool.isRequired,
}

export default Menu