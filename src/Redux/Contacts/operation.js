import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  ToastSuccessAddContact,
  ToastSuccessDeleteContact,
  ToastFailedRegistration,
} from '../../components/Toast/Toast.jsx';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
//
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');

      return response.data;
    } catch (e) {
      ToastFailedRegistration();
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
//
export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      ToastSuccessAddContact();
      return response.data;
    } catch (e) {
      ToastFailedRegistration();
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
//
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      ToastSuccessDeleteContact();
      return response.data;
    } catch (e) {
      ToastFailedRegistration();
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
