import styled from '@emotion/styled'

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
  width: 40%;
  margin-left: 1.6rem;
  border: rgba(69, 172, 78, 0.8);
  background-color: rgba(69, 172, 78, 0.8);
  border-radius: 0 5rem 5rem 0;
  padding: 1.6rem;
  color: rgba(0, 0, 0);
`

const TodoForm = () => {
  return (
    <Form>
      <Input />
      <Button>ADD TODO</Button>
    </Form>
  )
}

export default TodoForm
