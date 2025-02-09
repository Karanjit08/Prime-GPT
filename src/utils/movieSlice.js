import { createSlice } from "@reduxjs/toolkit";


var movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movies: [],
        nowPlayingMovies: [],
        topRatedMovies: [],
        upcomingMovies: []
    },
    reducers: {
        addMovies: (state,action) => {
            state.movies.push(action.payload);
        },
        addNowPlayingMovies: (state,action) => {
            state.nowPlayingMovies.push(action.payload);
        },
        addTopRatedMovies: (state,action) => {
            state.topRatedMovies.push(action.payload);
        },
        addUpcomingMovies: (state,action) => {
            state.upcomingMovies.push(action.payload);
        }
    }
});


export var {addMovies, addNowPlayingMovies,addTopRatedMovies,addUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;