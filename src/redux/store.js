import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducer/userReducer";
import { cartReducer } from "./reducer/cartReducer";
import { orderReducer, ordersReducer } from "./reducer/orderReducer";
import { adminReducer } from "./reducer/adminReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer,
    orders: ordersReducer,
    admin: adminReducer,
  },
});

export default store;

export const server = "https://btech-cakewallah-backend.vercel.app/api/v1";
