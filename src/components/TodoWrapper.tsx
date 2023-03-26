import useTodo from '@/context/TodoContext/useTodo'
import { Todo } from '@/type'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import TodoFilter from './TodoFilter'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
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
