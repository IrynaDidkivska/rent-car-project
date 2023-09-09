import { createSlice } from '@reduxjs/toolkit';

export const sliceSelect = createSlice({
  name: 'cars',
  initialState: {
    filteredItems: [],
  },
  valueBrand: null,
  valuePrice: null,
  valueFrom: null,
  valueTo: null,
  reducers: {
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
    clearFilter: state => {
      state.valueBrand = '';
      state.valuePrice = '';
      state.valueFrom = '';
      state.valueTo = '';
    },
  },
});

export const { selectBrand, selectPrice, selectFrom, selectTo, clearFilter } =
  sliceSelect.actions;
export const selectReducer = sliceSelect.reducer;
