import React from 'react'

import Head from 'next/head'
import { Posts } from './../components/Posts/Posts'
import { PostsActions } from './../components/Posts/types'
import axios from 'axios'
import { GetStaticProps } from 'next'
import { initializeStore } from '../redux'

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Test Task</title>
        <meta name="description" content="Develops Today" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Posts />
    </div>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const data = await axios.get('https://simple-blog-api.crew.red/posts')
  const posts = data.data
  const reduxStore = initializeStore(posts)
  const { dispatch } = reduxStore
  dispatch({ type: PostsActions.GET_POSTS_SUCCESS, payload: posts })

  return {
    props: { store: { posts } },
  }
}
