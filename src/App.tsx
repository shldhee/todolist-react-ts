import styled from '@emotion/styled'
import TodoForm from './components/TodoForm'
import TodoWrapper from './components/TodoWrapper'
import { TodoProvider } from './context/TodoContext/TodoProvider'

const Wrapper = styled.div`
  padding: 2rem;
`

function App() {
  return (
    <Wrapper>
      <TodoProvider>
        <TodoWrapper></TodoWrapper>
      </TodoProvider>
    </Wrapper>
  )
}

export default App
