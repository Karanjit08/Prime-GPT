import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { options } from '../utils/Utility';
import { addUpcomingMovies } from '../utils/movieSlice';

const useUpcomingMovieList = () => {
  
    var dispatch = useDispatch();
    var getUpcomingMovieList = async() => {
      var data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',options);
      var upcomingMovieLists = await data.json();
    //   console.log(`Now Playing Movies: ${nowPlayingMovieLists.results}`);
      dispatch(addUpcomingMovies(upcomingMovieLists))
  }

    useEffect(() => {
        getUpcomingMovieList();
    },[])
}

export default useUpcomingMovieList