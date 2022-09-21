import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../helpers/http';

export const getProfile = createAsyncThunk('profile/getData', async (token) => {
  const result = {};
  try {
    const { data } = await http(token).get('/profile');
    console.log(data);
    return data;
  } catch (e) {
    result.message = e.response.data?.message;
    return result;
  }
});

export const getAllProfile = createAsyncThunk('profile/getAllData', async (send) => {
  const result = {};
  try {
    const { data } = await http(send.token).get(`/allProfile?search=${send.search || ''}`);
    console.log('ini data getAllProfile', data);
    return data;
  } catch (e) {
    result.message = e.response.data?.message;
    console.log('ini result getAllProfile kalo error', result);
    return result;
  }
});

export const getProfileById = createAsyncThunk('profileById/getData', async (request) => {
  const result = {};
  try {
    console.log('ini dari profile', request);
    const { data } = await http().get(`/admin/profile/${request}`);
    console.log('ini data', data);
    return data;
  } catch (e) {
    console.log('ini error dari profile');
    result.message = e.response.data?.message;
    return result;
  }
});
