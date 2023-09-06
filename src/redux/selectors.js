//cars
export const selectItem = (state) => state.cars.items;
export const selectCurrentPage = (state) => state.cars.currentPage;
export const selectItemsPerPage = (state) => state.cars.itemsPerPage;
//modal
export const selectModal = (state) => state.cars.isModalOpen;
//id
export const selectId = (state) => state.cars.id;
//Fav
export const selectFavorites = (state) => state.cars.favoriteItems;
