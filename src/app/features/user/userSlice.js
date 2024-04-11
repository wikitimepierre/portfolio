import { createSlice } from '@reduxjs/toolkit';
import { resetStore } from '../../actions';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: null,
    userName: null,
    firstName: null,
    lastName: null,
  },
  reducers: {
    userInfo: (state, action) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(resetStore, () => {
      return {
        email: null,
        userName: null,
        firstName: null,
        lastName: null,
      };
    });
  },
});

export const { userInfo } = userSlice.actions;
export default userSlice.reducer;

