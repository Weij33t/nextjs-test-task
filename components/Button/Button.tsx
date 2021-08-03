import React from 'react'

import styled from 'styled-components'

interface ButtonProps {
  children: string
  onClick?: (event: React.MouseEvent) => void
}

const Container = styled.button`
  background: #388bde;
  border: none;
  border-radius: 5px;
  color: #fff;
  margin-top: 20px;
  padding: 7px;
  font-size: 18px;
  cursor: pointer;
  width: 120px;
  &:hover {
    background: #256bb1;
  }
`
export const Button = ({ children, onClick }: ButtonProps): JSX.Element => {
  return <Container onClick={onClick}>{children}</Container>
}
