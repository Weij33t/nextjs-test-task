import React, { useState } from 'react'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'

import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { createPost } from '../Posts/actionCreator'

const Container = styled.div`
  width: 100%;
  margin-top: 50px;
  display: grid;
  justify-content: center;
`

export const AddPost = (): JSX.Element => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const dispatch = useDispatch()

  const clickHandler = () => {
    const data = { title, body }
    dispatch(createPost(data))
    setTitle('')
    setBody('')
  }

  return (
    <Container>
      <h1>Добавить новый пост </h1>
      <Input
        placeholder={'Заголовок'}
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <Input
        placeholder={'Текст'}
        value={body}
        onChange={(e) => setBody(e.currentTarget.value)}
      />
      <Button onClick={clickHandler}>Создать</Button>
    </Container>
  )
}
