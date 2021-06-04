import { useHistory } from 'react-router'
import { createPost } from '../../api/posts/api'
import { Form } from './Form'

export const Create = () => {
  const history = useHistory()

  const handleSubmit = async data => {
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('content', data.content)
    formData.append('image', data.image[0])

    await createPost(formData)

    history.push('/')
  }

  return (
    <>
      <Form onSubmit={handleSubmit} />
    </>
  )
}