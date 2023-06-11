import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const getVisibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.contact__list}>
      {getVisibleContacts.map(({ id, name, number }) => (
        <li key={id} className={css.contact__item}>
          <div>
            <p className={css.contact__list__text}>{name}</p>
            <p className={css.text__color}>tel: {number}</p>
          </div>
          <button
            type="button"
            className={css.contact__list__button}
            onClick={() => dispatch(deleteContact(id))}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propeTypes = {
  onDeleteContact: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filterValue: PropTypes.string,
};
