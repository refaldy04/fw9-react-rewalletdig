import { createSlice } from '@reduxjs/toolkit';
import { getProfile, getAllProfile } from '../asyncActions/profile';

const initialState = {
  data: {},
  users: [],
};

const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getProfile.fulfilled, (state, action) => {
      console.log(action.payload.result);
      state.data = action.payload.result;
    });

    build.addCase(getAllProfile.pending, (state) => {
      state.errorMsg = null;
      state.successMsg = null;
    });

    build.addCase(getAllProfile.fulfilled, (state, action) => {
      const users = action.payload?.result;
      if (users) {
        state.users = users;
      }
      console.log(action.payload.result);
    });

    // build.addCase(login.fulfilled, (state, action) => {
    //   const token = action.payload?.token;
    //   if (token) {
    //     state.token = token;
    //     localStorage.setItem('token', token);
    //   } else {
    //     state.errorMsg = action.payload?.errorMsg;
    //     state.successMsg = action.payload?.successMsg;
    //   }
    // });
  },
});

export { getProfile, getAllProfile };
export default profile.reducer;
