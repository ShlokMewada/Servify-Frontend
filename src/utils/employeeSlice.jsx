import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employee",

  initialState: {
    serviceRequests: null,
  },

  reducers: {
    addServiceRequests: (state, action) => {
      state.serviceRequests = action.payload;
    },
  },
});

export const { addServiceRequests } = employeeSlice.actions;

export default employeeSlice.reducer;
