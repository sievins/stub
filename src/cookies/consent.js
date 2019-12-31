import React, { useContext, useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import { CookieContext } from './context'
import { set as setCookies } from './service'
import { useStyles } from '../hooks'

const styleDelegate = (theme) => ({
  content: ({ isSmallScreen }) => ({
    minWidth: isSmallScreen ? null : theme.spacing(68),
  }),
  action: ({ isSmallScreen }) => ({
    marginLeft: isSmallScreen ? 0 : null,
    paddingLeft: isSmallScreen ? 0 : null,
  }),
  button: ({ isSmallScreen }) => ({
    paddingLeft: isSmallScreen ? 0 : null,
  }),
})

function Consent() {
  const { consented } = useContext(CookieContext)
  const [open, setOpen] = useState(!consented)
  const classes = useStyles(styleDelegate)

  useEffect(() => {
    setOpen(!consented)
  }, [consented])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setCookies()
    setOpen(false)
  }

  return (
    <Snackbar
      onClose={handleClose}
      open={open}
    >
      <SnackbarContent
        action={(
          <Button className={classes.button} color="secondary" size="small" onClick={handleClose}>
            That&apos;s OK
          </Button>
        )}
        className={classes.content}
        classes={{ action: classes.action }}
        message="This website uses cookies to remember your print settings and theme"
      />
    </Snackbar>
  )
}

export default Consent
