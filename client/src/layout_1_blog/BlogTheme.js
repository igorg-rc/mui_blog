import { deepPurple, teal } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

export const BlogTheme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[500]
    },
    background: {
      default: '#fff'
    },
    secondary: {
      main: teal[400]
    },
    background: {
      default: '#fff'
    },
  }
})