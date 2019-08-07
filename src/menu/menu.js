import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Search from './search'
import Print from './print'

const useStyles = makeStyles(theme => ({
  menu: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

function Menu({ handleSearch, passageRef, isPassage }) {
  const classes = useStyles()

  return (
    <div className={classes.menu}>
      <Search handleSearch={handleSearch} />
      <Print passageRef={passageRef} isPassage={isPassage} />
    </div>
  )
}

Menu.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  passageRef: PropTypes.object,
  isPassage: PropTypes.bool.isRequired,
}

export default Menu
