import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import character from './character'
import counter from './counter'
import auth from './user'
import profile from './profile'
import transfer from './transfer'
import sidebar from './sidebar'

const authConfig = {
  storage,
  key: 'auth',
}

const reducer = combineReducers({
  berhitung: counter,
  character,
  user: persistReducer(authConfig, auth),
  profile: profile,
  transfer,
  sidebar,
})


export default reducer
