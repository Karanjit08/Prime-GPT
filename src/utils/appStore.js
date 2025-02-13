import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice'
import movieSlice from './movieSlice'
import languageSlice from './languageSlice'

var appStore = configureStore({
    reducer: {
        user: userSlice,
        movie: movieSlice,
        language: languageSlice
    }
});

export default appStore;