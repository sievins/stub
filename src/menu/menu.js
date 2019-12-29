import React from 'react'
import PropTypes from 'prop-types'
import Search from './search'
import Actions from './actions'
import { useStyles } from '../hooks'

const stylesDelegate = () => ({
  menu: ({ isSmallScreen }) => ({
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    flexDirection: isSmallScreen ? 'column' : null,
  }),
})

function Menu({ handleSearch, handleSettingsChange, passageRef, isPassage }) {
  const classes = useStyles(stylesDelegate)

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
