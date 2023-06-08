import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputContainer, Label, InputStyle, Button } from './Form.styled.jsx';
import { selectContacts } from 'redux/selectors.js';
import { addContacts } from 'redux/operations.js';
import PlusIcon from '@rsuite/icons/Plus';

const Input = () => {
  const [contactName, setName] = useState('');
  const [contactNumber, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const onSubmit = event => {
    event.preventDefault();

    if (
      !contacts.find(
        contact =>
          contact.name.toLowerCase().trim() === contactName.toLowerCase().trim()
      )
    ) {
      dispatch(addContacts({ name: contactName, phone: contactNumber }));
    } else {
      alert(`${contactName} is already in contacts`);
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <InputContainer onSubmit={onSubmit}>
      <Label htmlFor="name">
        Name
        <InputStyle
          type="text"
          name="name"
          value={contactName}
          placeholder="Type your name..."
          onChange={onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label htmlFor="number">
        Phone number
        <InputStyle
          type="tel"
          name="number"
          value={contactNumber}
          placeholder="Type your phone number..."
          onChange={onChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button
        type="submit"
        appearance="primary"
        color="green"
        icon={<PlusIcon />}
      >
        Add contact
      </Button>
    </InputContainer>
  );
};

export default Input;
