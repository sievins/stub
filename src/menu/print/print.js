import React  from 'react'
import PropTypes from 'prop-types'
import ReactToPrint from 'react-to-print'
import MaterialButton from '@material-ui/core/Button'

// Cannot use theme because ReactToPrint renders the Button in a callback and you are not allowed to use hooks in callbacks
const classes = {
  button: {
    position: 'absolute',
    marginTop: '12px',
    right: '80px',
  },
}

function buildButton(isPassage) {
  return (
    <MaterialButton
      variant="contained"
      color="primary"
      style={classes.button}
      disabled={!isPassage}
    >
      Print
    </MaterialButton>
  )
}

const Print = ({ passageRef, isPassage }) => {
  const button = buildButton(isPassage)

  return (
    <ReactToPrint
      trigger={() => button}
      content={() => passageRef}
    />
  )
}

Print.propTypes = {
  passageRef: PropTypes.object,
  isPassage: PropTypes.bool.isRequired,
}

export default Print
