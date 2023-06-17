import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import css from './RegisterForm.module.css';
import Container from 'components/Container/Container';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label className={css.reg__label}>
          Username
          <input className={css.reg__input} type="text" name="name" />
        </label>
        <label className={css.reg__label}>
          Email
          <input className={css.reg__input} type="email" name="email" />
        </label>
        <label className={css.reg__label}>
          Password
          <input className={css.reg__input} type="password" name="password" />
        </label>
        <button className={css.reg__button} type="submit">
          Register
        </button>
      </form>
    </Container>
  );
};
