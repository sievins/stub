import { makeStyles } from '@material-ui/core/styles'
import useScreenSize from './use-screen-size'

export default function useStyles(stylesDelegate) {
  const isSmallScreen = useScreenSize()
  const classes = makeStyles(stylesDelegate)({ isSmallScreen })
  return classes
}
