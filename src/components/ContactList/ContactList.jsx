import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.contact__list}>
      {contacts.map(({ id, name, number }, idx) => (
        <li key={id} className={css.contact__item}>
          <div>
            <p className={css.contact__list__text}>{name}</p>
            <p className={css.text__color}>tel: {number}</p>
          </div>
          <button
            className={css.contact__list__button}
            onClick={() => onDelete(id)}
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
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};
