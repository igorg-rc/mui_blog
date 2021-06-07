import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { createNewPost } from '../../../redux/PostSlice'
import { Form } from './Form'

export const Create = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleSubmit = async data => {
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('content', data.content)
    formData.append('image', data.image[0])


    dispatch(createNewPost(formData))

    history.push('/')
  }

  return (
    <>
      <Form onSubmit={handleSubmit} />
    </>
  )
}