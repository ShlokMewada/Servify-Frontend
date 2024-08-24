import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cart: [],
    viewService: null,
  },

  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.service_name === action.payload.service_name
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.service_name === action.payload
      );
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.cart = state.cart.filter(
          (item) => item.service_name !== action.payload
        );
      }
    },
    clearCart: (state) => {
      state.cart.length = 0;
    },
    viewService: (state, action) => {
      state.viewService = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, viewService } =
  cartSlice.actions;

export default cartSlice.reducer;
