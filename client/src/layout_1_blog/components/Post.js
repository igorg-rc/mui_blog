import { useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory, useRouteMatch } from 'react-router'
import { Container, Typography, Button } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import Carousel from '../../plugins/Carousel/Carousel'

import posts from '../mocData'

const useStyles = makeStyles({
  titleContainer: {
    paddingTop: '3vh',
    paddingBottom: '3vh',
    textAlign: 'center'
  },
  content: {
    textAlign: 'justify'
  },
  detailsContainer: {
    paddingBottom: '2vh',
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: '500'
  },
  btnContainer: {
    paddingTop: '2vh',
    paddingBottom: '2vh',
    margin: 'auto',
    textAlign: 'center',
    bottom: '10px',
    marginBottom: '3vh'
  },
  btnBack: {

  },
  carousel: {
    textAlign: 'center',
    height: '10vh',
    maxWidth: '80%',
    // paddingBottom: '2vh',
    paddingTop: '2vh',
    margin: 'auto'
  },
  carouselTitle: {
    paddingTop: '1vh',
    textAlign: 'center'
  }
})

export const Post = () => {
  const classes = useStyles()
  const match = useRouteMatch()
  const history = useHistory()
  const post = posts[match.params.id - 1]

  console.log(post)
  return (
    <>
      <Container>
        <div className={classes.titleContainer}>
          <Typography variant="h3">{post.title}</Typography>
        </div>
        <div className={classes.detailsContainer}>
          <span>{post.date}</span>
          <span>{post.author}</span>
        </div>
        <div className={classes.contentContainer}>
          <Typography className={classes.content}>
            {post.content}
          </Typography>
        </div>
          <div className={classes.carouselTitle}>
            <Typography variant="h5">Photo report</Typography>
          </div>
          <div className={classes.carousel}>
            <Carousel />
          </div>
          {/* <div className={classes.btnContainer}>
            <Button className={classes.btnBack} variant="contained" color="secondary" onClick={() => history.push('/')}
            >
            <ArrowBack />
            Back to all posts
            </Button>
          </div> */}
        

      </Container>
    </>
  )
}