import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6482ca4ff2e76ae1b95b81d7.mockapi.io/phonebook',
});

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (receivedAddContact, thunkAPI) => {
    try {
      const response = await instance.post('/contacts', receivedAddContact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, thunkAPI) => {
    try {
      const response = await instance.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
