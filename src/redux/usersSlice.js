import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  users: [],
  profile:[],
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk("user/fetchUsers", async (input) => {
  const response = await axios.get(`https://api.github.com/users/${input}`);
  return response.data;
});

export const fetchProfile = createAsyncThunk(
  "user/fetchProfile",async (input) => {
const response = await axios.get(`https://api.github.com/users/${input}/subscriptions`);
    return response.data;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
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
  },
});

export default userSlice.reducer;
