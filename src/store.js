import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './Features/Auth/userSlice'
import cartReducer from './scenes/Cart/cartSlice';
import userReducer from 'scenes/auth/userSlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
