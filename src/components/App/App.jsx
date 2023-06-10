// import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { getFilter, getContacts } from '../../redux/selectors';
// import { getContacts } from '../../redux/selectors';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
// import { nanoid } from 'nanoid';
import { Container, Title, Subtitle } from './App.styled';

// const KEY_CONTACTS = 'contacts';
// const localStorageData = localStorage.getItem(KEY_CONTACTS);

export const App = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);
  // console.log(filter);
  const contacts = useSelector(getContacts);
  // console.log(contacts);
  // const normalizedFilter = filter.toLowerCase();
  // console.log(normalizedFilter);

  // const [contacts, setContacts] = useState(
  // () => JSON.parse(localStorageData) ?? []
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   if (contacts.length === 0) {
  //     return;
  //   }

  //   localStorage.setItem(KEY_CONTACTS, JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = ({ name, number }) => {
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   if (
  //     contacts.find(
  //       item => item.name.toLowerCase() === contact.name.toLowerCase()
  //     )
  //   ) {
  //     alert(`${contact.name} is already in contacts.`);
  //     return;
  //   }

  //   setContacts([contact, ...contacts]);
  // };

  // const handleDeleteContact = contactId => {
  //   setContacts(contacts.filter(item => item.id !== contactId));
  // };

  const handleFilterChange = evt => {
    // console.log(evt.currentTarget.value);
    dispatch(setFilter(evt.currentTarget.value));
    // setFilter(evt.currentTarget.value);
  };

  const getFiltredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (filter === '') {
      return contacts;
    }

    console.log(contacts);
    console.log(normalizedFilter);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filtredContacts = getFiltredContacts();
  console.log(filtredContacts);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Subtitle>Contacts</Subtitle>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={filtredContacts}
        // onDeleteContact={handleDeleteContact}
      />
    </Container>
  );
};
