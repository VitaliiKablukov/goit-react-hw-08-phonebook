import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';

import { Box, Flex } from '@chakra-ui/react';
import { ColorBackSwitcher } from 'components/ColorSwitch';
import { MobileModalAppBar } from './MobileModalAppBar';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box>
      <Box
        as="header"
        borderBottom="1px solid red"
        borderBottomColor="gray.600"
        p="2"
        opacity={{ sm: '0', md: '1' }}
        visibility={{ sm: 'hidden', md: 'visible' }}
        pointerEvents={{ sm: 'none', md: 'visible' }}
      >
        <Flex
          align="center"
          px="1"
          width={{ sm: '320px', md: '768px', lg: '960px', xl: '1200px' }}
          justifyContent={{ md: 'space-between' }}
          paddingX={{ md: '10' }}
          m="0 auto"
        >
          <Navigation />
          <ColorBackSwitcher />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Flex>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        opacity={{ sm: '1', md: '0' }}
        visibility={{ md: 'hidden' }}
        pointerEvents={{ md: 'none' }}
      >
        <MobileModalAppBar />
      </Box>
    </Box>
  );
};
