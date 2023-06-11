import css from './App.module.css';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { Dna } from 'react-loader-spinner';

const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.app}>
      {error && <h2 className={css.secondary__title}>{error}</h2>}
      <h1 className={css.main__title}>Phonebook</h1>
      <ContactForm />
      {contacts.length ? (
        <div>
          <h2 className={css.secondary__title}>Contacts</h2>
          <>
            {isLoading ? (
              <Dna
                visible={true}
                height="200"
                width="200"
                ariaLabel="dna-loading"
                wrapperStyle={{
                  position: 'fixed',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                wrapperClass="dna-wrapper"
              />
            ) : (
              <>
                <Filter />
                <ContactList />
              </>
            )}
          </>
        </div>
      ) : (
        <h2 className={css.secondary__title}>No any contacts</h2>
      )}
    </div>
  );
};

export default App;
