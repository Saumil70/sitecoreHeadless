import { configureStore } from  '@reduxjs/toolkit';
import employeeSlice from './Slice';

export const store = configureStore({
  reducer: {
    employees: employeeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
