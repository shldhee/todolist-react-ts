import useTodo from '@/context/TodoContext/useTodo'
import { Todo } from '@/type'
import styled from '@emotion/styled'
import { useState } from 'react'

const Form = styled.div`
  width: 100%;
  display: flex;
`
const Input = styled.input`
  width: 100%;
  border: 1px solid green;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 5rem 0px 0px 5rem;
  padding: 1.6rem;
  color: rgba(255, 255, 255);
`
const Button = styled.div`
  cursor: pointer;
  width: 40%;
  margin-left: 1.6rem;
  border: rgba(69, 172, 78, 0.8);
  background-color: rgba(69, 172, 78, 0.8);
  border-radius: 0 5rem 5rem 0;
  padding: 1.6rem;
  color: rgba(0, 0, 0);
`

const TodoForm = () => {
  const { todoList, setTodoList } = useTodo()
  const [todoText, setTodoText] = useState('')
  const todoInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value)
  }
  const todoAddHandler = () => {
    if (todoText === '') return
    const newTodo: Todo = {
      id: todoList.length + 1,
      content: todoText,
      status: 'active',
    }
    setTodoList([...todoList, newTodo])
    setTodoText('')
  }
  const todoAddEnterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter' || todoText === '') return
    todoAddHandler()
  }
  return (
    <Form>
      <Input
        value={todoText}
        onInput={todoInputHandler}
        onKeyUp={todoAddEnterHandler}
      />
      <Button onClick={todoAddHandler}>ADD TODO</Button>
    </Form>
  )
}

export default TodoForm
