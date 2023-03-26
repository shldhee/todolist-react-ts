import styled from '@emotion/styled'
import TodoItem from './TodoItem'

const Wrapper = styled.div``

const TodoList = () => {
  return (
    <Wrapper>
      <TodoItem />
      <TodoItem />
    </Wrapper>
  )
}

export default TodoList
