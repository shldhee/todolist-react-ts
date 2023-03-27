import { useEffect, useState } from 'react'
import { Todo } from '@/type'
import useTodo from '@/context/TodoContext/useTodo'
import styled from '@emotion/styled'
import TodoFilter from './TodoFilter'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`

const TodoWrapper = () => {
  const { todoList, todoStatus } = useTodo()
  const [renderTodoList, setRenderTodoList] = useState<Todo[]>([])
  useEffect(() => {
    if (todoStatus === 'all') return setRenderTodoList(todoList)
    const filteredTodoList = todoList.filter(
      (item) => item.status === todoStatus
    )
    setRenderTodoList(filteredTodoList)
  }, [todoList, todoStatus])
  return (
    <Wrapper>
      <TodoForm />
      <TodoFilter />
      <TodoList list={renderTodoList} />
    </Wrapper>
  )
}

export default TodoWrapper
