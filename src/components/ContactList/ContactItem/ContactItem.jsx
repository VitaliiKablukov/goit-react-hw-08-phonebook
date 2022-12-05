import { Button } from './ContactItem.styled';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/Contacts/operation';

export const ContactItem = ({ contactItem }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contactItem;

  return (
    <li key={id}>
      {name}: {number}
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        delete:{name}
      </Button>
    </li>
  );
};
