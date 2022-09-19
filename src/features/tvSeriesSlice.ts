import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TMovie } from '../helpers/types/typesMovie'
import { TtvId } from '../helpers/types/typesTv'

import axios from 'axios'
import { AppDispatch } from "../Redux";


interface IMovieSchema {
  tvSeries : TMovie[]
  tvId : TtvId[]
}

const initialState: IMovieSchema = {
  tvSeries: [],
  tvId: [],
};


export const tvSeriesSlice = createSlice({
  name: "tvSeries",
  initialState,
  reducers: {
    tvSeries: (state, action: PayloadAction<TMovie[]>)  => {
      state.tvSeries = action.payload
    },
    TvSeriesId: (state, action: PayloadAction<TtvId[]>)  => {
      state.tvId = action.payload
    }
  },
});

export const fetchTvSeries = () => async (dispatch: AppDispatch) => {
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API}&language=en-US&page=6`);
    dispatch(tvSeries(res.data.results))
  } catch (error) {
  }
};
export const fetchTvId = ({id: id}: any) => async (dispatch: AppDispatch) => {
  console.log(id)
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_API}&language=en-US`);
    dispatch(TvSeriesId(res.data.seasons))
  } catch (error) {
  }
};

export const {  tvSeries, TvSeriesId } = tvSeriesSlice.actions;
export default tvSeriesSlice.reducer;
