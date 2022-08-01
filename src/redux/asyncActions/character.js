import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAll = createAsyncThunk(
  'character/getAll', // nama action harus unique
  async (nextUrl) => {
    const url = nextUrl || 'https://rickandmortyapi.com/api/character';
    const { data } = await axios.get(url);
    return data;
  } // fungsi untuk mengambil data
);

export const getNextData = createAsyncThunk('character/getNext', async (nextUrl) => {
  const { data } = await axios.get(nextUrl);
  return data;
});
