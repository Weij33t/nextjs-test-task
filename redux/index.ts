import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { IPost } from '../components/Post/types'
import { reducer as postsReducer } from '../components/Posts/reducers'
import { Posts } from './../components/Posts/types'
import { RootType } from './types'

function initStore(preloadedState: Posts) {
  const initialState: RootType = { posts: preloadedState }
  return createStore(reducers, initialState, applyMiddleware(thunk))
}

export const initializeStore = (preloadedState: Posts) => {
  let _store = initStore(preloadedState)

  if (preloadedState) {
    _store = initStore({
      ...preloadedState,
    })
  }

  if (typeof window === 'undefined') return _store

  return _store
}

const reducers = combineReducers({
  posts: postsReducer,
})
