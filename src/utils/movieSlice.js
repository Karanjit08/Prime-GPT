import { createSlice } from "@reduxjs/toolkit";


var movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movies: []
    },
    reducers: {
        addMovies: (state,action) => {
            state.movies.push(action.payload);
        }
    }
});


export var {addMovies} = movieSlice.actions;
export default movieSlice.reducer;