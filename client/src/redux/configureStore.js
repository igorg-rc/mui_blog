import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'
import postSlice from './PostSlice'

const reducer = combineReducers({
  post: postSlice
})

const store = configureStore({
  reducer
})

export default store