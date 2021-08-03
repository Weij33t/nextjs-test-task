import React from 'react'

import styled from 'styled-components'

interface InputProps {
  placeholder: string
  value: string
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

const Container = styled.div`
  & input {
    margin: 10px 0;
    font-size: 22px;
  }
`
export const Input = ({
  placeholder,
  value,
  onChange,
}: InputProps): JSX.Element => {
  return (
    <Container>
      <input placeholder={placeholder} value={value} onChange={onChange} />
    </Container>
  )
}
