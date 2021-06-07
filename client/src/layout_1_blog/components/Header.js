import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
// import MenuIcon from '@material-ui/icons/Menu'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
  btnText: {
    fontSize: '1.2rem'
  },
  appBar: {
    
  },
  brandLink: {
    color: '#fff',
    textDecoration: 'none'
  }
})

export const Header = () => {
  const classes = useStyles()
  const history = useHistory()

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" className={classes.title}>
          <Button className={classes.brandLink} onClick={() => history.push('/')}>
            <div className={classes.btnText}>Blog</div>
          </Button>
        </Typography>
        <Button variant="contained" color="secondary" onClick={() => history.push('/create')}>Create Post</Button>
      </Toolbar>
    </AppBar>
  )
}