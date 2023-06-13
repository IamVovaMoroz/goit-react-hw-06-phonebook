import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    getFilterValue: (state, action) => {
      state = action.payload;
    },
  },
});

export const { getFilterValue } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

// export const getFilter = (state) => state.filter;