import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cart: [],
  items: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState, //This is the initial value of the items field when the Redux store is initialized
  reducers: {
    setItems: (state, action) => {
      // state.items refers to the current value of the items field in the Redux state.
      state.items = action.payload; //It is a way to pass data from an action to the corresponding reducer, allowing to update the Redux state
      //by setting state.items to action.payload,
      // updating the items field in the Redux state with the new data from the action.
    },
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item];
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },
    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});
export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
} = createSlice.actions;

export default cartSlice.reducer;
