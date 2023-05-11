import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

const App = () => {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = data => {
    const equalName = contacts.find(
      el => el.name.toLowerCase() === data.name.toLowerCase()
    );
    const equalNumber = contacts.find(
      el => el.number.toLowerCase() === data.number.toLowerCase()
    );
    data.id = nanoid();

    if (equalName)
      return alert(`This name ${equalName.name} is already in contacts.`);
    if (equalNumber)
      return alert(
        `This number ${equalNumber.number} is already in contacts and belongs to ${equalNumber.name}.`
      );

    setContacts(prevContacts => [data, ...prevContacts]);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContacts = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  return (
    <div className={css.app}>
      <h1 className={css.main__title}>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      {contacts.length ? (
        <div>
          <h2 className={css.secondary__title}>Contacts</h2>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList
            contacts={getVisibleContacts()}
            onDelete={deleteContacts}
          />
        </div>
      ) : (
        <h2 className={css.secondary__title}>No any contacts</h2>
      )}
    </div>
  );
};

export default App;
