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
          <Container w="480px" mb="30px">
            <Box boxShadow="base" p="6" rounded="md" bg="white">
              <Text>no contacts were found for this request {filterText}</Text>
            </Box>
          </Container>
        </li>
      )}
    </ContactsList>
  ) : (
    <Container w="480px" mb="30px">
      <Box boxShadow="base" p="6" rounded="md" bg="white">
        <Text>Sorry, but you don't have contacts</Text>
      </Box>
    </Container>
  );
};
