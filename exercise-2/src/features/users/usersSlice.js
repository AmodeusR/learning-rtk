import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = [
  { id: 0, name: "Robert L'mon"},
  { id: 1, name: "Alder Lagum"},
  { id: 2, name: "Áquis Talernis"}
]

const usersSlice = createSlice({
  name: "users",
  initialState: INITIAL_STATE,
  reducers: {

  }
});

export default usersSlice.reducer;

// Selectors

export const selectAllUsers = (state) => state.users;