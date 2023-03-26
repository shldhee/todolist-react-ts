import { Status } from '@/context/TodoContext/TodoProvider'
import useTodo from '@/context/TodoContext/useTodo'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const Button = styled.button<{ active: boolean }>`
  padding: 0.6rem;
  color: ${(props) => props.color};
  background-color: ${(props) => (props.active ? 'purple' : 'black')};
  font-size: 1.2rem;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.color};
  &:not(:first-of-type) {
    margin-left: 1rem;
  }
`

const FilterButtonConfig = [
  {
    color: 'yellow',
    status: Status.all,
    label: 'ALL',
  },
  {
    color: 'green',
    status: Status.active,
    label: 'ACTIVE(처리중)', // 처리중
  },
  {
    color: 'orange',
    status: Status.inActive,
    label: 'INACTIVE(처리완료)', // 처리완료
  },
]

const TodoFilter = () => {
  const { todoStatus, setTodoStatus } = useTodo()

  const clickButtonHandler = (status: Status) => {
    setTodoStatus(status)
  }
  return (
    <Wrapper>
      {FilterButtonConfig.map(({ color, status, label }) => {
        return (
          <Button
            key={status}
            color={color}
            active={todoStatus === status}
            onClick={() => clickButtonHandler(status)}
          >
            {label}
          </Button>
        )
      })}
    </Wrapper>
  )
}

export default TodoFilter
