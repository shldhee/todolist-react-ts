import { Todo } from '@/type'
import { createContext, useState } from 'react'

// type Status = 'all' | 'active' | 'inActive'
export const enum Status {
  all = 'all',
  active = 'active',
  inActive = 'inActive',
}

export type TodoContextProps = {
  todoList: Todo[]
  setTodoList: (todoList: Todo[]) => void
  todoStatus: Status
  setTodoStatus: (status: Status) => void
}

// 기본값 정의하는듯..?
const TodoContext = createContext<TodoContextProps>({
  todoList: [],
  setTodoList: () => {},
  todoStatus: Status.all,
  setTodoStatus: () => {},
})

const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todoList, setTodoList] = useState<Todo[]>([
    {
      id: 1,
      status: 'inActive',
      content: 'context 예제 냠냠',
    },
    {
      id: 2,
      status: 'active',
      content: 'context 예제active',
    },
    {
      id: 3,
      status: 'inActive',
      content: 'context 예제 냠냠냐무냐무',
    },
  ])

  const [todoStatus, setTodoStatus] = useState<Status>(Status.all)

  const handleSetTodoList = (todoList: Todo[]) => {
    setTodoList(todoList)
  }

  return (
    <TodoContext.Provider
      value={{
        todoList,
        setTodoList: handleSetTodoList,
        todoStatus,
        setTodoStatus,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }
