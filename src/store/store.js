import { configureStore } from '@reduxjs/toolkit';
import deliveryReducer from './slices/deliveryFormSlice';
import paymentReducer from './slices/paymentFormSlice'
import cartReducer from './slices/cartSlice'

export const store = configureStore({
  reducer: {
    deliveryFormData: deliveryReducer,
    paymentFormData: paymentReducer,
    getCarts: cartReducer,
  },
});
