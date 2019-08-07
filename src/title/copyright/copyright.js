import React, { useState, Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const useStyles = makeStyles(theme => ({
  link: {
    cursor: 'pointer',
  }
}))

function Copyright() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  return (
    <Fragment>
      <Link onClick={() => setOpen(true)} className={classes.link}>ESV</Link>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="copyright-notice"
        aria-describedby="copyright-notice-description"
      >
        <DialogTitle id="copyright-notice-title">Copyright notice</DialogTitle>
        <DialogContent>
          <DialogContentText id="copyright-notice-description">
            Scripture quotations are from the ESV® Bible (The Holy Bible, English Standard Version®), copyright © 2001 by Crossway, a publishing ministry of Good News Publishers. Used by permission. All rights reserved. You may not copy or download more than 500 consecutive verses of the ESV Bible or more than one half of any book of the ESV Bible.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Fragment>
  )
}

export default Copyright
