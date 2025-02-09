import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { options } from '../utils/Utility';
import { addNowPlayingMovies } from '../utils/movieSlice';

const useNowPlayingMovieList = () => {
  

    var dispatch = useDispatch();
    var getNowPlayingMoviesLists = async() => {
      var data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',options);
      var nowPlayingMovieLists = await data.json();
    //   console.log(`Now Playing Movies: ${nowPlayingMovieLists.results}`);
      dispatch(addNowPlayingMovies(nowPlayingMovieLists))
  }


    useEffect(() => {
        getNowPlayingMoviesLists();
    },[])
}

export default useNowPlayingMovieList