import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice'
import movieSlice from './movieSlice'

var appStore = configureStore({
    reducer: {
        user: userSlice,
        movie: movieSlice,
        nowPlayingMovie: movieSlice
    }
});

export default appStore;