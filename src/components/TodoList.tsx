import { Todo } from '@/type'
import styled from '@emotion/styled'
import TodoItem from './TodoItem'

interface TodoListProps {
  list: Todo[]
}

const Wrapper = styled.div`
  text-align: center;
  color: rgb(255, 255, 255);
`

const TodoList = ({ list }: TodoListProps) => {
  if (list.length === 0) return <Wrapper>아무것도 없댜!!!!!!!!</Wrapper>

  return (
    <Wrapper>
      {list.map(({ status, id, content }) => {
        return <TodoItem key={id} status={status} id={id} content={content} />
      })}
    </Wrapper>
  )
}

export default TodoList
