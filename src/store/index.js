import { configureStore } from "@reduxjs/toolkit";
import { shopApi } from "../services/shop"; 
import counterReducer from '../features/counterSlice';
import shopReducer from '../features/shopSlice'
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/auth";
import  useReducer  from "../features/userSlice";
import { userApi } from "../services/userApi";


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    shop:shopReducer,
    user:useReducer,
    [shopApi.reducerPath]: shopApi.reducer, 
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware, userApi.middleware), 
});

setupListeners(store.dispatch)