import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import Input from 'components/Form/Form';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import Section from 'components/Section/Section';
import Loader from 'components/Loader/Loader';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (error) return console.log('Error message: ', error);

  return (
    <>
      <Section>
        <h1>Phonebook</h1>
        <Input />
      </Section>
      <Section>
        <h2>Contacts</h2>
        <Filter />
        {!isLoading && error && (
          <p>
            An error has occurred. Try reloading the page or read more in
            console.
          </p>
        )}
        {isLoading && <Loader />}
        {!error && <ContactsList />}
      </Section>
    </>
  );
};

export default Contacts;
