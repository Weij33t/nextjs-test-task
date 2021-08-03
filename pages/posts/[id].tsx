import React from 'react'
import { IPost, PostProps } from '../../components/Post/types'
import { Post } from '../../components/Post/Post'
import axios from 'axios'
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from 'next'
import { Button } from '../../components/Button/Button'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  justify-content: center;
`

export default function PostRoute({ title, body }: PostProps): JSX.Element {
  return (
    <Container>
      <Post title={title} body={body} />
      <Link href="/">
        <Button>Вернуться</Button>
      </Link>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const postId = params?.id
  const { data: post } = await axios.get<IPost>(
    process.env.NEXT_PUBLIC_API_DOMAIN + '/posts/' + postId
  )

  return {
    props: post,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: posts } = await axios.get<IPost[]>(
    process.env.NEXT_PUBLIC_API_DOMAIN + '/posts'
  )
  const paths = posts.map((post: IPost) => ({
    params: { id: post?.id?.toString() },
  }))
  return {
    paths,
    fallback: false,
  }
}
