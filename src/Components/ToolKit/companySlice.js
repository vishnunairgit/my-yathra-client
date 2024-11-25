import { createSlice } from "@reduxjs/toolkit";

// Retrieve the entire user object from localStorage
const company = JSON.parse(localStorage.getItem('company')) || { };

const INITIAL_STATE = {
  companyDetails: company
};

const companySlice = createSlice({
  name:'company',
  initialState: INITIAL_STATE,
  reducers: {
    updateCompanyDetails: (state, action) => {
      state.companyDetails = action.payload;
      localStorage.setItem('company', JSON.stringify(action.payload)); // Update localStorage
    },
    // clearUserDetails: (state) => {
    //   state.userDetails = { userId: '' };
    //   localStorage.removeItem('user');
    // },
  }
});

export const { updateCompanyDetails,  } = companySlice.actions;
export default companySlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// // Safely retrieve the company object from localStorage
// let company = {};
// try {
//   company = JSON.parse(localStorage.getItem('company')) || {};
// } catch (error) {
//   console.error('Error parsing company data from localStorage:', error);
// }

// const INITIAL_STATE = {
//   companyDetails: company,
// };

// const companySlice = createSlice({
//   name: 'company',
//   initialState: INITIAL_STATE,
//   reducers: {
//     updateCompanyDetails: (state, action) => {
//       state.companyDetails = action.payload;
//       localStorage.setItem('company', JSON.stringify(action.payload)); // Update localStorage
//     },
//     clearCompanyDetails: (state) => {
//       state.companyDetails = {};
//       localStorage.removeItem('company');
//     },
//   },
// });

// export const { updateCompanyDetails, clearCompanyDetails } = companySlice.actions;
// export default companySlice.reducer;
