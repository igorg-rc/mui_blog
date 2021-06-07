const BASE_URL = `api/posts`

export const getPosts = () => fetch(BASE_URL).then(res => res.json()) 

export const getPost = id => fetch(`${BASE_URL}/${id}`).then(res => res.json())

export const createPost = post => fetch(`${BASE_URL}`, { method: 'POST', body: post }).then(res => res.json)

export const updatePost = (id, post) => fetch(`${BASE_URL}/${id}`, { method: 'PATCH', body: post }).then(res => res.json()) 

export const deletePost = id => fetch(`${BASE_URL}/${id}`, { method: "DELETE" })