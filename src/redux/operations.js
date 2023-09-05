import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "cars",
  initialState: {
    item: [],
    error: "",
    isLoggedIn: false,
  },
  filterValue: "",
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(registerUserThunk.fulfilled, (state, { payload }) => {
  //         state.user.name = payload.user.name;
  //         state.user.email = payload.user.email;
  //         state.token = payload.token;
  //         state.isLoggedIn = true;
  //       })
  //       .addCase(refreshThunk.fulfilled, (state, { payload }) => {
  //         state.user.name = payload.name;
  //         state.user.email = payload.email;
  //         state.isLoggedIn = true;
  //         state.isRefreshing = false;
  //       })
  //       .addCase(refreshThunk.pending, (state) => {
  //         state.isRefreshing = true;
  //       })
  //       .addCase(refreshThunk.rejected, (state) => {
  //         state.isRefreshing = false;
  //       })

  //       .addCase(loginUserThunk.fulfilled, (state, { payload }) => {
  //         state.user.name = payload.user.name;
  //         state.user.email = payload.user.email;
  //         state.token = payload.token;
  //         state.isLoggedIn = true;
  //       })
  //       .addCase(logoutThunk.fulfilled, (state, { payload }) => {
  //         state.user.name = "";
  //         state.user.email = "";
  //         state.token = "";
  //         state.isLoggedIn = false;
  //       });
  //   },
});

export const carsReducer = slice.reducer;
