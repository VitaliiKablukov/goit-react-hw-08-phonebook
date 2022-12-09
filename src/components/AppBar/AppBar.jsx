import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';

import { Box, Flex } from '@chakra-ui/react';
import { ColorBackSwitcher } from 'components/ColorSwitch';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      as="header"
      borderBottom="1px solid red"
      borderBottomColor="gray.600"
      p="2"
    >
      <Flex align="center" justify="space-between" px="10">
        <Navigation />
        <ColorBackSwitcher />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Flex>
    </Box>
  );
};
