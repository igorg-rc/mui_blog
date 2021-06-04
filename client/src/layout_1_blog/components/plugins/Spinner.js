import { CircularProgress, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  spinner: {
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column-reverse'
  }
})

export const Spinner = () => {
  const classes = useStyles()

  return (
    <div className={classes.spinner}>
      <CircularProgress color="secondary" />
      <Typography variant="h4" color="secondary">Please wait...</Typography>
  </div>
  )
}