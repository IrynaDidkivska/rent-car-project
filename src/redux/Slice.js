import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

export const slice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    error: "",
    isLoggedIn: false,
  },
  filterValue: "",
  // reducers: {
  //   closeModal: (state, { payload }) => { },
  // },
  extraReducers: (builder) => {
    builder.addCase(fetchCars.fulfilled, (state, { payload }) => {
      console.log(state.items);
      console.log(payload);
      state.items = payload;
    });
  },
});

export const { closeModal } = slice.actions;
export const carsReducer = slice.reducer;
