import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = data => {
    const equalName = this.state.contacts.find(
      el => el.name.toLowerCase() === data.name.toLowerCase()
    );
    const equalNumber = this.state.contacts.find(
      el => el.number.toLowerCase() === data.number.toLowerCase()
    );
    data.id = nanoid();

    if (equalName)
      return alert(`This name ${equalName.name} is already in contacts.`);
    if (equalNumber)
      return alert(
        `This number ${equalNumber.number} is already in contacts and belongs to ${equalNumber.name}.`
      );

    this.setState(prev => ({ contacts: [data, ...prev.contacts] }));
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter, contacts } = this.state;

    return (
      <div className={css.app}>
        <h1 className={css.main__title}>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        {contacts.length ? (
          <div>
            <h2 className={css.secondary__title}>Contacts</h2>
            <Filter value={filter} onChange={this.changeFilter} />
            <ContactList
              contacts={this.getVisibleContacts()}
              onDelete={this.deleteContacts}
            />
          </div>
        ) : (
          <h2 className={css.secondary__title}>No any contacts</h2>
        )}
      </div>
    );
  }
}
