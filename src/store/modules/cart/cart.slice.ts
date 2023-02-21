import { createSlice } from "@reduxjs/toolkit";

// TYPES
import { CartState } from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const initialState: CartState = {
  items: [],
  isVisible: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartVisibility: (state) => {
      state.isVisible = !state.isVisible;
    },

    addItem: (state, action) => {
      state.items = addItemToCart(state.items, action.payload);
    },

    removeItem: (state, action) => {
      state.items = removeItemFromCart(state.items, action.payload);
    },

    clearItemFromCart: (state, action) => {
      state.items = state.items.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    },
  },
});

// Export actions
export const { addItem, clearItemFromCart, removeItem, toggleCartVisibility } =
  cartSlice.actions;

// Export reducer
const cartReducer = cartSlice.reducer;
export default cartReducer;
