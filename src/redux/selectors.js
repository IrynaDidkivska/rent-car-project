import { createSelector } from 'reselect';
//cars
export const selectItem = state => state.cars.items;
export const selectCurrentPage = state => state.cars.currentPage;
export const selectItemsPerPage = state => state.cars.itemsPerPage;
//modal
export const selectModal = state => state.cars.isModalOpen;
//id
export const selectId = state => state.cars.id;
//Fav
export const selectFavorites = state => state.cars.favoriteItems;
//Select
const selectValueBrand = state => state.select.valueBrand;
const selectValuePrice = state => state.select.valuePrice;
const selectValueFrom = state => state.select.valueFrom;
const selectValueTo = state => state.select.valueTo;

export const selectCarValues = createSelector(
  [selectValueBrand, selectValuePrice, selectValueFrom, selectValueTo],
  (valueBrand, valuePrice, valueFrom, valueTo) => ({
    valueBrand,
    valuePrice,
    valueFrom,
    valueTo,
  })
);
