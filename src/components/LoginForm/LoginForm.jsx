import { useDispatch } from 'react-redux';
import { logIn } from 'Redux/auth/operation';
import { Form, Container, Label, Input, Button } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" />
        <Label htmlFor="password">Password</Label>
        <Input type="password" name="password" />

        <Button type="submit">Log In</Button>
      </Form>
    </Container>
  );
};
