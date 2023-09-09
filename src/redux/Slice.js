import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';
import { toast } from 'react-toastify';

export const slice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    favoriteItems: [],
    filteredItems: [],
    error: '',
    isLoading: false,
    currentPage: 1,
    itemsPerPage: 8,
  },

  isModalOpen: false,
  id: null,
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
  },
  extraReducers: builder => {
    builder.addCase(fetchCars.fulfilled, (state, { payload }) => {
      state.items = payload;
      state.currentPage = 1;
      state.isLoading = false;
    }),
      builder.addCase(fetchCars.pending, state => {
        state.isLoading = true;
        state.error = '';
      }),
      builder.addCase(fetchCars.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = toast.error(`${payload}`);
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
