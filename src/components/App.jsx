import React, { useState } from 'react';
import ContactForm from './ContactForm';
import SearchBox from './SearchBox';
import ContactList from './ContactList';
import './styles.css';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, { ...newContact, id: `id-${Date.now()}` }]);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox setSearchQuery={setSearchQuery} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;