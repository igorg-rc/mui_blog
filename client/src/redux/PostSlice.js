import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createPost, deletePost, getPost, getPosts, updatePost } from '../api/postApi'

export const getAllPosts = createAsyncThunk(
  'post/getAllPosts',
  async () => await getPosts()
)
  
export const getSinglePost = createAsyncThunk(
  'post/getSinglePost',
  async id => await getPost(id)
)
  
export const deleteSinglePost = createAsyncThunk(
  'post/deleteSinglePost',
  async id => {
    await deletePost(id)
    return id
  }    
)

export const createNewPost = createAsyncThunk(
  'post/createNewPost',
  async data => await createPost(data)
)

export const editPost = createAsyncThunk(
  'post/editPost',
  async (id, post) => {
    await updatePost(id, post)
  }
)

const postSlice = createSlice({
  name: "post",
  initialState: {
    loading: false,
    item: {},
    items: [],
    test: 'Marco Polo'
  },
  reducers: {
   
  },
  extraReducers: {
    // getAllPosts 
    [getAllPosts.pending]: (state, action) => {
      state.loading = true
    },
    [getAllPosts.fulfilled]: (state, action) => {
      state.loading = false
      state.items = action.payload
    },
    [getAllPosts.rejected]: (state, action) => {
      state.items = []
    },
    // getSinglePost
    [getSinglePost.pending]: (state, action) => {
      state.loading = true
    },
    [getSinglePost.fulfilled]: (state, action) => {
      state.loading = false
      state.item = action.payload
    },
    [getSinglePost.rejected]: (state, action) => {
      state.item = {}
    },
    // deleteSinglePost
    [deleteSinglePost.pending]: (state, action) => {
      state.loading = true
    },
    [deleteSinglePost.fulfilled]: (state, action) => {
      state.loading = false
      const { id } = action.payload
      const newItemList = state.items.filter(item => item._id !== action.payload)
      state.items = newItemList
    },
    [deleteSinglePost.rejected]: (state, action) => {
      state.loading = true
    }
  }
})

export const { getAllItems, deleteItem } = postSlice.actions 
export default postSlice.reducer