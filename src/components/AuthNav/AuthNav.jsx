import { NavigationLink } from './AuthNav.styled';
import { Box } from '@chakra-ui/react';
export const AuthNav = () => {
  return (
    <Box>
      <NavigationLink to="/register">Register</NavigationLink>
      <NavigationLink to="/login">Log In</NavigationLink>
    </Box>
  );
};
