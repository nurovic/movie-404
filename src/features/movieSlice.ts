import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TMovie } from '../helpers/types/typesMovie'

import axios from 'axios'


interface IMovieSchema {
  movies : TMovie[]
}

const initialState: IMovieSchema = {
  movies: [],
};


export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    movies: (state, action: PayloadAction<TMovie[]>)  => {
      state.movies = action.payload
    }
  },
});

export const fetchMovies = () => async (dispatch: any) => {
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=bb74ecdab3222c908dcc3495aeabee76&language=en-US&page=1`);
    dispatch(movies(res.data.results))

  } catch (error) {
  }
};

export const {  movies } = movieSlice.actions;
export default movieSlice.reducer;
