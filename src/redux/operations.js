import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(toast.error(e.message));
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (receivedAddContact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', receivedAddContact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(toast.error(e.message));
    }
  }
);

export const deleteContact = createAsyncThunk(
  'Contacts/deleteContacts',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(toast.error(e.message));
    }
  }
);
