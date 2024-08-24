import { createSlice } from "@reduxjs/toolkit";

const serviceSlice = createSlice({
  name: "service",

  initialState: {
    services: null,
    viewService: null,
    viewServiceCategory: null,
  },

  reducers: {
    addServices: (state, action) => {
      state.services = action.payload;
    },
    viewService: (state, action) => {
      state.viewService = action.payload;
    },
    viewServiceCategory: (state, action) => {
      state.viewServiceCategory = action.payload;
    },
  },
});

export const { addServices, viewService, viewServiceCategory } =
  serviceSlice.actions;

export default serviceSlice.reducer;
