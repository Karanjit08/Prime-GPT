import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice'

var appStore = configureStore({
    reducer: {
        user: userSlice
    }
});

export default appStore;