// Store
import { configureStore } from "@reduxjs/toolkit";
// Import Slice
import usersSlice from "./usersSlice";

const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});

export default store;
