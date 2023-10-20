import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './Features/Auth/userSlice'
import cartReducer from './scenes/Cart/cartSlice';
import userReducer from 'scenes/auth/userSlice';
import productSlice from 'scenes/Product/productSlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    product: productSlice,
  },
});
