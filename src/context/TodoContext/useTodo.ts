import { useContext } from 'react'
import { TodoContext, TodoContextProps } from './TodoProvider'

const useTodo = (): TodoContextProps => useContext(TodoContext)

export default useTodo
