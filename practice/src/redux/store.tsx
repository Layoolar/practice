import { configureStore } from '@reduxjs/toolkit';
import authenticationSlice from './slices/authenticationSlice';
const reducer = {
  authentication: authenticationSlice,
};

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export default store;