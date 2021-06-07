import { useEffect } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { Container, Typography, Button, TextField, makeStyles } from '@material-ui/core'
import { Send, Publish } from '@material-ui/icons'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Form } from './Form'
import { useDispatch, useSelector } from 'react-redux'
import { getSinglePost, editPost } from '../../../redux/PostSlice'
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
  const match = useRouteMatch()
  const history = useHistory()
  const dispatch = useDispatch()
  const { item } = useSelector(state => state.post)

  const { handleSubmit, register, formState: {errors} } = useForm()

  useEffect(() => {
    dispatch(getSinglePost(`${match.params.id}`.replace('/edit', '')))

  }, [])

  console.log(item)

  const submitForm = async data => {
    const formData = new FormData()
    formData.append('title', item.title)
    formData.append('content', item.content)
    formData.append('image', item.image[0])
    
    dispatch(editPost(match.params.id, formData))
    history.push('/')
  }

  return (
    <>
      <Container maxWidth="md">
        <Form item={item} onSubmit={submitForm} />
      </Container>
    </>
  )
}