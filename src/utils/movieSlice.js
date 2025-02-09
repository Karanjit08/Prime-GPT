import { createSlice } from "@reduxjs/toolkit";


var movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movies: [],
        nowPlayingMovies: []
    },
    reducers: {
        addMovies: (state,action) => {
            state.movies.push(action.payload);
        },
        addNowPlayingMovies: (state,action) => {
            state.nowPlayingMovies.push(action.payload);
        }
    }
});


export var {addMovies, addNowPlayingMovies} = movieSlice.actions;
export default movieSlice.reducer;