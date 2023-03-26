import { Todo } from '@/type'
import { createContext, useState } from 'react'

export type TodoContextProps = {
  todoList: Todo[]
  setTodoListHandler: (todoList: Todo[]) => void
}

const TodoContext = createContext<TodoContextProps>({
  todoList: [],
  setTodoListHandler: () => {},
})

const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todoList, setTodoList] = useState<Todo[] | []>([
    {
      id: 1,
      status: 'active',
      content: 'context 예제 냠냠',
    },
  ])

  const setTodoListHandler = (todoList: Todo[]) => {
    setTodoList(todoList)
  }

  return (
    <TodoContext.Provider value={{ todoList, setTodoListHandler }}>
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }
