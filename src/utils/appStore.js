import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice'
import movieSlice from './movieSlice'

var appStore = configureStore({
    reducer: {
        user: userSlice,
        movie: movieSlice
    }
});

export default appStore;