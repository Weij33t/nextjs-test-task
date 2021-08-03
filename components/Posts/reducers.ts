import { PostsAction, Posts, PostsActions } from './types'

const initialState: Posts = {
  posts: [],
}

export const reducer = (state = initialState, action: PostsAction): Posts => {
  switch (action.type) {
    case PostsActions.ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] }
    case PostsActions.ADD_POST_FAILED:
      return { ...state, error: action.payload }
    case PostsActions.GET_POSTS_SUCCESS:
      return { ...state, posts: [...action.payload] }
    case PostsActions.GET_POSTS_FAILED:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
