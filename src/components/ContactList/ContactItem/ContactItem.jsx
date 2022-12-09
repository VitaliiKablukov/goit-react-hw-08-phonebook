import { useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/Contacts/operation';
import { Box, Container, Flex, VStack, Button } from '@chakra-ui/react';
export const ContactItem = ({ contactItem }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contactItem;

  return (
    <Container w="480px" mb="30px" padding="4px">
      <Box boxShadow="base" py="6" px="1" rounded="md">
        <li key={id}>
          <Flex justify="space-around" align="center">
            <VStack align="stretch">
              <Box alignContent="start">Name: {name}</Box>
              <Box textAlign="start">Number: {number}</Box>
            </VStack>
            <Button
              type="button"
              colorScheme="red"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete contact
            </Button>
          </Flex>
        </li>
      </Box>
    </Container>
  );
};
