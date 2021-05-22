import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { Index } from './components/Index'
import { BlogTheme } from './BlogTheme'


export const Layout_1_blog = () => {

  return (
    <>
      <ThemeProvider theme={BlogTheme}>
        <Router>
          <Index />
        </Router>
      </ThemeProvider>
    </>
  )
}