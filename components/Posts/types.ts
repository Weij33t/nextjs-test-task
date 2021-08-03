import { IPost } from './../Post/types'

export interface Posts {
  posts: IPost[]
  error?: string
}

export enum PostsActions {
  ADD_POST = 'ADD_POST',
  ADD_POST_FAILED = 'ADD_POST_FAILED',
  GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS',
  GET_POSTS_FAILED = 'GET_POSTS_FAILED',
}

export type PostAction = {
  type: string
  payload:
    | string
    | {
        title: string
        body: string
      }
}

interface AddPost {
  type: PostsActions.ADD_POST
  payload: IPost
}

interface AddPostFailed {
  type: PostsActions.ADD_POST_FAILED
  payload: string
}

interface PostsActionSuccess {
  type: PostsActions.GET_POSTS_SUCCESS
  payload: IPost[]
}

interface PostsActionFailed {
  type: PostsActions.GET_POSTS_FAILED
  payload: string
}

export type PostsAction =
  | PostsActionSuccess
  | PostsActionFailed
  | AddPost
  | AddPostFailed
