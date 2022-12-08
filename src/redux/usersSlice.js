import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Initial State
const initialState = {
  loading: false,
  users: [],
  profile: [],
  error: "",
};
// Fetch User Api Function
export const fetchUsers = createAsyncThunk("user/fetchUsers", async (input) => {
  const response = await axios.get(`https://api.github.com/users/${input}`);
  return response.data;
});
// Fetch Profile Api Function
export const fetchProfile = createAsyncThunk(
  "user/fetchProfile",
  async (input) => {
    const response = await axios.get(
      `https://api.github.com/users/${input}/subscriptions`
    );
    return response.data;
  }
);
// Fetch Repo Api Function
export const fetchRepo = createAsyncThunk("user/fetchRepo", async (input) => {
  const response = await axios.get(
    `https://api.github.com/users/${input}/repos`
  );
  return response.data;
});
// UserSlice
const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    // Fetch User
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
    // Fetch Profile
    builder.addCase(fetchProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.profile = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProfile.rejected, (state, action) => {
      state.loading = false;
      state.profile = [];
      state.error = action.error.message;
    });
    // Fecth Repo
    builder.addCase(fetchRepo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRepo.fulfilled, (state, action) => {
      state.loading = false;
      state.profile = action.payload;
      state.error = "";
    });
    builder.addCase(fetchRepo.rejected, (state, action) => {
      state.loading = false;
      state.profile = [];
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
