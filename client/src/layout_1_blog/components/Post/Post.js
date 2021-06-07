import { useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useRouteMatch } from 'react-router'
import { Container, Typography, Button } from '@material-ui/core'
import { getSinglePost } from '../../../redux/PostSlice'
// import Carousel from '../../plugins/Carousel/Carousel'

import { getPost } from '../../../api/postApi'
import { Spinner } from '../plugins/Spinner'
import { useDispatch, useSelector } from 'react-redux'

const useStyles = makeStyles({
  titleContainer: {
    paddingTop: '3vh',
    paddingBottom: '3vh',
    textAlign: 'center'
  },

  postTitle: {
    fontSize: '1rem'
  },
  content: {
    textAlign: 'justify'
  },
  postImage: {
    width: '70%',
    height: 'auto',
    borderRadius: '20px'
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
  const dispatch = useDispatch()
  const { item, loading } = useSelector(state => state.post)

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     setLoading(true)
  //     const fetchedPost = await getPost(match.params.id)
  //     setPost(fetchedPost)
  //     setLoading(false)
  //   }
  //   fetchPost()
  // }, [])

  useEffect(() => {
    dispatch(getSinglePost(match.params.id))
  }, [])

  console.log(item)

  const postView =  <>
                      <div className={classes.titleContainer}>
                        <Typography variant="h4">{item.title}</Typography>
                      </div>
                      {/* <div className={classes.detailsContainer}>
                        <span>{post.date}</span>
                        <span>{post.author}</span>
                      </div> */}
                      <div className={classes.contentContainer}>
                        <Typography className={classes.content}>
                          {item.content}
                        </Typography>
                      </div>
                      <div className={classes.carouselTitle}>
                        <Typography variant="h5">Photo report</Typography>
                        <img src={item.imgUrl} className={classes.postImage} />
                      </div>
                      <div className={classes.carousel}>
                        {/* <Carousel /> */}
                      </div> 
                    </>



  return (
    <>
      <Container>
        { loading ? <Spinner /> : postView}
      </Container>
    </>
  )
}