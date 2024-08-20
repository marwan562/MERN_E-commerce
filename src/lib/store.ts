import cartSlice from "@/toolkit/Cart/cartSlice";
import authSlice from  "@/toolkit/auth/authSlice"
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    auth:authSlice,
    cart: cartSlice,
  },
});

// types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// hooks
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
