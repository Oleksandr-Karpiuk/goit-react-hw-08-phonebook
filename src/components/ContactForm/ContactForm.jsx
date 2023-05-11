import PropTypes from 'prop-types';
import css from './ContactForrm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ContactForm = ({ onSubmit }) => {
  let name = '';
  let number = '';

  const handleSubmit = (values, action) => {
    onSubmit(values);
    action.resetForm();
  };

  return (
    <Formik initialValues={{ name, number }} onSubmit={handleSubmit}>
      <Form>
        <label className={css.contact__label}>
          Name
          <Field
            type="text"
            name="name"
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
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
