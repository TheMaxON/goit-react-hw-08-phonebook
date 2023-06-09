import ContactElem from '../ContactElem/ContactElem';
import { useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts/selectors.js';
import { ContactsListStyle } from './ContactsList.styled.jsx';

const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {!isLoading && filteredContacts.length === 0 && (
        <h4
          style={{
            textAlign: 'center',
            color: 'var(--color-accent)',
            fontWeight: 700,
          }}
        >
          No contacts yet...
        </h4>
      )}
      {filteredContacts.length > 0 && (
        <ContactsListStyle>
          {filteredContacts.map(contact => {
            return (
              <ContactElem
                key={contact.id}
                id={contact.id}
                name={contact.name}
                number={contact.number}
              />
            );
          })}
        </ContactsListStyle>
      )}
    </>
  );
};

export default ContactsList;
