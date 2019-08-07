import React  from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  button: {
    position: 'absolute',
    marginTop: theme.spacing(3) / 2,
    right: theme.spacing(10),
  },
}))

function Print() {
  const classes = useStyles()

  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
    >
      Print
    </Button>
  )
}

export default Print
