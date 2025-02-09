import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { options } from '../utils/Utility';
import { addTopRatedMovies } from '../utils/movieSlice';

const useTopRatedMovieList = () => {
  

    var dispatch = useDispatch();
    var getTopRatedMovieLists = async() => {
      var data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',options);
      var topRatedMovieLists = await data.json();
    //   console.log(`Now Playing Movies: ${nowPlayingMovieLists.results}`);
      dispatch(addTopRatedMovies(topRatedMovieLists))
  }

    useEffect(() => {
        getTopRatedMovieLists();
    },[]);
}

export default useTopRatedMovieList