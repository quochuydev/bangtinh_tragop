import { configureStore } from '@reduxjs/toolkit';
import { tableCalculateReducer } from './reducers/table-calculate.reducer';

export const store = configureStore({
  reducer: {
    tableCalculate: tableCalculateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
