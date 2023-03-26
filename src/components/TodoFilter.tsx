import styled from '@emotion/styled'

const Wrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const Button = styled.button`
  padding: 0.6rem;
  color: ${(props) => props.color};
  font-size: 1.2rem;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.color};
  &:not(:first-of-type) {
    margin-left: 1rem;
  }
`

const TodoFilter = () => {
  return (
    <Wrapper>
      <Button color="yellow">ALL</Button>
      <Button color="green">ACTIVE</Button>
      <Button color="orange">INACTIVE</Button>
    </Wrapper>
  )
}

export default TodoFilter
