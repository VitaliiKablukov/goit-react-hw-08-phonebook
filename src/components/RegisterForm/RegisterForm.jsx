import { useDispatch } from 'react-redux';
import { register } from 'Redux/auth/operation';
import { Form, Container, Label, Input, Button } from './RegisterForm.styled';
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Label htmlFor="name">Username</Label>
        <Input type="text" name="name" />

        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" />

        <Label htmlFor="password">Password</Label>
        <Input type="password" name="password" />

        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
};
