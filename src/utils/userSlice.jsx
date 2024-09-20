import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",

  initialState: {
    user: null,
    userProfile: null,
  },

  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
    addUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
    removeUserProfile: (state) => {
      state.userProfile = null;
    },
  },
});

export const { addUser, removeUser, addUserProfile, removeUserProfile } =
  userSlice.actions;

export default userSlice.reducer;
