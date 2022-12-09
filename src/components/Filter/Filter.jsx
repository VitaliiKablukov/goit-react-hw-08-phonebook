import {
  Container,
  FormControl,
  FormHelperText,
  Input,
  Box,
  Heading,
} from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'Redux/Contacts/FilterSlice';
import { selectContacts } from 'Redux/Contacts/selectors';

export const Filter = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const filterText = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    contacts.length > 0 && (
      <Container
        w={{ sm: '320px', md: '380px', lg: '480' }}
        display="block"
        mb="30px"
      >
        <Box
          boxShadow="base"
          p="6"
          rounded="md"
          w={{ sm: '280px', md: '316px', lg: '480' }}
          display="block"
        >
          <Heading size="24px">Find contacts by name</Heading>
          <FormControl>
            <Input type="text" name="filter" onChange={filterText} />
            <FormHelperText>Send text for find contact</FormHelperText>
          </FormControl>
        </Box>
      </Container>
    )
  );
};
