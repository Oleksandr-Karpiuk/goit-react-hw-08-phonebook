import css from './Contacts.module.css';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Container from 'components/Container/Container';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { Dna } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import { useAuth } from 'hooks';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();
  const { user } = useAuth();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Container>
        {isError && toast.error(isError)}
        <h1 className={css.main__title}>Phonebook {user.name}</h1>
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
      </Container>
    </>
  );
};

export default Contacts;
