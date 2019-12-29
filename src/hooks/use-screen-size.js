import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

export default function useScreenSize() {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  return isSmallScreen
}
