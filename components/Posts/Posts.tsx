import React from 'react'
import { useSelector } from 'react-redux'
import { RootType } from '../../redux/types'
import { Post } from './../Post/Post'
import styled from 'styled-components'
import { AddPost } from '../AddPost/AddPost'

const Container = styled.div`
  margin-top: 70px;
`

export const Posts = (): JSX.Element => {
  const { posts, error } = useSelector((state: RootType) => state.posts)
  if (error) {
    return <div>{error}</div>
  }
  if (!posts) {
    return <div>Loading...</div>
  }
  return (
    <Container>
      <AddPost />
      {posts.map((post) => {
        return <Post key={post.id} {...post} />
      })}
    </Container>
  )
}
