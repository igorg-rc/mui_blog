import { 
  Typography, 
  Button, 
  Box, 
  Container, 
  Grid, 
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  CardActions
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router';

import posts from '../mocData'

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

  cardMedia: {
    height: 250
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
  const classes = useStyles()
  const history = useHistory()
  return (
    <div>
      <Box className={classes.hero}>
        <Box>Last News</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogContainer}>
        <Typography variant="h4" color="primary" className={classes.blogTitle}>
            Articles
          </Typography>
        <Grid container spacing={3}>

            { posts.map(post => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardActionArea onClick={() => history.push(`/${post.id}`)}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={post.img}
                      title={post.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {post.title}
                      </Typography>
                      <div classame={classes.cardContent}>
                      <Typography className={classes.postContent} variant="body2" color="textSecondary" component="p">
                        {post.content.length > 100 ? `${post.content.substring(0, 100)}...` : post.content}
                      </Typography>
                      </div>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.cardActions}>
                    <Button size="small" color="primary" onClick={() => history.push(`/${post.id}`)}>
                      Learn More
                    </Button>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}

        </Grid>
      </Container>
    </div>
  )
}

