import { createSlice } from "@reduxjs/toolkit";

// TYPES
import { SearchState } from "./search.types";
import { runSearch } from "./search.utils";

const initialState: SearchState = {
  data: [],
  results: [],
  isVisible: false,
};

export const searchSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleSearchVisibility: (state, action) => {
      state.isVisible = action.payload;
    },

    setSearchDataSet: (state, action) => {
      state.data = action.payload;
    },

    search: (state, action) => {
      state.results = runSearch(state.data, action.payload);
    },
  },
});

// Export actions
export const { search, setSearchDataSet, toggleSearchVisibility } =
  searchSlice.actions;

// Export reducer
const searchReducer = searchSlice.reducer;
export default searchReducer;
