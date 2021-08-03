import axios from 'axios'
import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootType } from '../../redux/types'
import { IPost } from '../Post/types'
import { PostsAction, PostsActions } from './types'

export function createPost(
  data: IPost
): ThunkAction<void, RootType, unknown, PostsAction> {
  return async (dispatch: Dispatch<PostsAction>) => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_DOMAIN + '/posts',
        data
      )
      const id = response.data.id
      dispatch({
        type: PostsActions.ADD_POST,
        payload: { ...data, id },
      })
    } catch (e) {
      dispatch({
        type: PostsActions.ADD_POST_FAILED,
        payload: 'Не удалось добавить пост. Попробуйте ещё раз',
      })
    }
  }
}
