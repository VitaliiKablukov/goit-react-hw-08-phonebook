import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'Redux/Contacts/selectors';
import { addContacts } from 'Redux/Contacts/operation';

import { Logo } from './Logo';
import {
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Stack,
  Box,
  useBreakpointValue,
  useColorModeValue,
  Container,
  Heading,
} from '@chakra-ui/react';
import { ToastFailedContact } from '../Toast/Toast';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const onSubmitForm = e => {
    e.preventDefault();
    const form = e.target;

    const name = form.elements.name.value;

    const number = form.elements.number.value;

    if (contacts.some(el => el.name === name.toLowerCase())) {
      form.reset();
      ToastFailedContact(name);
    } else {
      dispatch(addContacts({ name, number }));
      form.reset();
      return;
    }
  };

  return (
    <Container maxW="lg">
      <Stack spacing="8">
        <Stack spacing="6">
          <Logo />
          <Stack
            spacing={{
              base: '2',
              md: '3',
            }}
            textAlign="center"
          >
            <Heading
              size={useBreakpointValue({
                base: 'xs',
                md: 'sm',
              })}
            >
              Add new contact in your Phonebook
            </Heading>
          </Stack>
        </Stack>
        <Box
          py={{
            base: '0',
            sm: '8',
          }}
          px={{
            base: '4',
            sm: '10',
          }}
          bg={useBreakpointValue({
            base: 'transparent',
            sm: 'bg-surface',
          })}
          boxShadow={{
            base: 'none',
            sm: useColorModeValue('md', 'md-dark'),
          }}
          borderRadius={{
            base: 'none',
            sm: 'xl',
          }}
        >
          <form onSubmit={onSubmitForm}>
            <Stack spacing="6" mb="20px">
              <FormControl>
                <FormLabel htmlFor="name">Name:</FormLabel>
                <Input
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
                <FormHelperText>Please send name contact</FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="number">Number:</FormLabel>
                <Input
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
                <FormHelperText>Please send number contact</FormHelperText>
              </FormControl>
            </Stack>
            <Stack spacing="6">
              <Button type="submit" variant="primary">
                Add contact
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Container>
  );
};
