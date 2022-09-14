import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
export const fetchdata = createAsyncThunk("fetchdata", async() => {
  const res = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=bb74ecdab3222c908dcc3495aeabee76&language=en-US&page=1")
  return res.data.results
})

const initialState = {
  user: [],
  loading: false,
  error: ""
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

});

export default userSlice.reducer;
export const {  } = userSlice.actions;
