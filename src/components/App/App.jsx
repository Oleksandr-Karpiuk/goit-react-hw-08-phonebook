import css from './App.module.css';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';

const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <div className={css.app}>
      <h1 className={css.main__title}>Phonebook</h1>
      <ContactForm />
      {contacts.length ? (
        <div>
          <h2 className={css.secondary__title}>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      ) : (
        <h2 className={css.secondary__title}>No any contacts</h2>
      )}
    </div>
  );
};

export default App;
