import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';

import {
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { ColorBackSwitcher } from 'components/ColorSwitch';

export const MobileModalAppBar = () => {
  const { isLoggedIn } = useAuth();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSizeClick = () => {
    onOpen();
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={() => handleSizeClick()}
        m={4}
      >{`Open Navigation `}</Button>

      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              align="center"
              flexDirection="column"
              px="1"
              width={{ sm: '280px' }}
              paddingX={{ md: '10' }}
              m="0 auto"
            >
              <Navigation />
              <ColorBackSwitcher />
              {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
