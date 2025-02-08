import { useDispatch } from "react-redux";
import { options } from "../utils/Utility";
import { addMovies } from "../utils/movieSlice";
import { useEffect } from "react";


var useMovieList = () => {


    var dispatch = useDispatch();
    var getPopularMovieLists = async() => {
      var data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',options);
      var popularMovieLists = await data.json();
      console.log(popularMovieLists.results);
      dispatch(addMovies(popularMovieLists.results));
  }

  useEffect(() => {
    getPopularMovieLists();
},[])
}

export default useMovieList;