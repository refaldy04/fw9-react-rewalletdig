import { combineReducers } from '@reduxjs/toolkit';
import character from './character';
import counter from './counter';
import auth from './user';
import profile from './profile';

const reducer = combineReducers({
  berhitung: counter,
  character,
  user: auth,
  profile,
});

export default reducer;
