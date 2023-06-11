import { useSelector } from 'react-redux';
import { getFilter, getContacts } from '../../redux/selectors';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Container, Title, Subtitle } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const handleFilterChange = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };

  const getFiltredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (filter === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filtredContacts = getFiltredContacts();

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Subtitle>Contacts</Subtitle>
      <Filter value={filter} onChange={handleFilterChange} />
      {filtredContacts && <ContactList contacts={filtredContacts} />}
    </Container>
  );
};
