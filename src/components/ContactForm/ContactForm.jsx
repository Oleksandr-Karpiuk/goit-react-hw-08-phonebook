import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForrm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = (values, action) => {
    this.props.onSubmit(values);
    action.resetForm();
  };

  render() {
    const { name, number } = this.state;

    return (
      <Formik initialValues={{ name, number }} onSubmit={this.handleSubmit}>
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
  }
}

export default ContactForm;

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
};
