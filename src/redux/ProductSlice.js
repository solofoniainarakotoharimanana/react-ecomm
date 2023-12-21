import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "Products",
  initialState: {
    productCard: []
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.productCard.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productCard.push(action.payload);
      }
    },
    increaseQuantity: (state, { payload }) => {
      const product = state.productCard.find((p) => (p.id = payload.id));
      if (product) {
        product.quantity = payload.quantity;
      }
    },
    deleteFromCart: (state, action) => {
      state.productCard = state.productCard.filter(
        (product) => product.id !== action.payload.id
      );

      /*state.productCard.find((p) => {
        if (p.id === action.payload.id) {
          state.productCard.splice(action.payload, 1);
        }
      });*/
    }
  }
});

export const { addToCart, deleteFromCart, getProduct } = productSlice.actions;

export const productsReducer = productSlice.reducer;
