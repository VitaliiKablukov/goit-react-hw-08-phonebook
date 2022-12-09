import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/auth/operation';
import { useAuth } from 'hooks';
import { Button } from './UserMenu.styled';
import { Box, Flex } from '@chakra-ui/react';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Flex align="center">
      <Box as="p" mr="10px" fontSize="20px" fontWeight="500">
        Welcome, {user.name}
      </Box>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Flex>
  );
};
