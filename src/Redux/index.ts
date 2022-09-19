import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import userSlice from '../features/userSlice'
import movieSlice from '../features/movieSlice'
import tvSeriesSlice from '../features/tvSeriesSlice'

const store = configureStore({
    reducer: {
        user: userSlice,
        movie: movieSlice,
        tv: tvSeriesSlice,

    },
});

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector