import { createSlice } from "@reduxjs/toolkit";

// Retrieve the entire user object from localStorage
const user = JSON.parse(localStorage.getItem('user')) || { };

const INITIAL_STATE = {
  userDetails: user
};

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload)); // Update localStorage
    },
    // clearUserDetails: (state) => {
    //   state.userDetails = { userId: '' };
    //   localStorage.removeItem('user');
    // },
  }
});

export const { setUserDetails,  } = userSlice.actions;
export default userSlice.reducer;
