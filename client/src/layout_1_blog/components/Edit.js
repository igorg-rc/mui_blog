import { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router'
import { getPost, updatePost } from '../../api/posts/api'
import { Container, Typography, Button, TextField, makeStyles } from '@material-ui/core'
import { Send, Publish } from '@material-ui/icons'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Form } from './Form'
// import { Spinner } from './plugins/Spinner'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    borderRadius: "7px",
    border: "2px solid #673AB7",
    padding: "3vh 0",
    margin: "5vh auto"
  },
  titleContainer: {
    margin: "0 auto",
    textAlign: "center"
  },
  accountIcon: {
    fontSize: "5rem"
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '90%',
    margin: '0 auto',
    "& > *": {
      margin: theme.spacing(1),
      width: "95%"
    }
  },
  textField: {
    
  },
  error: {
    color: "red",
    fontSize: "0.75rem",
    marginTop: "0",
    paddingBottom: "5px"
  },
  sendBtn: {}
}));


// Validation schema (using yup)
const schema = yup.object().shape({
  title: yup.string().required().min(5),
  content: yup.string().required().min(10)
})

export const Edit = () => {
  const classes = useStyles()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [post, setPost] = useState()

  const match = useRouteMatch()
  const history = useHistory()

  

  useEffect(() => {
    const fetchPost = async () => {
      const fetchedPost = await fetch(`api/posts/${match.params.id}`).then(res => res.json())
      setPost(fetchedPost)
    }
    fetchPost()

    //
  }, [])

  console.log(post)

  const submitForm = async data => {
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('content', data.content)
    formData.append('image', data.image[0])
    setPost(formData)
    await updatePost(match.params.id, formData)
    history.push('/')
  }

  return (
    <>
      <Container maxWidth="md">
        <div className={classes.mainContainer}>
          <div className={classes.titleContainer}>
            <Typography variant="h4" color="initial">Update post</Typography>
          </div>
          <form
              className={classes.root}
              noValidate
              autoComplete="off"
              encType="multipart/form-data"
              onSubmit={handleSubmit(submitForm)}
            >
              <TextField
                className={classes.textField}
                name="title"
                label="Title*"
                variant="outlined"
                fullWidth
                {...register("title")}
                
              />
              <p className={classes.error}>{errors.title?.message}</p>

              <TextField
                name="content"
                label="Content*"
                variant="outlined"
                multiline
                fullWidth
                rows={15}
                {...register("content")}
              />
              <p className={classes.error}>{errors.content?.message}</p>

              <Button
                variant="contained"
                component="label"
              >
                Upload File
                <Publish />
                <input
                  type="file"
                  hidden
                  {...register("image")}
                />
              </Button>

              <Button
                variant="contained"
                color="primary"
                className={classes.sendBtn}
                type="submit"
              >
                Submit
                <Send fontSize="small" style={{ margin: "0 5px" }} />
              </Button>
            </form>
        </div>
      </Container>
    </>
  )
}