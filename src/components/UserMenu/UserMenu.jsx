import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <button
        className={css.logout__btn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
