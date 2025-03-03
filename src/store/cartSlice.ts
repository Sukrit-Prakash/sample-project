// cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./productSlice";

// interface CartItem extends Product {
//   quantity: number;
// }
export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => { // ✅ Change type to CartItem
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push(action.payload); // ✅ Now payload already includes quantity
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
// export { CartItem };  // Export CartItem here
// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action: PayloadAction<Product>) => {
//       const item = state.items.find((i) => i.id === action.payload.id);
//       if (item) {
//         item.quantity += 1;
//       } else {
//         state.items.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     removeFromCart: (state, action: PayloadAction<number>) => {
//       state.items = state.items.filter((i) => i.id !== action.payload);
//     },
//     // emptyCart:(state,action:PayloadAction<void>)=>{state.items=[]}
//   },
// });

// export const { addToCart, removeFromCart ,emptyCart} = cartSlice.actions;

