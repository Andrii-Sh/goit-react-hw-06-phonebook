import React, { useState, useEffect } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Container, Title, Subtitle } from './App.styled';

const KEY_CONTACTS = 'contacts';
const localStorageData = localStorage.getItem(KEY_CONTACTS);

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorageData) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (contacts.length === 0) {
      return;
    }

    localStorage.setItem(KEY_CONTACTS, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.find(
        item => item.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }

    setContacts([contact, ...contacts]);
  };

  const getFiltredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleFilterChange = evt => {
    setFilter(evt.currentTarget.value);
  };

  const handleDeleteContact = contactId => {
    setContacts(contacts.filter(item => item.id !== contactId));
  };

  const filtredContacts = getFiltredContacts();

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
      <Subtitle>Contacts</Subtitle>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={filtredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </Container>
  );
};
