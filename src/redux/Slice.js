import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

export const slice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    favoriteItems: [],
    error: "",
    isLoggedIn: false,
    currentPage: 1,
    itemsPerPage: 8,
  },
  filterValue: "",
  isModalOpen: false,
  id: null,
  reducers: {
    loadMoreItems: (state) => {
      console.log("currentPage", state.currentPage);
      state.currentPage += 1;
    },
    modalOpen: (state, { payload }) => {
      state.isModalOpen = true;
      state.id = payload;
    },
    modalClose: (state) => {
      state.isModalOpen = false;
    },
    addFavorites: (state, { payload }) => {
      state.favoriteItems.push(payload);
    },
    removeFavorites: (state, { payload }) => {
      state.favoriteItems = state.favoriteItems.filter((id) => id !== payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCars.fulfilled, (state, { payload }) => {
      state.items = payload;
      state.currentPage = 1;
      console.log("items", state.items);
      console.log("currentPage", state.currentPage);
    });
  },
});

export const {
  loadMoreItems,
  modalOpen,
  modalClose,
  addFavorites,
  removeFavorites,
} = slice.actions;
export const carsReducer = slice.reducer;
