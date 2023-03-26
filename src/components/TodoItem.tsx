import styled from '@emotion/styled'
import { useState } from 'react'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.4rem 1.2rem;
  margin-bottom: 0.6rem;

  background-color: rgb(38, 32, 32);
`

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const CheckBox = styled.input``

const TodoText = styled.span`
  margin-left: 0.8rem;
  font-size: 1.2rem;
  color: rgb(255, 235, 235);
`

const RemoveButton = styled.button`
  margin-left: auto;
  color: rgba(255, 255, 255, 1);
  background-color: red;
  padding: 0.2rem 0.4rem;
  border-radius: 0.4rem;
  font-size: 1.2rem;
`

const TodoItem = () => {
  const [status, setStatus] = useState(false)
  return (
    <Wrapper>
      <LeftWrapper>
        <CheckBox type="radio" checked={status} />
        <TodoText>JSP</TodoText>
      </LeftWrapper>
      <RemoveButton>REMOVE</RemoveButton>
    </Wrapper>
  )
}

export default TodoItem
