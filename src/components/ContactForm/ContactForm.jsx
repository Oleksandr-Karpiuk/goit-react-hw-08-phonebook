import PropTypes from 'prop-types';
import css from './ContactForrm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const formData = data => {
    const equalName = contacts.find(
      el => el.name.toLowerCase() === data.name.toLowerCase()
    );
    const equalNumber = contacts.find(
      el => el.number.toLowerCase() === data.number.toLowerCase()
    );

    if (equalName)
      return toast.warning(
        `This name ${equalName.name} is already in contacts.`
      );
    if (equalNumber)
      return toast.warning(
        `This number ${equalNumber.number} is already in contacts and belongs to ${equalNumber.name}.`
      );

    dispatch(addContact(data));
  };

  const handleSubmit = (values, action) => {
    formData(values);
    action.resetForm();
  };

  return (
    <>
      <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
        <Form>
          <label className={css.contact__label}>
            Name
            <Field
              type="text"
              name="name"
              placeholder="Enter name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              className={css.contact__input}
            />
            <ErrorMessage name="name" component="div" />
          </label>
          <label className={css.contact__label}>
            Number
            <Field
              type="tel"
              name="number"
              placeholder="Enter number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              className={css.contact__input}
            />
          </label>
          <ErrorMessage name="number" component="div" />
          <button type="submit" className={css.contact__button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
};
