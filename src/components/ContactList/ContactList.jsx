import { ContactItem } from './ContactItem/ContactItem';
import { ContactsList, Text } from './ContactList.styled';
import { selectContacts, selectFilterText } from 'Redux/Contacts/selectors';
import { useSelector } from 'react-redux';
import { Box, Container, Heading } from '@chakra-ui/react';
export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterText = useSelector(selectFilterText);

  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterText.toLowerCase())
  );
  return contacts.length > 0 ? (
    <ContactsList>
      {contacts.length > 0 && visibleContacts.length > 0 && (
        <Heading fontSize="24px" textAlign="center">
          Contacts
        </Heading>
      )}
      {visibleContacts.length > 0 ? (
        visibleContacts.map(contactItem => {
          return <ContactItem key={contactItem.id} contactItem={contactItem} />;
        })
      ) : (
        <li>
          <Container mb="30px" w={{ sm: '320px', md: '480px' }}>
            <Box
              boxShadow="base"
              p="6"
              rounded="md"
              bg="white"
              w={{ sm: '320px', md: '380px', lg: '480' }}
              display="block"
            >
              <Text>no contacts were found for this request {filterText}</Text>
            </Box>
          </Container>
        </li>
      )}
    </ContactsList>
  ) : (
    <Container
      mb="30px"
      w={{ sm: '320px', md: '380px', lg: '480' }}
      display="block"
    >
      <Box
        boxShadow="base"
        p="6"
        rounded="md"
        bg="white"
        w={{ sm: '320px', md: '380px', lg: '480' }}
      >
        <Text>Sorry, but you don't have contacts</Text>
      </Box>
    </Container>
  );
};
