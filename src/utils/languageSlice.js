import { createSlice } from "@reduxjs/toolkit";


var languageSlice = createSlice({
    name: 'language',
    initialState: {
        languageConfig: 'en'
    },
    reducers: {
        addLanguagePreference: (state,action) => {
            state.languageConfig = action.payload;
        }
    }
}
);

export var {addLanguagePreference} = languageSlice.actions;
export default languageSlice.reducer;