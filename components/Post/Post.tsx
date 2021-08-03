import React from 'react'

import { PostProps } from './types'
import styled from 'styled-components'
import Link from 'next/link'
import { Button } from '../Button/Button'

const Container = styled.div`
  width: 30vw;
  padding: 20px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin: 60px auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr;
`

const Title = styled.span``

const Body = styled.span``

export const Post = ({ body, title, id }: PostProps): JSX.Element => {
  return (
    <Container>
      <Title>{title}</Title>
      <Body>{body}</Body>
      {id && (
        <Link href={'/posts/' + id}>
            <Button>К посту</Button>
        </Link>
      )}
    </Container>
  )
}
