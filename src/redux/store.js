import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./ProductSlice";

export const store = configureStore({
  reducer: {
    PRODUCTS: productsReducer
  }
});
