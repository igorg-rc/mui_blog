import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
  appBar: {
    
  }
})

export const Header = () => {
  const classes = useStyles()

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Blog
        </Typography>
        <Button variant="contained" color="secondary">Login</Button>
      </Toolbar>
    </AppBar>
  )
}