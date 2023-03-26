import styled from '@emotion/styled'
import TodoForm from './components/TodoForm'
import TodoWrapper from './components/TodoWrapper'

const Wrapper = styled.div`
  padding: 2rem;
`

function App() {
  return (
    <Wrapper>
      <TodoWrapper></TodoWrapper>
    </Wrapper>
  )
}

export default App
