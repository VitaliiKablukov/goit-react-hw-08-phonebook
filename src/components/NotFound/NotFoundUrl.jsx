import { useLocation } from 'react-router-dom';
import { Container, Button, TextInfo } from './NotFoundUrl.styled';
export const NotFoundUrl = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  return (
    <Container>
      <Button to={backLinkHref}>Back</Button>
      <TextInfo>Sorry, but we could not find this page</TextInfo>
    </Container>
  );
};
