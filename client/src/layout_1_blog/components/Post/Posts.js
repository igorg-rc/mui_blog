import { 
  Typography, 
  Button, 
  Box, 
  Container, 
  Grid, 
  Card,
  CardActionArea,
  CardContent,
  CardActions,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router';
import { useEffect } from 'react'
import { Spinner } from '../plugins/Spinner'
import { useSelector, useDispatch } from 'react-redux'
import { getAllPosts, deleteSinglePost } from '../../../redux/PostSlice'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0, 0.8), rgba(0,0,0, 0.6)), url(${process.env.PUBLIC_URL + '/img/1.jpg'})`,
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '4rem'
  },

  blogContainer: {
    paddingTop: theme.spacing(3)
  },

  blogTitle: {
    fontWeight: 700,
    paddingBottom: theme.spacing(3),
    textAlign: 'center'
  },
  card: {
    maxWidth: '100%'
  },

  cardContent: {
    height: '10vh'
  },

  cardImage: {
    width: '100%',
    height: 'auto'
  },

  cardActions: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  postContent: {
    textAlign: 'justify'
  }

}));

export const Posts = () => {
  const { loading, items, test } = useSelector(state => state.post)
  const dispatch = useDispatch()
  const classes = useStyles()
  const history = useHistory()

  useEffect(() => {
    dispatch(getAllPosts())
  }, [])
  
  console.log(test, items)

  // items returned from API
  const postList = items.map(item => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
      <Card className={classes.card}>
        <CardActionArea onClick={() => history.push(`/${item._id}`)}>
          <img src={item.imgUrl} className={classes.cardImage} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.title}
            </Typography>
            <div classame={classes.cardContent}>
            <Typography className={classes.postContent} variant="body2" color="textSecondary" component="p">
              {/* {item && item.content.length > 100 ? `${item.content.substring(0, 100)}...` : item.content} */}
            </Typography>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" onClick={() => history.push(`/${item._id}`)}>
            Learn More
          </Button>
          <Button size="small" color="primary" onClick={() => history.push(`/edit/${item._id}`)}>
            Edit
          </Button>
          <Button size="small" color="primary" onClick={() => dispatch(deleteSinglePost(item._id))}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ))




  return (
    <div>
      {/* <Box className={classes.hero}>
        <Box>Last News</Box>
      </Box> */}
      <Container maxWidth="lg" className={classes.blogContainer}>
        <Typography variant="h4" color="primary" className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
          { loading ? <Spinner /> : postList }
        </Grid>
      </Container>
    </div>
  )
}

