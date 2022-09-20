import { createAsyncThunk } from '@reduxjs/toolkit';
import qs from 'qs';
import http from '../../helpers/http';

export const login = createAsyncThunk('auth/login', async (request) => {
  const result = {};
  try {
    const send = qs.stringify(request);
    const { data } = await http().post('/auth/login', send, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });
    console.log(data);
    if (data.result.token) {
      result.token = data.result.token;
      result.pin = data.result.pin;
      result.email = data.result.email;
      console.log('ini dari data login', result);
      return result;
    } else {
      result.message = data.message;
      console.log('ini error handling login', result);
    }
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});

export const register = createAsyncThunk('auth/register', async (request) => {
  const result = {};
  try {
    const send = qs.stringify(request);
    const { data } = await http().post('/auth/register', send, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });
    result.successMsg = data.message;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});

export const createPin = createAsyncThunk('auth/create-pin', async (request) => {
  const result = {};
  try {
    console.log('ini dari create PIN', request);
    const send = qs.stringify(request);
    console.log('ini dari create PIN', send);
    const { data } = await http().post('/auth/createPin', send, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });
    console.log('ini dari create PIN', data);
    return data;
  } catch (e) {
    console.log('create pin gagal');
    result.errorMsg = e.response.data.message;
    return result;
  }
});
