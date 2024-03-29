import { createSlice } from '@reduxjs/toolkit';
import { getProfile, getAllProfile, editProfile, editPicture, historyTransaction } from '../asyncActions/profile';
import { transfer } from '../asyncActions/transfer';
import { topup } from '../asyncActions/topup';
const initialState = {
  data: {},
  users: [],
  usersPageInfo: {},
  historyTransaction: [],
  historyPageInfo: {},
};

const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getProfile.fulfilled, (state, action) => {
      state.data = action.payload.result;
    });

    build.addCase(getAllProfile.pending, (state) => {
      state.errorMsg = null;
      state.successMsg = null;
    });

    build.addCase(getAllProfile.fulfilled, (state, action) => {
      const users = action.payload?.result;
      const pageInfo = action.payload?.pageInfo;
      if (users) {
        state.users = users;
        state.usersPageInfo = pageInfo;
      }
    });

    build.addCase(transfer.fulfilled, (state, action) => {
      state.data.balance = action.payload[0].balance;
    });
    build.addCase(topup.fulfilled, (state, action) => {
      state.data.balance = action.payload.balance;
    });
    build.addCase(editProfile.fulfilled, (state, action) => {
      state.data = action.payload.result[0];
    });
    build.addCase(editPicture.fulfilled, (state, action) => {
      state.data = action.payload.result[0];
    });
    build.addCase(historyTransaction.fulfilled, (state, action) => {
      state.historyTransaction = action.payload.result;
      state.historyPageInfo = action.payload.pageInfo;
    });
  },
});

export { getProfile, getAllProfile };
export default profile.reducer;
