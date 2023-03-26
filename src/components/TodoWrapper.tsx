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
  // const [todoList, setTodoList] = useState<Todo[]>([
  //   {
  //     status: 'active',
  //     id: 1,
  //     content: '투두리스트를 만들어보자',
  //   },
  // ])
  return (
    <Wrapper>
      <TodoForm />
      <TodoFilter />
      <TodoList list={todoList} />
    </Wrapper>
  )
}

export default TodoWrapper
