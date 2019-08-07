import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Copyright from './copyright'

const useStyles = makeStyles(theme => ({
  title: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}))

function Title() {
  const classes = useStyles()

  return (
    <div className={classes.title}>
      <Typography variant="h1">
        StuB
      </Typography>
      <Typography variant="subtitle1">
        Study the Bible &#8226; <Copyright />
      </Typography>
    </div>
  )
}

export default Title
