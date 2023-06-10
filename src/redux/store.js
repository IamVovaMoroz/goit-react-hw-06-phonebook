import {  configureStore } from '@reduxjs/toolkit';
// import { tasksReducer, filtersReducer } from "./reducer";

// reducer Здесь rootReducer
export const store = configureStore({
  reducer: {
    // console.log('store', store)
    // tasks: tasksReducer,
    // filters: filtersReducer,
  },
});