import useTodo from '@/context/TodoContext/useTodo'
import styled from '@emotion/styled'
import TodoFilter from './TodoFilter'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
`

const TodoWrapper = () => {
  const { todoList } = useTodo()
  return (
    <Wrapper>
      <TodoForm />
      <TodoFilter />
      <TodoList list={todoList} />
    </Wrapper>
  )
}

export default TodoWrapper
