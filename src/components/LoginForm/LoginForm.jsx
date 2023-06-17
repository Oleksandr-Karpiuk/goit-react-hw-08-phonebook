import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import css from './LoginForm.module.css';
import Container from 'components/Container/Container';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label className={css.login__label}>
          Email
          <input className={css.login__input} type="email" name="email" />
        </label>
        <label className={css.login__label}>
          Password
          <input className={css.login__input} type="password" name="password" />
        </label>
        <button className={css.login__button} type="submit">
          Log In
        </button>
      </form>
    </Container>
  );
};
