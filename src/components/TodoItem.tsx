import { Status } from '@/context/TodoContext/TodoProvider'
import useTodo from '@/context/TodoContext/useTodo'
import { Todo } from '@/type'
import styled from '@emotion/styled'

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

const TodoItem = ({ status, content, id }: Todo) => {
  const { todoList, setTodoList } = useTodo()
  const toggleTodoHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    // 해당 id값 찾아서 status 변경하고 todoList 갱신
    const updatedTodoList = todoList.map((item) =>
      item.id === id
        ? { ...item, status: event.target.checked ? 'active' : 'inActive' }
        : item
    )
    setTodoList(updatedTodoList)
  }

  const removeTodoHandler = () => {
    const updatedTodoList = todoList.filter((item) => item.id !== id)
    setTodoList(updatedTodoList)
  }

  return (
    <Wrapper>
      <LeftWrapper>
        <CheckBox
          type="checkbox"
          checked={status === Status.active}
          onChange={toggleTodoHandler}
        />
        <TodoText>{content}</TodoText>
      </LeftWrapper>
      <RemoveButton onClick={removeTodoHandler}>REMOVE</RemoveButton>
    </Wrapper>
  )
}

export default TodoItem
