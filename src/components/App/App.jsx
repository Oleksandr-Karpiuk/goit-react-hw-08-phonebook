// import css from './App.module.css';
// import ContactForm from 'components/ContactForm';
// import ContactList from 'components/ContactList';
// import Filter from 'components/Filter';
// import Container from 'components/Container/Container';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/operations';
// import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
// import { Dna } from 'react-loader-spinner';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const App = () => {
//   const contacts = useSelector(selectContacts);
//   const isLoading = useSelector(selectIsLoading);
//   const isError = useSelector(selectError);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <>
//       <Container>
//         {isError && toast.error(isError)}
//         <h1 className={css.main__title}>Phonebook</h1>
//         <ContactForm />
//         {contacts.length ? (
//           <div>
//             <h2 className={css.secondary__title}>Contacts</h2>
//             <>
//               {isLoading ? (
//                 <Dna
//                   visible={true}
//                   height="200"
//                   width="200"
//                   ariaLabel="dna-loading"
//                   wrapperStyle={{
//                     position: 'fixed',
//                     top: '50%',
//                     left: '50%',
//                     transform: 'translate(-50%, -50%)',
//                   }}
//                   wrapperClass="dna-wrapper"
//                 />
//               ) : (
//                 <>
//                   <Filter />
//                   <ContactList />
//                 </>
//               )}
//             </>
//           </div>
//         ) : (
//           <h2 className={css.secondary__title}>No any contacts</h2>
//         )}
//       </Container>
//       <ToastContainer
//         position="top-center"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="colored"
//       />
//     </>
//   );
// };

// export default App;

import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import { Layout } from 'components/Layout/Layout';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';

const HomePage = lazy(() => import('../../pages/Home'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
