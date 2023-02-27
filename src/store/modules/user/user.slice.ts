import { AdminUserType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

// TYPES

const initialState: AdminUserType | null = null;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
    },
    clearUser: (state) => {
      state = null;
    },
  },
});

// Export actions
export const { clearUser, setUser } = userSlice.actions;

// Export reducer
const userReducer = userSlice.reducer;
export default userReducer;
