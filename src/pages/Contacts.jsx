import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from 'Redux/Contacts/operation';
import { selectIsLoading } from 'Redux/Contacts/selectors';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Box, Container, Flex, Spinner } from '@chakra-ui/react';
const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container
      py={{
        base: '6',
        md: '12',
      }}
      px={{
        base: '0',
        sm: '8',
      }}
    >
      <div>
        {isLoading && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            position="fixed"
            left="50%"
            top="50%"
          />
        )}
      </div>

      <Helmet>
        <title>Your Contacts</title>
      </Helmet>
      <Flex justify="space-around" flexDirection={{ sm: 'column', md: 'row' }}>
        <Box>
          <ContactForm />
        </Box>
        <Box>
          <Filter />
          <ContactList />
        </Box>
      </Flex>
    </Container>
  );
};
export default Contacts;
