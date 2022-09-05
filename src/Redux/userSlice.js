import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

export const userSlice = createSlice({
  name: "engines",
  initialState,
  reducers: {},
});

export const {  } = userSlice.actions;
export default userSlice.reducer;
