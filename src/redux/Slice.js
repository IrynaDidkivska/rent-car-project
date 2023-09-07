import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

export const slice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    favoriteItems: [],
    filteredItems: [],
    error: '',
    isLoggedIn: false,
    currentPage: 1,
    itemsPerPage: 9,
  },
  filterValue: '',
  isModalOpen: false,
  id: null,
  valueBrand: null,
  valuePrice: null,
  valueFrom: null,
  valueTo: null,
  reducers: {
    loadMoreItems: state => {
      state.currentPage += 1;
    },
    modalOpen: (state, { payload }) => {
      state.isModalOpen = true;
      state.id = payload;
    },
    modalClose: state => {
      state.isModalOpen = false;
    },
    addFavorites: (state, { payload }) => {
      state.favoriteItems.push(payload);
    },
    removeFavorites: (state, { payload }) => {
      state.favoriteItems = state.favoriteItems.filter(id => id !== payload);
    },
    selectBrand: (state, { payload }) => {
      state.valueBrand = payload;
    },
    selectPrice: (state, { payload }) => {
      state.valuePrice = payload;
    },
    selectFrom: (state, { payload }) => {
      state.valueFrom = payload;
    },
    selectTo: (state, { payload }) => {
      state.valueTo = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCars.fulfilled, (state, { payload }) => {
      state.items = payload;
      state.currentPage = 1;
    });
  },
});

export const {
  loadMoreItems,
  modalOpen,
  modalClose,
  addFavorites,
  removeFavorites,
  selectBrand,
  selectPrice,
  selectFrom,
  selectTo,
} = slice.actions;
export const carsReducer = slice.reducer;
